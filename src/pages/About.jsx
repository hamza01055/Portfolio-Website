import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Reveal, GithubBrand } from '../components/shared';
import { WhatsAppIcon, InstagramIcon, XIcon, TelegramIcon, LinkedinBrand } from '../components/sections';

// Single-image slot that swaps photo based on horizontal mouse position
const MouseSwapImage = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const box = containerRef.current;
    if (!box) return;
    const rect = box.getBoundingClientRect();
    const relativeX = (e.clientX - rect.left) / rect.width;
    const index = Math.min(
      images.length - 1,
      Math.max(0, Math.floor(relativeX * images.length))
    );
    setActiveIndex(index);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full max-w-md h-[400px] md:h-[600px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer"
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
          style={{ opacity: i === activeIndex ? 1 : 0 }}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// 4. About Me
const About = () => {
  return (
    <section id="about" className="bg-[#0a0a0a] py-24 md:py-32 relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-8 items-center">

        <Reveal direction="right" className="flex flex-col">
          <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase mb-8 font-accent">
            More About Me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-geist font-medium tracking-tight leading-tight mb-8">
            I'm Hamza, an <br className="hidden md:block" />
            AI <motion.span
              initial={{ x: -120, opacity: 0 }}
              animate={{ x: 0, opacity: 1, y: [0, -4, 0] }}
              transition={{
                x: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.9 },
                y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }
              }}
              className="font-serif italic font-normal text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent"
            >
              Engineer
            </motion.span>
          </h2>

          <div className="space-y-6">
            <p className="text-lg font-lora text-zinc-300 leading-relaxed">
              I'm Hamza Shahzad, an AI Engineer passionate about building intelligent software that solves real-world problems.
            </p>
            <p className="text-lg font-lora text-zinc-300 leading-relaxed">
              I specialize in Large Language Models, Agentic AI, Retrieval-Augmented Generation (RAG), Computer Vision, and scalable backend systems using Python and FastAPI.
            </p>
            <p className="text-lg font-lora text-zinc-300 leading-relaxed">
              My focus is building production-grade AI products instead of simple demos—from multi-agent financial analysts to complete AI business platforms.
            </p>
            <p className="text-lg font-lora text-zinc-300 leading-relaxed">
              I'm constantly exploring new AI technologies and enjoy turning research ideas into practical applications.
            </p>
          </div>

          <div className="flex items-center gap-6 mt-12 text-zinc-500">
            <a href="https://github.com/hamza01055" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity hover:scale-110 transform duration-200"><GithubBrand className="w-6 h-6" /></a>
            <a href="https://www.linkedin.com/in/hamza-shahzad-667602355" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity hover:scale-110 transform duration-200"><LinkedinBrand className="w-6 h-6" /></a>
            <a href="https://instagram.com/hamm_xa" target="_blank" rel="noreferrer" className="hover:text-white transition-colors hover:scale-110 transform duration-200"><InstagramIcon className="w-6 h-6" /></a>
            <a href="https://twitter.com/hamza01055" target="_blank" rel="noreferrer" className="hover:text-white transition-colors hover:scale-110 transform duration-200"><XIcon className="w-6 h-6" /></a>
            <a href="https://t.me/hamza01055" target="_blank" rel="noreferrer" className="hover:text-white transition-colors hover:scale-110 transform duration-200"><TelegramIcon className="w-6 h-6" /></a>
            <a href="https://wa.me/923207074141" target="_blank" rel="noreferrer" className="hover:text-white transition-colors hover:scale-110 transform duration-200"><WhatsAppIcon className="w-6 h-6" /></a>
          </div>
        </Reveal>

        <Reveal direction="left" className="flex justify-center">
          <MouseSwapImage images={['/profile.jpg', '/about-2.jpg', '/about-1.jpg']} />
        </Reveal>

      </div>
    </section>
  );
};

export default About;
