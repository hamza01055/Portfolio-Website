import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal, SectionHeading } from '../components/shared';

// 12. Blog
const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

const Blog = () => {
  const [activeTag, setActiveTag] = useState('All Posts');

  return (
    <section id="blog" className="bg-[#0a0a0a] py-24 md:py-32 border-t border-white/5 relative overflow-hidden">
      <SectionHeading
        pretitle="The Pensieve"
        title="Handpicked Insights"
        highlightText="Insights"
        highlightClass="bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent"
      />

      <div className="max-w-6xl mx-auto px-6 overflow-hidden mb-16">
        <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar whitespace-nowrap mask-edges">
          {['All Posts', 'LLMs', 'Agentic AI', 'RAG', 'FastAPI', 'Computer Vision', 'YOLOv8', 'Python', 'Production AI'].map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 text-xs font-bold rounded-full transition-colors cursor-pointer ${
                activeTag === tag
                  ? 'bg-white text-black'
                  : 'text-zinc-400 font-medium border border-white/10 hover:text-white hover:border-white/30'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase mb-8 block text-center font-accent">Featured Articles</span>

        <Reveal direction="up">
          <div
            onClick={scrollToContact}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') scrollToContact(); }}
            className="grid md:grid-cols-[1.5fr_1fr] gap-8 bg-[#0f0f11] rounded-3xl p-4 border border-white/5 hover:border-white/10 transition-colors group cursor-pointer mb-20"
          >
            <div className="theme-fixed rounded-2xl overflow-hidden relative h-[300px] md:h-[400px]">
              <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" alt="AI Network" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <h3 className="absolute bottom-6 left-6 right-6 text-3xl font-bold text-white font-geist">Building AI Business OS</h3>
            </div>
            <div className="p-6 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4 font-accent">
                <span>Featured</span>
                <div className="w-1 h-1 bg-zinc-500 rounded-full"></div>
                <span>12 Min Read</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 font-geist group-hover:text-blue-400 transition-colors">Architecting a unified platform for AI agents and RAG.</h4>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                A deep dive into combining LLMs, document processing, and multi-agent workflows into a single, scalable FastAPI backend.
              </p>
              <div className="flex gap-2 mb-8">
                <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-zinc-300">FastAPI</span>
                <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-zinc-300">Agentic AI</span>
              </div>
              <div className="mt-auto flex items-center gap-2 text-sm text-zinc-300 group-hover:text-white transition-colors font-medium">
                Read article <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Reveal>

        <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase mb-8 block text-center font-accent">Latest Articles</span>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=500&auto=format&fit=crop", title: "Inside Multi-Agent Systems", desc: "How to design agents that actually collaborate.", time: "8 Min Read" },
            { img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500&auto=format&fit=crop", title: "How RAG Actually Works", desc: "Beyond the basics: Vector stores and retrieval strategies.", time: "10 Min Read" },
            { img: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=500&auto=format&fit=crop", title: "Training Custom YOLOv8 Models", desc: "A practical guide to computer vision in smart cities.", time: "15 Min Read" }
          ].map((post, i) => (
            <Reveal key={i} direction="up" delay={i * 100}>
              <div
                onClick={scrollToContact}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') scrollToContact(); }}
                className="bg-[#0f0f11] rounded-2xl p-3 border border-white/5 hover:border-white/10 transition-all duration-300 group cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20"
              >
                <div className="rounded-xl overflow-hidden relative h-[200px] mb-4">
                  <img src={post.img} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" alt={post.title} />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="p-2">
                  <h5 className="text-lg font-bold text-white mb-2 font-geist">{post.title}</h5>
                  <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{post.desc}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-wider font-accent">{post.time}</span>
                    <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
