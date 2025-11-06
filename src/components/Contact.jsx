import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section id="contact" className="relative w-full py-24 bg-gradient-to-b from-black to-zinc-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Get in Touch
        </motion.h2>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required type="text" placeholder="Your name" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60" />
            <input required type="email" placeholder="Email address" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60" />
          </div>
          <textarea required rows={5} placeholder="Message" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60" />
          <button type="submit" className="inline-flex items-center gap-2 self-start rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(217,70,239,0.4)] hover:shadow-[0_0_35px_rgba(217,70,239,0.6)] transition">
            <Send size={16} /> Send
          </button>
        </form>

        <AnimatePresence>
          {sent && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 inline-block rounded-md bg-emerald-500/20 px-3 py-2 text-emerald-300 border border-emerald-400/30"
            >
              Message sent! I will get back to you soon.
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-10 flex items-center gap-4">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm text-zinc-300 hover:text-white hover:border-cyan-400/40 transition">
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm text-zinc-300 hover:text-white hover:border-cyan-400/40 transition">
            <Github size={16} />
            <span>GitHub</span>
          </a>
          <a href="https://fiverr.com" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm text-zinc-300 hover:text-white hover:border-cyan-400/40 transition">
            <img src="https://cdn.worldvectorlogo.com/logos/fiverr-1.svg" alt="Fiverr" className="h-4 w-4" />
            <span>Fiverr</span>
          </a>
        </div>
      </div>
    </section>
  );
}
