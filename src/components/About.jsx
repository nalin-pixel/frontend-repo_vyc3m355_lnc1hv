import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full py-24 bg-zinc-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          About Me
        </motion.h2>
        <div className="mt-8 grid md:grid-cols-2 gap-10 items-start">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-zinc-300 leading-relaxed"
          >
            I’m a first-year Computer Science and Engineering student, passionate about technology, coding, and creative problem-solving. I love building smooth, modern experiences on the web and exploring how design and engineering meet.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-zinc-300 space-y-4"
          >
            <p>
              Interests: Web development, AI projects, and occasional freelancing. I enjoy turning ideas into prototypes and learning by shipping.
            </p>
            <div className="flex flex-wrap gap-2">
              {['React', 'Tailwind', 'FastAPI', 'Python', 'C', 'Framer Motion'].map((t) => (
                <span key={t} className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-zinc-300">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
