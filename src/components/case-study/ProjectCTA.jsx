import React from 'react';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { RevealOnScroll } from './motion';

// Reuses the canonical "Book a Call" wa.me link/copy from
// src/components/sections.jsx's Contact section, restyled for the dark
// case-study page.
const ProjectCTA = () => (
  <section className="py-20 md:py-28 border-t border-white/5">
    <div className="max-w-[1400px] mx-auto px-[var(--gutter)]">
      <RevealOnScroll className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-geist font-bold text-white tracking-tight mb-6">
          Interested in building AI products or automation?
        </h2>
        <p className="text-lg text-zinc-400 font-light mb-10">
          Let's work together.
        </p>
        <a
          href="https://wa.me/923264936138?text=Hi%20Hamza%2C%20I%27d%20like%20to%20talk%20about%20a%20project."
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-bold hover:bg-zinc-200 transition-colors"
        >
          <Calendar className="w-4 h-4" /> Book a Call <ArrowUpRight className="w-4 h-4" />
        </a>
      </RevealOnScroll>
    </div>
  </section>
);

export default ProjectCTA;
