import React from 'react';
import { Rocket, ExternalLink, Clock } from 'lucide-react';
import { RevealOnScroll } from './motion';

const LiveDemoSection = ({ project }) => {
  const { liveUrl } = project;

  return (
    <section id="live-demo" className="py-14 md:py-20 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-[var(--gutter)]">
        <RevealOnScroll className="bg-white/5 border border-white/10 rounded-[2rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              <Rocket className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white font-geist">Live Demo</h2>
              <p className="text-sm text-zinc-500 mt-1">See the platform running in production.</p>
            </div>
          </div>

          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-black rounded-xl font-bold text-sm hover:bg-zinc-200 transition-colors shrink-0"
            >
              Launch Live Demo <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 border border-white/10 text-zinc-400 rounded-xl font-bold text-sm shrink-0">
              <Clock className="w-4 h-4" /> Coming Soon
            </span>
          )}
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default LiveDemoSection;
