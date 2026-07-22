import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ChevronDown, Moon, Sun, Menu, X, Clock } from 'lucide-react';

// lucide-react v1 dropped brand icons; inline SVGs replace Linkedin/Github
export const Linkedin = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8.34 18.34V10.13H5.67v8.21zM7 8.94a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08m11.34 9.4v-4.7c0-2.52-1.34-3.69-3.14-3.69a2.71 2.71 0 0 0-2.45 1.35v-1.17h-2.68q.06 1.14 0 8.21h2.68v-4.58a1.84 1.84 0 0 1 .09-.66 1.48 1.48 0 0 1 1.38-1c.98 0 1.37.74 1.37 1.83v4.41z" />
  </svg>
);

export const Github = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.9-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2" />
  </svg>
);

export const GithubBrand = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="#ffffff" className={className}>
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.9-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2" />
  </svg>
);

// Brand-colored tech icons for the toolkit/skills badges
export const PythonIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#3776AB" d="M11.94 1c-1.02 0-2 .09-2.84.24-2.5.44-2.96 1.36-2.96 3.06v2.24h5.9v.75H4.03c-1.72 0-3.22 1.03-3.7 3-.55 2.25-.57 3.66 0 6.01.42 1.75 1.43 3 3.15 3h2.04v-2.7c0-1.95 1.69-3.67 3.7-3.67h5.9c1.64 0 2.96-1.35 2.96-3v-5.63c0-1.6-1.35-2.8-2.96-3.07A18.5 18.5 0 0 0 11.94 1zM8.87 2.9c.62 0 1.12.51 1.12 1.13 0 .62-.5 1.12-1.12 1.12-.63 0-1.13-.5-1.13-1.12 0-.62.5-1.13 1.13-1.13z"/>
    <path fill="#FFD43B" d="M18.31 8.29v2.63c0 2.03-1.72 3.74-3.7 3.74h-5.9c-1.61 0-2.96 1.38-2.96 3v5.63c0 1.6 1.39 2.54 2.96 3 1.88.55 3.68.65 5.9 0 1.49-.43 2.96-1.3 2.96-3v-2.24h-5.9v-.75h8.86c1.72 0 2.36-1.2 2.96-3 .62-1.85.6-3.63 0-6.01-.43-1.71-1.24-3-2.96-3h-2.22zm-3.33 14.31c.63 0 1.13.5 1.13 1.12 0 .63-.5 1.13-1.13 1.13-.62 0-1.12-.5-1.12-1.13 0-.62.5-1.12 1.12-1.12z"/>
  </svg>
);

export const FastApiIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <circle cx="12" cy="12" r="12" fill="#009688"/>
    <path fill="#ffffff" d="M11.24 2.4 3.6 12.4h5.7l-2.6 9.2 9.7-11.6H10.9z"/>
  </svg>
);

export const DockerIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#2496ED" d="M22.5 9.6c-.6-.4-1.9-.6-2.9-.4-.1-.9-.6-1.7-1.4-2.4l-.5-.4-.4.5c-.5.6-.7 1.6-.6 2.4.1.6.3 1.2.7 1.6-.3.2-.6.3-1 .5-.6.2-1.3.3-2 .3H1.9l-.1.6c-.2 1.4 0 2.9.9 4.1 1 1.4 2.6 2.1 4.6 2.1 4.4 0 7.6-2 9.2-5.8 1 0 3.1 0 4.2-2.1l.3-.5-.5-.3zM4.4 11.2h1.9V9.3H4.4zm2.6 0h1.9V9.3H7zm2.6 0h1.9V9.3H9.6zm2.6 0h1.9V9.3h-1.9zM7 8.7h1.9V6.8H7zm2.6 0h1.9V6.8H9.6zm2.6 0h1.9V6.8h-1.9zM4.4 13.7h1.9v-1.9H4.4zm2.6 0h1.9v-1.9H7zm2.6 0h1.9v-1.9H9.6zm2.6 0h1.9v-1.9h-1.9zm2.6-2.5h1.9V9.3h-1.9z"/>
  </svg>
);

export const PostgreSQLIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#4169E1" d="M17.13 1.24c-1.85-.06-3.5.55-4.83 1.55A7.4 7.4 0 0 0 9.3 1.9c-1.02-.1-2.1.05-3.1.5C4.1 3.2 2.6 5 1.9 7.3c-.6 2-.6 4.3.1 6.6.7 2.3 2 4.4 3.7 5.9 1.4 1.2 3 1.9 4.6 2.1.4.05.8.07 1.1.07 1.5 0 2.9-.5 4-1.4 1.1.7 2.4 1.1 3.7 1 1.6-.1 3-1 3.9-2.4.8-1.3 1.1-2.9 1-4.5-.05-.9-.3-1.8-.7-2.6.6-.8 1-1.8 1.1-2.9.15-1.5-.3-3.1-1.3-4.3-1-1.2-2.5-1.9-4.1-2z"/>
    <path fill="#ffffff" d="M12.5 8.4c-.15-.6-.5-1-1-1.2-.5-.2-1.1-.1-1.6.2-.35.2-.6.5-.75.9-.5-.2-1.05-.15-1.5.15-.5.3-.8.85-.8 1.4 0 .35.1.7.3 1-.5.3-.8.85-.8 1.45 0 .5.2.95.55 1.3-.2.4-.25.9-.1 1.35.2.6.7 1 1.3 1.15.15.65.6 1.15 1.2 1.35.6.2 1.25.05 1.7-.35.35.35.85.55 1.35.5.6-.05 1.1-.4 1.35-.95.55.15 1.15 0 1.55-.4.4-.4.55-1 .4-1.55.5-.3.8-.85.75-1.45-.05-.5-.3-.9-.7-1.15.25-.45.3-1 .1-1.5-.2-.5-.65-.85-1.15-.95.05-.55-.15-1.1-.6-1.45-.4-.35-1-.45-1.5-.3z"/>
  </svg>
);

export const OpenAIIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path fill="#ffffff" d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.51-2.9A6.07 6.07 0 0 0 10.7 0a6.05 6.05 0 0 0-5.77 4.2 5.98 5.98 0 0 0-4 2.9 6.05 6.05 0 0 0 .75 7.09 5.98 5.98 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.52 2.9A6.07 6.07 0 0 0 13.3 24a6.05 6.05 0 0 0 5.77-4.2 5.98 5.98 0 0 0 4-2.9 6.05 6.05 0 0 0-.75-7.08zM13.3 22.44a4.5 4.5 0 0 1-2.9-1.05l.14-.08 4.83-2.79a.8.8 0 0 0 .4-.69v-6.8l2.04 1.18a.07.07 0 0 1 .04.06v5.64a4.53 4.53 0 0 1-4.5 4.53zM3.14 18.35a4.5 4.5 0 0 1-.54-3.03l.14.08 4.83 2.79a.79.79 0 0 0 .8 0l5.9-3.4v2.36a.08.08 0 0 1-.03.07l-4.88 2.82a4.53 4.53 0 0 1-6.18-1.65zM1.9 7.66a4.5 4.5 0 0 1 2.36-1.98v5.73a.79.79 0 0 0 .4.69l5.9 3.4-2.04 1.18a.07.07 0 0 1-.07 0l-4.88-2.82A4.53 4.53 0 0 1 1.9 7.66zm16.78 3.9-5.9-3.41 2.04-1.18a.07.07 0 0 1 .07 0l4.88 2.82a4.52 4.52 0 0 1-.68 8.16v-5.73a.8.8 0 0 0-.4-.69zm2.03-3.06-.14-.08-4.83-2.8a.79.79 0 0 0-.8 0l-5.9 3.41V6.67a.08.08 0 0 1 .03-.07l4.88-2.81a4.52 4.52 0 0 1 6.72 4.68zm-12.78 4.2-2.04-1.18a.07.07 0 0 1-.04-.06V5.82a4.52 4.52 0 0 1 7.4-3.48l-.14.08-4.83 2.79a.8.8 0 0 0-.4.69zm1.11-2.38 2.63-1.52 2.63 1.52v3.04l-2.63 1.52-2.63-1.52z"/>
  </svg>
);

export const LangChainIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="7" cy="7" r="3.2" stroke="#1C3C3C" strokeWidth="1.8"/>
    <circle cx="17" cy="7" r="3.2" stroke="#3F7C6E" strokeWidth="1.8"/>
    <circle cx="12" cy="17" r="3.2" stroke="#1C3C3C" strokeWidth="1.8"/>
    <path stroke="#3F7C6E" strokeWidth="1.8" d="M9.8 8.6 14 14.6M14.2 8.6 10 14.6"/>
  </svg>
);

// Custom hook for scroll reveal animations
export const useIntersection = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, ...options });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return [elementRef, isIntersecting];
};

// Animation Wrapper Component
export const Reveal = ({ children, direction = 'up', delay = 0, className = '' }) => {
  const [ref, isVisible] = useIntersection();

  const getTransform = () => {
    switch (direction) {
      case 'up': return 'translateY(40px)';
      case 'down': return 'translateY(-40px)';
      case 'left': return 'translateX(40px)';
      case 'right': return 'translateX(-40px)';
      case 'scale': return 'scale(0.95)';
      default: return 'none';
    }
  };

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translate(0) scale(1)' : getTransform(),
    transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
};

// 3D Tilt Wrapper Component
export const Tilt3D = ({ children, className = '', tiltMaxAngleX = 15, tiltMaxAngleY = 15, scale = 1.02 }) => {
  const [style, setStyle] = useState({ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)' });
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rotateX = ((height / 2 - mouseY) / (height / 2)) * tiltMaxAngleX;
    const rotateY = ((mouseX - width / 2) / (width / 2)) * tiltMaxAngleY;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: 'transform 0.1s ease-out'
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s ease-out'
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ ...style, transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};

// Mouse Glow Background Component
export const MouseGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300"
      style={{ opacity: isHovering ? 0.8 : 0.5 }}
    >
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] transition-all duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(29,78,216,0.15) 0%, rgba(0,0,0,0) 70%)',
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
        }}
      />
    </div>
  );
};

// Interactive canvas background: glowing nodes connected by lines, repelled by the mouse
export const NeuralNetworkCanvas = ({ className = '', opacity = 60 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    class Node {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.baseRadius = this.radius;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update(mouseX, mouseY) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        if (mouseX && mouseY) {
          const dx = mouseX - this.x;
          const dy = mouseY - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            const force = (150 - distance) / 150;
            this.x -= dx * force * 0.05;
            this.y -= dy * force * 0.05;
            this.radius = this.baseRadius + force * 2;
          } else {
            this.radius = this.baseRadius;
          }
        }

        this.pulsePhase += 0.02;
        const pulse = (Math.sin(this.pulsePhase) + 1) / 2;
        this.currentRadius = this.radius + pulse * 1.5;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.8)';
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(59, 130, 246, 0.5)';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const nodes = [];
    const numNodes = Math.floor((canvas.width * canvas.height) / 15000);
    for (let i = 0; i < numNodes; i++) {
      nodes.push(new Node(Math.random() * canvas.width, Math.random() * canvas.height));
    }

    let mouseX = null;
    let mouseY = null;
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouseX = null;
      mouseY = null;
    };
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);

            const opacity = 1 - (distance / 120);
            const isPulsing = Math.random() > 0.995;
            if (isPulsing) {
              ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`;
              ctx.lineWidth = 2;
            } else {
              ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.3})`;
              ctx.lineWidth = 1;
            }

            ctx.stroke();
          }
        }
      }

      nodes.forEach(node => {
        node.update(mouseX, mouseY);
        node.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full mix-blend-screen pointer-events-auto ${className}`}
      style={{ opacity: opacity / 100 }}
    />
  );
};

export const SectionHeading = ({ pretitle, title, highlightText, highlightClass, id }) => (
  <Reveal direction="up">
    <div id={id} className="flex flex-col items-center text-center mb-16 scroll-mt-24">
      <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase mb-4 tracking-widest font-accent">
        {pretitle}
      </span>
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-geist font-medium tracking-tight">
        {title.split(highlightText)[0]}
        <motion.span
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1, y: [0, -4, 0] }}
          transition={{
            x: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
            opacity: { duration: 0.9 },
            y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }
          }}
          className={`font-serif italic text-5xl md:text-6xl lg:text-7xl font-normal ${highlightClass}`}
        >
          {highlightText}
        </motion.span>
        {title.split(highlightText)[1]}
      </h2>
    </div>
  </Reveal>
);

export const TechBadge = ({ children, icon: Icon }) => (
  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] md:text-xs font-semibold text-zinc-300 bg-zinc-900 border border-zinc-800 rounded uppercase tracking-wider hover:border-zinc-600 transition-colors cursor-default hover:-translate-y-0.5 duration-200 font-accent">
    {Icon && <Icon className="w-3 h-3" />}
    {children}
  </span>
);

// `page` marks which route an anchor lives on ('/' or '/about'); scrollToId
// cross-navigates first if the hash isn't on the current page.
const NAV_LINKS = [
  { to: '#hero', label: 'Home', page: '/' },
  { to: '#projects', label: 'Work', page: '/' },
  { to: '#about', label: 'About', page: '/about' },
  { to: '#blog', label: 'Blog', page: '/' },
];

const MORE_LINKS = [
  { to: '#skills', label: 'Skills', page: '/' },
  { to: '#architecture', label: 'System Design', page: '/' },
  { to: '#github', label: 'GitHub Activity', page: '/' },
  { to: '#contact', label: 'Contact', page: '/' },
];

// Tiny pub/sub so any nav entry point (desktop nav, mobile menu, search
// modal, "More" dropdown) can trigger the full-screen Work transition and
// the Work focus mode (hides every other section) without prop-drilling
// through Navbar/SearchModal/App.
let workTransitionListener = null;
export const setWorkTransitionListener = (fn) => { workTransitionListener = fn; };

let workFocusListener = null;
export const setWorkFocusListener = (fn) => { workFocusListener = fn; };

// Looks up which route a nav hash lives on ('/' by default); used to decide
// whether a click needs a page navigation before it can scroll to the anchor.
const pageForHash = (hash) => [...NAV_LINKS, ...MORE_LINKS].find(l => l.to === hash)?.page || '/';

const scrollToSamePageHash = (hash) => {
  if (hash === '#projects' && workTransitionListener) {
    workTransitionListener(() => {
      workFocusListener?.(true);
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'instant' });
    });
    return;
  }
  // Exiting focus mode un-hides sections (display:none -> block); wait a
  // frame so they have layout again before scrollIntoView measures them.
  workFocusListener?.(false);
  requestAnimationFrame(() => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  });
};

// Cross-page-aware nav: if the hash's section lives on a different route
// than the current one, navigate there first and scroll in once it mounts;
// otherwise scroll within the current page as before.
const navigateToHash = (hash, navigate, currentPath) => {
  const targetPage = pageForHash(hash);
  if (targetPage !== currentPath) {
    navigate(`${targetPage}#${hash.slice(1)}`);
    return;
  }
  scrollToSamePageHash(hash);
};

// Full-screen wipe shown when navigating to the Work section — two panels
// slide in from opposite edges to cover the viewport, the scroll jump
// happens hidden underneath, then the panels slide back out to reveal it.
export const WorkTransition = () => {
  const [phase, setPhase] = useState('idle'); // idle | covering | revealing

  useEffect(() => {
    setWorkTransitionListener((onCovered) => {
      setPhase('covering');
      setTimeout(() => {
        onCovered();
        setPhase('revealing');
        setTimeout(() => setPhase('idle'), 700);
      }, 550);
    });
    return () => setWorkTransitionListener(null);
  }, []);

  if (phase === 'idle') return null;

  const covered = phase === 'revealing';

  return (
    <div className="fixed inset-0 z-[300] pointer-events-none flex">
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: covered ? '-100%' : '0%' }}
        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        className="w-1/2 h-full bg-[#0f0f11] border-r border-white/5"
      />
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: covered ? '100%' : '0%' }}
        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        className="w-1/2 h-full bg-[#0f0f11] border-l border-white/5"
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: covered ? 0 : 1 }}
        transition={{ duration: 0.3, delay: 0.15 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[11px] font-bold tracking-[0.3em] text-zinc-500 uppercase font-accent"
      >
        Curated Work
      </motion.span>
    </div>
  );
};

export const SearchModal = ({ isOpen, onClose, theme, onToggleTheme, currentTime }) => {
  const navigate = useNavigate();
  const location = useLocation();

  if (!isOpen) return null;

  const pages = [...NAV_LINKS, ...MORE_LINKS];

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-2xl bg-[#111111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
        <div className="flex items-center gap-2 p-3 border-b border-white/10">
          <div className="flex-1 bg-white/5 border border-white/10 rounded-full h-11 flex items-center px-4 gap-3 focus-within:border-white/30 focus-within:bg-white/10 transition-all">
            <Search className="w-4 h-4 text-zinc-400 shrink-0" />
            <input
              type="text"
              placeholder="Jump to a section..."
              className="flex-1 min-w-0 bg-transparent text-white placeholder-zinc-500 outline-none text-sm"
              autoFocus
            />
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 h-11 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 shrink-0 whitespace-nowrap">
            <Clock className="w-3.5 h-3.5 text-zinc-500" />
            {currentTime?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>

          <a
            href="mailto:hamzashahzad454545@gmail.com"
            onClick={onClose}
            className="hidden sm:inline-flex items-center px-4 h-11 rounded-full bg-white text-black text-xs font-bold whitespace-nowrap hover:bg-zinc-200 transition-colors shrink-0"
          >
            Hire Me
          </a>

          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}

          <button onClick={onClose} className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors shrink-0">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4 h-[300px] overflow-y-auto custom-scrollbar">
          <span className="text-xs font-semibold text-zinc-500 mb-3 block">Sections</span>
          <div className="grid grid-cols-2 gap-2">
            {pages.map(page => (
              <button
                key={page.to}
                onClick={() => { onClose(); navigateToHash(page.to, navigate, location.pathname); }}
                className="flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors hover:bg-white/5 text-left"
              >
                <span className="text-sm font-medium text-zinc-300">{page.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MoreIcon = {
  Contact: ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  ),
  Blog: ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
  ),
  WhatsApp: ({ className }) => (
    <svg viewBox="0 0 32 32" fill="#25D366" className={className}>
      <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.386.7 4.61 1.902 6.475L4 29l7.723-1.865A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3zm0 21.75c-1.98 0-3.85-.55-5.44-1.51l-.39-.23-4.59 1.11 1.13-4.48-.25-.4A9.7 9.7 0 0 1 5.25 15c0-5.93 4.82-10.75 10.754-10.75S26.75 9.07 26.75 15 21.94 24.75 16.004 24.75z"></path>
      <path d="M22.06 17.34c-.33-.17-1.96-.97-2.27-1.08-.3-.11-.53-.17-.75.17-.22.33-.86 1.08-1.06 1.3-.19.22-.39.25-.72.08-.33-.17-1.39-.51-2.65-1.63-.98-.87-1.64-1.95-1.83-2.28-.19-.33-.02-.5.15-.67.15-.15.33-.39.5-.58.17-.19.22-.33.33-.55.11-.22.06-.42-.03-.58-.08-.17-.75-1.8-1.02-2.46-.27-.65-.55-.56-.75-.57h-.64c-.22 0-.58.08-.88.42-.3.33-1.15 1.12-1.15 2.73s1.18 3.17 1.34 3.39c.17.22 2.32 3.54 5.62 4.97.79.34 1.4.55 1.88.7.79.25 1.51.22 2.08.13.63-.09 1.96-.8 2.24-1.58.28-.77.28-1.43.19-1.58-.08-.14-.3-.22-.63-.39z"></path>
    </svg>
  ),
};

const MORE_CARDS = [
  { label: 'Skills', desc: 'Toolkit & technologies I use', to: '#skills', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop' },
  { label: 'System Design', desc: 'Architectures behind my AI systems', to: '#architecture', img: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop' },
];

const MORE_ROWS = [
  { label: 'GitHub Activity', desc: 'Commits, issues & PRs', to: '#github', icon: Github },
  { label: 'Contact', desc: 'Get in touch with me', to: '#contact', icon: MoreIcon.Contact },
  { label: 'Blog', desc: 'Notes on AI systems', to: '#blog', icon: MoreIcon.Blog },
  { label: 'WhatsApp', desc: 'Chat with me directly', to: 'https://wa.me/923207074141', icon: MoreIcon.WhatsApp },
];

export const Navbar = ({ onOpenSearch, theme, onToggleTheme, currentTime }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  useEffect(() => {
    if (!isMoreOpen) return;
    const handleClick = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) setIsMoreOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isMoreOpen]);

  const handleMoreNav = (to) => {
    setIsMoreOpen(false);
    if (to.startsWith('#')) navigateToHash(to, navigate, location.pathname);
    else window.open(to, '_blank', 'noreferrer');
  };

  const handleMobileNav = (hash) => {
    setIsMobileOpen(false);
    navigateToHash(hash, navigate, location.pathname);
  };

  return (
    <>
      <Reveal direction="down" delay={200} className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] max-w-fit px-0">
        <div ref={moreRef} className="relative">
        <style>{`
          @keyframes navBlob1 {
            0%   { transform: translate(0, 0) scale(1); border-radius: 42% 58% 63% 37% / 41% 44% 56% 59%; }
            25%  { transform: translate(60%, 30%) scale(1.25); border-radius: 63% 37% 41% 59% / 55% 40% 60% 45%; }
            50%  { transform: translate(30%, -40%) scale(0.85); border-radius: 37% 63% 59% 41% / 44% 56% 44% 56%; }
            75%  { transform: translate(-20%, 20%) scale(1.1); border-radius: 55% 45% 40% 60% / 63% 37% 63% 37%; }
            100% { transform: translate(0, 0) scale(1); border-radius: 42% 58% 63% 37% / 41% 44% 56% 59%; }
          }
          @keyframes navBlob2 {
            0%   { transform: translate(0, 0) scale(1); border-radius: 58% 42% 37% 63% / 59% 56% 44% 41%; }
            30%  { transform: translate(-50%, 25%) scale(0.9); border-radius: 41% 59% 55% 45% / 37% 63% 40% 60%; }
            60%  { transform: translate(-25%, -35%) scale(1.2); border-radius: 60% 40% 45% 55% / 56% 44% 63% 37%; }
            100% { transform: translate(0, 0) scale(1); border-radius: 58% 42% 37% 63% / 59% 56% 44% 41%; }
          }
          @keyframes navBlob3 {
            0%   { transform: translate(0, 0) scale(1); border-radius: 50% 50% 35% 65% / 60% 40% 60% 40%; }
            40%  { transform: translate(40%, -25%) scale(1.15); border-radius: 65% 35% 55% 45% / 40% 60% 35% 65%; }
            70%  { transform: translate(-35%, 30%) scale(0.8); border-radius: 35% 65% 40% 60% / 65% 35% 55% 45%; }
            100% { transform: translate(0, 0) scale(1); border-radius: 50% 50% 35% 65% / 60% 40% 60% 40%; }
          }
          @keyframes navBlob4 {
            0%   { transform: translate(0, 0) scale(1); border-radius: 45% 55% 60% 40% / 50% 45% 55% 50%; }
            35%  { transform: translate(-45%, -20%) scale(1.1); border-radius: 60% 40% 45% 55% / 45% 55% 40% 60%; }
            65%  { transform: translate(30%, 35%) scale(0.9); border-radius: 40% 60% 50% 50% / 55% 45% 60% 40%; }
            100% { transform: translate(0, 0) scale(1); border-radius: 45% 55% 60% 40% / 50% 45% 55% 50%; }
          }
          @keyframes navLinkUnderline {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
        `}</style>
        <nav className="theme-fixed relative flex items-center justify-between md:justify-start gap-2 p-1.5 rounded-full shadow-2xl shadow-black/50 w-full overflow-hidden border border-white/15 isolate">
          {/* Liquid glass: independently morphing, drifting color blobs behind frosted blur */}
          <div className="absolute inset-0 -z-10 bg-black/40 backdrop-blur-xl"></div>
          <div className="absolute inset-0 -z-10 opacity-90 mix-blend-screen">
            <div className="absolute -top-8 left-0 w-20 h-20 bg-blue-500/60 blur-xl" style={{ animation: 'navBlob1 11s ease-in-out infinite' }}></div>
            <div className="absolute -top-6 left-1/4 w-16 h-16 bg-purple-400/50 blur-xl" style={{ animation: 'navBlob2 9s ease-in-out infinite', animationDelay: '-3s' }}></div>
            <div className="absolute -bottom-8 right-2 w-20 h-20 bg-pink-400/45 blur-xl" style={{ animation: 'navBlob3 13s ease-in-out infinite', animationDelay: '-6s' }}></div>
            <div className="absolute -bottom-6 right-1/3 w-14 h-14 bg-fuchsia-400/40 blur-xl" style={{ animation: 'navBlob4 10s ease-in-out infinite', animationDelay: '-1.5s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-violet-400/35 blur-xl" style={{ animation: 'navBlob2 15s ease-in-out infinite', animationDelay: '-8s' }}></div>
          </div>
          <div className="absolute inset-x-0 top-0 h-1/2 -z-10 bg-gradient-to-b from-white/15 to-transparent rounded-t-full pointer-events-none"></div>

          <div className="hidden md:flex items-center">
            {NAV_LINKS.map(link => (
              <a
                key={link.to}
                href={`${link.page}${link.to}`}
                onClick={(e) => { e.preventDefault(); navigateToHash(link.to, navigate, location.pathname); }}
                className="group relative px-5 py-2 text-sm font-medium rounded-full transition-colors text-zinc-300 hover:text-white whitespace-nowrap"
              >
                {link.label}
                <span className="absolute left-5 right-5 -bottom-0.5 h-px bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" style={{ transformOrigin: 'left' }}></span>
              </a>
            ))}
            <button
              onClick={() => setIsMoreOpen((v) => !v)}
              className={`flex items-center gap-1 px-5 py-2 text-sm font-medium rounded-full transition-all whitespace-nowrap ${isMoreOpen ? 'bg-white/10 text-white' : 'text-zinc-300 hover:text-white'}`}
            >
              More <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMoreOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <a href="/#hero" onClick={(e) => { e.preventDefault(); navigateToHash('#hero', navigate, location.pathname); }} className="md:hidden pl-3 text-sm font-semibold text-white font-geist whitespace-nowrap">
            Hamza Shahzad
          </a>

          <div className="hidden md:block w-[1px] h-4 bg-white/20 mx-2"></div>
          <button onClick={onOpenSearch} className="hidden md:inline-flex p-2 text-zinc-300 hover:text-white bg-white/10 border border-white/10 rounded-full transition-colors group flex-shrink-0">
            <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={() => setIsMobileOpen(true)}
            className="md:hidden p-2 text-zinc-300 hover:text-white bg-white/10 border border-white/10 rounded-full transition-colors flex-shrink-0"
            aria-label="Open menu"
          >
            <Menu className="w-4 h-4" />
          </button>
        </nav>

        <div className={`hidden md:block absolute top-full left-0 right-0 mt-2 transition-all duration-500 ease-in-out overflow-hidden ${isMoreOpen ? 'opacity-100 max-h-[500px] translate-y-0' : 'opacity-0 max-h-0 -translate-y-2 pointer-events-none'}`}>
          <div className="bg-[#1f1f1f]/95 backdrop-blur-2xl border border-white/5 rounded-[24px] p-3 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {MORE_CARDS.map((card) => (
                <button
                  key={card.label}
                  onClick={() => handleMoreNav(card.to)}
                  className="relative h-[150px] rounded-[18px] overflow-hidden group cursor-pointer border border-white/5 text-left"
                >
                  <img src={card.img} alt={card.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white text-[16px] font-bold mb-0.5 tracking-tight font-geist">{card.label}</h3>
                    <p className="text-zinc-200 text-[12px] font-medium">{card.desc}</p>
                  </div>
                </button>
              ))}

              <div className="flex flex-col gap-2 justify-between">
                {MORE_ROWS.map((row) => (
                  <a
                    key={row.label}
                    href={row.to}
                    onClick={(e) => { e.preventDefault(); handleMoreNav(row.to); }}
                    target={row.to.startsWith('http') ? '_blank' : undefined}
                    rel={row.to.startsWith('http') ? 'noreferrer' : undefined}
                    className="flex items-center gap-3.5 p-3 rounded-[18px] border border-white/5 bg-[#252525] hover:bg-[#2a2a2a] transition-colors group"
                  >
                    <div className="w-[38px] h-[38px] rounded-xl bg-[#333333] border border-white/5 flex items-center justify-center shrink-0 text-zinc-400 group-hover:text-white transition-colors">
                      <row.icon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-white text-[13px] font-bold tracking-tight mb-0.5">{row.label}</span>
                      <span className="text-zinc-500 text-[11px] leading-tight truncate">{row.desc}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </Reveal>

      {isMobileOpen && (
        <div className="fixed inset-0 z-[90] md:hidden">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setIsMobileOpen(false)} />
          <div className="absolute top-0 right-0 h-full w-[80%] max-w-xs bg-[#0a0a0a] border-l border-white/10 shadow-2xl flex flex-col p-6 animate-in slide-in-from-right duration-200">
            <div className="flex items-center justify-between mb-8">
              <span className="text-sm font-semibold text-white font-geist">Menu</span>
              <button onClick={() => setIsMobileOpen(false)} className="p-2 text-zinc-400 hover:text-white bg-white/5 border border-white/10 rounded-full transition-colors" aria-label="Close menu">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-col gap-1">
              {[...NAV_LINKS, ...MORE_LINKS].map(link => (
                <a
                  key={link.to}
                  href={`${link.page}${link.to}`}
                  onClick={(e) => { e.preventDefault(); handleMobileNav(link.to); }}
                  className="px-4 py-3 text-base font-medium rounded-xl transition-colors text-zinc-300 hover:text-white hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-3">
              <button
                onClick={() => { setIsMobileOpen(false); onOpenSearch(); }}
                className="flex items-center justify-center gap-2 px-4 py-3 text-zinc-300 hover:text-white bg-white/5 border border-white/10 rounded-xl transition-colors text-sm font-medium"
              >
                <Search className="w-4 h-4" /> Search
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
