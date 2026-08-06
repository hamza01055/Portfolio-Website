import React from 'react';

/**
 * Layout primitives.
 *
 * Before this file every section invented its own max-width and padding
 * (`max-w-[1600px] px-6 md:px-10 lg:px-14` in the hero, `max-w-7xl mx-auto` in
 * the hero strip, others elsewhere), so content edges didn't line up down the
 * page. Container and Section are the single source of truth for horizontal
 * rhythm and vertical spacing — everything reads off the same scale, defined
 * once as CSS custom properties in index.css.
 */

const WIDTHS = {
  narrow: 'max-w-[var(--content-narrow)]',   // long-form reading measure
  default: 'max-w-[var(--content-default)]', // standard content column
  wide: 'max-w-[var(--content-wide)]',       // hero and full-bleed galleries
};

const SPACING = {
  none: '',
  tight: 'py-[var(--section-y-tight)]',
  default: 'py-[var(--section-y)]',
  loose: 'py-[var(--section-y-loose)]',
};

/** Horizontal rhythm: max-width + responsive gutters. Never sets vertical space. */
export const Container = ({ size = 'default', className = '', children, ...rest }) => (
  <div
    className={`w-full mx-auto px-[var(--gutter)] ${WIDTHS[size] || WIDTHS.default} ${className}`}
    {...rest}
  >
    {children}
  </div>
);

/** Vertical rhythm + the scroll anchor. Pairs with Container inside it. */
export const Section = ({
  id,
  spacing = 'default',
  className = '',
  children,
  ref,
  ...rest
}) => (
  <section
    id={id}
    ref={ref}
    className={`relative w-full ${SPACING[spacing] ?? SPACING.default} ${className}`}
    {...rest}
  >
    {children}
  </section>
);

/**
 * Previously an animated scroll-progress bar pinned to the top of the
 * viewport, its width tracking scroll position. Entirely a motion effect,
 * so it's removed; kept as a no-op component so the render site in
 * App.jsx doesn't need to change.
 */
export const ScrollProgress = () => null;

export default Section;
