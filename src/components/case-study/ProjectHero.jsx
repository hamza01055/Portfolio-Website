import React from 'react';
import { ExternalLink, Layers } from 'lucide-react';
import { TechBadge, Github as GithubIcon } from '../shared';
import { RevealOnScroll, ZoomImage, staggerContainer, fadeUpVariants } from './motion';
import { motion } from 'framer-motion';

// Hero meta row item: label/value pair, omitted entirely when value is absent.
const MetaItem = ({ label, value }) => {
  if (!value) return null;
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase font-accent">{label}</span>
      <span className="text-sm text-zinc-200 font-medium">{value}</span>
    </div>
  );
};

// Strips a leading "NN —— " prefix from `tag`, e.g. "08 —— AI Automation" -> "AI Automation".
const categoryFromTag = (tag = '') => tag.split('——')[1]?.trim() || tag;

const ProjectHero = ({ project }) => {
  const {
    title, shortDesc, tech, image, tag,
    client, category, duration, role, status,
    liveUrl, repoUrl,
  } = project;

  const scrollToArchitecture = () => {
    document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative pt-32 md:pt-40 pb-16 md:pb-24">
      <div className="max-w-[1400px] mx-auto px-[var(--gutter)]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl"
        >
          <motion.span
            variants={fadeUpVariants}
            className="inline-block text-[11px] font-bold tracking-[0.25em] text-blue-400 uppercase mb-6 font-accent"
          >
            {tag}
          </motion.span>

          <motion.h1
            variants={fadeUpVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-geist font-bold text-white tracking-tight mb-6 leading-[1.05]"
          >
            {title}
          </motion.h1>

          <motion.p
            variants={fadeUpVariants}
            className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed mb-10 max-w-2xl"
          >
            {shortDesc}
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            className="flex flex-wrap gap-x-10 gap-y-6 mb-10 pb-10 border-b border-white/10"
          >
            <MetaItem label="Client" value={client} />
            <MetaItem label="Category" value={category || categoryFromTag(tag)} />
            <MetaItem label="Duration" value={duration} />
            <MetaItem label="Role" value={role} />
            {status === 'in-progress' && (
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase font-accent">Status</span>
                <span className="inline-flex items-center gap-1.5 text-sm text-amber-300 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> In Progress
                </span>
              </div>
            )}
          </motion.div>

          <motion.div variants={fadeUpVariants} className="flex flex-wrap gap-3 mb-8">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-black rounded-xl font-bold text-sm hover:bg-zinc-200 transition-colors"
              >
                Live Demo <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-sm hover:bg-white/10 transition-colors"
              >
                GitHub Repository <GithubIcon className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={scrollToArchitecture}
              className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-sm hover:bg-white/10 transition-colors"
            >
              View Architecture <Layers className="w-4 h-4" />
            </button>
          </motion.div>

          <motion.div variants={fadeUpVariants} className="flex flex-wrap gap-2">
            {tech.map((t) => <TechBadge key={t}>{t}</TechBadge>)}
          </motion.div>
        </motion.div>
      </div>

      {image && (
        <RevealOnScroll className="max-w-[1400px] mx-auto px-[var(--gutter)] mt-16 md:mt-20">
          <ZoomImage className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-white/5">
            <img
              src={image}
              alt={title}
              width={1600}
              height={1000}
              loading="eager"
              decoding="async"
              className="w-full h-auto object-cover aspect-[16/10]"
            />
          </ZoomImage>
        </RevealOnScroll>
      )}
    </header>
  );
};

export default ProjectHero;
