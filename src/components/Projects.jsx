import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Streamlit Notes Summarizer App',
    desc: 'Summarizes text, audio, and video files using AI for quick insights.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
    stack: ['Python', 'Streamlit', 'OpenAI'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Inventory Management System (C)',
    desc: 'CLI-based program with CRUD features for managing items efficiently.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    stack: ['C', 'Data Structures'],
    github: '#',
  },
  {
    title: 'Synthex Chrome Extension',
    desc: 'Flashcard-based learning assistant that boosts spaced repetition.',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop',
    stack: ['JavaScript', 'Chrome API', 'Vite'],
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-24 bg-gradient-to-b from-zinc-950 to-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Projects
        </motion.h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur hover:border-cyan-400/40 transition"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full bg-black/40 border border-white/10 px-2.5 py-1 text-[11px] text-zinc-300">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-zinc-300 hover:text-white transition">
                      <Github size={16} /> Code
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-cyan-300 hover:text-cyan-200 transition">
                      <ExternalLink size={16} /> Live
                    </a>
                  )}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-cyan-500/10 via-fuchsia-500/10 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
