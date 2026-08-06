import React, { useState } from 'react';
import { Images } from 'lucide-react';
import { RevealOnScroll, StaggerGrid, StaggerItem } from './motion';
import ImageLightbox from './ImageLightbox';

const GallerySection = ({ project }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const { gallery, title } = project;

  if (!gallery?.length) return null;

  return (
    <section id="gallery" className="py-14 md:py-20 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-[var(--gutter)]">
        <RevealOnScroll className="max-w-3xl mb-10">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] text-cyan-400 uppercase mb-4 font-accent">
            <Images className="w-3.5 h-3.5" /> Project Gallery
          </span>
          <h2 className="text-2xl md:text-4xl font-geist font-bold text-white tracking-tight">
            A closer look
          </h2>
        </RevealOnScroll>

        <StaggerGrid className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
          {gallery.map((src, i) => (
            <StaggerItem key={src} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="block w-full rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors cursor-zoom-in"
              >
                <img
                  src={src}
                  alt={`${title} screenshot ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover hover:scale-[1.03] transition-transform duration-500"
                />
              </button>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>

      {openIndex !== null && (
        <ImageLightbox
          images={gallery}
          initialIndex={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </section>
  );
};

export default GallerySection;
