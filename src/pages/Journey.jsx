import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Terminal, Bot, Search, Brain } from 'lucide-react';
import { Reveal, SectionHeading, TechBadge, PythonIcon, FastApiIcon, LangChainIcon, OpenAIIcon, DockerIcon, PostgreSQLIcon } from '../components/shared';

// 5. My Journey (includes Experience timeline + education journey)
const Journey = () => {
  const expRowRef = useRef(null);
  const { scrollYProgress: expProgress } = useScroll({
    target: expRowRef,
    offset: ['start 85%', 'end 40%'],
  });
  const expLineHeight = useTransform(expProgress, [0, 1], ['0%', '100%']);
  const expDotScale = useTransform(expProgress, [0, 0.15, 1], [0.4, 1, 1]);
  const expTextX = useTransform(expProgress, [0, 1], [-24, 0]);
  const expTextOpacity = useTransform(expProgress, [0, 0.3], [0, 1]);
  const expContentX = useTransform(expProgress, [0, 1], [24, 0]);
  const expContentOpacity = useTransform(expProgress, [0, 0.3], [0, 1]);

  const timelineRef = useRef(null);
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ['start 80%', 'end 60%'],
  });
  const timelineLineHeight = useTransform(timelineProgress, [0, 1], ['0%', '100%']);
  const timelineDotTop = useTransform(timelineProgress, [0, 1], ['0%', '100%']);

  return (
    <>
      <section id="journey" className="bg-[#050505] py-24 md:py-32 border-t border-white/5 relative">
        <SectionHeading
          pretitle="The Experience"
          title="Experience That Brings Ideas to Life"
          highlightText="Ideas to Life"
          highlightClass="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
        />

        <div className="max-w-6xl mx-auto px-6 relative mt-20">
          <div ref={expRowRef} className="grid md:grid-cols-[250px_auto_1fr] gap-8 mb-24 relative group">
            <motion.div
              style={{ x: expTextX, opacity: expTextOpacity }}
              className="text-left md:text-right flex flex-col gap-2 pt-2 transition-transform duration-300 group-hover:-translate-y-1"
            >
              <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase font-accent">
                2026 — Present
              </span>
              <div className="flex items-center md:justify-end gap-3 mt-4">
                <div className="w-8 h-8 bg-zinc-800 border border-zinc-700 rounded flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white font-geist">Freelance AI Engineer</h3>
              </div>
              <p className="text-sm text-zinc-500 mt-2">Remote</p>
            </motion.div>

            <div className="hidden md:flex flex-col items-center relative">
              <motion.div
                style={{ height: expLineHeight }}
                className="w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent absolute top-0 origin-top"
              ></motion.div>
              <motion.div
                style={{ scale: expDotScale }}
                className="w-4 h-4 rounded-full bg-[#050505] border-2 border-blue-500 z-10 mt-4 group-hover:scale-150 group-hover:bg-blue-500 transition-colors duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              ></motion.div>
            </div>

            <motion.div
              style={{ x: expContentX, opacity: expContentOpacity }}
              className="pt-2 pb-12 transition-transform duration-300 group-hover:translate-x-2"
            >
              <h4 className="text-2xl font-bold text-white mb-6 font-geist">AI Engineering Consultant</h4>
              <ul className="space-y-4 text-zinc-400 text-sm leading-relaxed mb-8 font-sans font-light list-none">
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full">
                  Build production-ready AI applications for clients, moving beyond simple demos to scalable solutions.
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full">
                  Develop powerful LLM-powered systems integrating OpenAI models and LangChain orchestration.
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full">
                  Design and deploy complex multi-agent workflows capable of autonomous research and analysis.
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full">
                  Architect robust RAG (Retrieval-Augmented Generation) pipelines for accurate, context-aware AI interactions.
                </li>
                <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full">
                  Develop high-performance backend APIs using FastAPI and containerize applications with Docker for seamless deployment.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <TechBadge icon={PythonIcon}>Python</TechBadge>
                <TechBadge icon={FastApiIcon}>FastAPI</TechBadge>
                <TechBadge icon={LangChainIcon}>LangChain</TechBadge>
                <TechBadge icon={OpenAIIcon}>OpenAI API</TechBadge>
                <TechBadge icon={Bot}>Agentic AI</TechBadge>
                <TechBadge icon={Search}>RAG</TechBadge>
                <TechBadge icon={Brain}>Machine Learning</TechBadge>
                <TechBadge icon={DockerIcon}>Docker</TechBadge>
                <TechBadge icon={PostgreSQLIcon}>PostgreSQL</TechBadge>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="my-journey" className="bg-[#0a0a0a] py-24 md:py-32 border-t border-white/5 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute right-20 bottom-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

        <SectionHeading
          pretitle="My Journey ⭐"
          title="From curiosity to creating production-ready AI systems."
          highlightText="production-ready AI systems."
          highlightClass="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
        />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1fr] gap-16 relative mt-16">
          <div className="relative pl-8 md:pl-0" ref={timelineRef}>
            <div className="absolute left-0 md:left-[100px] top-4 bottom-0 w-[1px] bg-zinc-800">
              <motion.div
                style={{ height: timelineLineHeight }}
                className="w-full bg-gradient-to-b from-blue-500 to-cyan-400 origin-top"
              />
            </div>

            <motion.div
              style={{ top: timelineDotTop }}
              className="hidden md:block absolute left-[100px] -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 z-20 shadow-[0_0_12px_3px_rgba(34,211,238,0.6)]"
            >
              <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-40"></div>
            </motion.div>

            <div className="space-y-16 relative z-10">
              {[
                { year: '2022', title: 'Started BS Artificial Intelligence', icon: '🚀' },
                { year: '2023', title: 'Built programming foundations', icon: '💻' },
                { year: '2024', title: 'Explored Machine Learning\nComputer Vision & NLP', icon: '🧠' },
                { year: '2025', title: 'Started building AI systems', icon: '⚙️' },
                { year: '2026', title: 'Graduated\nFreelance AI Engineer', icon: '🎓' },
              ].map((item, i) => (
                <Reveal key={item.year} direction="right" delay={i * 200}>
                  <div className="flex items-start gap-8 group">
                    <div className="hidden md:flex w-[100px] justify-end pt-1">
                      <span className="font-accent font-bold text-xl text-zinc-500 group-hover:text-white transition-colors">{item.year}</span>
                    </div>
                    <div className="absolute left-[-4px] md:left-[96px] mt-2.5 w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-cyan-400 group-hover:scale-150 transition-all duration-300 ring-4 ring-[#0a0a0a]"></div>

                    <div className="flex-1 bg-zinc-900/30 border border-white/5 rounded-2xl p-6 backdrop-blur-sm group-hover:border-white/10 group-hover:-translate-y-1 transition-all duration-300">
                      <div className="flex flex-col gap-2">
                        <span className="md:hidden font-accent font-bold text-lg text-zinc-500">{item.year}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{item.icon}</span>
                          <h4 className="text-lg md:text-xl font-medium text-white font-sans whitespace-pre-line">{item.title}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal direction="left" delay={500} className="relative h-[500px] lg:h-auto flex items-center justify-center">
            <div className="relative w-[300px] h-[400px] group cursor-pointer">
              <div className="absolute inset-0 bg-white p-3 rounded-lg shadow-xl transform rotate-[-8deg] translate-x-4 translate-y-4 group-hover:rotate-[-15deg] group-hover:-translate-x-12 group-hover:translate-y-8 transition-all duration-500 hover:z-50 hover:scale-110">
                <div className="w-full h-full bg-zinc-200 overflow-hidden relative">
                  <img src="/journey-1.jpg" className="w-full h-full object-cover" alt="Memory" />
                </div>
                <div className="text-center pt-2 font-serif text-black text-sm italic">Campus Days</div>
              </div>

              <div className="absolute inset-0 bg-white p-3 rounded-lg shadow-xl transform rotate-[5deg] -translate-x-2 -translate-y-2 group-hover:rotate-[-5deg] group-hover:-translate-x-24 group-hover:-translate-y-12 transition-all duration-500 hover:z-50 hover:scale-110">
                <div className="w-full h-full bg-zinc-200 overflow-hidden">
                  <img src="/journey-2.jpg" className="w-full h-full object-cover" alt="Memory" />
                </div>
                <div className="text-center pt-2 font-serif text-black text-sm italic">Colors</div>
              </div>

              <div className="absolute inset-0 bg-white p-3 rounded-lg shadow-xl transform rotate-[-4deg] translate-x-2 group-hover:rotate-[5deg] group-hover:translate-x-24 group-hover:-translate-y-8 transition-all duration-500 hover:z-50 hover:scale-110">
                <div className="w-full h-full bg-zinc-200 overflow-hidden">
                  <img src="/journey-3.jpg" className="w-full h-full object-cover" alt="Memory" />
                </div>
                <div className="text-center pt-2 font-serif text-black text-sm italic">Friends</div>
              </div>

              <div className="absolute inset-0 bg-white p-3 rounded-lg shadow-2xl transform rotate-[2deg] group-hover:rotate-[12deg] group-hover:translate-x-12 group-hover:translate-y-16 transition-all duration-500 hover:z-50 hover:scale-110">
                <div className="w-full h-full bg-zinc-200 overflow-hidden">
                  <img src="/journey-4.jpg" className="w-full h-full object-cover" alt="Memory" />
                </div>
                <div className="text-center pt-2 font-serif text-black text-sm italic font-bold">Graduation</div>
              </div>

              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 text-zinc-500 text-sm opacity-100 group-hover:opacity-0 transition-opacity">
                <span className="text-xl">📸</span> Hover to explore
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal direction="up" delay={800} className="max-w-6xl mx-auto px-6 mt-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: '🎓', label: '2022–2026' },
              { icon: '📚', label: 'BS Artificial Intelligence' },
              { image: '/iub-logo.png', label: 'The Islamia University of Bahawalpur' },
              { icon: '📍', label: 'Bahawalpur, Pakistan' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4 bg-[#111111] rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                {stat.image ? (
                  <img src={stat.image} alt={stat.label} className="w-8 h-8 mb-2 object-contain" />
                ) : (
                  <span className="text-2xl mb-2">{stat.icon}</span>
                )}
                <div className="w-8 h-[1px] bg-zinc-700 my-2"></div>
                <span className="text-xs text-zinc-400 font-medium whitespace-pre-line">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg font-lora text-zinc-300 leading-relaxed">
              "University wasn't just where I earned a degree—it was where I learned how to think, build, and solve problems."
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default Journey;
