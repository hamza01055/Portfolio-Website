import React from 'react';
import { Star } from 'lucide-react';
import { RevealOnScroll, StaggerGrid, StaggerItem } from './motion';
import { getFeatureIcon, cleanFeatureTitle } from '../../data/featureIconLookup';

// Resolves a string key from `featuresRich[].icon` (e.g. 'agent', 'rag') to
// an actual icon component via the same keyword lookup used for the legacy
// plain-string `features` fallback, so both paths share one resolver.
const resolveIcon = (iconKey, title) => getFeatureIcon(iconKey || title);

const FeatureGrid = ({ project }) => {
  const { featuresRich, features } = project;

  const items = featuresRich?.length
    ? featuresRich.map((f) => ({ ...f, title: cleanFeatureTitle(f.title), Icon: resolveIcon(f.icon, f.title) }))
    : (features || []).map((title) => ({ title: cleanFeatureTitle(title), Icon: getFeatureIcon(title) }));

  if (!items.length) return null;

  return (
    <section id="features" className="py-14 md:py-20 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-[var(--gutter)]">
        <RevealOnScroll className="max-w-3xl mb-10">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] text-yellow-400 uppercase mb-4 font-accent">
            <Star className="w-3.5 h-3.5" /> Key Features
          </span>
          <h2 className="text-2xl md:text-4xl font-geist font-bold text-white tracking-tight">
            What it does
          </h2>
        </RevealOnScroll>

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(({ title, description, Icon }) => (
            <StaggerItem
              key={title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5 font-geist">{title}</h3>
              {description && (
                <p className="text-xs text-zinc-500 leading-relaxed">{description}</p>
              )}
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
};

export default FeatureGrid;
