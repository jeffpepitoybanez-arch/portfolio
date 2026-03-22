
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Jeff P. Ybanez – Digital Marketing Specialist</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet"/>
<style>
/* ─────────────────────────────────────
   RESET & VARIABLES
───────────────────────────────────── */
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#07090f;
  --bg2:#0d1017;
  --bg3:#111520;
  --accent:#4f9cf9;
  --accent2:#82bcff;
  --gold:#c9a96e;
  --gold2:#e8c98a;
  --text:#eef2f8;
  --muted:#7a8599;
  --dimmed:#4a5568;
  --card:rgba(255,255,255,0.035);
  --card-h:rgba(255,255,255,0.06);
  --border:rgba(79,156,249,0.15);
  --border2:rgba(79,156,249,0.08);
  --shadow:0 24px 60px rgba(0,0,0,0.5);
  --r:8px;
}
html{scroll-behavior:smooth}
body{
  background:var(--bg);
  color:var(--text);
  font-family:'DM Sans',sans-serif;
  overflow-x:hidden;
  cursor:none;
}

/* ─── CUSTOM CURSOR ─── */
.cursor{
  position:fixed;width:10px;height:10px;
  background:var(--accent);border-radius:50%;
  pointer-events:none;z-index:9999;
  transform:translate(-50%,-50%);
  transition:transform .1s,width .2s,height .2s,background .2s;
  mix-blend-mode:screen;
}
.cursor-ring{
  position:fixed;width:36px;height:36px;
  border:1px solid rgba(79,156,249,0.5);border-radius:50%;
  pointer-events:none;z-index:9998;
  transform:translate(-50%,-50%);
  transition:transform .18s ease,width .25s,height .25s;
}
body:hover .cursor{opacity:1}

/* ─── NOISE OVERLAY ─── */
body::before{
  content:'';position:fixed;inset:0;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events:none;z-index:0;opacity:.55;
}

/* ─── BLOBS ─── */
.blob{position:fixed;border-radius:50%;filter:blur(140px);pointer-events:none;z-index:0;animation:drift 16s ease-in-out infinite alternate}
.b1{width:700px;height:700px;background:radial-gradient(circle,rgba(79,156,249,.11) 0%,transparent 70%);top:-250px;right:-150px}
.b2{width:550px;height:550px;background:radial-gradient(circle,rgba(80,50,200,.08) 0%,transparent 70%);bottom:-180px;left:-130px;animation-delay:-8s}
.b3{width:350px;height:350px;background:radial-gradient(circle,rgba(201,169,110,.06) 0%,transparent 70%);top:40%;left:40%;animation-delay:-4s}
@keyframes drift{from{transform:translate(0,0) scale(1)}to{transform:translate(40px,28px) scale(1.08)}}

/* ─── SCROLL REVEAL ─── */
.reveal{opacity:0;transform:translateY(30px);transition:opacity .7s ease,transform .7s ease}
.reveal.visible{opacity:1;transform:translateY(0)}
.reveal-left{opacity:0;transform:translateX(-30px);transition:opacity .7s ease,transform .7s ease}
.reveal-left.visible{opacity:1;transform:translateX(0)}
.reveal-right{opacity:0;transform:translateX(30px);transition:opacity .7s ease,transform .7s ease}
.reveal-right.visible{opacity:1;transform:translateX(0)}

/* ─── NAVBAR ─── */
#navbar{
  position:fixed;top:0;left:0;right:0;z-index:100;
  display:flex;align-items:center;justify-content:space-between;
  padding:22px 60px;
  border-bottom:1px solid transparent;
  transition:background .4s,border-color .4s,padding .3s;
}
#navbar.scrolled{
  background:rgba(7,9,15,0.92);
  border-color:var(--border);
  padding:16px 60px;
  backdrop-filter:blur(20px);
}
.nav-logo{
  font-family:'Cormorant Garamond',serif;
  font-size:1.4rem;font-weight:600;
  color:var(--text);letter-spacing:.06em;text-decoration:none;
}
.nav-logo span{color:var(--accent)}
.nav-links{display:flex;gap:32px;list-style:none}
.nav-links a{
  font-size:.78rem;font-weight:400;color:var(--muted);
  text-decoration:none;letter-spacing:.14em;text-transform:uppercase;
  transition:color .3s;position:relative;
}
.nav-links a::after{
  content:'';position:absolute;bottom:-3px;left:0;right:0;height:1px;
  background:var(--accent);transform:scaleX(0);transform-origin:left;
  transition:transform .3s;
}
.nav-links a:hover{color:var(--accent)}
.nav-links a:hover::after{transform:scaleX(1)}
.nav-cta{
  display:flex;align-items:center;gap:8px;
  background:var(--accent);color:#06080f;
  font-size:.76rem;font-weight:500;letter-spacing:.1em;text-transform:uppercase;
  padding:10px 22px;border-radius:4px;text-decoration:none;
  transition:background .3s,transform .2s;
}
.nav-cta:hover{background:var(--accent2);transform:translateY(-1px)}
.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:4px}
.hamburger span{display:block;width:24px;height:1.5px;background:var(--text);transition:.3s}

/* ─── HERO ─── */
#hero{
  position:relative;z-index:1;
  min-height:100vh;
  display:grid;
  grid-template-columns:1fr 420px 1fr;
  padding-top:80px
}
.hero-left{
  padding:0 36px 0 60px;
  display:flex;flex-direction:column;gap:28px;
  justify-content:center;
  animation:fadeLeft 1s ease .2s both;
}
.hero-tag{
  display:inline-flex;align-items:center;gap:8px;
  font-size:.7rem;letter-spacing:.18em;text-transform:uppercase;
  color:var(--accent);border:1px solid var(--border);
  padding:6px 14px;border-radius:100px;width:fit-content;
}
.tag-dot{width:6px;height:6px;border-radius:50%;background:var(--accent);animation:blink 2.2s ease-in-out infinite}
@keyframes blink{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.35;transform:scale(.65)}}
.hero-title{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(2.6rem,3.6vw,4rem);
  font-weight:300;line-height:1.08;
}
.hero-title em{font-style:italic;color:var(--accent)}
.hero-title strong{font-weight:700}
.hero-bio{
  font-size:.9rem;line-height:1.85;color:var(--muted);
  max-width:310px;font-weight:300;
}
.ticker-wrap{
  overflow:hidden;white-space:nowrap;
  border-top:1px solid var(--border2);
  border-bottom:1px solid var(--border2);
  padding:9px 0;max-width:340px;
}
.ticker{display:inline-block;animation:tickerAnim 22s linear infinite}
.ticker span{font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;color:var(--dimmed);margin-right:26px}
.ticker span.sep{color:var(--accent);margin-right:26px}
@keyframes tickerAnim{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.hero-cta{display:flex;gap:12px;flex-wrap:wrap}
.btn{
  display:inline-flex;align-items:center;gap:9px;
  font-size:.78rem;font-weight:500;letter-spacing:.1em;text-transform:uppercase;
  padding:13px 26px;border-radius:4px;text-decoration:none;
  transition:all .25s;
}
.btn-primary{background:var(--accent);color:#06080f}
.btn-primary:hover{background:var(--accent2);transform:translateY(-2px)}
.btn-ghost{background:transparent;color:var(--text);border:1px solid var(--border)}
.btn-ghost:hover{border-color:var(--accent);color:var(--accent);transform:translateY(-2px)}
.btn svg{width:15px;height:15px}

.hero-center{
  display:flex;flex-direction:column;align-items:center;justify-content:flex-end;
  padding-top:20px;
  animation:fadeUp 1s ease .4s both;
}
.photo-wrap{position:relative;width:330px;height:460px;flex-shrink:0}
.photo-wrap::before{
  content:'';position:absolute;inset:-14px;
  border-radius:50% 50% 42% 42%;
  border:1px solid rgba(79,156,249,.18);
  animation:spinRing 24s linear infinite;
}
.photo-wrap::after{
  content:'';position:absolute;inset:-28px;
  border-radius:50% 50% 44% 44%;
  border:1px dashed rgba(201,169,110,.1);
  animation:spinRing 38s linear infinite reverse;
}
@keyframes spinRing{to{transform:rotate(360deg)}}
.photo-img{
  width:100%;height:100%;
  object-fit:cover;object-position:top center;
  border-radius:50% 50% 0 0;display:block;
}
.photo-fade{
  position:absolute;bottom:0;left:0;right:0;height:62%;
  background:linear-gradient(to top,var(--bg) 22%,transparent 100%);
  pointer-events:none;
}
.photo-glow{
  position:absolute;bottom:-26px;left:50%;transform:translateX(-50%);
  width:210px;height:50px;
  background:radial-gradient(ellipse,rgba(79,156,249,.28) 0%,transparent 70%);
  filter:blur(14px);pointer-events:none;
}
.name-badge{
  margin-top:-18px;z-index:2;position:relative;
  text-align:center;
  font-size:.7rem;letter-spacing:.22em;text-transform:uppercase;color:var(--muted);
}
.name-badge strong{
  display:block;
  font-family:'Cormorant Garamond',serif;
  font-size:1.45rem;font-weight:600;color:var(--text);
  letter-spacing:.08em;margin-top:4px;
}
.hero-right{
  padding:0 60px 0 36px;
  display:flex;flex-direction:column;
  align-items:flex-end;gap:26px;justify-content:center;
  animation:fadeRight 1s ease .2s both;
}
.social-stack{display:flex;flex-direction:column;align-items:center;gap:13px}
.social-stack::before,.social-stack::after{content:'';display:block;width:1px;height:52px}
.social-stack::before{background:linear-gradient(to bottom,transparent,var(--border))}
.social-stack::after{background:linear-gradient(to top,transparent,var(--border))}
.soc-label{font-size:.66rem;text-transform:uppercase;letter-spacing:.22em;color:var(--muted);writing-mode:vertical-rl;transform:rotate(180deg)}
.soc-icon{
  width:46px;height:46px;border-radius:50%;
  border:1px solid var(--border);background:var(--card);
  display:flex;align-items:center;justify-content:center;
  text-decoration:none;color:var(--muted);
  transition:border-color .3s,color .3s,background .3s,transform .25s;
  backdrop-filter:blur(8px);
}
.soc-icon:hover{
  border-color:var(--accent);color:var(--accent);
  background:rgba(79,156,249,.08);
  transform:scale(1.13) translateY(-2px);
}
.soc-icon svg{width:19px;height:19px}
.chip-stack{display:flex;flex-direction:column;gap:8px;align-items:flex-end}
.chip{
  font-size:.7rem;padding:6px 14px;
  border-radius:100px;border:1px solid var(--border);
  background:var(--card);color:var(--muted);
  letter-spacing:.06em;white-space:nowrap;
  backdrop-filter:blur(8px);
  transition:color .3s,border-color .3s;
}
.chip:hover{color:var(--accent);border-color:var(--accent)}
.contact-pill{
  display:flex;align-items:center;gap:8px;
  font-size:.73rem;color:var(--muted);
  border:1px solid var(--border);padding:8px 14px;
  border-radius:100px;backdrop-filter:blur(8px);
  text-decoration:none;
  transition:color .3s,border-color .3s;
}
.contact-pill:hover{color:var(--accent);border-color:var(--accent)}
.contact-pill svg{width:13px;height:13px;flex-shrink:0}
.hero-bottom{
  grid-column:1/-1;
  display:flex;align-items:center;justify-content:space-between;
  padding:20px 60px;
  border-top:1px solid var(--border2);
  animation:fadeUp .8s ease .7s both;
}
.scroll-hint{display:flex;align-items:center;gap:10px;font-size:.7rem;color:var(--muted);letter-spacing:.15em;text-transform:uppercase}
.scroll-line{width:38px;height:1px;background:var(--border);position:relative;overflow:hidden}
.scroll-line::after{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:var(--accent);animation:glide 2.4s ease-in-out infinite}
@keyframes glide{0%{left:-100%}60%{left:100%}100%{left:100%}}
.avail{display:flex;align-items:center;gap:8px;font-size:.7rem;color:var(--muted)}
.avail-dot{width:8px;height:8px;border-radius:50%;background:#4ade80;box-shadow:0 0 10px rgba(74,222,128,.7);animation:blink 2.5s ease-in-out infinite}

/* ─── SECTION WRAPPER ─── */
section{position:relative;z-index:1}
.section-inner{max-width:1200px;margin:0 auto;padding:100px 60px}
.section-label{
  display:inline-flex;align-items:center;gap:10px;
  font-size:.68rem;letter-spacing:.22em;text-transform:uppercase;
  color:var(--accent);margin-bottom:20px;
}
.section-label::before{content:'';display:block;width:28px;height:1px;background:var(--accent)}
.section-title{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(2.2rem,4vw,3.4rem);
  font-weight:300;line-height:1.1;
  margin-bottom:16px;
}
.section-title em{font-style:italic;color:var(--accent)}
.section-sub{
  font-size:.9rem;line-height:1.8;color:var(--muted);
  max-width:560px;font-weight:300;
}
.divider{
  width:100%;height:1px;
  background:linear-gradient(to right,transparent,var(--border),transparent);
}

/* ─── ABOUT ─── */
#about{background:var(--bg)}
.about-grid{
  display:grid;grid-template-columns:1fr 1fr;gap:80px;
  align-items:center;margin-top:64px;
}
.about-photo-col{position:relative}
.about-img-wrap{
  position:relative;width:100%;max-width:420px;
  border-radius:12px;overflow:hidden;
}
.about-img-wrap img{
  width:100%;display:block;
  border-radius:12px;
  filter:grayscale(20%) contrast(1.05);
}
.about-img-overlay{
  position:absolute;inset:0;
  background:linear-gradient(135deg,rgba(79,156,249,.12) 0%,transparent 60%);
  border-radius:12px;
}
.about-img-border{
  position:absolute;inset:-8px;
  border:1px solid var(--border);border-radius:16px;
  pointer-events:none;
}
.about-corner{
  position:absolute;
  width:20px;height:20px;
  border-color:var(--accent);border-style:solid;
}
.about-corner.tl{top:-8px;left:-8px;border-width:2px 0 0 2px;border-radius:3px 0 0 0}
.about-corner.tr{top:-8px;right:-8px;border-width:2px 2px 0 0;border-radius:0 3px 0 0}
.about-corner.bl{bottom:-8px;left:-8px;border-width:0 0 2px 2px;border-radius:0 0 0 3px}
.about-corner.br{bottom:-8px;right:-8px;border-width:0 2px 2px 0;border-radius:0 0 3px 0}
.stat-badges{
  position:absolute;right:-30px;bottom:40px;
  display:flex;flex-direction:column;gap:12px;
}
.stat-badge{
  background:rgba(7,9,15,.9);
  border:1px solid var(--border);
  border-radius:10px;
  padding:14px 18px;
  backdrop-filter:blur(12px);
  min-width:120px;
}
.stat-badge-num{
  font-family:'Cormorant Garamond',serif;
  font-size:2rem;font-weight:600;color:var(--accent);line-height:1;
}
.stat-badge-label{font-size:.68rem;text-transform:uppercase;letter-spacing:.12em;color:var(--muted);margin-top:2px}
.about-text-col{display:flex;flex-direction:column;gap:28px}
.about-heading{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(1.8rem,2.8vw,2.6rem);
  font-weight:300;line-height:1.2;
}
.about-heading em{font-style:italic;color:var(--accent)}
.about-body{font-size:.9rem;line-height:1.9;color:var(--muted);font-weight:300}
.industries{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}
.ind-tag{
  font-size:.68rem;padding:5px 12px;
  border-radius:100px;border:1px solid var(--border2);
  background:var(--card);color:var(--dimmed);
  letter-spacing:.08em;
  transition:color .3s,border-color .3s;
}
.ind-tag:hover{color:var(--accent);border-color:var(--border)}

/* ─── SERVICES ─── */
#services{background:var(--bg2)}
.services-grid{
  display:grid;grid-template-columns:repeat(3,1fr);
  gap:20px;margin-top:64px;
}
.service-card{
  background:var(--card);border:1px solid var(--border2);
  border-radius:var(--r);padding:36px 28px;
  transition:border-color .35s,background .35s,transform .3s;
  position:relative;overflow:hidden;
}
.service-card::before{
  content:'';position:absolute;inset:0;
  background:linear-gradient(135deg,rgba(79,156,249,.05) 0%,transparent 60%);
  opacity:0;transition:opacity .35s;
}
.service-card:hover{
  border-color:var(--border);
  background:var(--card-h);
  transform:translateY(-6px);
}
.service-card:hover::before{opacity:1}
.service-icon{
  width:52px;height:52px;border-radius:12px;
  background:rgba(79,156,249,.1);border:1px solid var(--border);
  display:flex;align-items:center;justify-content:center;
  margin-bottom:22px;
}
.service-icon svg{width:24px;height:24px;color:var(--accent)}
.service-name{
  font-family:'Cormorant Garamond',serif;
  font-size:1.3rem;font-weight:600;margin-bottom:12px;
}
.service-desc{font-size:.84rem;line-height:1.8;color:var(--muted);font-weight:300}
.service-num{
  position:absolute;top:28px;right:28px;
  font-family:'Cormorant Garamond',serif;
  font-size:3rem;font-weight:700;
  color:rgba(79,156,249,.06);line-height:1;
}

/* ─── TOOLS ─── */
#tools{background:var(--bg)}
.tools-grid{
  display:grid;grid-template-columns:repeat(5,1fr);
  gap:14px;margin-top:64px;
}
.tool-card{
  background:var(--card);border:1px solid var(--border2);
  border-radius:var(--r);padding:24px 16px;
  display:flex;flex-direction:column;align-items:center;gap:12px;
  transition:border-color .3s,background .3s,transform .3s;
}
.tool-card:hover{
  border-color:var(--border);
  background:var(--card-h);
  transform:translateY(-4px);
}
.tool-logo{
  width:44px;height:44px;
  object-fit:contain;filter:grayscale(20%);
  transition:filter .3s;
}
.tool-card:hover .tool-logo{filter:grayscale(0%)}
.tool-name{font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);text-align:center}

/* ─── PORTFOLIO SECTIONS ─── */
.portfolio-section{position:relative;z-index:1}
.portfolio-section:nth-child(odd){background:var(--bg)}
.portfolio-section:nth-child(even){background:var(--bg2)}

.portfolio-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:20px;
  margin-top:52px;
}

/* Project Card */
.project-card{
  background:var(--card);
  border:1px solid var(--border2);
  border-radius:12px;
  overflow:hidden;
  position:relative;
  transition:border-color .35s,transform .35s,background .35s;
  group:true;
}
.project-card:hover{
  border-color:var(--border);
  background:var(--card-h);
  transform:translateY(-6px);
}

/* Thumbnail area */
.project-thumb{
  position:relative;
  width:100%;
  aspect-ratio:16/10;
  background:var(--bg3);
  overflow:hidden;
  display:flex;align-items:center;justify-content:center;
}
.project-thumb img{
  width:100%;height:100%;
  object-fit:cover;
  transition:transform .5s ease,filter .4s;
  filter:grayscale(15%);
}
.project-card:hover .project-thumb img{
  transform:scale(1.05);
  filter:grayscale(0%);
}

/* Placeholder thumb when no image */
.project-thumb-placeholder{
  width:100%;height:100%;
  display:flex;align-items:center;justify-content:center;
  background:linear-gradient(135deg,var(--bg3) 0%,rgba(79,156,249,.04) 100%);
}
.project-thumb-placeholder svg{
  width:44px;height:44px;color:rgba(79,156,249,.18);
}

/* Overlay on hover */
.project-thumb-overlay{
  position:absolute;inset:0;
  background:rgba(7,9,15,.72);
  display:flex;align-items:center;justify-content:center;
  opacity:0;
  transition:opacity .35s;
  backdrop-filter:blur(2px);
}
.project-card:hover .project-thumb-overlay{opacity:1}
.project-view-btn{
  display:inline-flex;align-items:center;gap:8px;
  font-size:.72rem;font-weight:500;letter-spacing:.12em;text-transform:uppercase;
  color:var(--text);border:1px solid rgba(255,255,255,.25);
  padding:9px 20px;border-radius:4px;text-decoration:none;
  transition:border-color .2s,color .2s,background .2s;
}
.project-view-btn:hover{
  border-color:var(--accent);color:var(--accent);
  background:rgba(79,156,249,.08);
}
.project-view-btn svg{width:13px;height:13px}

/* Card body */
.project-body{padding:20px 22px 22px}
.project-cat-tag{
  display:inline-flex;align-items:center;gap:6px;
  font-size:.62rem;letter-spacing:.18em;text-transform:uppercase;
  color:var(--accent);margin-bottom:10px;
}
.project-cat-dot{
  width:5px;height:5px;border-radius:50%;
  background:var(--accent);flex-shrink:0;
}
.project-title{
  font-family:'Cormorant Garamond',serif;
  font-size:1.15rem;font-weight:600;
  line-height:1.3;margin-bottom:8px;
}
.project-desc{
  font-size:.8rem;line-height:1.75;
  color:var(--muted);font-weight:300;
}
.project-tags{
  display:flex;flex-wrap:wrap;gap:6px;margin-top:14px;
}
.project-tag{
  font-size:.62rem;padding:3px 10px;
  border-radius:100px;border:1px solid var(--border2);
  background:rgba(255,255,255,.02);color:var(--dimmed);
  letter-spacing:.07em;
}

/* "More Projects" link row */
.portfolio-more{
  display:flex;justify-content:center;
  margin-top:40px;
}
.more-link{
  display:inline-flex;align-items:center;gap:10px;
  font-size:.78rem;font-weight:500;letter-spacing:.14em;text-transform:uppercase;
  color:var(--muted);text-decoration:none;
  border:1px solid var(--border2);
  padding:12px 28px;border-radius:4px;
  transition:color .3s,border-color .3s,background .3s;
  position:relative;overflow:hidden;
}
.more-link::before{
  content:'';position:absolute;inset:0;
  background:linear-gradient(90deg,transparent,rgba(79,156,249,.06),transparent);
  transform:translateX(-100%);
  transition:transform .5s;
}
.more-link:hover::before{transform:translateX(100%)}
.more-link:hover{color:var(--accent);border-color:var(--accent);background:rgba(79,156,249,.04)}
.more-link svg{width:15px;height:15px;transition:transform .3s}
.more-link:hover svg{transform:translateX(4px)}

/* ─── FAQ ─── */
#faq{background:var(--bg2)}
.faq-wrap{margin-top:64px;display:flex;flex-direction:column;gap:0}
.faq-item{
  border-bottom:1px solid var(--border2);
  overflow:hidden;
}
.faq-q{
  display:flex;justify-content:space-between;align-items:center;
  padding:22px 0;cursor:pointer;gap:20px;
  transition:color .3s;
}
.faq-q:hover{color:var(--accent)}
.faq-q-text{font-size:.92rem;font-weight:400;line-height:1.5;flex:1}
.faq-icon{
  width:30px;height:30px;flex-shrink:0;
  border:1px solid var(--border);border-radius:50%;
  display:flex;align-items:center;justify-content:center;
  color:var(--accent);transition:transform .3s,background .3s;
}
.faq-item.open .faq-icon{transform:rotate(45deg);background:rgba(79,156,249,.1)}
.faq-a{
  max-height:0;overflow:hidden;
  transition:max-height .4s ease,padding .3s;
}
.faq-a-inner{padding:0 0 20px;font-size:.86rem;line-height:1.9;color:var(--muted);font-weight:300;max-width:760px}
.faq-item.open .faq-a{max-height:300px}

/* ─── CONTACT / CTA ─── */
#contact{background:var(--bg)}
.contact-grid{
  display:grid;grid-template-columns:1fr 1fr;
  gap:80px;align-items:center;margin-top:64px;
}
.contact-info{display:flex;flex-direction:column;gap:28px}
.contact-heading{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(2rem,3.2vw,3rem);
  font-weight:300;line-height:1.15;
}
.contact-heading em{font-style:italic;color:var(--accent)}
.contact-body{font-size:.9rem;line-height:1.85;color:var(--muted);font-weight:300}
.contact-items{display:flex;flex-direction:column;gap:16px;margin-top:8px}
.contact-item{
  display:flex;align-items:center;gap:14px;
  text-decoration:none;color:var(--muted);
  transition:color .3s;
}
.contact-item:hover{color:var(--accent)}
.contact-item-icon{
  width:42px;height:42px;border-radius:10px;
  border:1px solid var(--border);background:var(--card);
  display:flex;align-items:center;justify-content:center;
  flex-shrink:0;transition:border-color .3s,background .3s;
}
.contact-item:hover .contact-item-icon{border-color:var(--accent);background:rgba(79,156,249,.08)}
.contact-item-icon svg{width:18px;height:18px;color:var(--accent)}
.contact-item-label{font-size:.7rem;text-transform:uppercase;letter-spacing:.12em;color:var(--dimmed);margin-bottom:2px}
.contact-item-val{font-size:.86rem;font-weight:400}
.contact-socials{display:flex;gap:10px;margin-top:8px}
.big-cta-card{
  background:var(--bg3);
  border:1px solid var(--border);
  border-radius:16px;padding:52px 44px;
  display:flex;flex-direction:column;gap:28px;
  position:relative;overflow:hidden;
}
.big-cta-card::before{
  content:'';position:absolute;inset:0;
  background:linear-gradient(135deg,rgba(79,156,249,.07) 0%,transparent 55%);
}
.cta-card-title{
  font-family:'Cormorant Garamond',serif;
  font-size:2rem;font-weight:300;line-height:1.2;
  position:relative;
}
.cta-card-title em{font-style:italic;color:var(--accent)}
.cta-card-sub{font-size:.86rem;line-height:1.8;color:var(--muted);font-weight:300;position:relative}
.cta-card-btns{display:flex;gap:12px;flex-wrap:wrap;position:relative}

/* ─── FOOTER ─── */
footer{
  position:relative;z-index:1;
  border-top:1px solid var(--border2);
  padding:36px 60px;
  display:flex;align-items:center;justify-content:space-between;
  flex-wrap:wrap;gap:16px;
}
.footer-logo{
  font-family:'Cormorant Garamond',serif;
  font-size:1.2rem;font-weight:600;color:var(--text);letter-spacing:.06em;
}
.footer-logo span{color:var(--accent)}
.footer-copy{font-size:.74rem;color:var(--dimmed);letter-spacing:.06em}
.footer-links{display:flex;gap:24px}
.footer-links a{font-size:.74rem;color:var(--dimmed);text-decoration:none;letter-spacing:.1em;text-transform:uppercase;transition:color .3s}
.footer-links a:hover{color:var(--accent)}

/* ─── KEYFRAMES ─── */
@keyframes fadeLeft{from{opacity:0;transform:translateX(-28px)}to{opacity:1;transform:translateX(0)}}
@keyframes fadeRight{from{opacity:0;transform:translateX(28px)}to{opacity:1;transform:translateX(0)}}
@keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}

/* ─── MOBILE NAV ─── */
.mobile-menu{
  display:none;position:fixed;inset:0;z-index:99;
  background:rgba(7,9,15,.97);backdrop-filter:blur(20px);
  flex-direction:column;align-items:center;justify-content:center;gap:32px;
}
.mobile-menu.open{display:flex}
.mobile-menu a{
  font-family:'Cormorant Garamond',serif;
  font-size:2.2rem;font-weight:300;color:var(--muted);
  text-decoration:none;letter-spacing:.06em;
  transition:color .3s;
}
.mobile-menu a:hover{color:var(--accent)}
.mobile-close{
  position:absolute;top:24px;right:24px;
  background:none;border:none;cursor:pointer;
  font-size:1.8rem;color:var(--muted);
}

/* ─── RESPONSIVE ─── */
@media(max-width:1100px){
  .services-grid{grid-template-columns:repeat(2,1fr)}
  .tools-grid{grid-template-columns:repeat(4,1fr)}
  .portfolio-grid{grid-template-columns:repeat(2,1fr)}
  .stat-badges{right:-10px}
}
@media(max-width:900px){
  #hero{grid-template-columns:1fr;grid-template-rows:auto}
  .hero-left{padding:32px 22px 0;align-items:center;text-align:center;order:2}
  .hero-bio{max-width:100%}
  .ticker-wrap{max-width:90vw}
  .hero-cta{justify-content:center}
  .hero-center{order:1;padding-top:90px}
  .photo-wrap{width:230px;height:320px}
  .hero-right{
    order:3;flex-direction:row;flex-wrap:wrap;
    padding:20px 22px;justify-content:center;gap:12px;
  }
  .social-stack{flex-direction:row}
  .social-stack::before,.social-stack::after{display:none}
  .soc-label{display:none}
  .chip-stack{display:none}
  .hero-bottom{padding:18px 22px}
  .about-grid{grid-template-columns:1fr;gap:48px}
  .stat-badges{right:0;bottom:-20px;flex-direction:row}
  .stat-badge{min-width:100px}
  .services-grid{grid-template-columns:1fr}
  .tools-grid{grid-template-columns:repeat(3,1fr)}
  .portfolio-grid{grid-template-columns:1fr}
  .contact-grid{grid-template-columns:1fr;gap:48px}
  .section-inner{padding:80px 22px}
  footer{padding:28px 22px}
  #navbar{padding:18px 22px}
  #navbar.scrolled{padding:14px 22px}
  .nav-links,.nav-cta{display:none}
  .hamburger{display:flex}
}
@media(max-width:520px){
  .tools-grid{grid-template-columns:repeat(2,1fr)}
  .about-img-wrap{max-width:100%}
}
</style>
</head>
<body>

<!-- Custom Cursor -->
<div class="cursor" id="cursor"></div>
<div class="cursor-ring" id="cursorRing"></div>

<!-- Ambient -->
<div class="blob b1"></div>
<div class="blob b2"></div>
<div class="blob b3"></div>

<!-- Mobile Menu -->
<div class="mobile-menu" id="mobileMenu">
  <button class="mobile-close" onclick="closeMobile()">✕</button>
  <a href="#about" onclick="closeMobile()">About</a>
  <a href="#services" onclick="closeMobile()">Services</a>
  <a href="#tools" onclick="closeMobile()">Tools</a>
  <a href="#portfolio-web" onclick="closeMobile()">Projects</a>
  <a href="#faq" onclick="closeMobile()">FAQ</a>
  <a href="#contact" onclick="closeMobile()">Contact</a>
</div>

<!-- NAVBAR -->
<nav id="navbar">
  <a href="#hero" class="nav-logo">Jeff<span>.</span>Ybanez</a>
  <ul class="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#tools">Tools</a></li>
    <li><a href="#portfolio-web">Projects</a></li>
    <li><a href="#faq">FAQ</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  
  <div class="hamburger" onclick="openMobile()">
    <span></span><span></span><span></span>
  </div>
</nav>

<!-- ═══════════ HERO ═══════════ -->
<section id="hero">
  <div class="hero-left">
    <div class="hero-tag"><span class="tag-dot"></span>Open to New Projects</div>
    <h1 class="hero-title">
      I Help Businesses<br/>
      <em>Thrive</em> in the<br/>
      <strong>Digital World.</strong>
    </h1>
    <p class="hero-bio">Transforming your online goals into strategies that drive growth, success, and lasting results — through smart automation, compelling content, and high-converting funnels.</p>
    <div class="ticker-wrap">
      <div class="ticker">
        <span>Email Marketing</span><span class="sep">·</span>
        <span>Website Builder</span><span class="sep">·</span>
        <span>Graphics Design</span><span class="sep">·</span>
        <span>Video Editing</span><span class="sep">·</span>
        <span>Social Media Mgmt</span><span class="sep">·</span>
        <span>Lead Generation</span><span class="sep">·</span>
        <span>Chatbot & Automation</span><span class="sep">·</span>
        <span>Email Marketing</span><span class="sep">·</span>
        <span>Website Builder</span><span class="sep">·</span>
        <span>Graphics Design</span><span class="sep">·</span>
        <span>Video Editing</span><span class="sep">·</span>
        <span>Social Media Mgmt</span><span class="sep">·</span>
        <span>Lead Generation</span><span class="sep">·</span>
        <span>Chatbot & Automation</span><span class="sep">·</span>
      </div>
    </div>
    <div class="hero-cta">
      <a href="https://calendar.app.google/K3TY9nAVZfSbxWXv6" target="_blank" class="btn btn-primary">
        Book A Call
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <a href="tel:+639272303838" class="btn btn-ghost">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        Call Me
      </a>
    </div>
  </div>

  <div class="hero-center">
    <div class="photo-wrap">
      <img class="photo-img" src="https://i.imgur.com/LB8Dejt.png" alt="Jeff P. Ybanez"/>
      <div class="photo-fade"></div>
      <div class="photo-glow"></div>
    </div>
    <div class="name-badge">Digital Marketing Specialist<strong>Jeff P. Ybanez</strong></div>
  </div>

  <div class="hero-right">
    <div class="chip-stack">
      <span class="chip">GoHighLevel Expert</span>
      <span class="chip">Funnel &amp; Web Design</span>
      <span class="chip">CRM Automation</span>
      <span class="chip">FB · Google · LinkedIn Ads</span>
      <span class="chip">SEO Optimization</span>
    </div>
    <div class="social-stack">
      <a href="https://www.facebook.com/jeffybanez2" target="_blank" rel="noopener" class="soc-icon" title="Facebook">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      </a>
      <a href="https://www.instagram.com/jeff_ybanez/" target="_blank" rel="noopener" class="soc-icon" title="Instagram">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/jeff-ybanez-b08044346/" target="_blank" rel="noopener" class="soc-icon" title="LinkedIn">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
      </a>
      <a href="https://wa.me/639272303838?text=Hello%2C%20I%20would%20like%20to%20connect%20with%20you!" target="_blank" rel="noopener" class="soc-icon" title="WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
      </a>
    </div>
    <span class="soc-label">Connect</span>
    <a href="tel:+639272303838" class="contact-pill">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      +63 927 230 3838
    </a>
  </div>

  <div class="hero-bottom">
    <div class="scroll-hint"><div class="scroll-line"></div>Explore Portfolio</div>
    <div class="avail"><div class="avail-dot"></div>Available for new projects</div>
  </div>
</section>

<!-- ═══════════ ABOUT ═══════════ -->
<section id="about">
  <div class="divider"></div>
  <div class="section-inner">
    <div class="section-label">About Me</div>
    <div class="about-grid">
      <div class="about-photo-col reveal-left">
        <div class="about-img-wrap">
          <img src="https://i.imgur.com/LB8Dejt.png" alt="Jeff P. Ybanez"/>
          <div class="about-img-overlay"></div>
          <div class="about-img-border"></div>
          <div class="about-corner tl"></div>
          <div class="about-corner tr"></div>
          <div class="about-corner bl"></div>
          <div class="about-corner br"></div>
        </div>
        <div class="stat-badges">
          <div class="stat-badge">
            <div class="stat-badge-num">4+</div>
            <div class="stat-badge-label">Years Exp.</div>
          </div>
          <div class="stat-badge">
            <div class="stat-badge-num">40+</div>
            <div class="stat-badge-label">Projects</div>
          </div>
          <div class="stat-badge">
            <div class="stat-badge-num">10+</div>
            <div class="stat-badge-label">Clients</div>
          </div>
        </div>
      </div>
      <div class="about-text-col reveal-right">
        <div class="section-label">I'm Jeff</div>
        <h2 class="about-heading">A Digital Marketing Specialist Who <em>Gets Results.</em></h2>
        <p class="about-body">I help businesses thrive in the digital world by turning complex marketing challenges into clear, results-driven strategies. From building high-converting funnels and automating workflows to managing social media and running targeted ads — I bring the full stack of digital marketing to your brand.</p>
        <p class="about-body">I work with a diverse range of industries and tailor every project to the client's specific goals and audience. My approach is data-driven, creative, and always focused on measurable growth.</p>
        <div>
          <div class="section-label" style="margin-bottom:12px">Industries I've Worked With</div>
          <div class="industries">
            <span class="ind-tag">Coaching</span>
            <span class="ind-tag">Real Estate</span>
            <span class="ind-tag">Construction</span>
            <span class="ind-tag">Education</span>
            <span class="ind-tag">Finance</span>
            <span class="ind-tag">HVAC</span>
            <span class="ind-tag">Health & Wellness</span>
            <span class="ind-tag">Chiropractic</span>
            <span class="ind-tag">Aesthetics</span>
            <span class="ind-tag">SaaS Agencies</span>
          </div>
        </div>
        <div class="hero-cta">
          <a href="https://calendar.app.google/K3TY9nAVZfSbxWXv6" target="_blank" class="btn btn-primary">
            Book A Call
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════ SERVICES ═══════════ -->
<section id="services">
  <div class="divider"></div>
  <div class="section-inner">
    <div class="section-label reveal">My Services</div>
    <h2 class="section-title reveal">What I Can Do <em>For You</em></h2>
    <p class="section-sub reveal">A comprehensive range of digital marketing services designed to help businesses grow and succeed online.</p>
    <div class="services-grid">

      <div class="service-card reveal">
        <div class="service-num">01</div>
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
        </div>
        <div class="service-name">GoHighLevel Setup &amp; Automation</div>
        <p class="service-desc">Building high-converting funnels and automating workflows. I set up and manage GoHighLevel systems that streamline your sales and marketing processes end-to-end.</p>
      </div>

      <div class="service-card reveal">
        <div class="service-num">02</div>
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <div class="service-name">CRM Management &amp; Lead Nurturing</div>
        <p class="service-desc">Setting up and optimizing CRM systems to track leads, manage client relationships, and automate follow-ups to increase sales opportunities and retention.</p>
      </div>

      <div class="service-card reveal">
        <div class="service-num">03</div>
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
        </div>
        <div class="service-name">Website &amp; Funnel Design</div>
        <p class="service-desc">Custom, responsive websites and high-converting funnels that drive conversions and enhance user experience, ensuring your brand stands out from the competition.</p>
      </div>

      <div class="service-card reveal">
        <div class="service-num">04</div>
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        </div>
        <div class="service-name">Content Creation &amp; Scheduling</div>
        <p class="service-desc">Designing engaging graphics using Canva and creating videos using CapCut for social media, alongside scheduling posts to maintain a consistent and impactful online presence.</p>
      </div>

      <div class="service-card reveal">
        <div class="service-num">05</div>
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
        </div>
        <div class="service-name">Facebook, Google &amp; LinkedIn Ads</div>
        <p class="service-desc">Designing and managing targeted ads to maximize reach and conversions. I optimize campaigns across all major platforms for the best possible ROI for your budget.</p>
      </div>

      <div class="service-card reveal">
        <div class="service-num">06</div>
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        </div>
        <div class="service-name">SEO for Websites</div>
        <p class="service-desc">Improving your website's search engine ranking through on-page SEO, keyword optimization, and content strategies designed to drive sustained organic traffic growth.</p>
      </div>

    </div>
  </div>
</section>

<!-- ═══════════ TOOLS ═══════════ -->
<section id="tools">
  <div class="divider"></div>
  <div class="section-inner">
    <div class="section-label reveal">Digital Tools</div>
    <h2 class="section-title reveal">My <em>Tech Stack</em></h2>
    <p class="section-sub reveal">I leverage cutting-edge tools to simplify processes, enhance campaigns, and achieve outstanding results for your business.</p>
    <div class="tools-grid">
      <div class="tool-card reveal">
        <img class="tool-logo" src="https://cdn.prod.website-files.com/5f15081919fdf673994ab5fd/6697e68b90253f000eed3a7c_HighLevel-Logo-(PNG).png" alt="GoHighLevel"/>
        <div class="tool-name">GoHighLevel</div>
      </div>
      <div class="tool-card reveal">
        <img class="tool-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/120px-WordPress_blue_logo.svg.png" alt="WordPress"/>
        <div class="tool-name">WordPress</div>
      </div>
      <div class="tool-card reveal">
        <img class="tool-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYL6XTAFY6Ce2PBU8IQF6cgOjiAYNDd3pZ6A&s" alt="ClickFunnels"/>
        <div class="tool-name">Click Funnels</div>
      </div>
      <div class="tool-card reveal">
        <img class="tool-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/120px-Amazon_logo.svg.png" alt="Adobe Premiere" style="filter:none"/>
        <div class="tool-name">Adobe Premiere</div>
      </div>
      <div class="tool-card reveal">
        <img class="tool-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/120px-Notion-logo.svg.png" alt="CapCut"/>
        <div class="tool-name">CapCut</div>
      </div>
      <div class="tool-card reveal">
        <img class="tool-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/120px-Adobe_Photoshop_CC_icon.svg.png" alt="Photoshop"/>
        <div class="tool-name">Photoshop</div>
      </div>
      <div class="tool-card reveal">
        <img class="tool-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/120px-Canva_icon_2021.svg.png" alt="Canva"/>
        <div class="tool-name">Canva</div>
      </div>
      <div class="tool-card reveal">
        <img class="tool-logo" src="https://www.sixandflow.com/hs-fs/hubfs/HubSpot%20Logo.png?width=306&height=306&name=HubSpot%20Logo.png" alt="HubSpot"/>
        <div class="tool-name">HubSpot</div>
      </div>
      <div class="tool-card reveal">
        <img class="tool-logo" src="https://cdn-icons-png.flaticon.com/512/5968/5968928.png" alt="Mailchimp"/>
        <div class="tool-name">Mailchimp</div>
      </div>
      <div class="tool-card reveal">
        <img class="tool-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zapier_logo.svg/120px-Zapier_logo.svg.png" alt="Zapier"/>
        <div class="tool-name">Zapier</div>
      </div>
      <div class="tool-card reveal">
        <img class="tool-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/120px-ChatGPT_logo.svg.png" alt="ChatGPT"/>
        <div class="tool-name">ChatGPT</div>
      </div>
      <div class="tool-card reveal">
        <img class="tool-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Google_analytics_logo_2014.svg/120px-Google_analytics_logo_2014.svg.png" alt="Google Analytics"/>
        <div class="tool-name">Google Analytics</div>
      </div>
      <div class="tool-card reveal">
        <img class="tool-logo" src="https://pngimg.com/d/meta_PNG1.png" alt="Meta Ads Manager"/>
        <div class="tool-name">Ads Manager</div>
      </div>
      <div class="tool-card reveal">
        <img class="tool-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Ads_logo.svg/120px-Google_Ads_logo.svg.png" alt="Google Ads"/>
        <div class="tool-name">Google Ads</div>
      </div>
      <div class="tool-card reveal">
        <img class="tool-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/120px-Notion-logo.svg.png" alt="Make"/>
        <div class="tool-name">Make (Integromat)</div>
      </div>
    </div>
  </div>
</section>


<!-- ═══════════════════════════════════════
     PORTFOLIO — WEBSITE & FUNNEL PROJECTS
════════════════════════════════════════ -->
<section id="portfolio-web" class="portfolio-section" style="background:var(--bg2)">
  <div class="divider"></div>
  <div class="section-inner">
    <div class="section-label reveal">Portfolio</div>
    <h2 class="section-title reveal">Website &amp; Funnel <em>Projects</em></h2>
    <p class="section-sub reveal">High-converting websites and sales funnels built on GoHighLevel, WordPress, and ClickFunnels — designed to turn visitors into clients.</p>

    <div class="portfolio-grid">

      <!-- Card 1 -->
      <div class="project-card reveal">
        <div class="project-thumb">
          <!-- REPLACE src with your screenshot URL -->
          <img src="https://i.imgur.com/4nS7GSN.jpeg" alt="Project 1"/>
          <div class="project-thumb-overlay">
            <a href="https://travel.johanknechtcpa.com/" target="_blank" class="project-view-btn">
              View Live
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
        <div class="project-body">
          <div class="project-cat-tag"><span class="project-cat-dot"></span>Website / Funnel</div>
          <div class="project-title">Project Title Here</div>
          <p class="project-desc">Brief description of what you built and the result it achieved for the client. Keep it 1–2 sentences.</p>
          <div class="project-tags">
            <span class="project-tag">GoHighLevel</span>
            <span class="project-tag">Funnel</span>
            <span class="project-tag">CRM</span>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="project-card reveal">
        <div class="project-thumb">
          <img src="https://i.imgur.com/LXvJFDC.png" alt="Project 2"/>
          <div class="project-thumb-overlay">
            <a href="https://app.gohighlevel.com/v2/preview/4Kldl6gfh04SWEOXoLm8?notrack=true" target="_blank" class="project-view-btn">
              View Live
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
        <div class="project-body">
          <div class="project-cat-tag"><span class="project-cat-dot"></span>Website / Funnel</div>
          <div class="project-title">Project Title Here</div>
          <p class="project-desc">Brief description of what you built and the result it achieved for the client. Keep it 1–2 sentences.</p>
          <div class="project-tags">
            <span class="project-tag">WordPress</span>
            <span class="project-tag">Landing Page</span>
            <span class="project-tag">SEO</span>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="project-card reveal">
        <div class="project-thumb">
          <img src="https://i.imgur.com/6692waz.jpeg" alt="Project 3"/>
          <div class="project-thumb-overlay">
            <a href="https://thendta.org" target="_blank" class="project-view-btn">
              View Live
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
        <div class="project-body">
          <div class="project-cat-tag"><span class="project-cat-dot"></span>Website / Funnel</div>
          <div class="project-title">Project Title Here</div>
          <p class="project-desc">Brief description of what you built and the result it achieved for the client. Keep it 1–2 sentences.</p>
          <div class="project-tags">
            <span class="project-tag">ClickFunnels</span>
            <span class="project-tag">Lead Gen</span>
          </div>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="project-card reveal">
        <div class="project-thumb">
          <img src="https://i.imgur.com/7vKRmzR.jpeg" alt="Project 4"/>
          <div class="project-thumb-overlay">
            <a href="https://junkpunks.com/" target="_blank" class="project-view-btn">
              View Live
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
        <div class="project-body">
          <div class="project-cat-tag"><span class="project-cat-dot"></span>Website / Funnel</div>
          <div class="project-title">Project Title Here</div>
          <p class="project-desc">Brief description of what you built and the result it achieved for the client. Keep it 1–2 sentences.</p>
          <div class="project-tags">
            <span class="project-tag">GoHighLevel</span>
            <span class="project-tag">Sales Funnel</span>
          </div>
        </div>
      </div>

      <!-- Card 5 -->
      <div class="project-card reveal">
        <div class="project-thumb">
          <img src="https://i.imgur.com/UlClXS1.jpeg" alt="Project 5"/>
          <div class="project-thumb-overlay">
            <a href="https://flowpio.com/" target="_blank" class="project-view-btn">
              View Live
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
        <div class="project-body">
          <div class="project-cat-tag"><span class="project-cat-dot"></span>Website / Funnel</div>
          <div class="project-title">Project Title Here</div>
          <p class="project-desc">Brief description of what you built and the result it achieved for the client. Keep it 1–2 sentences.</p>
          <div class="project-tags">
            <span class="project-tag">WordPress</span>
            <span class="project-tag">E-Commerce</span>
          </div>
        </div>
      </div>

      <!-- Card 6 -->
      <div class="project-card reveal">
        <div class="project-thumb">
          <img src="https://i.imgur.com/V8WZv0w.jpeg" alt="Project 6"/>
          <div class="project-thumb-overlay">
            <a href="https://get.american-medical.com/home-page" target="_blank" class="project-view-btn">
              View Live
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
        <div class="project-body">
          <div class="project-cat-tag"><span class="project-cat-dot"></span>Website / Funnel</div>
          <div class="project-title">Project Title Here</div>
          <p class="project-desc">Brief description of what you built and the result it achieved for the client. Keep it 1–2 sentences.</p>
          <div class="project-tags">
            <span class="project-tag">GoHighLevel</span>
            <span class="project-tag">Webinar Funnel</span>
          </div>
        </div>
      </div>

    </div>

    <!-- More Projects Link -->
    <div class="portfolio-more reveal">
      <a href="#" target="_blank" class="more-link">
        View More Web &amp; Funnel Projects
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>


<!-- ═══════════════════════════════════
     PORTFOLIO — GRAPHICS DESIGN
═══════════════════════════════════ -->
<section id="portfolio-graphics" class="portfolio-section" style="background:var(--bg)">
  <div class="divider"></div>
  <div class="section-inner">
    <div class="section-label reveal">Portfolio</div>
    <h2 class="section-title reveal">Graphics &amp; <em>Design Work</em></h2>
    <p class="section-sub reveal">Brand assets, social media graphics, ad creatives, and visual content crafted in Canva and Photoshop to make brands stand out.</p>

    <div class="portfolio-grid">

      <!-- Card 1 -->
      <div class="project-card reveal">
        <div class="project-thumb">
          <!-- REPLACE src with your graphic image URL -->
          <img src="https://i.imgur.com/LXvJFDC.png" alt="Graphic 1"/>
          <div class="project-thumb-overlay">
            <a href="#" target="_blank" class="project-view-btn">
              View Full Size
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
        <div class="project-body">
          <div class="project-cat-tag" style="color:var(--gold)"><span class="project-cat-dot" style="background:var(--gold)"></span>Graphics Design</div>
          <div class="project-title">Project Title Here</div>
          <p class="project-desc">Brief description of the graphic — brand, purpose, and platform it was created for.</p>
          <div class="project-tags">
            <span class="project-tag">Canva</span>
            <span class="project-tag">Social Media</span>
            <span class="project-tag">Branding</span>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="project-card reveal">
        <div class="project-thumb">
          <img src="https://placehold.co/600x375/07090f/c9a96e?text=Graphic+Sample" alt="Graphic 2"/>
          <div class="project-thumb-overlay">
            <a href="#" target="_blank" class="project-view-btn">
              View Full Size
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
        <div class="project-body">
          <div class="project-cat-tag" style="color:var(--gold)"><span class="project-cat-dot" style="background:var(--gold)"></span>Graphics Design</div>
          <div class="project-title">Project Title Here</div>
          <p class="project-desc">Brief description of the graphic — brand, purpose, and platform it was created for.</p>
          <div class="project-tags">
            <span class="project-tag">Photoshop</span>
            <span class="project-tag">Ad Creative</span>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="project-card reveal">
        <div class="project-thumb">
          <img src="https://placehold.co/600x375/07090f/c9a96e?text=Graphic+Sample" alt="Graphic 3"/>
          <div class="project-thumb-overlay">
            <a href="#" target="_blank" class="project-view-btn">
              View Full Size
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
        <div class="project-body">
          <div class="project-cat-tag" style="color:var(--gold)"><span class="project-cat-dot" style="background:var(--gold)"></span>Graphics Design</div>
          <div class="project-title">Project Title Here</div>
          <p class="project-desc">Brief description of the graphic — brand, purpose, and platform it was created for.</p>
          <div class="project-tags">
            <span class="project-tag">Canva</span>
            <span class="project-tag">Logo Design</span>
          </div>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="project-card reveal">
        <div class="project-thumb">
          <img src="https://placehold.co/600x375/07090f/c9a96e?text=Graphic+Sample" alt="Graphic 4"/>
          <div class="project-thumb-overlay">
            <a href="#" target="_blank" class="project-view-btn">
              View Full Size
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
        <div class="project-body">
          <div class="project-cat-tag" style="color:var(--gold)"><span class="project-cat-dot" style="background:var(--gold)"></span>Graphics Design</div>
          <div class="project-title">Project Title Here</div>
          <p class="project-desc">Brief description of the graphic — brand, purpose, and platform it was created for.</p>
          <div class="project-tags">
            <span class="project-tag">Photoshop</span>
            <span class="project-tag">Thumbnail</span>
          </div>
        </div>
      </div>

      <!-- Card 5 -->
      <div class="project-card reveal">
        <div class="project-thumb">
          <img src="https://placehold.co/600x375/07090f/c9a96e?text=Graphic+Sample" alt="Graphic 5"/>
          <div class="project-thumb-overlay">
            <a href="#" target="_blank" class="project-view-btn">
              View Full Size
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
        <div class="project-body">
          <div class="project-cat-tag" style="color:var(--gold)"><span class="project-cat-dot" style="background:var(--gold)"></span>Graphics Design</div>
          <div class="project-title">Project Title Here</div>
          <p class="project-desc">Brief description of the graphic — brand, purpose, and platform it was created for.</p>
          <div class="project-tags">
            <span class="project-tag">Canva</span>
            <span class="project-tag">Email Banner</span>
          </div>
        </div>
      </div>

      <!-- Card 6 -->
      <div class="project-card reveal">
        <div class="project-thumb">
          <img src="https://placehold.co/600x375/07090f/c9a96e?text=Graphic+Sample" alt="Graphic 6"/>
          <div class="project-thumb-overlay">
            <a href="#" target="_blank" class="project-view-btn">
              View Full Size
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
        <div class="project-body">
          <div class="project-cat-tag" style="color:var(--gold)"><span class="project-cat-dot" style="background:var(--gold)"></span>Graphics Design</div>
          <div class="project-title">Project Title Here</div>
          <p class="project-desc">Brief description of the graphic — brand, purpose, and platform it was created for.</p>
          <div class="project-tags">
            <span class="project-tag">Photoshop</span>
            <span class="project-tag">Brand Kit</span>
          </div>
        </div>
      </div>

    </div>

    <div class="portfolio-more reveal">
      <a href="#" target="_blank" class="more-link">
        View More Graphics Projects
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>


<!-- ═══════════════════════════════════
     PORTFOLIO — VIDEO EDITS
═══════════════════════════════════ -->
<section id="portfolio-video" class="portfolio-section" style="background:var(--bg2)">
  <div class="divider"></div>
  <div class="section-inner">
    <div class="section-label reveal">Portfolio</div>
    <h2 class="section-title reveal">Video <em>Edits</em></h2>
    <p class="section-sub reveal">Reels, YouTube videos, and short-form content produced with CapCut and Adobe Premiere — edited to grab attention and drive engagement.</p>

    <div class="portfolio-grid">

      <!-- Card 1 — Video cards show a play button overlay -->
      <div class="project-card reveal">
        <div class="project-thumb">
          <!-- REPLACE src with a video thumbnail image URL -->
          <img src="https://placehold.co/600x375/0d1017/82bcff?text=Video+Thumbnail" alt="Video 1"/>
          <div class="project-thumb-overlay">
            <a href="https://drive.google.com/file/d/1ZBFSHoBw-eEH_B7bRarixp1P4Loxes2e/view?usp=drive_link" target="_blank" class="project-view-btn">
              Watch Video
              <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </a>
          </div>
          <!-- Play icon badge -->
          <div style="position:absolute;bottom:10px;right:12px;background:rgba(7,9,15,.8);border:1px solid rgba(79,156,249,.3);border-radius:6px;padding:4px 10px;display:flex;align-items:center;gap:5px;font-size:.62rem;letter-spacing:.1em;text-transform:uppercase;color:var(--accent)">
            <svg viewBox="0 0 24 24" fill="currentColor" width="10" height="10"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Video
          </div>
        </div>
        <div class="project-body">
          <div class="project-cat-tag" style="color:#82bcff"><span class="project-cat-dot" style="background:#82bcff"></span>Video Edit</div>
          <div class="project-title">Project Title Here</div>
          <p class="project-desc">Short description of the video — type of content, platform, and what made it effective.</p>
          <div class="project-tags">
            <span class="project-tag">CapCut</span>
            <span class="project-tag">Reels</span>
            <span class="project-tag">Short-form</span>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="project-card reveal">
        <div class="project-thumb">
          <img src="https://placehold.co/600x375/0d1017/82bcff?text=Video+Thumbnail" alt="Video 2"/>
          <div class="project-thumb-overlay">
            <a href="https://drive.google.com/file/d/18G5pbA-Dsk12V3MBcGtuuEKs13p9uLz3/view?usp=sharing" target="_blank" class="project-view-btn">
              Watch Video
              <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </a>
          </div>
          <div style="position:absolute;bottom:10px;right:12px;background:rgba(7,9,15,.8);border:1px solid rgba(79,156,249,.3);border-radius:6px;padding:4px 10px;display:flex;align-items:center;gap:5px;font-size:.62rem;letter-spacing:.1em;text-transform:uppercase;color:var(--accent)">
            <svg viewBox="0 0 24 24" fill="currentColor" width="10" height="10"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Video
          </div>
        </div>
        <div class="project-body">
          <div class="project-cat-tag" style="color:#82bcff"><span class="project-cat-dot" style="background:#82bcff"></span>Video Edit</div>
          <div class="project-title">Project Title Here</div>
          <p class="project-desc">Short description of the video — type of content, platform, and what made it effective.</p>
          <div class="project-tags">
            <span class="project-tag">Adobe Premiere</span>
            <span class="project-tag">YouTube</span>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="project-card reveal">
        <div class="project-thumb">
          <img src="https://drive.google.com/file/d/17Dp9wwUfDDvFPyUqfdx7TcMywSay9-Qi/view?usp=sharing" alt="Video 3"/>
          <div class="project-thumb-overlay">
            <a href="https://drive.google.com/file/d/1iHPqJ2_61TDrNNqCE3yWb3_ZsNsRp-p_/view?usp=sharing" target="_blank" class="project-view-btn">
              Watch Video
              <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </a>
          </div>
          <div style="position:absolute;bottom:10px;right:12px;background:rgba(7,9,15,.8);border:1px solid rgba(79,156,249,.3);border-radius:6px;padding:4px 10px;display:flex;align-items:center;gap:5px;font-size:.62rem;letter-spacing:.1em;text-transform:uppercase;color:var(--accent)">
            <svg viewBox="0 0 24 24" fill="currentColor" width="10" height="10"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Video
          </div>
        </div>
        <div class="project-body">
          <div class="project-cat-tag" style="color:#82bcff"><span class="project-cat-dot" style="background:#82bcff"></span>Video Edit</div>
          <div class="project-title">Project Title Here</div>
          <p class="project-desc">Short description of the video — type of content, platform, and what made it effective.</p>
          <div class="project-tags">
            <span class="project-tag">CapCut</span>
            <span class="project-tag">TikTok</span>
            <span class="project-tag">UGC</span>
          </div>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="project-card reveal">
        <div class="project-thumb">
          <img src="https://placehold.co/600x375/0d1017/82bcff?text=Video+Thumbnail" alt="Video 4"/>
          <div class="project-thumb-overlay">
            <a href="#" target="_blank" class="project-view-btn">
              Watch Video
              <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </a>
          </div>
          <div style="position:absolute;bottom:10px;right:12px;background:rgba(7,9,15,.8);border:1px solid rgba(79,156,249,.3);border-radius:6px;padding:4px 10px;display:flex;align-items:center;gap:5px;font-size:.62rem;letter-spacing:.1em;text-transform:uppercase;color:var(--accent)">
            <svg viewBox="0 0 24 24" fill="currentColor" width="10" height="10"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Video
          </div>
        </div>
        <div class="project-body">
          <div class="project-cat-tag" style="color:#82bcff"><span class="project-cat-dot" style="background:#82bcff"></span>Video Edit</div>
          <div class="project-title">Project Title Here</div>
          <p class="project-desc">Short description of the video — type of content, platform, and what made it effective.</p>
          <div class="project-tags">
            <span class="project-tag">Adobe Premiere</span>
            <span class="project-tag">Ad Video</span>
          </div>
        </div>
      </div>

      <!-- Card 5 -->
      <div class="project-card reveal">
        <div class="project-thumb">
          <img src="https://placehold.co/600x375/0d1017/82bcff?text=Video+Thumbnail" alt="Video 5"/>
          <div class="project-thumb-overlay">
            <a href="#" target="_blank" class="project-view-btn">
              Watch Video
              <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </a>
          </div>
          <div style="position:absolute;bottom:10px;right:12px;background:rgba(7,9,15,.8);border:1px solid rgba(79,156,249,.3);border-radius:6px;padding:4px 10px;display:flex;align-items:center;gap:5px;font-size:.62rem;letter-spacing:.1em;text-transform:uppercase;color:var(--accent)">
            <svg viewBox="0 0 24 24" fill="currentColor" width="10" height="10"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Video
          </div>
        </div>
        <div class="project-body">
          <div class="project-cat-tag" style="color:#82bcff"><span class="project-cat-dot" style="background:#82bcff"></span>Video Edit</div>
          <div class="project-title">Project Title Here</div>
          <p class="project-desc">Short description of the video — type of content, platform, and what made it effective.</p>
          <div class="project-tags">
            <span class="project-tag">CapCut</span>
            <span class="project-tag">Instagram Reel</span>
          </div>
        </div>
      </div>

      <!-- Card 6 -->
      <div class="project-card reveal">
        <div class="project-thumb">
          <img src="https://placehold.co/600x375/0d1017/82bcff?text=Video+Thumbnail" alt="Video 6"/>
          <div class="project-thumb-overlay">
            <a href="#" target="_blank" class="project-view-btn">
              Watch Video
              <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </a>
          </div>
          <div style="position:absolute;bottom:10px;right:12px;background:rgba(7,9,15,.8);border:1px solid rgba(79,156,249,.3);border-radius:6px;padding:4px 10px;display:flex;align-items:center;gap:5px;font-size:.62rem;letter-spacing:.1em;text-transform:uppercase;color:var(--accent)">
            <svg viewBox="0 0 24 24" fill="currentColor" width="10" height="10"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Video
          </div>
        </div>
        <div class="project-body">
          <div class="project-cat-tag" style="color:#82bcff"><span class="project-cat-dot" style="background:#82bcff"></span>Video Edit</div>
          <div class="project-title">Project Title Here</div>
          <p class="project-desc">Short description of the video — type of content, platform, and what made it effective.</p>
          <div class="project-tags">
            <span class="project-tag">Adobe Premiere</span>
            <span class="project-tag">Promotional</span>
          </div>
        </div>
      </div>

    </div>

    <div class="portfolio-more reveal">
      <a href="#" target="_blank" class="more-link">
        View More Video Projects
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>


<!-- ═══════════════════════════════════
     PORTFOLIO — AUTOMATIONS
═══════════════════════════════════ -->
<section id="portfolio-automations" class="portfolio-section" style="background:var(--bg)">
  <div class="divider"></div>
  <div class="section-inner">
    <div class="section-label reveal">Portfolio</div>
    <h2 class="section-title reveal">Automation <em>Workflows</em></h2>
    <p class="section-sub reveal">CRM automations, email sequences, chatbot flows, and integration pipelines built in GoHighLevel, Zapier, and Make — saving hours and closing more deals on autopilot.</p>

    <div class="portfolio-grid">

      <!-- Card 1 -->
      <div class="project-card reveal">
        <div class="project-thumb">
          <!-- REPLACE src with a workflow screenshot or diagram -->
          <img src="https://placehold.co/600x375/07090f/4ade80?text=Automation+Screenshot" alt="Automation 1"/>
          <div class="project-thumb-overlay">
            <a href="#" target="_blank" class="project-view-btn">
              View Details
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
        <div class="project-body">
          <div class="project-cat-tag" style="color:#4ade80"><span class="project-cat-dot" style="background:#4ade80"></span>Automation</div>
          <div class="project-title">Project Title Here</div>
          <p class="project-desc">Describe what the automation does — the trigger, workflow steps, and the outcome it delivers for the client.</p>
          <div class="project-tags">
            <span class="project-tag">GoHighLevel</span>
            <span class="project-tag">Lead Nurture</span>
            <span class="project-tag">Email Sequence</span>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="project-card reveal">
        <div class="project-thumb">
          <img src="https://placehold.co/600x375/07090f/4ade80?text=Automation+Screenshot" alt="Automation 2"/>
          <div class="project-thumb-overlay">
            <a href="#" target="_blank" class="project-view-btn">
              View Details
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
        <div class="project-body">
          <div class="project-cat-tag" style="color:#4ade80"><span class="project-cat-dot" style="background:#4ade80"></span>Automation</div>
          <div class="project-title">Project Title Here</div>
          <p class="project-desc">Describe what the automation does — the trigger, workflow steps, and the outcome it delivers for the client.</p>
          <div class="project-tags">
            <span class="project-tag">Zapier</span>
            <span class="project-tag">CRM Sync</span>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="project-card reveal">
        <div class="project-thumb">
          <img src="https://placehold.co/600x375/07090f/4ade80?text=Automation+Screenshot" alt="Automation 3"/>
          <div class="project-thumb-overlay">
            <a href="#" target="_blank" class="project-view-btn">
              View Details
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
        <div class="project-body">
          <div class="project-cat-tag" style="color:#4ade80"><span class="project-cat-dot" style="background:#4ade80"></span>Automation</div>
          <div class="project-title">Project Title Here</div>
          <p class="project-desc">Describe what the automation does — the trigger, workflow steps, and the outcome it delivers for the client.</p>
          <div class="project-tags">
            <span class="project-tag">Make</span>
            <span class="project-tag">Chatbot</span>
            <span class="project-tag">AI</span>
          </div>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="project-card reveal">
        <div class="project-thumb">
          <img src="https://placehold.co/600x375/07090f/4ade80?text=Automation+Screenshot" alt="Automation 4"/>
          <div class="project-thumb-overlay">
            <a href="#" target="_blank" class="project-view-btn">
              View Details
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
        <div class="project-body">
          <div class="project-cat-tag" style="color:#4ade80"><span class="project-cat-dot" style="background:#4ade80"></span>Automation</div>
          <div class="project-title">Project Title Here</div>
          <p class="project-desc">Describe what the automation does — the trigger, workflow steps, and the outcome it delivers for the client.</p>
          <div class="project-tags">
            <span class="project-tag">GoHighLevel</span>
            <span class="project-tag">Appointment Booking</span>
          </div>
        </div>
      </div>

      <!-- Card 5 -->
      <div class="project-card reveal">
        <div class="project-thumb">
          <img src="https://placehold.co/600x375/07090f/4ade80?text=Automation+Screenshot" alt="Automation 5"/>
          <div class="project-thumb-overlay">
            <a href="#" target="_blank" class="project-view-btn">
              View Details
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
        <div class="project-body">
          <div class="project-cat-tag" style="color:#4ade80"><span class="project-cat-dot" style="background:#4ade80"></span>Automation</div>
          <div class="project-title">Project Title Here</div>
          <p class="project-desc">Describe what the automation does — the trigger, workflow steps, and the outcome it delivers for the client.</p>
          <div class="project-tags">
            <span class="project-tag">Zapier</span>
            <span class="project-tag">SMS Follow-up</span>
          </div>
        </div>
      </div>

      <!-- Card 6 -->
      <div class="project-card reveal">
        <div class="project-thumb">
          <img src="https://placehold.co/600x375/07090f/4ade80?text=Automation+Screenshot" alt="Automation 6"/>
          <div class="project-thumb-overlay">
            <a href="#" target="_blank" class="project-view-btn">
              View Details
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>
        <div class="project-body">
          <div class="project-cat-tag" style="color:#4ade80"><span class="project-cat-dot" style="background:#4ade80"></span>Automation</div>
          <div class="project-title">Project Title Here</div>
          <p class="project-desc">Describe what the automation does — the trigger, workflow steps, and the outcome it delivers for the client.</p>
          <div class="project-tags">
            <span class="project-tag">Make</span>
            <span class="project-tag">Pipeline Automation</span>
          </div>
        </div>
      </div>

    </div>

    <div class="portfolio-more reveal">
      <a href="#" target="_blank" class="more-link">
        View More Automation Projects
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>


<!-- ═══════════ FAQ ═══════════ -->
<section id="faq">
  <div class="divider"></div>
  <div class="section-inner">
    <div class="section-label reveal">FAQ</div>
    <h2 class="section-title reveal">Common <em>Questions</em></h2>
    <p class="section-sub reveal">Everything you need to know before we start working together.</p>
    <div class="faq-wrap reveal" style="margin-top:52px">

      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">
          <span class="faq-q-text">What digital marketing services do you offer?</span>
          <span class="faq-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14"><path d="M12 5v14M5 12h14"/></svg></span>
        </div>
        <div class="faq-a"><div class="faq-a-inner">I provide a comprehensive range of digital marketing services, including website development, social media marketing, marketing automation, social media advertising, and funnel building. My goal is to enhance your brand's online presence and drive measurable results.</div></div>
      </div>

      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">
          <span class="faq-q-text">How do you approach website development?</span>
          <span class="faq-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14"><path d="M12 5v14M5 12h14"/></svg></span>
        </div>
        <div class="faq-a"><div class="faq-a-inner">I design responsive, user-friendly websites tailored to your brand's identity. The focus is on delivering an exceptional user experience that drives conversions and effectively communicates your brand's story.</div></div>
      </div>

      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">
          <span class="faq-q-text">Can you explain your process for social media marketing?</span>
          <span class="faq-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14"><path d="M12 5v14M5 12h14"/></svg></span>
        </div>
        <div class="faq-a"><div class="faq-a-inner">I develop strategies to build and engage your audience on platforms like Facebook, Instagram, and LinkedIn. This involves creating compelling content, managing your social media presence, and running targeted advertising campaigns to increase brand visibility and engagement.</div></div>
      </div>

      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">
          <span class="faq-q-text">What is marketing automation, and how can it benefit my business?</span>
          <span class="faq-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14"><path d="M12 5v14M5 12h14"/></svg></span>
        </div>
        <div class="faq-a"><div class="faq-a-inner">Marketing automation involves using software to automate repetitive marketing tasks such as email campaigns, lead nurturing, and social media posting. This saves time, increases efficiency, and ensures consistent communication with your audience, leading to stronger relationships and higher conversion rates.</div></div>
      </div>

      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">
          <span class="faq-q-text">How do you measure the success of your campaigns?</span>
          <span class="faq-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14"><path d="M12 5v14M5 12h14"/></svg></span>
        </div>
        <div class="faq-a"><div class="faq-a-inner">I utilize data-driven insights to assess campaign performance. Key performance indicators (KPIs) like engagement rates, lead generation, conversion rates, and return on investment (ROI) are analyzed to ensure strategies contribute to measurable business growth.</div></div>
      </div>

      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">
          <span class="faq-q-text">Do you work with GoHighLevel (GHL)?</span>
          <span class="faq-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14"><path d="M12 5v14M5 12h14"/></svg></span>
        </div>
        <div class="faq-a"><div class="faq-a-inner">Yes, I specialize in GoHighLevel. I offer services such as GHL website and funnel building, CRM automation, workflow setup, and dashboard customization to help streamline your marketing and sales processes.</div></div>
      </div>

      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">
          <span class="faq-q-text">Can you help with graphics and video editing?</span>
          <span class="faq-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14"><path d="M12 5v14M5 12h14"/></svg></span>
        </div>
        <div class="faq-a"><div class="faq-a-inner">Absolutely! I provide graphic design services (social media posts, branding, logos, etc.) and video editing for reels, YouTube, and other platforms. I create visually engaging content that aligns with your brand and captures audience attention.</div></div>
      </div>

      <div class="faq-item">
        <div class="faq-q" onclick="toggleFaq(this)">
          <span class="faq-q-text">Can you create and manage sales funnels?</span>
          <span class="faq-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14"><path d="M12 5v14M5 12h14"/></svg></span>
        </div>
        <div class="faq-a"><div class="faq-a-inner">Yes, I build high-converting sales funnels tailored to your product or service. This includes lead magnets, opt-in pages, upsell/downsell strategies, thank you pages, and automation workflows to nurture leads effectively.</div></div>
      </div>

    </div>
  </div>
</section>

<!-- ═══════════ CONTACT ═══════════ -->
<section id="contact">
  <div class="divider"></div>
  <div class="section-inner">
    <div class="section-label reveal">Get In Touch</div>
    <div class="contact-grid">
      <div class="contact-info reveal-left">
        <h2 class="contact-heading">Let's Build Something <em>Great Together.</em></h2>
        <p class="contact-body">Ready to transform your digital presence? Whether you need a full marketing strategy or just one specific service — I'm here to help you grow.</p>
        <div class="contact-items">
          <a href="tel:+639272303838" class="contact-item">
            <div class="contact-item-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
            <div>
              <div class="contact-item-label">Phone</div>
              <div class="contact-item-val">+63 927 230 3838</div>
            </div>
          </a>
          <a href="https://wa.me/639272303838" target="_blank" class="contact-item">
            <div class="contact-item-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg></div>
            <div>
              <div class="contact-item-label">WhatsApp</div>
              <div class="contact-item-val">+63 927 230 3838</div>
            </div>
          </a>
          <a href="https://www.facebook.com/jeffybanez2" target="_blank" class="contact-item">
            <div class="contact-item-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></div>
            <div>
              <div class="contact-item-label">Facebook</div>
              <div class="contact-item-val">facebook.com/jeffybanez2</div>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/jeff-ybanez-b08044346/" target="_blank" class="contact-item">
            <div class="contact-item-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></div>
            <div>
              <div class="contact-item-label">LinkedIn</div>
              <div class="contact-item-val">jeff-ybanez-b08044346</div>
            </div>
          </a>
        </div>
      </div>
      <div class="big-cta-card reveal-right">
        <div class="cta-card-title">Ready to <em>get started?</em><br/>Let's talk strategy.</div>
        <p class="cta-card-sub">Book a free discovery call and let's map out how I can help you grow. No pressure, just a conversation about your goals and how digital marketing can get you there.</p>
        <div class="cta-card-btns">
          <a href="https://calendar.app.google/K3TY9nAVZfSbxWXv6" target="_blank" class="btn btn-primary">
            Book A Free Call
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="https://wa.me/639272303838?text=Hello%2C%20I%20would%20like%20to%20connect%20with%20you!" target="_blank" class="btn btn-ghost">
            Message on WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-logo">Jeff<span>.</span>Ybanez</div>
  <div class="footer-copy">© 2025 Jeff P. Ybanez. All rights reserved.</div>
  <div class="footer-links">
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#portfolio-web">Projects</a>
    <a href="#contact">Contact</a>
  </div>
</footer>

<script>
// ── Cursor
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cursor.style.left=mx+'px';cursor.style.top=my+'px'});
(function animRing(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animRing)})();
document.querySelectorAll('a,button,.faq-q,.service-card,.tool-card,.project-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cursor.style.width='18px';cursor.style.height='18px';ring.style.width='52px';ring.style.height='52px'});
  el.addEventListener('mouseleave',()=>{cursor.style.width='10px';cursor.style.height='10px';ring.style.width='36px';ring.style.height='36px'});
});

// ── Navbar scroll
window.addEventListener('scroll',()=>{
  document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>40)
});

// ── Mobile menu
function openMobile(){document.getElementById('mobileMenu').classList.add('open')}
function closeMobile(){document.getElementById('mobileMenu').classList.remove('open')}

// ── Scroll reveal
const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}})
},{threshold:.12});
document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el=>{
  const parent=el.parentElement;
  const siblings=[...parent.children].filter(c=>c.classList.contains(el.className.split(' ')[0]));
  const idx=siblings.indexOf(el);
  el.style.transitionDelay=(idx*.08)+'s';
  obs.observe(el);
});

// ── FAQ accordion
function toggleFaq(btn){
  const item=btn.parentElement;
  const wasOpen=item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i=>i.classList.remove('open'));
  if(!wasOpen)item.classList.add('open');
}
</script>
</body>
</html>
