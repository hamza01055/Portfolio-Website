import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ArrowRight, Mail, Network, Bot, Boxes, Gauge, Terminal, Users,
  Brain, Search as SearchIcon, Cpu, Eye, GitMerge, MapPin,
  Calendar, ArrowUpRight, Copy,
} from 'lucide-react';
import { Reveal, SectionHeading, TechBadge, NeuralNetworkCanvas, Github, Linkedin, useIntersection } from './shared';

// 1. Loading Experience — brief intro overlay shown on first load
export const LoadingExperience = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center transition-opacity duration-500">
      <div className="font-serif italic text-2xl md:text-3xl text-white mb-4">Hamza Shahzad</div>
      <div className="flex items-center gap-1.5">
        {[0, 1, 2].map(i => (
          <span
            key={i}
            className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"
            style={{ animationDelay: `${i * 150}ms` }}
          />
        ))}
      </div>
      <div className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase mt-6 font-accent">
        Loading AI Systems
      </div>
    </div>
  );
};

// Animated node-flow diagram used inside architecture cards and the detail modal
const MiniArchitectureDiagram = ({ nodes, theme, compact = false }) => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-0">
      {nodes.map((node, i) => (
        <React.Fragment key={node}>
          <div
            className={`rounded-lg border font-mono font-medium whitespace-nowrap backdrop-blur-sm ${compact ? 'px-2 py-1 text-[9px]' : 'px-3 py-1.5 text-[11px]'} ${theme.nodeBg} ${theme.nodeBorder} ${theme.nodeText}`}
          >
            {node}
          </div>
          {i < nodes.length - 1 && (
            <div className={`relative w-px ${compact ? 'h-3' : 'h-7'} ${theme.line} overflow-hidden`}>
              <span
                className={`absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${theme.dot}`}
                style={{ animation: `flowDown ${1.6 + i * 0.15}s linear infinite`, animationDelay: `${i * 0.2}s` }}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

// CSS-only "3D" floating decorations — glass cube, rotating DB cylinder, AI chip, agent orbs.
// No WebGL: depth is faked with gradients, borders, blur and perspective transforms.
const FloatingCube = ({ className = '', size = 40, hue = 'blue', parallax = { x: 0, y: 0 } }) => {
  const hues = {
    blue: 'border-blue-400/30 bg-blue-500/5',
    emerald: 'border-emerald-400/30 bg-emerald-500/5',
    orange: 'border-orange-400/30 bg-orange-500/5',
    purple: 'border-purple-400/30 bg-purple-500/5',
  };
  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{
        transform: `translate(${parallax.x}px, ${parallax.y}px)`,
        transition: 'transform 0.3s ease-out',
      }}
    >
      <div
        className={`border backdrop-blur-sm rounded-md ${hues[hue]}`}
        style={{
          width: size,
          height: size,
          animation: 'cubeSpin 9s linear infinite',
          transformStyle: 'preserve-3d',
        }}
      />
    </div>
  );
};

const DbCylinder = ({ theme, parallax = { x: 0, y: 0 }, className = '' }) => (
  <div
    className={`absolute pointer-events-none hidden lg:block ${className}`}
    style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)`, transition: 'transform 0.3s ease-out' }}
  >
    <div className="relative w-12 h-16" style={{ animation: 'floatSlow 8s ease-in-out infinite' }}>
      <div className={`absolute top-0 left-0 right-0 h-4 rounded-full border ${theme.nodeBorder} ${theme.nodeBg} backdrop-blur-sm`} />
      <div className={`absolute top-2 left-0 right-0 bottom-2 border-l border-r ${theme.nodeBorder} ${theme.nodeBg} opacity-60`} />
      <div className={`absolute bottom-0 left-0 right-0 h-4 rounded-full border ${theme.nodeBorder} ${theme.nodeBg} backdrop-blur-sm`} />
    </div>
  </div>
);

const AiChip = ({ theme, parallax = { x: 0, y: 0 }, className = '' }) => (
  <div
    className={`absolute pointer-events-none hidden lg:block ${className}`}
    style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)`, transition: 'transform 0.3s ease-out' }}
  >
    <div
      className={`relative w-10 h-10 rounded-md border ${theme.nodeBorder} ${theme.nodeBg} backdrop-blur-sm flex items-center justify-center`}
      style={{ animation: 'floatSlow 7s ease-in-out infinite' }}
    >
      <div className={`w-4 h-4 rounded-sm border ${theme.nodeBorder}`} />
      {[...Array(4)].map((_, i) => (
        <span key={i} className={`absolute w-2 h-px ${theme.line}`} style={{
          top: i < 2 ? (i === 0 ? '20%' : '80%') : '50%',
          left: i < 2 ? '-8px' : undefined,
          right: i >= 2 ? '-8px' : undefined,
          transform: i >= 2 ? `translateY(${i === 2 ? '-8px' : '8px'})` : undefined,
        }} />
      ))}
    </div>
  </div>
);

const AgentOrbs = ({ theme, parallax = { x: 0, y: 0 }, className = '' }) => (
  <div
    className={`absolute pointer-events-none hidden lg:block w-16 h-16 ${className}`}
    style={{ transform: `translate(${parallax.x}px, ${parallax.y}px)`, transition: 'transform 0.3s ease-out' }}
  >
    <div className="relative w-full h-full" style={{ animation: 'floatSlow 9s ease-in-out infinite' }}>
      {[[0, 0], [90, 0], [45, 100], [0, 100]].map(([_, __], i) => (
        <span
          key={i}
          className={`absolute w-1.5 h-1.5 rounded-full ${theme.dot}`}
          style={{
            top: `${[10, 40, 75, 90][i]}%`,
            left: `${[45, 5, 60, 15][i]}%`,
            animation: `pulse 2s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}
      <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full ${theme.dot}`} />
    </div>
  </div>
);

const ARCHITECTURES = [
  {
    id: 'rag-pipeline',
    icon: Network,
    title: 'RAG Pipeline',
    status: 'Enterprise',
    subtitle: 'Production Retrieval System',
    stack: ['FastAPI', 'Docker', 'Redis', 'Qdrant', 'OpenAI'],
    nodes: ['User', 'API Gateway', 'FastAPI', 'Vector DB', 'OpenAI GPT', 'Response'],
    stats: [
      { label: 'Components', value: '8' },
      { label: 'APIs', value: '3' },
      { label: 'Accuracy', value: '92%' },
      { label: 'Latency', value: '1.3s' },
    ],
    overview: 'A hybrid retrieval-augmented generation pipeline built for enterprise document intelligence. Queries flow through an API gateway into FastAPI, which fans out to Redis for caching and a Qdrant vector store for semantic search before grounding the final answer with OpenAI GPT.',
    challenges: 'Balancing retrieval accuracy against latency at scale, while avoiding hallucinated answers when retrieved context is thin or contradictory.',
    performance: 'Sub-1.5s median response time under production load, with a 92% grounded-accuracy rate measured against a held-out evaluation set.',
    theme: {
      cardGradient: 'from-blue-950/60 via-slate-950 to-black',
      border: 'border-blue-500/10 hover:border-blue-400/40',
      glow: 'group-hover:shadow-blue-500/20',
      badgeGlow: 'from-blue-500 to-cyan-400',
      nodeBg: 'bg-blue-500/10',
      nodeBorder: 'border-blue-400/30',
      nodeText: 'text-blue-100',
      line: 'bg-blue-500/20',
      dot: 'bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.8)]',
      accentText: 'text-blue-300',
    },
  },
  {
    id: 'multi-agent-analyst',
    icon: Bot,
    title: 'Multi-Agent Financial Analyst',
    status: 'Production',
    subtitle: '5 Autonomous AI Agents',
    stack: ['LangGraph', 'Redis', 'PostgreSQL', 'OpenAI'],
    nodes: ['Ticker Input', 'Data Gatherer', 'LangGraph Orchestrator', 'Risk + Quant Agents', 'Chief Editor', 'Report'],
    stats: [
      { label: 'Agents', value: '5' },
      { label: 'APIs', value: '4' },
      { label: 'Accuracy', value: '89%' },
      { label: 'Latency', value: '46s' },
    ],
    overview: 'Five specialized agents collaborate through a LangGraph state machine to replicate a junior equity research team — gathering filings, computing ratios, assessing risk, and drafting a reviewed report.',
    challenges: 'Keeping numerical claims consistent across agents and preventing any single agent\'s error from propagating into the final report.',
    performance: 'Full reports generated in under a minute, with an agent-to-agent peer review pass catching 89% of numerical inconsistencies before publication.',
    theme: {
      cardGradient: 'from-emerald-950/60 via-green-950/40 to-black',
      border: 'border-emerald-500/10 hover:border-emerald-400/40',
      glow: 'group-hover:shadow-emerald-500/20',
      badgeGlow: 'from-emerald-500 to-teal-400',
      nodeBg: 'bg-emerald-500/10',
      nodeBorder: 'border-emerald-400/30',
      nodeText: 'text-emerald-100',
      line: 'bg-emerald-500/20',
      dot: 'bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,0.8)]',
      accentText: 'text-emerald-300',
    },
  },
  {
    id: 'ai-business-os',
    icon: Boxes,
    title: 'AI Business OS',
    status: 'Enterprise',
    subtitle: 'Complete AI Platform',
    stack: ['FastAPI', 'React', 'Docker', 'Redis'],
    nodes: ['Client (React)', 'API Gateway', 'FastAPI Services', 'Redis Queue', 'Agent + RAG Workers', 'Response'],
    stats: [
      { label: 'Services', value: '12' },
      { label: 'APIs', value: '6' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Latency', value: '0.8s' },
    ],
    overview: 'A unified platform combining chat, RAG, document processing, OCR, and multi-agent workflows behind a single FastAPI service layer, with a React client and Redis-backed job queue for async work.',
    challenges: 'Designing a multi-tenant service layer that stays fast under concurrent agent workloads without one tenant\'s job queue starving another\'s.',
    performance: 'Sub-second median API latency at 99.9% uptime, with async workers absorbing bursty document-processing load without blocking chat requests.',
    theme: {
      cardGradient: 'from-orange-950/60 via-amber-950/30 to-black',
      border: 'border-orange-500/10 hover:border-orange-400/40',
      glow: 'group-hover:shadow-orange-500/20',
      badgeGlow: 'from-orange-500 to-amber-400',
      nodeBg: 'bg-orange-500/10',
      nodeBorder: 'border-orange-400/30',
      nodeText: 'text-orange-100',
      line: 'bg-orange-500/20',
      dot: 'bg-amber-300 shadow-[0_0_8px_rgba(252,211,77,0.8)]',
      accentText: 'text-orange-300',
    },
  },
];

// Slowly rotating glowing node/line motif behind the section title — a CSS/SVG stand-in for a 3D neural network
const NetworkMotif = () => (
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[560px] h-[560px] pointer-events-none opacity-[0.35]" style={{ animation: 'motifSpin 40s linear infinite' }}>
    <svg viewBox="0 0 400 400" className="w-full h-full">
      <defs>
        <radialGradient id="motifGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
        </radialGradient>
      </defs>
      {[
        [200, 60], [330, 140], [330, 260], [200, 340], [70, 260], [70, 140],
      ].map(([x, y], i, arr) => {
        const [nx, ny] = arr[(i + 1) % arr.length];
        return <line key={i} x1={x} y1={y} x2={nx} y2={ny} stroke="#60a5fa" strokeOpacity="0.25" strokeWidth="1" />;
      })}
      {[[200, 60], [330, 140], [330, 260], [200, 340], [70, 260], [70, 140], [200, 200]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="18" fill="url(#motifGlow)" />
          <circle cx={x} cy={y} r="3.5" fill="#93c5fd" />
        </g>
      ))}
    </svg>
  </div>
);

// 7. AI Architecture Gallery — visual, animated diagrams of system designs, with parallax "3D" decorations
export const AIArchitectureGallery = () => {
  const [selected, setSelected] = useState(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    setMouse({ x: relX, y: relY });
  };

  const decorParallax = (strength) => ({ x: mouse.x * strength, y: mouse.y * strength });

  return (
    <section
      id="architecture"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="bg-[#0a0a0a] py-24 md:py-32 border-t border-white/5 relative overflow-hidden"
    >

      <style>{`
        @keyframes flowDown {
          0% { top: -10%; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(12px, -18px); }
        }
        @keyframes driftGrid {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
        @keyframes cubeSpin {
          0% { transform: perspective(300px) rotateX(0deg) rotateY(0deg); }
          100% { transform: perspective(300px) rotateX(360deg) rotateY(360deg); }
        }
        @keyframes motifSpin {
          0% { transform: translateX(-50%) rotate(0deg); }
          100% { transform: translateX(-50%) rotate(360deg); }
        }
        @keyframes riseIn {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Layered background: grid, noise-like dots, dual radial glows */}
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '32px 32px', animation: 'driftGrid 12s linear infinite' }}></div>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.9) 0.5px, transparent 0.5px)', backgroundSize: '3px 3px' }}
      ></div>
      <div className="absolute -top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[140px] pointer-events-none"></div>

      {/* Floating ambient particles with cursor parallax */}
      <div className="absolute top-10 left-[8%] w-2 h-2 rounded-full bg-blue-400/60 blur-[1px] pointer-events-none" style={{ animation: 'floatSlow 7s ease-in-out infinite', transform: `translate(${mouse.x * -20}px, ${mouse.y * -20}px)`, transition: 'transform 0.3s ease-out' }}></div>
      <div className="absolute top-1/3 right-[12%] w-1.5 h-1.5 rounded-full bg-emerald-400/60 blur-[1px] pointer-events-none" style={{ animation: 'floatSlow 9s ease-in-out infinite', animationDelay: '1.5s', transform: `translate(${mouse.x * 24}px, ${mouse.y * 24}px)`, transition: 'transform 0.3s ease-out' }}></div>
      <div className="absolute bottom-24 left-[20%] w-1.5 h-1.5 rounded-full bg-purple-400/60 blur-[1px] pointer-events-none" style={{ animation: 'floatSlow 8s ease-in-out infinite', animationDelay: '3s', transform: `translate(${mouse.x * -16}px, ${mouse.y * 16}px)`, transition: 'transform 0.3s ease-out' }}></div>
      <div className="absolute bottom-1/3 right-[25%] w-2 h-2 rounded-full bg-orange-400/50 blur-[1px] pointer-events-none" style={{ animation: 'floatSlow 10s ease-in-out infinite', animationDelay: '0.8s', transform: `translate(${mouse.x * 20}px, ${mouse.y * -20}px)`, transition: 'transform 0.3s ease-out' }}></div>

      {/* Corner floating cubes */}
      <FloatingCube className="top-16 left-[6%]" size={36} hue="blue" parallax={decorParallax(14)} />
      <FloatingCube className="top-1/2 right-[5%]" size={28} hue="purple" parallax={decorParallax(-18)} />
      <FloatingCube className="bottom-16 left-[14%]" size={32} hue="emerald" parallax={decorParallax(20)} />

      <div className="relative z-10">
        <div className="relative">
          <NetworkMotif />
          <SectionHeading
            pretitle="System Design"
            title="Architectures Behind Every AI System I Build"
            highlightText="AI System I Build"
            highlightClass="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          />
        </div>

        <Reveal direction="up" delay={150}>
          <p className="max-w-2xl mx-auto text-center text-zinc-400 text-sm md:text-base leading-relaxed -mt-10 mb-16 px-6">
            Production-ready AI systems engineered for scalability, performance, and real-world deployment.
          </p>
        </Reveal>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 relative">
          <DbCylinder theme={ARCHITECTURES[0].theme} parallax={decorParallax(-10)} className="-top-10 left-8" />
          <AgentOrbs theme={ARCHITECTURES[1].theme} parallax={decorParallax(12)} className="-top-12 left-1/3" />
          <AiChip theme={ARCHITECTURES[2].theme} parallax={decorParallax(-14)} className="-top-10 right-8" />

          {ARCHITECTURES.map((arch, i) => (
            <Reveal key={arch.id} direction="up" delay={i * 100}>
              <div
                className={`group relative h-full flex flex-col bg-gradient-to-b ${arch.theme.cardGradient} border ${arch.theme.border} rounded-[20px] overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-2xl ${arch.theme.glow} backdrop-blur-xl cursor-pointer`}
                onClick={() => setSelected(arch)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') setSelected(arch); }}
              >
                <div className="relative h-56 flex items-center justify-center overflow-hidden border-b border-white/5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:14px_14px]"></div>
                  <span className="absolute top-3 left-3 flex items-center gap-1.5 text-[9px] font-bold tracking-[0.15em] text-white/50 uppercase font-accent">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Live Architecture
                  </span>
                  <div className="relative z-10 group-hover:scale-105 transition-transform duration-500">
                    <MiniArchitectureDiagram nodes={arch.nodes} theme={arch.theme} compact />
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="text-white font-bold text-base font-geist leading-snug">{arch.title}</h4>
                    <span className="flex-shrink-0 text-[10px] font-bold tracking-wider uppercase text-zinc-300 bg-white/5 border border-white/10 px-2 py-1 rounded-full whitespace-nowrap font-accent">
                      {arch.status}
                    </span>
                  </div>

                  <p className={`text-sm mb-4 ${arch.theme.accentText}`}>{arch.subtitle}</p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {arch.stack.map(t => (
                      <span key={t} className="px-2.5 py-1 text-[10px] font-semibold text-zinc-300 bg-white/5 border border-white/10 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-4 gap-2 pt-4 mb-6 border-t border-white/5">
                    {arch.stats.map(s => (
                      <div key={s.label} className="text-center">
                        <div className="text-white font-bold text-sm font-geist">{s.value}</div>
                        <div className="text-zinc-500 text-[9px] uppercase tracking-wide mt-0.5 font-accent">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={(e) => { e.stopPropagation(); setSelected(arch); }}
                    className="mt-auto relative overflow-hidden w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-white/5 border border-white/10 group-hover:border-transparent shadow-[0_5px_0_rgba(0,0,0,0.4)] hover:shadow-[0_2px_0_rgba(0,0,0,0.4)] hover:translate-y-[3px] active:shadow-none active:translate-y-[5px] transition-all duration-150"
                  >
                    <span className={`absolute inset-0 bg-gradient-to-r ${arch.theme.badgeGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></span>
                    <span className="relative flex items-center gap-2">
                      View System Design
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl overflow-y-auto custom-scrollbar" onClick={() => setSelected(null)}>
          <div className="min-h-screen w-full py-12 px-4 md:px-8 flex justify-center items-start animate-in fade-in slide-in-from-bottom-10 duration-500">
            <div
              className={`bg-gradient-to-b ${selected.theme.cardGradient} border border-white/10 rounded-[2rem] max-w-4xl w-full overflow-hidden relative shadow-2xl mb-12`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="theme-fixed absolute top-6 right-6 z-50 p-3 bg-black/50 hover:bg-white text-white hover:text-black rounded-full transition-all backdrop-blur-md border border-white/20 hover:scale-110"
                aria-label="Close"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>

              <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden border-b border-white/5" style={{ animation: 'riseIn 0.6s cubic-bezier(0.16,1,0.3,1) both' }}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:14px_14px]"></div>
                <MiniArchitectureDiagram nodes={selected.nodes} theme={selected.theme} />
              </div>

              <div className="p-8 md:p-16">
                <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 backdrop-blur-md rounded-full text-xs font-bold tracking-[0.2em] text-white uppercase mb-6 font-accent" style={{ animation: 'riseIn 0.5s cubic-bezier(0.16,1,0.3,1) 0.1s both' }}>
                  {selected.status}
                </span>

                <h2 className="text-3xl md:text-5xl font-geist font-bold text-white mb-3 tracking-tight" style={{ animation: 'riseIn 0.5s cubic-bezier(0.16,1,0.3,1) 0.15s both' }}>
                  {selected.title}
                </h2>
                <p className={`text-lg mb-8 ${selected.theme.accentText}`} style={{ animation: 'riseIn 0.5s cubic-bezier(0.16,1,0.3,1) 0.2s both' }}>{selected.subtitle}</p>

                <div className="flex flex-wrap gap-2 mb-12" style={{ animation: 'riseIn 0.5s cubic-bezier(0.16,1,0.3,1) 0.25s both' }}>
                  {selected.stack.map(t => <TechBadge key={t}>{t}</TechBadge>)}
                </div>

                <div className="grid grid-cols-4 gap-4 mb-12 p-6 bg-white/5 border border-white/10 rounded-2xl" style={{ animation: 'riseIn 0.5s cubic-bezier(0.16,1,0.3,1) 0.3s both' }}>
                  {selected.stats.map(s => (
                    <div key={s.label} className="text-center">
                      <div className="text-white font-bold text-xl md:text-2xl font-geist">{s.value}</div>
                      <div className="text-zinc-500 text-[10px] uppercase tracking-wide mt-1 font-accent">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="w-full h-px bg-white/10 mb-12"></div>

                <div className="space-y-10 text-zinc-300 font-sans font-light leading-relaxed text-lg">
                  <section style={{ animation: 'riseIn 0.5s cubic-bezier(0.16,1,0.3,1) 0.35s both' }}>
                    <h3 className="text-xl font-bold text-white mb-3 font-geist flex items-center gap-2">
                      <Terminal className="w-5 h-5 text-blue-400" /> Overview
                    </h3>
                    <p className="text-zinc-400 text-base">{selected.overview}</p>
                  </section>

                  <section style={{ animation: 'riseIn 0.5s cubic-bezier(0.16,1,0.3,1) 0.4s both' }}>
                    <h3 className="text-xl font-bold text-white mb-3 font-geist flex items-center gap-2">
                      <Users className="w-5 h-5 text-red-400" /> Challenges
                    </h3>
                    <p className="text-zinc-400 text-base">{selected.challenges}</p>
                  </section>

                  <section style={{ animation: 'riseIn 0.5s cubic-bezier(0.16,1,0.3,1) 0.45s both' }}>
                    <h3 className="text-xl font-bold text-white mb-3 font-geist flex items-center gap-2">
                      <Gauge className="w-5 h-5 text-emerald-400" /> Performance
                    </h3>
                    <p className="text-zinc-400 text-base">{selected.performance}</p>
                  </section>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row gap-4" style={{ animation: 'riseIn 0.5s cubic-bezier(0.16,1,0.3,1) 0.5s both' }}>
                  <a
                    href="https://github.com/hamza01055"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-medium hover:bg-white/10 transition-all hover:scale-105"
                  >
                    <Github className="w-4 h-4" /> View Source Code
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); setSelected(null); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white text-black rounded-xl font-bold hover:bg-zinc-200 transition-all hover:scale-105"
                  >
                    Discuss This System <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Real brand-mark SVGs for the Skills Dashboard (colorful logos, not generic glyphs)
const BrandPython = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24">
    <path fill="#3776AB" d="M11.9 1.1c-1 0-1.9.1-2.7.2-2.4.4-2.8 1.3-2.8 3v2.2h5.6v.7H4.3c-1.7 0-3.2 1-3.7 3-.6 2.2-.6 3.6 0 5.9.4 1.7 1.4 3 3.1 3h2v-2.6c0-1.9 1.7-3.6 3.7-3.6h5.6c1.6 0 2.9-1.3 2.9-3V4.3c0-1.6-1.4-2.8-2.9-3.1-1-.2-2.1-.3-3.1-.1zM9 2.9c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1.5-1.1 1.1-1.1z"/>
    <path fill="#FFD43B" d="M17.6 6.2v2.5c0 2-1.7 3.6-3.7 3.6H8.3c-1.6 0-2.9 1.4-2.9 3v5.6c0 1.6 1.4 2.5 2.9 3 1.9.5 3.6.6 5.6 0 1.4-.4 2.9-1.2 2.9-3v-2.2h-5.6v-.7h8.4c1.7 0 2.4-1.2 3-3 .6-1.9.6-3.7 0-5.9-.4-1.5-1.3-3-3-3zm-3.1 14.2c.6 0 1.1.5 1.1 1.1s-.5 1.1-1.1 1.1-1.1-.5-1.1-1.1.5-1.1 1.1-1.1z"/>
  </svg>
);

const BrandLangChain = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#1C3C3C" strokeWidth="1.8">
    <circle cx="7" cy="7" r="3" fill="#1C3C3C" stroke="none"/>
    <circle cx="17" cy="7" r="3" fill="#3F7A6E" stroke="none"/>
    <circle cx="7" cy="17" r="3" fill="#3F7A6E" stroke="none"/>
    <circle cx="17" cy="17" r="3" fill="#1C3C3C" stroke="none"/>
    <path d="M9.5 7h5M7 9.5v5M17 9.5v5M9.5 17h5" stroke="#8FBFAE"/>
  </svg>
);

const BrandFastAPI = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="12" fill="#009688"/>
    <path fill="#fff" d="M11.1 2.6L4.5 13.2h5.1L9 21.4l7-11.3H10.7z"/>
  </svg>
);

const BrandPostgres = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24">
    <path fill="#336791" d="M17.1 1.4c-1.5 0-2.9.4-4 1.1-1-.3-2-.5-3-.4-1.9.1-3.5 1-4.6 2.5C4.3 6 3.7 8 3.8 10.1c0 .8.1 1.7.4 2.7-.4.9-.6 1.9-.5 2.9.1 2 1.1 3.7 2.7 4.7 1.2.8 2.7 1.1 4.2.9.7.7 1.6 1.2 2.6 1.4 2 .4 4-.3 5.4-1.8 1-.1 2-.5 2.7-1.2 1.2-1.1 1.8-2.8 1.6-4.5.5-.9.8-1.9.8-3 .1-1.8-.6-3.5-1.8-4.7.2-1.3-.1-2.7-1-3.8-1-1.2-2.5-1.9-4.2-1.9-.4-.3-.8-.6-1.6-.4z"/>
    <ellipse cx="12" cy="12" rx="7.5" ry="8.5" fill="#336791"/>
    <path fill="#fff" d="M14.8 11.6c.1-1 .1-1.9-.3-2.6-.5-.9-1.4-1.4-2.6-1.4-1 0-1.9.4-2.4 1.1-.3.4-.4.9-.5 1.5-.7-.1-1.3 0-1.7.4-.5.4-.7 1.1-.6 1.9.1.6.4 1.2.9 1.6-.2.6-.1 1.3.3 1.9.5.7 1.3 1 2.1.9.2.5.6.9 1.1 1.1.7.3 1.5.2 2.1-.2.5.4 1.2.5 1.8.3.7-.2 1.2-.8 1.4-1.5.6.1 1.2-.1 1.6-.5.5-.5.6-1.2.4-1.8.5-.3.8-.8.9-1.4.1-.8-.3-1.5-1-1.9-.1-.5-.4-.9-.8-1.2-.5-.3-1.1-.4-1.7-.2z"/>
  </svg>
);

const BrandDocker = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24">
    <path fill="#2496ED" d="M22.5 9.8c-.5-.4-1.6-.5-2.4-.4-.1-.8-.6-1.5-1.3-2.1l-.4-.3-.3.4c-.5.6-.7 1.5-.6 2.3.1.4.2.8.4 1.1-.2.1-.4.2-.6.3-.5.2-1 .2-1.5.2H1.6l-.1.5c-.1.9 0 1.9.4 2.9v.1c.6 1.5 1.6 2.6 2.9 3.2 1.5.7 3.9.9 6.7.5 1.2-.2 2.4-.5 3.6-1.1 1-.5 1.8-1.1 2.5-1.9 1.2-1.3 1.9-2.7 2.4-4h.2c1.1 0 1.9-.3 2.3-.7l.3-.3-.3-.3z"/>
    <path fill="#2496ED" d="M2.8 11.2h2.1V9.3H2.8v1.9zm2.6 0h2.1V9.3H5.4v1.9zm2.6 0h2.1V9.3H8v1.9zm2.6 0h2.1V9.3h-2.1v1.9zm-7.8-2.4h2.1V6.9H2.8v1.9zm2.6 0h2.1V6.9H5.4v1.9zm2.6 0h2.1V6.9H8v1.9zm2.6 0h2.1V6.9h-2.1v1.9zm0-2.5h2.1V4.4h-2.1v1.9zM5.4 8.8h2.1V6.9H5.4v1.9zm5.2 2.4h2.1V9.3h-2.1v1.9z"/>
  </svg>
);

const BrandRedis = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24">
    <path fill="#DC382D" d="M12 2.3L2.1 6.9v9.8L12 21.7l9.9-5V6.9L12 2.3zm5.8 12.6l-5.8 2.6-5.8-2.6V8.1l5.8-2.6 5.8 2.6v6.8z"/>
    <path fill="#fff" d="M12 6.6l-4.3 1.9v6.4l4.3 2 4.3-2V8.5L12 6.6zm2.9 3.1l-2.9 1.3-2.9-1.3.9-.4 2 .9 2-.9.9.4zm-5.8 1v3.9l2.6 1.2v-3.9l-2.6-1.2zm5.8 0l-2.6 1.2v3.9l2.6-1.2v-3.9z"/>
  </svg>
);

const BrandYolo = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" fill="#111827"/>
    <rect x="6" y="6" width="5.5" height="5.5" rx="1" fill="none" stroke="#00FFCE" strokeWidth="1.5"/>
    <rect x="12.5" y="9" width="5.5" height="8.5" rx="1" fill="none" stroke="#FF5F5F" strokeWidth="1.5"/>
    <rect x="5.5" y="13.5" width="4" height="4" rx="1" fill="none" stroke="#FFC53D" strokeWidth="1.5"/>
  </svg>
);

const BrandOpenCV = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24">
    <circle cx="7" cy="8" r="4" fill="none" stroke="#EE4C2C" strokeWidth="2.4"/>
    <circle cx="17" cy="8" r="4" fill="none" stroke="#5FBB46" strokeWidth="2.4"/>
    <circle cx="12" cy="17" r="4" fill="none" stroke="#00549E" strokeWidth="2.4"/>
  </svg>
);

const BrandGit = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24">
    <path fill="#F05032" d="M23.5 10.9L13.1.5c-.7-.7-1.7-.7-2.4 0L8.5 2.7l2.8 2.8c.7-.3 1.6-.1 2.2.5.6.6.8 1.5.5 2.2l2.7 2.7c.7-.3 1.6-.1 2.2.5.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.6-.6-.8-1.6-.4-2.3l-2.5-2.5v6.6c.2.1.4.2.6.4.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.8-.8-.8-2.1 0-2.9.2-.2.4-.3.7-.4V9.5c-.2-.1-.5-.2-.7-.4-.6-.6-.8-1.6-.4-2.3L7.7 4.1.5 11.3c-.7.7-.7 1.7 0 2.4l10.4 10.4c.7.7 1.7.7 2.4 0l10.2-10.2c.7-.7.7-1.8 0-2.5z"/>
  </svg>
);

const BrandLinux = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24">
    <path fill="#FCC624" d="M12.5 1.5c-1.7 0-2.5 2-2.6 3.6-.1 1.7.2 2.6-.5 4-.6 1.3-2 2.9-2 4.9 0 1.3.5 2.4 1.1 3.3-.3.3-.7.5-.9.9-.4.6-.4 1.3-.2 2 .1.4-.1.6-.3.9-.2.3-.4.6-.3 1 .1.5.6.8 1.1.9.6.1 1.1-.1 1.6-.3.6-.2 1.1-.3 1.7-.1.5.1.9.5 1.5.6.6.1 1.2-.1 1.6-.5.3-.3.5-.2.9-.1.5.2 1 .5 1.6.4.6-.1 1-.5 1.1-1 .1-.4-.1-.7-.3-1-.2-.3-.4-.5-.3-.9.2-.7.2-1.4-.2-2-.2-.4-.6-.6-.9-.9.6-.9 1.1-2 1.1-3.3 0-2-1.4-3.6-2-4.9-.7-1.4-.4-2.3-.5-4-.1-1.6-.9-3.6-2.6-3.6z"/>
    <ellipse cx="10.3" cy="9.5" rx="1" ry="1.4" fill="#2b2b2b"/>
    <ellipse cx="14.7" cy="9.5" rx="1" ry="1.4" fill="#2b2b2b"/>
    <circle cx="10.3" cy="9.2" r=".4" fill="#fff"/>
    <circle cx="14.7" cy="9.2" r=".4" fill="#fff"/>
    <path fill="#fff" d="M9.5 12.5c1 .8 4 .8 5 0-.3 1.2-1.3 2-2.5 2s-2.2-.8-2.5-2z"/>
  </svg>
);

const SKILL_CATEGORIES = [
  {
    label: 'AI / ML',
    icon: Brain,
    accent: 'text-cyan-400',
    skills: [
      { name: 'Python', icon: BrandPython, color: 'from-yellow-400 to-blue-500', level: 'Expert', pct: 95, sub: '20+ Projects' },
      { name: 'LangChain', icon: BrandLangChain, color: 'from-emerald-400 to-teal-500', level: 'Advanced', pct: 88, sub: 'RAG & Agents' },
      { name: 'RAG', icon: SearchIcon, color: 'from-green-400 to-emerald-500', level: 'Advanced', pct: 85, sub: 'Retrieval Systems' },
      { name: 'Agentic AI', icon: Bot, color: 'from-purple-400 to-fuchsia-500', level: 'Advanced', pct: 82, sub: 'Multi-Agent Systems' },
    ],
  },
  {
    label: 'Backend',
    icon: Cpu,
    accent: 'text-purple-400',
    skills: [
      { name: 'FastAPI', icon: BrandFastAPI, color: 'from-teal-400 to-emerald-500', level: 'Expert', pct: 90, sub: '15+ APIs Built' },
      { name: 'PostgreSQL', icon: BrandPostgres, color: 'from-sky-400 to-blue-600', level: 'Advanced', pct: 78, sub: 'Databases' },
      { name: 'Docker', icon: BrandDocker, color: 'from-blue-400 to-cyan-500', level: 'Advanced', pct: 80, sub: 'Containerization' },
      { name: 'Redis', icon: BrandRedis, color: 'from-red-500 to-rose-600', level: 'Advanced', pct: 72, sub: 'Caching & Queues' },
    ],
  },
  {
    label: 'Vision',
    icon: Eye,
    accent: 'text-orange-400',
    skills: [
      { name: 'YOLOv8', icon: BrandYolo, color: 'from-orange-400 to-amber-500', level: 'Advanced', pct: 84, sub: 'Object Detection' },
      { name: 'OpenCV', icon: BrandOpenCV, color: 'from-red-400 to-orange-500', level: 'Advanced', pct: 80, sub: 'Computer Vision' },
    ],
  },
  {
    label: 'DevOps & Tools',
    icon: GitMerge,
    accent: 'text-emerald-400',
    skills: [
      { name: 'Git & GitHub', icon: BrandGit, color: 'from-zinc-300 to-zinc-500', level: 'Expert', pct: 95, sub: 'Version Control' },
      { name: 'Docker Compose', icon: BrandDocker, color: 'from-blue-400 to-indigo-500', level: 'Advanced', pct: 85, sub: 'Orchestration' },
      { name: 'Linux', icon: BrandLinux, color: 'from-amber-400 to-yellow-500', level: 'Advanced', pct: 80, sub: 'System Admin' },
    ],
  },
];

const levelColor = {
  Expert: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/30',
  Advanced: 'text-purple-300 bg-purple-500/10 border-purple-500/30',
};

const SkillCard = ({ skill, delay }) => {
  const [ref, isVisible] = useIntersection({ threshold: 0.3 });
  return (
    <div
      ref={ref}
      className="group relative p-5 bg-[#0d0d10] border border-white/5 hover:border-white/15 rounded-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-xl bg-white/90 flex items-center justify-center shadow-lg overflow-hidden">
          <skill.icon className="w-5 h-5 text-zinc-800" />
        </div>
        <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors">
          <ArrowRight className="w-3.5 h-3.5 -rotate-45" />
        </span>
      </div>

      <h5 className="text-white font-bold text-sm font-geist mb-2">{skill.name}</h5>

      <div className="flex items-center justify-between mb-3">
        <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full border font-accent ${levelColor[skill.level]}`}>
          {skill.level}
        </span>
        <span className="text-zinc-400 text-xs font-mono">{skill.pct}%</span>
      </div>

      <div className="h-1.5 bg-zinc-900 rounded-full overflow-hidden mb-3">
        <div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
          style={{
            width: isVisible ? `${skill.pct}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>

      <div className="text-zinc-500 text-[11px]">{skill.sub}</div>
    </div>
  );
};

// 10. Skills Dashboard — animated toolkit grid grouped by category
export const SkillsDashboard = () => {
  return (
    <section id="skills" className="bg-[#050505] py-24 md:py-32 border-t border-white/5 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.14]"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/85 to-[#050505]"></div>
      <div className="absolute inset-0 bg-[#050505]/40"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-600/5 blur-[140px] pointer-events-none"></div>

      <div className="relative z-10">
        <SectionHeading
          pretitle="Toolkit"
          title="Skills Dashboard"
          highlightText="Dashboard"
          highlightClass="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent"
        />

        <Reveal direction="up" delay={150}>
          <p className="max-w-2xl mx-auto text-center text-zinc-400 text-sm md:text-base leading-relaxed -mt-10 mb-16 px-6">
            Technologies and tools I use to build intelligent, scalable, and production-ready AI systems.
          </p>
        </Reveal>

        <div className="max-w-6xl mx-auto px-6 space-y-12">
          {SKILL_CATEGORIES.map((group, gi) => (
            <Reveal key={group.label} direction="up" delay={gi * 100}>
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <group.icon className={`w-4 h-4 ${group.accent}`} />
                    <h4 className="text-zinc-300 text-xs font-bold uppercase tracking-[0.2em] font-accent">{group.label}</h4>
                  </div>
                  <button className="text-xs font-medium text-zinc-500 hover:text-white transition-colors flex items-center gap-1 group/link">
                    View All <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {group.skills.map((skill, si) => (
                    <SkillCard key={skill.name} skill={skill} delay={si * 120} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

// 14. Contact — Connect With Me
export const XIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#ffffff">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.925H5.078z"></path>
  </svg>
);

export const TelegramIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 240 240">
    <circle cx="120" cy="120" r="120" fill="#29a9eb"></circle>
    <path fill="#ffffff" d="M174.2 68.1L152 178.4c-1.6 7.4-6 9.2-12.2 5.7l-33.7-24.9-16.3 15.7c-1.8 1.8-3.3 3.3-6.8 3.3l2.4-34.5 62.8-56.7c2.7-2.4-.6-3.8-4.3-1.4l-77.6 48.9-33.5-10.5c-7.3-2.3-7.4-7.3 1.5-10.8l131-50.5c6.1-2.3 11.4 1.4 9.4 10.4z"></path>
  </svg>
);

export const InstagramIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24">
    <defs>
      <radialGradient id="igGradient" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <path fill="url(#igGradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export const WhatsAppIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 32 32" fill="#25D366">
    <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.386.7 4.61 1.902 6.475L4 29l7.723-1.865A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3zm0 21.75c-1.98 0-3.85-.55-5.44-1.51l-.39-.23-4.59 1.11 1.13-4.48-.25-.4A9.7 9.7 0 0 1 5.25 15c0-5.93 4.82-10.75 10.754-10.75S26.75 9.07 26.75 15 21.94 24.75 16.004 24.75z"></path>
    <path d="M22.06 17.34c-.33-.17-1.96-.97-2.27-1.08-.3-.11-.53-.17-.75.17-.22.33-.86 1.08-1.06 1.3-.19.22-.39.25-.72.08-.33-.17-1.39-.51-2.65-1.63-.98-.87-1.64-1.95-1.83-2.28-.19-.33-.02-.5.15-.67.15-.15.33-.39.5-.58.17-.19.22-.33.33-.55.11-.22.06-.42-.03-.58-.08-.17-.75-1.8-1.02-2.46-.27-.65-.55-.56-.75-.57h-.64c-.22 0-.58.08-.88.42-.3.33-1.15 1.12-1.15 2.73s1.18 3.17 1.34 3.39c.17.22 2.32 3.54 5.62 4.97.79.34 1.4.55 1.88.7.79.25 1.51.22 2.08.13.63-.09 1.96-.8 2.24-1.58.28-.77.28-1.43.19-1.58-.08-.14-.3-.22-.63-.39z"></path>
  </svg>
);

export const LinkedinBrand = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="#0A66C2">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8.34 18.34V10.13H5.67v8.21zM7 8.94a1.54 1.54 0 1 0 0-3.08 1.54 1.54 0 0 0 0 3.08m11.34 9.4v-4.7c0-2.52-1.34-3.69-3.14-3.69a2.71 2.71 0 0 0-2.45 1.35v-1.17h-2.68q.06 1.14 0 8.21h2.68v-4.58a1.84 1.84 0 0 1 .09-.66 1.48 1.48 0 0 1 1.38-1c.98 0 1.37.74 1.37 1.83v4.41z" />
  </svg>
);

const CodeCraftLinks = [
  { icon: Github, title: 'GitHub', handle: '@hamza01055', href: 'https://github.com/hamza01055', mono: true },
  { icon: WhatsAppIcon, title: 'WhatsApp', handle: 'Chat with me', href: 'https://wa.me/923207074141' },
];

const ConnectLinks = [
  { icon: LinkedinBrand, title: 'LinkedIn', handle: 'in/hamza-shahzad-667602355', href: 'https://www.linkedin.com/in/hamza-shahzad-667602355' },
  { icon: InstagramIcon, title: 'Instagram', handle: '@hamm_xa', href: 'https://instagram.com/hamm_xa' },
  { icon: XIcon, title: 'Twitter / X', handle: '@hamza01055', href: 'https://twitter.com/hamza01055' },
  { icon: TelegramIcon, title: 'Telegram', handle: '@hamza01055', href: 'https://t.me/hamza01055' },
];

const FOOTER_SOCIALS = [...CodeCraftLinks, ...ConnectLinks].map(({ title, href, icon }) => ({
  label: title,
  href,
  icon,
}));

// `page` marks which route an anchor lives on; footer renders on every page,
// so links crossing routes need a navigate-then-scroll instead of a plain
// same-page scrollIntoView.
const FOOTER_GENERAL_LINKS = [
  { label: 'Home', href: '#hero', page: '/' },
  { label: 'About', href: '#about', page: '/about' },
  { label: 'Projects', href: '#projects', page: '/' },
  { label: 'Skills', href: '#skills', page: '/' },
  { label: 'Contact', href: '#contact', page: '/' },
];

const FOOTER_MORE_LINKS = [
  { label: 'Book a Call', href: 'mailto:hamzashahzad454545@gmail.com' },
  { label: 'GitHub Activity', href: '#github', page: '/' },
  { label: 'Blog', href: '#blog', page: '/' },
];

const FooterColumn = ({ title, links }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e, link) => {
    if (!link.href.startsWith('#')) return;
    e.preventDefault();
    if (link.page && link.page !== location.pathname) {
      navigate(`${link.page}${link.href}`);
      return;
    }
    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col gap-4 items-center lg:items-start">
      <h4 className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold font-accent">{title}</h4>
      <ul className="flex flex-col gap-3 items-center lg:items-start">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href.startsWith('#') ? `${link.page || ''}${link.href}` : link.href}
              onClick={(e) => handleClick(e, link)}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="text-[13px] text-zinc-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const LinkCard = ({ icon: Icon, title, handle, href, mono }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-4 bg-[#111111] border border-[#222222] rounded-[16px] p-4 hover:bg-[#161616] hover:border-[#333333] transition-all group cursor-pointer w-full"
  >
    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#1a1a1a] rounded-[12px] border border-[#2a2a2a]">
      {mono ? (
        <Icon className="w-5 h-5 text-[#8b8b8b] group-hover:text-white transition-colors" />
      ) : (
        <Icon />
      )}
    </div>
    <div className="flex flex-col">
      <span className="text-[15px] font-semibold text-white mb-0.5 tracking-tight">{title}</span>
      <span className="text-[12px] text-[#8b8b8b] font-mono tracking-wider">{handle}</span>
    </div>
  </a>
);

export const Contact = () => {
  return (
    <section id="contact" className="bg-[#0a0a0a] py-24 md:py-32 border-t border-white/5 relative overflow-hidden">
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col items-center">

        <header className="flex flex-col items-center mb-16 md:mb-24 relative w-full">
          <span className="text-[10px] text-[#8b8b8b] tracking-[0.2em] font-mono uppercase mb-6 font-semibold">
            Network
          </span>
          <h1 className="text-[40px] md:text-[72px] leading-none tracking-tight font-serif text-center relative z-10">
            <span className="font-medium font-geist">Connect With </span>
            <span className="italic text-[#f43f5e] font-light font-geist">Me</span>
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-white/5 blur-[50px] rounded-full pointer-events-none -z-10"></div>
        </header>

        <div className="w-full relative border-t border-b border-[#222222] py-16 flex flex-col md:flex-row">

          <div className="hidden md:block absolute top-0 bottom-0 left-[340px] w-px border-l border-dashed border-[#222222]"></div>
          <div className="hidden md:block absolute top-0 bottom-0 left-[440px] w-px border-l border-dashed border-[#222222]"></div>

          <Reveal direction="right" className="w-full md:w-[340px] flex-shrink-0 relative z-10 mb-16 md:mb-0 md:pr-12">
            <div className="bg-[#111111] border border-[#222222] rounded-[24px] p-8 flex flex-col items-center relative shadow-[0_8px_30px_rgb(0,0,0,0.5)]">

              <div className="relative mb-6">
                <div className="w-[100px] h-[100px] rounded-full p-[3px] bg-gradient-to-b from-[#333] to-[#111]">
                  <img
                    src="/profile.jpg"
                    alt="Hamza Shahzad"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-1 w-6 h-6 bg-[#111111] rounded-full flex items-center justify-center">
                  <div className="w-3.5 h-3.5 bg-green-500 rounded-full"></div>
                </div>
              </div>

              <h2 className="text-[28px] font-medium text-white mb-4 font-geist">Hamza Shahzad</h2>
              <div className="flex gap-2 mb-8">
                <span className="bg-[#1a1a1a] border border-[#2a2a2a] text-[#8b8b8b] text-[11px] px-3 py-1.5 rounded-full font-mono tracking-wider">AI Engineer</span>
                <span className="bg-[#1a1a1a] border border-[#2a2a2a] text-[#8b8b8b] text-[11px] px-3 py-1.5 rounded-full font-mono tracking-wider">Freelancer</span>
              </div>

              <div className="w-full border-t border-dashed border-[#333333] mb-8"></div>

              <div className="w-full flex flex-col gap-4 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-5 flex justify-center"><MapPin className="w-[14px] h-[14px] text-gray-400" /></div>
                  <span className="text-[#a1a1aa] text-[14px]">Islamabad, Pakistan</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 flex justify-center"><Mail className="w-[14px] h-[14px] text-gray-400" /></div>
                  <span className="text-[#a1a1aa] text-[14px]">hamzashahzad454545@gmail.com</span>
                </div>
              </div>

              <div className="w-full flex flex-col gap-3">
                <a
                  href="mailto:hamzashahzad454545@gmail.com"
                  className="w-full bg-white hover:bg-gray-100 text-black py-3 px-5 rounded-[12px] flex items-center justify-between transition-colors font-medium"
                >
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-black" />
                    <span className="text-[14px]">Book a Call</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-500" />
                </a>

                <div className="flex gap-3">
                  <a
                    href="https://github.com/hamza01055"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-[#1a1a1a] hover:bg-[#222222] border border-[#2a2a2a] text-white py-2.5 px-4 rounded-[12px] flex items-center justify-center gap-2 transition-colors"
                  >
                    <Github className="w-[14px] h-[14px] text-gray-200" />
                    <span className="text-[13px] font-medium">GitHub</span>
                  </a>
                  <a
                    href="mailto:hamzashahzad454545@gmail.com"
                    className="flex-1 bg-[#1a1a1a] hover:bg-[#222222] border border-[#2a2a2a] text-white py-2.5 px-4 rounded-[12px] flex items-center justify-center gap-2 transition-colors"
                  >
                    <Copy className="w-[14px] h-[14px] text-gray-200" />
                    <span className="text-[13px] font-medium">Email</span>
                  </a>
                </div>
              </div>

            </div>
          </Reveal>

          <Reveal direction="left" className="flex-1 w-full md:pl-[100px] flex flex-col justify-center">

            <div className="w-full mb-12">
              <div className="flex items-center mb-8 relative">
                <span className="text-[10px] text-[#8b8b8b] tracking-[0.2em] font-mono uppercase bg-[#0a0a0a] pr-4 relative z-10 font-semibold">
                  CODE & CRAFT
                </span>
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full border-t border-dashed border-[#222222] z-0"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CodeCraftLinks.map((link) => (
                  <LinkCard key={link.title} {...link} />
                ))}
              </div>
            </div>

            <div className="w-full">
              <div className="flex items-center mb-8 relative">
                <span className="text-[10px] text-[#8b8b8b] tracking-[0.2em] font-mono uppercase bg-[#0a0a0a] pr-4 relative z-10 font-semibold">
                  CONNECT
                </span>
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full border-t border-dashed border-[#222222] z-0"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ConnectLinks.map((link) => (
                  <LinkCard key={link.title} {...link} />
                ))}
              </div>
            </div>

          </Reveal>

        </div>
      </div>
    </section>
  );
};

// 15. Neural Network Footer — interactive canvas-based node network
export const NeuralNetworkFooter = () => {
  return (
    <footer id="site-footer" className="relative bg-black min-h-125 flex flex-col items-center justify-center border-t border-white/5 overflow-hidden pt-20 pb-10 w-full">
      <NeuralNetworkCanvas />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 bg-blue-600/20 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full">
        <Reveal direction="up">
          <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase mb-6 block font-accent">
            Build The Future With AI
          </span>
          <h2 className="text-4xl md:text-6xl font-geist font-bold text-white mb-10 tracking-tight drop-shadow-2xl">
            Let's create something <br />
            <span className="font-serif italic font-normal text-5xl md:text-7xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">extraordinary.</span>
          </h2>
        </Reveal>
      </div>

      <div className="relative z-10 mt-32 w-full max-w-6xl px-6 font-geist">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-5 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
            <span className="text-2xl font-bold font-geist text-white">Hamza Shahzad</span>
            <p className="text-[14px] text-zinc-500 leading-relaxed max-w-sm">
              AI Engineer specializing in LLMs, Agentic AI, and production-ready systems. Thanks for checking out my site.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-center lg:text-left">
            <FooterColumn title="General" links={FOOTER_GENERAL_LINKS} />
            <FooterColumn title="Profiles" links={FOOTER_SOCIALS} />
            <FooterColumn title="More" links={FOOTER_MORE_LINKS} />
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 text-center">
          <p className="text-[11px] text-zinc-500">
            © {new Date().getFullYear()} <span className="text-zinc-300 font-medium">Hamza Shahzad</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {FOOTER_SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="text-zinc-500 hover:text-white transition-colors"
                aria-label={label}
                title={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
