import React, { useEffect, useRef } from 'react';

/**
 * AnimatedBackground — hexagon-pattern image, fixed behind all page content,
 * lightened with a white wash so the site's dark-on-light text stays readable.
 * The hex layer settles into place once on load (fade + drift + scale down),
 * then drifts a few px toward the cursor as it moves — the only continuous
 * motion is a direct response to user input, consistent with the site's
 * hover-only animation policy (no motion plays on its own).
 * Fully decorative: aria-hidden and non-interactive so it never blocks
 * clicks on real content.
 */
const PARALLAX_RANGE = 18; // max px the hex layer shifts toward the cursor

const AnimatedBackground = () => {
  const hexRef = useRef(null);
  const frame = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (frame.current) return;
      frame.current = requestAnimationFrame(() => {
        frame.current = null;
        const el = hexRef.current;
        if (!el) return;
        const xRatio = e.clientX / window.innerWidth - 0.5;
        const yRatio = e.clientY / window.innerHeight - 0.5;
        el.style.setProperty('--hex-x', `${xRatio * PARALLAX_RANGE}px`);
        el.style.setProperty('--hex-y', `${yRatio * PARALLAX_RANGE}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-[#fbfbfc] overflow-hidden" aria-hidden="true">
      <div
        ref={hexRef}
        className="absolute -inset-6 bg-cover bg-center opacity-95 hexSettleIn hexParallax"
        style={{ backgroundImage: "url('/hex-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-white/25" />

      <style>{`
        @keyframes hexSettleIn {
          from {
            opacity: 0;
            transform: scale(1.06) translateY(14px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .hexSettleIn {
          animation: hexSettleIn 1.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .hexParallax {
          --hex-x: 0px;
          --hex-y: 0px;
          translate: var(--hex-x) var(--hex-y);
          transition: translate 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @media (prefers-reduced-motion: reduce) {
          .hexSettleIn {
            animation: none;
          }
          .hexParallax {
            translate: none !important;
            transition: none;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
