import React from 'react';
import { Wrench } from 'lucide-react';
import { RevealOnScroll, StaggerGrid, StaggerItem } from './motion';

const DevelopmentChallenges = ({ project }) => {
  const { challenges } = project;
  if (!challenges?.length) return null;

  return (
    <section id="challenges" className="py-14 md:py-20 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-[var(--gutter)]">
        <RevealOnScroll className="max-w-3xl mb-10">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] text-orange-400 uppercase mb-4 font-accent">
            <Wrench className="w-3.5 h-3.5" /> Development Challenges
          </span>
          <h2 className="text-2xl md:text-4xl font-geist font-bold text-white tracking-tight">
            What made this hard
          </h2>
        </RevealOnScroll>

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {challenges.map(({ title, description }) => (
            <StaggerItem
              key={title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors"
            >
              <h3 className="text-sm font-bold text-white mb-2 font-geist">{title}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">{description}</p>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
};

export default DevelopmentChallenges;
