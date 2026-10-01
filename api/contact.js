// Vercel serverless function: POST /api/contact
// Receives the portfolio contact form and forwards it to Jeff's WhatsApp via CallMeBot.
//
// Required Vercel environment variables (Project → Settings → Environment Variables):
//   CALLMEBOT_APIKEY  the API key CallMeBot sends you on WhatsApp
//   CALLMEBOT_PHONE   your WhatsApp number with country code, e.g. +639272303838 (optional, this is the default)

const LIMITS = { name: 100, email: 150, message: 3000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  let body = req.body || {};
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = {}; } }

  // Spam honeypot: real visitors never fill this hidden field
  if (body._honey) return res.status(200).json({ ok: true });

  const name = String(body.name || '').trim().slice(0, LIMITS.name);
  const email = String(body.email || '').trim().slice(0, LIMITS.email);
  const message = String(body.message || '').trim().slice(0, LIMITS.message);
  if (!name || !EMAIL_RE.test(email) || !message) {
    return res.status(400).json({ ok: false, error: 'Please fill in your name, a valid email, and a message.' });
  }

  const apikey = process.env.CALLMEBOT_APIKEY;
  const phone = process.env.CALLMEBOT_PHONE || '+639272303838';
  if (!apikey) {
    console.error('CALLMEBOT_APIKEY is not set');
    return res.status(500).json({ ok: false, error: 'Messaging is not configured yet.' });
  }

  const text =
    '📩 New message from jeffybanez.site\n\n' +
    `👤 Name: ${name}\n` +
    `✉️ Email: ${email}\n\n` +
    `💬 Message:\n${message}`;

  const url = 'https://api.callmebot.com/whatsapp.php'
    + `?phone=${encodeURIComponent(phone)}`
    + `&text=${encodeURIComponent(text)}`
    + `&apikey=${encodeURIComponent(apikey)}`;

  try {
    const r = await fetch(url, { signal: AbortSignal.timeout(15000) });
    const reply = await r.text();
    // CallMeBot answers with an HTML page; success says the message was queued/sent
    if (!r.ok || !/queued|message sent/i.test(reply)) {
      console.error('CallMeBot rejected the message:', r.status, reply.slice(0, 300));
      return res.status(502).json({ ok: false, error: 'Message could not be delivered.' });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('CallMeBot request failed:', err);
    return res.status(502).json({ ok: false, error: 'Message could not be delivered.' });
  }
};
