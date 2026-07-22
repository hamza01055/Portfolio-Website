import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ChevronDown, ArrowRight, CheckCircle2, Eye, X, Briefcase, Download } from 'lucide-react';
import { Reveal, useIntersection, NeuralNetworkCanvas } from '../components/shared';

// Premium metric card for the hero stat row — large Clash Display numerals,
// General Sans labels, a cursor-tracked spotlight, a continuously traveling
// border beam (visible on hover), and a spring lift/scale/glow, all restrained
// to a single purple accent rather than the site's usual multi-hue treatment.
const StatCard = ({ value, label, delay = 0 }) => {
  const [ref, isVisible] = useIntersection({ threshold: 0.4 });
  const cardRef = useRef(null);
  const [display, setDisplay] = useState(0);
  const numeric = parseInt(value, 10);
  const suffix = value.replace(/^[0-9]+/, '');

  const spotX = useMotionValue(50);
  const spotY = useMotionValue(50);
  const springSpotX = useSpring(spotX, { stiffness: 200, damping: 25 });
  const springSpotY = useSpring(spotY, { stiffness: 200, damping: 25 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    spotX.set(((e.clientX - rect.left) / rect.width) * 100);
    spotY.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  useEffect(() => {
    if (!isVisible) return;
    const duration = 1400;
    const start = performance.now();
    let frame;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(numeric * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    const timeout = setTimeout(() => { frame = requestAnimationFrame(tick); }, delay);
    return () => { clearTimeout(timeout); if (frame) cancelAnimationFrame(frame); };
  }, [isVisible, numeric, delay]);

  return (
    <motion.div
      ref={(el) => { ref.current = el; cardRef.current = el; }}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -7, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group relative isolate overflow-hidden rounded-[14px] bg-white/[0.03] border border-white/[0.08] px-5 py-6"
      style={{ backdropFilter: 'blur(14px)' }}
    >
      {/* Cursor-tracked spotlight, hover only */}
      <StatSpotlight x={springSpotX} y={springSpotY} />

      {/* Traveling border beam, hover only */}
      <span className="absolute inset-0 rounded-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ padding: 1 }}>
        <span
          className="absolute inset-0 rounded-[14px]"
          style={{
            background: 'conic-gradient(from 0deg, transparent 0%, rgba(139,92,246,0.9) 10%, transparent 22%, transparent 100%)',
            animation: 'statBeamSpin 3.2s linear infinite',
          }}
        ></span>
        <span className="absolute inset-[1px] rounded-[13px] bg-[#0a0a0c]"></span>
      </span>

      {/* Ambient purple glow, hover only */}
      <span className="absolute -inset-3 -z-10 rounded-[20px] opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none" style={{ background: 'rgba(139,92,246,0.25)' }}></span>

      <div className="relative">
        <div className="font-display font-semibold text-white leading-none tracking-tight" style={{ fontSize: 'clamp(28px, 3.4vw, 40px)' }}>
          {display}{suffix}
        </div>
        <div className="font-stat-label text-zinc-400 text-[11px] font-medium tracking-[0.04em] mt-2.5 leading-snug">
          {label}
        </div>
      </div>

      <style>{`
        @keyframes statBeamSpin { to { transform: rotate(360deg); } }
      `}</style>
    </motion.div>
  );
};

// Renders the spotlight radial-gradient reactively off live motion values
// (a plain style prop only reads the value once, at mount).
const StatSpotlight = ({ x, y }) => {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  useEffect(() => {
    const unsubX = x.on('change', (v) => setPos((p) => ({ ...p, x: v })));
    const unsubY = y.on('change', (v) => setPos((p) => ({ ...p, y: v })));
    return () => { unsubX(); unsubY(); };
  }, [x, y]);

  return (
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[14px]"
      style={{ background: `radial-gradient(220px circle at ${pos.x}% ${pos.y}%, rgba(139,92,246,0.18), transparent 70%)` }}
    ></div>
  );
};

// Premium CTA button — shared by Explore Projects / Hire Me / Resume.
// Rainbow animated-gradient border that continuously cycles, magnetic cursor
// pull, spring scale, diagonal shine sweep, and a click ripple. `variant`
// controls the label: 'solid' gives the text/icon a rainbow gradient too
// (primary action); 'glass' keeps the label plain white (secondary actions),
// while every button gets the same rotating rainbow border treatment.
const PremiumCTAButton = ({ href, onClick, download, variant = 'glass', icon: Icon = ArrowRight, iconPosition = 'right', children }) => {
  const ref = useRef(null);
  const [ripples, setRipples] = useState([]);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 300, damping: 22 });
  const springY = useSpring(my, { stiffness: 300, damping: 22 });

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    mx.set(relX * 0.25);
    my.set(relY * 0.35);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const handleClick = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const id = Date.now();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setRipples((prev) => [...prev, { id, x, y }]);
      setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 650);
    }
    onClick?.(e);
  };

  const isSolid = variant === 'solid';
  const Tag = motion.a;

  return (
    <Tag
      ref={ref}
      href={href}
      download={download}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="group relative inline-block p-[1.5px] rounded-full isolate"
    >
      {/* Animated rainbow border */}
      <span className="absolute inset-0 rounded-full ctaRainbowGradient"></span>
      {/* Glowing rainbow shadow, brightens on hover */}
      <span className="absolute inset-0 top-[10%] bottom-[-20%] left-[5%] right-[5%] rounded-full ctaRainbowGradient blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 -z-10"></span>

      {/* Inner body */}
      <span className={`relative flex items-center justify-center gap-2 px-7 py-3.5 rounded-full z-10 overflow-hidden ${isSolid ? 'bg-[#111111]' : 'bg-[#0B0B11]'}`}>
        {/* Diagonal shine sweep */}
        <span className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
          <span
            className="absolute top-0 -left-1/2 w-1/2 h-full -translate-x-full group-hover:translate-x-[420%] transition-transform duration-[900ms] ease-out"
            style={{ background: 'linear-gradient(115deg, transparent, rgba(255,255,255,0.35), transparent)' }}
          ></span>
        </span>

        {/* Click ripple */}
        {ripples.map((r) => (
          <span
            key={r.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: r.x,
              top: r.y,
              width: 8,
              height: 8,
              marginLeft: -4,
              marginTop: -4,
              background: 'rgba(255,255,255,0.4)',
              animation: 'ctaRipple 650ms ease-out forwards',
            }}
          ></span>
        ))}

        {iconPosition === 'left' && Icon && (
          <Icon className={`relative w-4 h-4 ${isSolid ? '' : 'text-white'}`} />
        )}
        <span
          className={`relative text-sm whitespace-nowrap font-geist ${isSolid ? 'ctaRainbowGradient ctaRainbowText' : 'text-white'}`}
          style={{ fontWeight: 600 }}
        >
          {children}
        </span>
        {iconPosition === 'right' && Icon && (
          <Icon className={`relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${isSolid ? '' : 'text-white'}`} />
        )}
      </span>

      <style>{`
        .ctaRainbowGradient {
          background: linear-gradient(90deg, #ffb000, #ff3366, #9933ff, #00d4ff, #00ff9d, #ffb000);
          background-size: 300% 100%;
          animation: ctaGradientShift 4s linear infinite;
        }
        .ctaRainbowText {
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }
        @keyframes ctaGradientShift {
          0% { background-position: 0% 50%; }
          100% { background-position: -300% 50%; }
        }
        @keyframes ctaRipple {
          from { opacity: 0.5; transform: scale(0); }
          to { opacity: 0; transform: scale(22); }
        }
      `}</style>
    </Tag>
  );
};

// Fanned portrait gallery — four photos splayed like cards on a table, each
// alternately rotated. Lifts, straightens and brightens on hover.
const HERO_PHOTOS = [
  { src: '/portrait-formal.jpg', rotate: -4 },
  { src: '/img3.jpeg', rotate: 1 },
  { src: '/snow-scarf.jpg', rotate: -2 },
  { src: '/snow-jeep.jpg', rotate: 3 },
];

const HeroPhotoGrid = () => (
  <div className="relative w-full max-w-[640px] h-[220px] md:h-[300px] mx-auto lg:mx-0">
    {HERO_PHOTOS.map((photo, i) => (
      <div
        key={photo.src}
        className="group absolute bottom-0 w-[130px] h-[170px] md:w-[190px] md:h-[260px] rounded-xl overflow-hidden border border-white/15 shadow-2xl shadow-black/80 cursor-pointer brightness-90 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:!brightness-110 hover:!-translate-y-2.5 hover:!scale-[1.02] hover:!z-50 hover:border-white/30"
        style={{
          left: `${i * 26}%`,
          transform: `rotate(${photo.rotate}deg)`,
          zIndex: (i + 1) * 10,
        }}
      >
        <img src={photo.src} alt="" className="w-full h-full object-cover" />
      </div>
    ))}
  </div>
);

// Four-column status strip along the bottom of the Hero — current role,
// current build focus, specialty area, and a direct contact CTA. Styled
// after a footer-band layout with colored indicator squares per column.
const HERO_STRIP_ITEMS = [
  { square: 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]', label: 'Now', title: 'Freelance AI Engineer', desc: 'Remote · Open to projects', href: '#journey' },
  { square: 'bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.4)]', label: 'Building', title: 'AI Business OS', desc: 'RAG, agents & document intelligence', href: '#projects' },
  { square: 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.4)]', label: 'Focus', title: 'LLMs & Agentic AI', desc: 'RAG, multi-agent systems, FastAPI', href: '#skills' },
];

const HeroStrip = () => {
  const navigate = useNavigate();

  return (
  <div className="relative z-10 w-full border-t border-white/10 mt-16">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {HERO_STRIP_ITEMS.map((item) => (
        <a
          key={item.label}
          href={item.href === '#journey' ? '/about#journey' : item.href}
          onClick={(e) => {
            e.preventDefault();
            if (item.href === '#journey') navigate('/about#journey');
            else document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="border-b md:border-b-0 md:border-r border-white/5 p-6 lg:p-8 flex flex-col justify-between group cursor-pointer hover:bg-white/[0.02] transition-colors min-h-[140px]"
        >
          <div className="flex justify-between items-start w-full mb-4">
            <span className="font-mono text-[0.65rem] tracking-[0.2em] text-zinc-400 uppercase font-bold flex items-center">
              <span className={`w-1.5 h-1.5 mr-2 inline-block ${item.square}`}></span> {item.label}
            </span>
            <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors transform group-hover:translate-x-1" />
          </div>
          <div>
            <h4 className="text-white font-semibold text-[15px] mb-1 font-geist">{item.title}</h4>
            <p className="text-zinc-500 text-xs">{item.desc}</p>
          </div>
        </a>
      ))}

      <div className="p-6 lg:p-8 flex flex-col justify-between min-h-[140px]">
        <span className="font-mono text-[0.65rem] tracking-[0.2em] text-zinc-400 uppercase font-bold flex items-center mb-4">
          <span className="w-1.5 h-1.5 mr-2 inline-block bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.4)]"></span> Reach Out
        </span>
        <a
          href="mailto:hamzashahzad454545@gmail.com"
          className="w-full flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 rounded-full py-3 px-6 transition-colors group"
        >
          <span className="text-sm font-medium text-white">Start a conversation</span>
          <span className="bg-white text-black rounded-full p-2 flex items-center justify-center group-hover:scale-105 transition-transform">
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </a>
      </div>
    </div>
  </div>
  );
};

// In-page PDF preview for the Hero's Resume CTA — mirrors SearchModal's
// overlay/panel treatment, with an embedded viewer and a download fallback.
const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div
        className="w-full max-w-4xl h-[85vh] bg-[#111111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10 shrink-0">
          <h3 className="text-sm font-semibold text-white font-geist">Hamza Shahzad — Resume</h3>
          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-xs font-bold hover:bg-zinc-200 transition-colors"
            >
              <Download className="w-3.5 h-3.5" /> Download
            </a>
            <button
              onClick={onClose}
              aria-label="Close resume preview"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        <iframe src="/resume.pdf" title="Hamza Shahzad Resume" className="flex-1 w-full bg-white" />
      </div>
    </div>
  );
};

// 2. Hero
const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col pt-24 overflow-hidden">
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      <NeuralNetworkCanvas opacity={35} />

      {/* Layered background: base radial wash + soft spotlight behind heading */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_-10%,rgba(124,58,237,0.16),transparent_55%)]"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[140px] pointer-events-none"></div>

      {/* Ambient floating particles for extra depth */}
      <div className="absolute top-[18%] left-[10%] w-1.5 h-1.5 rounded-full bg-purple-400/60 blur-[1px] pointer-events-none" style={{ animation: 'heroDrift 8s ease-in-out infinite' }}></div>
      <div className="absolute top-[30%] right-[14%] w-2 h-2 rounded-full bg-fuchsia-400/50 blur-[1px] pointer-events-none" style={{ animation: 'heroDrift 10s ease-in-out infinite', animationDelay: '1.2s' }}></div>
      <div className="absolute bottom-[24%] left-[22%] w-1 h-1 rounded-full bg-purple-300/60 blur-[1px] pointer-events-none" style={{ animation: 'heroDrift 7s ease-in-out infinite', animationDelay: '2s' }}></div>
      <div className="absolute bottom-[38%] right-[26%] w-1.5 h-1.5 rounded-full bg-violet-400/50 blur-[1px] pointer-events-none" style={{ animation: 'heroDrift 9s ease-in-out infinite', animationDelay: '0.6s' }}></div>

      <div className="absolute bottom-0 w-full h-[300px] overflow-hidden flex justify-center pointer-events-none">
        <div className="absolute top-1/2 w-[150%] h-full bg-gradient-to-t from-purple-700/20 via-fuchsia-600/15 to-transparent blur-[120px] rounded-[100%] animate-pulse duration-[4000ms]"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-10 lg:px-14 flex-1 flex flex-col justify-center py-12">
        <div className="w-full">
          <Reveal direction="up" delay={250}>
            <h1 className="font-serif text-[3.5rem] sm:text-6xl md:text-8xl lg:text-[9rem] leading-[0.85] tracking-tight text-white mb-6 break-words">
              AI<br />
              <span className="text-gradient italic block mt-1">Engineer</span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={600}>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-zinc-500 font-medium">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> 1+ Years Experience</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> 12+ AI Projects</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Open Source</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Available for Freelance</span>
            </div>
          </Reveal>
        </div>

        <Reveal direction="up" delay={700}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-14 w-full max-w-2xl mx-auto lg:mx-0">
            <StatCard value="12+" label="Production AI Projects" delay={0} />
            <StatCard value="1+" label="Years Building AI" delay={100} />
            <StatCard value="20+" label="Technologies" delay={200} />
            <StatCard value="100%" label="Custom AI Solutions" delay={300} />
          </div>
        </Reveal>

        <Reveal direction="up" delay={800}>
          <div className="flex flex-wrap items-center gap-4 mt-10">
            <PremiumCTAButton href="mailto:hamzashahzad454545@gmail.com" variant="solid" icon={Briefcase} iconPosition="left">
              Hire Me
            </PremiumCTAButton>
            <PremiumCTAButton
              href="#projects"
              variant="glass"
              icon={Eye}
              iconPosition="left"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              Project Showcase
            </PremiumCTAButton>
            <PremiumCTAButton
              href="/resume.pdf"
              variant="glass"
              icon={Download}
              iconPosition="left"
              onClick={(e) => { e.preventDefault(); setIsResumeOpen(true); }}
            >
              Resume
            </PremiumCTAButton>
          </div>
        </Reveal>

        <div className="relative mt-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-start"
          >
            <HeroPhotoGrid />
          </motion.div>

          {/* Name block, overlaid on the right side of the photo gallery on large screens */}
          <div className="mt-10 lg:mt-0 lg:absolute lg:top-1/2 lg:right-0 lg:-translate-y-1/2 flex flex-col items-start lg:items-end w-full lg:w-auto pointer-events-none">
            <Reveal direction="up" delay={300} className="text-left lg:text-right pointer-events-auto">
              <p className="font-serif italic text-2xl md:text-3xl text-zinc-300 opacity-80 leading-tight mb-6">
                Engineering with taste.<br />
                Built to scale.
              </p>
              <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.9] tracking-tighter text-white">
                Hamza<br />
                <span className="text-gradient">Shahzad</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <button
          onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="Scroll to explore"
          className="mt-14 mx-auto lg:mx-0 flex flex-col items-center gap-1.5 text-zinc-500 hover:text-purple-300 transition-colors group"
        >
          <span className="text-[9px] font-semibold tracking-[0.2em] uppercase font-accent">Scroll</span>
          <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" style={{ animation: 'heroScrollBounce 2s ease-in-out infinite' }} />
        </button>
      </div>

      <HeroStrip />

      <style>{`
        @keyframes heroDrift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(14px, -18px); }
        }
        @keyframes heroScrollBounce {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(5px); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
