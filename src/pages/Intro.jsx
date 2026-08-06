import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal, GithubBrand } from '../components/shared';
import { XIcon, LinkedinBrand } from '../components/sections';

// Standalone intro/hero page — reachable at /intro only, not linked from the
// navbar, search modal, or footer.
const Intro = () => {
  return (
    <main className="relative z-10 text-muted font-sans selection:bg-purple-500/30 overflow-x-hidden">
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center w-full">

          {/* --- left column: copy --- */}
          <div className="flex flex-col max-w-xl">
            <Reveal>
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-muted-strong uppercase mb-6 block">
                Know About Me
              </span>
            </Reveal>

            <Reveal>
              <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] leading-[1.1] font-serif text-foreground mb-8 tracking-tight">
                AI Engineer
              </h1>
            </Reveal>

            <Reveal>
              <div className="space-y-6 text-muted text-[17px] leading-relaxed mb-12 font-light">
                <p>
                  I'm Hamza Shahzad, an AI Engineer passionate about building scalable AI applications that solve real-world problems. My work focuses on LLMs, RAG, Multi-Agent Systems, Computer Vision, and FastAPI, transforming AI ideas into reliable, production-ready products.
                </p>
                <p>
                  From developing AI-powered SaaS platforms and intelligent automation to deploying end-to-end machine learning solutions, I enjoy creating systems that are fast, practical, and built to scale. I'm constantly exploring new advancements in AI and turning cutting-edge research into impactful applications.
                </p>
                <p>
                  Beyond coding, I'm always learning, experimenting, and sharing knowledge. I believe great software comes from continuous improvement, curiosity, and attention to detail.
                </p>
                <p>
                  My goal is simple: build AI products that people genuinely use and trust.
                </p>
              </div>
            </Reveal>

            <Reveal className="mt-auto">
              <div className="flex flex-col gap-10">
                <div className="flex items-center gap-6 text-muted">
                  <a href="https://github.com/hamza01055" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="GitHub">
                    <GithubBrand className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/hamza-shahzad-667602355" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
                    <LinkedinBrand className="w-5 h-5" />
                  </a>
                  <a href="https://twitter.com/hamza01055" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="X (Twitter)">
                    <XIcon className="w-5 h-5" />
                  </a>
                </div>

                <a
                  href="/about#journey"
                  className="group flex items-center gap-4 w-fit cursor-pointer"
                  aria-label="View Work Experience"
                >
                  <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-muted-strong uppercase group-hover:text-foreground transition-colors">
                    Work Experience
                  </span>
                  <div className="w-8 h-8 rounded-full bg-card border border-base flex items-center justify-center text-muted group-hover:text-foreground transition-all">
                    <ArrowRight size={14} />
                  </div>
                </a>
              </div>
            </Reveal>
          </div>

          {/* --- right column: portrait frame --- */}
          <Reveal className="relative w-full max-w-lg mx-auto lg:ml-auto mt-12 lg:mt-0 px-4">
            {/* Offset 3D shadow frame */}
            <div className="absolute inset-0 bg-card border border-base rounded-[3rem] sm:rounded-[4rem] translate-x-3 translate-y-3 -rotate-3 z-0 shadow-2xl hidden sm:block"></div>

            {/* Main image container */}
            <div className="relative z-10 w-full aspect-[4/3.5] sm:aspect-[4/4.2] rounded-[3rem] sm:rounded-[4rem] overflow-hidden border border-base bg-card shadow-2xl group">
              <div className="w-full h-full bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#ffd270] relative flex items-end justify-center overflow-hidden">

                {/* Silhouette profile area */}
                <div className="relative z-10 w-[75%] h-[85%] bg-gradient-to-t from-[#111] via-[#1a1a1a] to-transparent rounded-t-[5rem] flex flex-col items-center justify-end pb-12 shadow-[inset_0_2px_20px_rgba(255,255,255,0.1)]">
                  <span className="text-white/40 font-mono text-xs uppercase tracking-widest px-4 py-2 border border-white/10 rounded-full bg-black/30 backdrop-blur-sm">
                    Portrait Area
                  </span>
                </div>

                {/* decorative overlays */}
                <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent"></div>
                <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent z-0"></div>
              </div>
            </div>
          </Reveal>

        </div>
      </section>
    </main>
  );
};

export default Intro;
