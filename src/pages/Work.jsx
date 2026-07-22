import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Eye, X, Terminal, Users, CheckCircle2, Star, ExternalLink } from 'lucide-react';
import { Reveal, SectionHeading, TechBadge, Github } from '../components/shared';
import { PROJECTS } from '../data/projects';

// Project grid card — number/type/quarter header, serif title, hover-zoom
// image with an "explore" circle, and the real tech badges below.
const ProjectGridCard = ({ project, index, onOpen }) => {
  const [isHovered, setIsHovered] = useState(false);
  const typeLabel = project.tag.split('——')[1]?.trim().toUpperCase() || 'PROJECT';

  return (
    <Reveal direction="up" delay={index * 100} className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-xs text-zinc-500 font-mono">{String(index + 1).padStart(2, '0')}</span>
          <div className="w-8 h-px bg-white/10"></div>
          <span className="text-xs text-zinc-400 font-mono tracking-widest uppercase">{typeLabel}</span>
        </div>
        <div className="flex items-center gap-2">
          {project.status === 'in-progress' && (
            <span className="flex items-center gap-1.5 px-3 py-1 text-xs text-amber-300 border border-amber-400/30 rounded-full font-mono bg-amber-400/10">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              In Progress
            </span>
          )}
          <div className="px-3 py-1 text-xs text-zinc-400 border border-white/10 rounded-full font-mono bg-white/5">
            {project.year}
          </div>
        </div>
      </div>

      <h3 className="text-3xl font-serif text-white">{project.title}</h3>

      <motion.div
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 bg-[#161616] cursor-pointer transition-colors duration-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onOpen(project)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') onOpen(project); }}
      >
        <div className="theme-fixed relative aspect-[4/3] w-full overflow-hidden">
          <motion.img
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-[#161616]/40 to-transparent"></div>

          <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
            <p className="text-white text-sm md:text-base font-medium leading-relaxed max-w-[75%] drop-shadow">
              {project.shortDesc}
            </p>
            <span className="p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 shrink-0">
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0.5, opacity: 0, rotate: -45 }}
                transition={{ duration: 0.4, type: 'spring', stiffness: 200, damping: 20 }}
                className="absolute right-8 bottom-8 w-24 h-24 bg-white text-black rounded-full flex flex-col items-center justify-center shadow-2xl z-20"
              >
                <Eye className="w-5 h-5" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 w-full h-full"
                >
                  <svg viewBox="0 0 100 100" width="96" height="96" className="overflow-visible">
                    <path id={`circlePath-${project.id}`} d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                    <text fontSize="10" fontWeight="600" letterSpacing="2.5" fill="currentColor">
                      <textPath href={`#circlePath-${project.id}`} startOffset="0%">
                        VIEW CASE STUDY • EXPLORE •
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {project.tech.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => <TechBadge key={t}>{t}</TechBadge>)}
        </div>
      )}
    </Reveal>
  );
};

// Ambient backdrop for the Projects section — subtle grid, drifting radial
// glows, and a large drafting-style "PROJECT" watermark (hatched fill,
// measurement callouts) that fades out as the section scrolls past.
const ProjectsBackground = ({ sectionRef }) => {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const opacityText = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <svg width="100%" height="100%" className="absolute inset-0 opacity-[0.03]">
        <defs>
          <pattern id="projectsGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#projectsGrid)" />
      </svg>

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2], x: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-[120px]"
      />

      <motion.div
        style={{ opacity: opacityText }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] flex justify-center mix-blend-screen"
      >
        <svg viewBox="0 0 1200 400" className="w-full h-auto opacity-60 scale-110">
          <defs>
            <pattern id="projectsHatch" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            </pattern>
          </defs>

          <circle cx="250" cy="200" r="140" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <circle cx="950" cy="200" r="140" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <circle cx="600" cy="60" r="70" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <circle cx="600" cy="60" r="55" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" strokeDasharray="4 4" />

          <line x1="0" y1="200" x2="1200" y2="200" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <line x1="600" y1="0" x2="600" y2="400" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <line x1="250" y1="60" x2="250" y2="340" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />

          <g transform="translate(420, 310)">
            <line x1="0" y1="0" x2="-40" y2="40" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <text x="-55" y="55" fill="rgba(255,255,255,0.2)" fontSize="12" fontFamily="monospace">135°</text>
            <circle cx="0" cy="0" r="2" fill="rgba(255,255,255,0.1)" />
          </g>
          <g transform="translate(780, 310)">
            <line x1="0" y1="0" x2="0" y2="40" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <text x="-10" y="55" fill="rgba(255,255,255,0.2)" fontSize="12" fontFamily="monospace">90°</text>
            <circle cx="0" cy="0" r="2" fill="rgba(255,255,255,0.1)" />
          </g>
          <g transform="translate(980, 260)">
            <text x="0" y="0" fill="rgba(255,255,255,0.2)" fontSize="12" fontFamily="monospace">270°</text>
          </g>

          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="url(#projectsHatch)"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="2"
            fontFamily="Inter, sans-serif"
            fontWeight="900"
            fontSize="260"
            letterSpacing="-0.03em"
            className="select-none"
          >
            PROJECT
          </text>
        </svg>
      </motion.div>
    </div>
  );
};

const Projects = ({ onExitFocus }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const { scrollYProgress: gridProgress } = useScroll({
    target: gridRef,
    offset: ['start center', 'end end'],
  });
  const lineHeight = useTransform(gridProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedProject]);

  return (
    <section id="projects" ref={sectionRef} className="bg-[#0f0f11] py-24 md:py-32 border-t border-white/5 relative overflow-hidden">
      <ProjectsBackground sectionRef={sectionRef} />
      {onExitFocus && (
        <button
          onClick={onExitFocus}
          className="theme-fixed fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 bg-black/50 hover:bg-white text-white hover:text-black rounded-full transition-all backdrop-blur-md border border-white/20 hover:scale-105 text-xs font-bold uppercase tracking-widest font-accent"
        >
          <X className="w-3.5 h-3.5" /> Exit
        </button>
      )}
      <SectionHeading
        pretitle="Case Studies"
        title="Curated Work"
        highlightText="Work"
        highlightClass="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent"
      />

      <div ref={gridRef} className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-y-20 md:gap-x-16 relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2"></div>
        <motion.div
          style={{ height: lineHeight }}
          className="hidden md:block absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-pink-500 via-rose-400 to-transparent -translate-x-1/2 shadow-[0_0_15px_rgba(236,72,153,0.4)] z-0 origin-top"
        ></motion.div>
        <motion.div
          style={{ top: lineHeight }}
          className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0f0f11] border-2 border-pink-500 shadow-[0_0_15px_3px_rgba(236,72,153,0.6)] z-10 -mt-2"
        >
          <div className="absolute inset-0 bg-pink-500 rounded-full animate-ping opacity-40"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full"></div>
        </motion.div>

        {PROJECTS.map((project, index) => (
          <div key={project.id} className={index % 2 === 1 ? 'md:pt-32' : undefined}>
            <ProjectGridCard project={project} index={index} onOpen={setSelectedProject} />
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl overflow-y-auto custom-scrollbar" onClick={() => setSelectedProject(null)}>
          <div className="min-h-screen w-full py-12 px-4 md:px-8 flex justify-center items-start animate-in fade-in slide-in-from-bottom-10 duration-500">
            <div className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] max-w-5xl w-full overflow-hidden relative shadow-2xl mb-12" onClick={(e) => e.stopPropagation()}>

              <button
                onClick={() => setSelectedProject(null)}
                className="theme-fixed absolute top-6 right-6 z-50 p-3 bg-black/50 hover:bg-white text-white hover:text-black rounded-full transition-all backdrop-blur-md border border-white/20 hover:scale-110"
                aria-label="Close"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>

              <div className="h-[300px] md:h-[450px] relative w-full overflow-hidden">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover animate-in zoom-in duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
              </div>

              <div className="p-8 md:p-16 -mt-32 relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 backdrop-blur-md rounded-full text-xs font-bold tracking-[0.2em] text-white uppercase shadow-xl font-accent">
                    {selectedProject.tag}
                  </span>
                  {selectedProject.status === 'in-progress' && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400/10 border border-amber-400/30 backdrop-blur-md rounded-full text-xs font-bold tracking-[0.2em] text-amber-300 uppercase shadow-xl font-accent">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                      In Progress
                    </span>
                  )}
                </div>

                <h2 className="text-4xl md:text-6xl font-geist font-bold text-white mb-8 tracking-tight">
                  {selectedProject.title}
                </h2>

                <div className="flex flex-wrap gap-2 mb-16">
                  {selectedProject.tech.map(t => <TechBadge key={t}>{t}</TechBadge>)}
                </div>

                <div className="w-full h-px bg-white/10 mb-16"></div>

                <div className="grid md:grid-cols-[2fr_1fr] gap-16">
                  <div className="space-y-12 text-zinc-300 font-sans font-light leading-relaxed text-lg">
                    <section>
                      <h3 className="text-2xl font-bold text-white mb-4 font-geist flex items-center gap-2">
                        <Terminal className="w-6 h-6 text-blue-400" /> Overview
                      </h3>
                      <p className="text-zinc-400">{selectedProject.overview}</p>
                    </section>

                    <section>
                      <h3 className="text-2xl font-bold text-white mb-4 font-geist flex items-center gap-2">
                        <Users className="w-6 h-6 text-red-400" /> The Challenge
                      </h3>
                      <p className="text-zinc-400">{selectedProject.challenge}</p>
                    </section>

                    <section>
                      <h3 className="text-2xl font-bold text-white mb-4 font-geist flex items-center gap-2">
                        <CheckCircle2 className="w-6 h-6 text-emerald-400" /> The Solution
                      </h3>
                      <p className="text-zinc-400">{selectedProject.solution}</p>
                    </section>
                  </div>

                  <div className="space-y-12">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                      <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-2 font-accent">
                        <Star className="w-4 h-4 text-yellow-400" /> Key Features
                      </h3>
                      <ul className="space-y-4 text-sm text-zinc-400">
                        {selectedProject.features.map(f => (
                          <li key={f} className="flex gap-3 items-start">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0"></div>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <button
                        onClick={() => { setSelectedProject(null); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                        className="w-full py-4 bg-white text-black rounded-xl font-bold hover:bg-zinc-200 flex items-center justify-center gap-2 shadow-[0_5px_0_rgb(161,161,170)] hover:shadow-[0_2px_0_rgb(161,161,170)] hover:translate-y-[3px] active:shadow-none active:translate-y-[5px] transition-all duration-150"
                      >
                        Discuss This Project <ExternalLink className="w-4 h-4" />
                      </button>
                      <a
                        href={selectedProject.repoUrl || 'https://github.com/hamza01055'}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-4 bg-white/5 border border-white/10 text-white rounded-xl font-medium hover:bg-white/10 flex items-center justify-center gap-2 shadow-[0_5px_0_rgba(255,255,255,0.08)] hover:shadow-[0_2px_0_rgba(255,255,255,0.08)] hover:translate-y-[3px] active:shadow-none active:translate-y-[5px] transition-all duration-150"
                      >
                        View Source Code <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
