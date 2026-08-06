import React, { useMemo, useState } from 'react';

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAY_LABELS = [null, 'Mon', null, 'Wed', null, 'Fri', null];

// GitHub's own 5-step intensity ramp (empty → darkest green → brightest).
const LEVEL_COLORS = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];

const levelFor = (count, maxCount) => {
  if (count === 0) return 0;
  if (maxCount <= 1) return count > 0 ? 2 : 0;
  const ratio = count / maxCount;
  if (ratio > 0.75) return 4;
  if (ratio > 0.5) return 3;
  if (ratio > 0.25) return 2;
  return 1;
};

// `weeks` is GitHub's real contributionCalendar shape: an array of weeks,
// each with 7 contributionDays (date + contributionCount), Sunday-first —
// renders as a classic GitHub-style calendar heatmap grid.
export const ContributionCalendar = ({ weeks }) => {
  const [hovered, setHovered] = useState(null);

  const maxCount = useMemo(() => {
    if (!weeks) return 1;
    return Math.max(1, ...weeks.flatMap((w) => w.contributionDays.map((d) => d.contributionCount)));
  }, [weeks]);

  const monthLabels = useMemo(() => {
    if (!weeks) return [];
    const labels = [];
    let lastMonth = null;
    weeks.forEach((week, i) => {
      const firstDay = week.contributionDays[0];
      if (!firstDay) return;
      const month = new Date(firstDay.date).getMonth();
      if (month !== lastMonth) {
        labels.push({ weekIndex: i, label: MONTH_NAMES[month] });
        lastMonth = month;
      }
    });
    return labels;
  }, [weeks]);

  if (!weeks || weeks.length === 0) return null;

  return (
    <div className="w-full overflow-x-auto custom-scrollbar">
      <div className="min-w-[640px] px-4 sm:px-6 py-4">
        <div className="flex">
          <div className="w-8 shrink-0" />
          <div className="relative flex-1 h-4 mb-1">
            {monthLabels.map(({ weekIndex, label }) => (
              <span
                key={`${label}-${weekIndex}`}
                className="absolute text-[11px] text-zinc-400"
                style={{ left: `${weekIndex * 14}px` }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex">
          <div className="w-8 shrink-0 flex flex-col gap-[3px]">
            {DAY_LABELS.map((label, i) => (
              <div key={i} className="h-[11px] text-[10px] text-zinc-500 leading-[11px]">
                {label}
              </div>
            ))}
          </div>

          <div className="flex gap-[3px]">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.contributionDays.map((day, di) => {
                  const level = levelFor(day.contributionCount, maxCount);
                  const key = `${wi}-${di}`;
                  return (
                    <div
                      key={key}
                      className="w-[11px] h-[11px] rounded-[2px] cursor-pointer"
                      style={{ background: LEVEL_COLORS[level] }}
                      onMouseEnter={() => setHovered({ ...day, key })}
                      onMouseLeave={() => setHovered((h) => (h?.key === key ? null : h))}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-3 pl-8">
          <span className="text-[11px] text-zinc-500 h-4">
            {hovered
              ? `${hovered.contributionCount} contribution${hovered.contributionCount === 1 ? '' : 's'} on ${new Date(hovered.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}`
              : ''}
          </span>
          <div className="flex items-center gap-1.5 text-[11px] text-zinc-500 shrink-0">
            <span>Less</span>
            {LEVEL_COLORS.map((color) => (
              <span key={color} className="w-[11px] h-[11px] rounded-[2px]" style={{ background: color }} />
            ))}
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributionCalendar;
