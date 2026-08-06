import React, { useMemo } from 'react';

// `stats` is { commit, issue, pullRequest, review, repo } — real counts from
// contributionsCollection (totalCommitContributions, etc. — see
// api/contributions.js). Axis positions/labels are fixed; only the polygon
// shape responds to real data, scaled log-ish so one dominant category
// (commits are almost always highest) doesn't flatten the rest to zero.
const AXES = [
  { key: 'commit', label: 'Commit', angle: 0 },
  { key: 'issue', label: 'Issue', angle: 72 },
  { key: 'pullRequest', label: 'PullReq', angle: 144 },
  { key: 'review', label: 'Review', angle: 216 },
  { key: 'repo', label: 'Repo', angle: 288 },
];

const RINGS = [20, 40, 60, 80];
const MAX_R = 80;

const pointAt = (angleDeg, r) => {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: r * Math.cos(rad), y: r * Math.sin(rad) };
};

// log1p scaling: real contribution counts span orders of magnitude (e.g.
// 200 commits vs. 3 reviews) — a linear scale would collapse every axis but
// the largest to a sliver, so this compresses range while keeping "more is
// more" monotonic and zero mapping exactly to the center.
const scaleValue = (value, maxValue) => {
  if (maxValue <= 0) return 0;
  return Math.log1p(value) / Math.log1p(maxValue);
};

export const ContributionRadar = ({ stats }) => {
  const maxValue = useMemo(() => Math.max(1, ...Object.values(stats)), [stats]);

  const polygonPoints = AXES.map((axis) => {
    const scaled = scaleValue(stats[axis.key] || 0, maxValue);
    const { x, y } = pointAt(axis.angle, scaled * MAX_R);
    return `${x},${y}`;
  }).join(' ');

  const gridPolygon = (r) => AXES.map((axis) => {
    const { x, y } = pointAt(axis.angle, r);
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg viewBox="-100 -100 200 200" className="w-full h-full overflow-visible">
      <g>
        {RINGS.map((r) => (
          <polygon key={r} points={gridPolygon(r)} fill="none" stroke="#333" strokeWidth="1" strokeDasharray="4,4" />
        ))}

        {AXES.map((axis) => {
          const { x, y } = pointAt(axis.angle, MAX_R);
          return <line key={axis.key} x1="0" y1="0" x2={x} y2={y} stroke="#333" strokeWidth="1" strokeDasharray="4,4" />;
        })}

        {AXES.map((axis) => {
          const { x, y } = pointAt(axis.angle, MAX_R + 14);
          return (
            <text key={axis.key} x={x} y={y} textAnchor="middle" fill="#fff" fontSize="10">
              {axis.label}
            </text>
          );
        })}

        <polygon points={polygonPoints} fill="rgba(255, 193, 7, 0.4)" stroke="#ffc107" strokeWidth="2" />
      </g>
    </svg>
  );
};

export default ContributionRadar;
