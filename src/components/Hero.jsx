import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-zinc-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
          >
            Koushik <span className="text-cyan-300">[Last Name]</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 text-lg sm:text-xl text-zinc-300"
          >
            Computer Science & Engineering Student | Developer | Creator
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-3 text-zinc-400"
          >
            Turning ideas into digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href="/Koushik_Resume.pdf"
              className="group inline-flex items-center justify-center rounded-lg bg-cyan-500/90 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(34,211,238,0.6)] hover:shadow-[0_0_35px_rgba(34,211,238,0.8)] transition"
              download
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-cyan-500/60 px-5 py-3 text-sm font-semibold text-cyan-300 hover:bg-cyan-500/10 transition"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 relative">
          <div className="relative mx-auto h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72 rounded-full p-[2px] bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-indigo-500">
            <div className="relative h-full w-full rounded-full bg-zinc-900 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1200&auto=format&fit=crop"
                alt="Koushik profile"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 ring-2 ring-cyan-400/20 animate-pulse rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
