import React from 'react';
import { RevealOnScroll } from './motion';

// Shared layout for the prose-driven narrative sections (Overview, Problem,
// Solution) — pretitle + heading + body copy in a readable measure.
const ProseSection = ({ id, pretitle, title, icon: Icon, accentClass = 'text-blue-400', body }) => {
  if (!body) return null;
  return (
    <section id={id} className="py-14 md:py-20 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-[var(--gutter)]">
        <RevealOnScroll className="max-w-3xl">
          <span className={`inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] uppercase mb-4 font-accent ${accentClass}`}>
            {Icon && <Icon className="w-3.5 h-3.5" />} {pretitle}
          </span>
          <h2 className="text-2xl md:text-4xl font-geist font-bold text-white tracking-tight mb-6">
            {title}
          </h2>
          <p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed">
            {body}
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default ProseSection;
