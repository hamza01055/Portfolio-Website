import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { RevealOnScroll } from './motion';

const ProjectPreviewCard = ({ project, direction }) => (
  <Link
    to={`/projects/${project.id}`}
    className={`group flex-1 flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-colors ${direction === 'next' ? 'flex-row-reverse text-right' : ''}`}
  >
    <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/10 shrink-0 bg-white/5">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    <div className="min-w-0">
      <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase font-accent mb-1">
        {direction === 'prev' ? <><ArrowLeft className="w-3 h-3" /> Previous</> : <>Next <ArrowRight className="w-3 h-3" /></>}
      </span>
      <div className="text-sm font-bold text-white truncate">{project.title}</div>
    </div>
  </Link>
);

const NavigationFooter = ({ project, allProjects }) => {
  const idx = allProjects.findIndex((p) => p.id === project.id);
  const prev = allProjects[(idx - 1 + allProjects.length) % allProjects.length];
  const next = allProjects[(idx + 1) % allProjects.length];

  if (allProjects.length < 2) return null;

  return (
    <section className="py-14 md:py-20 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-[var(--gutter)]">
        <RevealOnScroll className="flex flex-col sm:flex-row gap-4">
          <ProjectPreviewCard project={prev} direction="prev" />
          <ProjectPreviewCard project={next} direction="next" />
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default NavigationFooter;
