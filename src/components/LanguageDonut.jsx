import React, { useMemo } from 'react';

// Real per-language byte/repo-count breakdown from GitHub's repository data
// (see aggregateLanguages in GitHubActivity.jsx) — colors follow GitHub's own
// linguist palette for recognizability, not an arbitrary scheme.
const LANGUAGE_COLORS = {
  Python: '#3572A5',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Dart: '#00B4AB',
  'Jupyter Notebook': '#DA5B0B',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Java: '#b07219',
  'C++': '#f34b7d',
  C: '#555555',
  Shell: '#89e051',
  Dockerfile: '#384d54',
  other: '#4b5563',
};

const colorFor = (name) => LANGUAGE_COLORS[name] || LANGUAGE_COLORS.other;

const polarToCartesian = (cx, cy, r, angleDeg) => {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
};

const arcPath = (cx, cy, r, startAngle, endAngle) => {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`;
};

// `languages` is [{ name, count }], already sorted/limited by the caller.
// Renders as a real donut chart (SVG stroked arcs) sized by each language's
// share of the total — no canned percentages.
export const LanguageDonut = ({ languages }) => {
  const total = useMemo(() => languages.reduce((sum, l) => sum + l.count, 0), [languages]);
  if (total === 0) return null;

  const size = 120;
  const r = 44;
  const cx = size / 2;
  const cy = size / 2;

  let cursor = 0;
  const arcs = languages.map((lang) => {
    const sweep = (lang.count / total) * 360;
    const arc = { ...lang, start: cursor, end: cursor + sweep };
    cursor += sweep;
    return arc;
  });

  return (
    <div className="flex items-center gap-4 sm:gap-6">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="shrink-0">
        {arcs.map((arc) => (
          <path
            key={arc.name}
            d={arcPath(cx, cy, r, arc.start, arc.end)}
            fill="none"
            stroke={colorFor(arc.name)}
            strokeWidth={16}
          />
        ))}
      </svg>
      <ul className="flex flex-col gap-1.5 min-w-0">
        {arcs.map((arc) => (
          <li key={arc.name} className="flex items-center gap-2 text-xs text-zinc-300 min-w-0">
            <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ background: colorFor(arc.name) }} />
            <span className="truncate">{arc.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageDonut;
