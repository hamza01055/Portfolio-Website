import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ProjectNotFound = () => (
  <div className="min-h-screen bg-[#0a0e1a] flex flex-col items-center justify-center text-center px-6">
    <span className="text-[11px] font-bold tracking-[0.25em] text-zinc-500 uppercase mb-4 font-accent">404</span>
    <h1 className="text-3xl md:text-4xl font-geist font-bold text-white mb-4">Project not found</h1>
    <p className="text-zinc-500 mb-8 max-w-md">
      This case study doesn't exist or may have been moved.
    </p>
    <Link
      to="/#projects"
      className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-medium hover:bg-white/10 transition-colors"
    >
      <ArrowLeft className="w-4 h-4" /> Back to Projects
    </Link>
  </div>
);

export default ProjectNotFound;
