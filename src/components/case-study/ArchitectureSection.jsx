import React, { useState } from 'react';
import { Layers, ArrowDown } from 'lucide-react';
import { RevealOnScroll, StaggerGrid, StaggerItem, ZoomImage } from './motion';
import ImageLightbox from './ImageLightbox';

// Derives a generic 3-stage fallback flow from a project's tech list when it
// has no explicit `architectureFlow`, so the section is never contentless.
const deriveFallbackFlow = (tech = []) => {
  const has = (re) => tech.some((t) => re.test(t));
  const backend = has(/fastapi|flask|django|node|express/i) ? 'Backend API' : 'Application Backend';
  const data = has(/postgres|mongo|redis|sqlite|sheets/i) ? 'Database & Storage' : 'Data & Services';
  return [
    { label: 'Client', description: 'User-facing interface.' },
    { label: backend, description: 'Core application and business logic.' },
    { label: data, description: 'Persistence and external integrations.' },
  ];
};

const ArchitectureSection = ({ project }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const flow = project.architectureFlow?.length ? project.architectureFlow : deriveFallbackFlow(project.tech);
  const { architectureImage, title } = project;

  return (
    <section id="architecture" className="py-14 md:py-20 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-[var(--gutter)]">
        <RevealOnScroll className="max-w-3xl mb-10">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] text-violet-400 uppercase mb-4 font-accent">
            <Layers className="w-3.5 h-3.5" /> System Architecture
          </span>
          <h2 className="text-2xl md:text-4xl font-geist font-bold text-white tracking-tight">
            How it's built
          </h2>
        </RevealOnScroll>

        {architectureImage && (
          <RevealOnScroll className="mb-12">
            <ZoomImage
              className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-white/5 cursor-zoom-in"
            >
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="block w-full"
                aria-label="Enlarge architecture diagram"
              >
                <img
                  src={architectureImage}
                  alt={`${title} system architecture`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
              </button>
            </ZoomImage>
          </RevealOnScroll>
        )}

        <StaggerGrid className="flex flex-col items-stretch max-w-xl mx-auto">
          {flow.map((step, i) => (
            <StaggerItem key={step.label} className="flex flex-col items-center">
              <div className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-center hover:border-white/20 transition-colors">
                <div className="text-sm font-bold text-white font-geist">{step.label}</div>
                {step.description && (
                  <div className="text-xs text-zinc-500 mt-1">{step.description}</div>
                )}
              </div>
              {i < flow.length - 1 && (
                <ArrowDown className="w-4 h-4 text-zinc-600 my-2 shrink-0" />
              )}
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>

      {lightboxOpen && architectureImage && (
        <ImageLightbox
          images={[architectureImage]}
          initialIndex={0}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </section>
  );
};

export default ArchitectureSection;
