import React from 'react';
import { AIArchitectureGallery, SkillsDashboard, Contact } from '../components/sections';
import Hero from './Hero';
import Projects from './Work';
import GitHubActivity from './GitHubActivity';
import Blog from './Blog';

// Home page: Hero, Projects (with Work focus mode), Skills, GitHub, Blog,
// Architecture, Contact. About and Experience live on their own page.
const HomePage = ({ workFocusMode, exitWorkFocus }) => (
  <main className="relative z-10">
    <div className={workFocusMode ? 'hidden' : undefined}>
      <Hero />
    </div>
    <Projects onExitFocus={workFocusMode ? exitWorkFocus : undefined} />
    <div className={workFocusMode ? 'hidden' : undefined}>
      <SkillsDashboard />
      <GitHubActivity />
      <Blog />
      <AIArchitectureGallery />
      <Contact />
    </div>
  </main>
);

export default HomePage;
