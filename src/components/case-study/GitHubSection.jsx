import React from 'react';
import { Lock } from 'lucide-react';
import { Github as GithubIcon } from '../shared';
import { RevealOnScroll } from './motion';

// repoUrl present -> link, regardless of repoPrivate (a stale/contradictory
// data state if both are set — repoUrl wins).
// repoUrl absent + repoPrivate true -> confidentiality message.
// repoUrl absent + repoPrivate falsy -> section hidden (not linked yet).
const GitHubSection = ({ project }) => {
  const { repoUrl, repoPrivate } = project;

  if (!repoUrl && !repoPrivate) return null;

  return (
    <section id="github" className="py-14 md:py-20 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-[var(--gutter)]">
        <RevealOnScroll className="bg-white/5 border border-white/10 rounded-[2rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              {repoUrl ? <GithubIcon className="w-6 h-6 text-white" /> : <Lock className="w-6 h-6 text-amber-400" />}
            </div>
            <div className="max-w-md">
              <h2 className="text-xl md:text-2xl font-bold text-white font-geist">Source Code</h2>
              {!repoUrl && repoPrivate && (
                <p className="text-sm text-zinc-500 mt-1">
                  This repository is private because of client confidentiality. Architecture and implementation details are available upon request.
                </p>
              )}
              {repoUrl && (
                <p className="text-sm text-zinc-500 mt-1">Explore the full implementation on GitHub.</p>
              )}
            </div>
          </div>

          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-sm hover:bg-white/10 transition-colors shrink-0"
            >
              View on GitHub <GithubIcon className="w-4 h-4" />
            </a>
          )}
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default GitHubSection;
