import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Full-screen enlarge modal for gallery/architecture images. ESC closes,
// arrow keys navigate (wrap at both ends), backdrop click closes, body
// scroll is locked while open — same conventions as the old Work.jsx modal
// and SearchModal in components/shared.jsx.
const ImageLightbox = ({ images, initialIndex = 0, onClose }) => {
  const [index, setIndex] = useState(initialIndex);
  const hasMultiple = images.length > 1;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft' && hasMultiple) setIndex((i) => (i - 1 + images.length) % images.length);
      else if (e.key === 'ArrowRight' && hasMultiple) setIndex((i) => (i + 1) % images.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, hasMultiple, images.length]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 md:p-8"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 bg-black/50 hover:bg-white text-white hover:text-black rounded-full transition-all backdrop-blur-md border border-white/20 hover:scale-110"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {hasMultiple && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); setIndex((i) => (i - 1 + images.length) % images.length); }}
              className="absolute left-4 md:left-8 z-50 p-3 bg-black/50 hover:bg-white text-white hover:text-black rounded-full transition-all backdrop-blur-md border border-white/20"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setIndex((i) => (i + 1) % images.length); }}
              className="absolute right-4 md:right-8 z-50 p-3 bg-black/50 hover:bg-white text-white hover:text-black rounded-full transition-all backdrop-blur-md border border-white/20"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        <motion.img
          key={images[index]}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          src={images[index]}
          alt=""
          onClick={(e) => e.stopPropagation()}
          className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
        />

        {hasMultiple && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/70 font-mono">
            {index + 1} / {images.length}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageLightbox;
