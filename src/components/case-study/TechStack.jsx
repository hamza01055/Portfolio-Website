import React from 'react';
import { Boxes } from 'lucide-react';
import { RevealOnScroll, StaggerGrid, StaggerItem } from './motion';
import { groupTechByCategory } from '../../data/techLookup';

const TechStack = ({ project }) => {
  const groups = groupTechByCategory(project.tech);
  if (!groups.length) return null;

  return (
    <section id="tech-stack" className="py-14 md:py-20 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-[var(--gutter)]">
        <RevealOnScroll className="max-w-3xl mb-10">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] text-indigo-400 uppercase mb-4 font-accent">
            <Boxes className="w-3.5 h-3.5" /> Technology Stack
          </span>
          <h2 className="text-2xl md:text-4xl font-geist font-bold text-white tracking-tight">
            Built with
          </h2>
        </RevealOnScroll>

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map(({ category, items }) => (
            <StaggerItem
              key={category}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-[11px] font-bold tracking-[0.2em] text-zinc-500 uppercase mb-4 font-accent">
                {category}
              </h3>
              <ul className="space-y-3">
                {items.map(({ name, icon: Icon, description }) => (
                  <li key={name} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      {Icon ? <Icon className="w-3.5 h-3.5" /> : <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{name}</div>
                      {description && <div className="text-xs text-zinc-500 mt-0.5">{description}</div>}
                    </div>
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
};

export default TechStack;
