import React from 'react';
import { TrendingUp } from 'lucide-react';
import { RevealOnScroll, StaggerGrid, StaggerItem } from './motion';

const ResultsSection = ({ project }) => {
  const { results } = project;
  if (!results?.length) return null;

  return (
    <section id="results" className="py-14 md:py-20 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-[var(--gutter)]">
        <RevealOnScroll className="max-w-3xl mb-10">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] text-emerald-400 uppercase mb-4 font-accent">
            <TrendingUp className="w-3.5 h-3.5" /> Results
          </span>
          <h2 className="text-2xl md:text-4xl font-geist font-bold text-white tracking-tight">
            The outcome
          </h2>
        </RevealOnScroll>

        <StaggerGrid className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {results.map(({ value, label }) => (
            <StaggerItem
              key={label}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold text-white font-geist tracking-tight mb-1">{value}</div>
              <div className="text-xs text-zinc-500 uppercase tracking-wider font-accent">{label}</div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
};

export default ResultsSection;
