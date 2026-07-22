import React, { useState } from 'react';
import { Terminal, GitFork, Star, ExternalLink } from 'lucide-react';
import { Reveal, SectionHeading, Github } from '../components/shared';

const generateGraphData = () => {
  const data = [];
  for (let i = 0; i < 50; i++) {
    const col = [];
    for (let j = 0; j < 7; j++) {
      const intensity = Math.random() > 0.6 ? Math.floor(Math.random() * 4) + 1 : 0;
      col.push(intensity);
    }
    data.push(col);
  }
  return data;
};

const getColor = (val) => {
  switch (val) {
    case 0: return 'bg-[#161b22] border border-white/5';
    case 1: return 'bg-emerald-900/40 border border-emerald-500/20';
    case 2: return 'bg-emerald-700/60 border border-emerald-400/30';
    case 3: return 'bg-emerald-500/80 border border-emerald-300/40';
    case 4: return 'bg-emerald-400 border border-emerald-300/50';
    default: return 'bg-[#161b22]';
  }
};

// 11. GitHub Activity
const GitHubActivity = () => {
  const [graphData] = useState(generateGraphData);

  return (
    <section id="github" className="w-full bg-[#050505] py-16 md:py-24 border-t border-white/5 relative overflow-x-hidden">
      <SectionHeading
        pretitle="Open Source"
        title="Code & Contributions"
        highlightText="Contributions"
        highlightClass="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
      />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-4 md:gap-6">

        <Reveal direction="up" className="w-full min-w-0 bg-[#0f0f11] border border-white/10 rounded-2xl p-4 sm:p-6 group hover:border-white/20 transition-colors">
          <div className="flex flex-wrap justify-between items-center gap-3 mb-6 md:mb-8">
            <div className="flex items-center gap-3 min-w-0">
              <Github className="w-7 h-7 md:w-8 md:h-8 text-white shrink-0" />
              <div className="min-w-0">
                <div className="text-white font-bold text-sm truncate">@hamza01055</div>
                <div className="text-zinc-500 text-xs">GitHub Activity</div>
              </div>
            </div>
            <a href="https://github.com/hamza01055" target="_blank" rel="noreferrer" className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 shrink-0">
              View Profile <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="w-full max-w-full overflow-x-auto pb-4 custom-scrollbar mask-edges">
            <div className="flex gap-1 w-max">
              {graphData.map((col, i) => (
                <div key={i} className="flex flex-col gap-1">
                  {col.map((val, j) => (
                    <div
                      key={`${i}-${j}`}
                      className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-sm ${getColor(val)} hover:scale-125 hover:z-10 transition-transform cursor-crosshair`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center gap-2 mt-2 text-[10px] text-zinc-500">
            <div>Tracking commits, issues, and PRs</div>
            <div className="flex items-center gap-1">
              Less
              <div className="w-2.5 h-2.5 rounded-sm bg-[#161b22]"></div>
              <div className="w-2.5 h-2.5 rounded-sm bg-emerald-900/40"></div>
              <div className="w-2.5 h-2.5 rounded-sm bg-emerald-700/60"></div>
              <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-sm bg-emerald-400"></div>
              More
            </div>
          </div>
        </Reveal>

        <Reveal direction="left" className="w-full min-w-0 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 md:gap-4">
          <div className="w-full min-w-0 bg-[#0f0f11] border border-white/10 rounded-2xl p-4 sm:p-6 relative overflow-hidden group hover:border-white/20 transition-colors">
            <div className="text-zinc-500 text-xs font-semibold mb-1">Focus</div>
            <div className="text-lg sm:text-2xl font-bold text-emerald-400">AI / ML</div>
            <Terminal className="hidden sm:block absolute bottom-4 right-4 w-12 h-12 text-emerald-500/10 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
          </div>

          <div className="w-full min-w-0 bg-[#0f0f11] border border-white/10 rounded-2xl p-4 sm:p-6 relative overflow-hidden group hover:border-white/20 transition-colors">
            <div className="text-zinc-500 text-xs font-semibold mb-1">Stack</div>
            <div className="text-lg sm:text-2xl font-bold text-blue-400">Python</div>
            <GitFork className="hidden sm:block absolute bottom-4 right-4 w-12 h-12 text-blue-400/10 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
          </div>

          <div className="w-full min-w-0 bg-[#0f0f11] border border-white/10 rounded-2xl p-4 sm:p-6 relative overflow-hidden group hover:border-white/20 transition-colors">
            <div className="text-zinc-500 text-xs font-semibold mb-1">Deployment</div>
            <div className="text-lg sm:text-2xl font-bold text-orange-400">Docker</div>
            <Star className="hidden sm:block absolute bottom-4 right-4 w-12 h-12 text-orange-400/10 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default GitHubActivity;
