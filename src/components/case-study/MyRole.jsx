import React from 'react';
import { UserCog, CheckCircle2 } from 'lucide-react';
import { RevealOnScroll, StaggerGrid, StaggerItem } from './motion';

const MyRole = ({ project }) => {
  const { myRole } = project;
  if (!myRole?.length) return null;

  return (
    <section id="my-role" className="py-14 md:py-20 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-[var(--gutter)]">
        <RevealOnScroll className="max-w-3xl mb-10">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] text-pink-400 uppercase mb-4 font-accent">
            <UserCog className="w-3.5 h-3.5" /> My Role
          </span>
          <h2 className="text-2xl md:text-4xl font-geist font-bold text-white tracking-tight">
            What I built
          </h2>
        </RevealOnScroll>

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
          {myRole.map((item) => (
            <StaggerItem
              key={item}
              className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-sm text-zinc-300">{item}</span>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
};

export default MyRole;
