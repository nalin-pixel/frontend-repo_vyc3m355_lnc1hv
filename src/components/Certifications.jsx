import React from 'react';
import { motion } from 'framer-motion';

const certs = [
  { title: 'Python Certificate', issuer: 'Skill India', year: '2024' },
  { title: 'Foundations of Web Dev', issuer: 'Self-paced', year: '2024' },
];

export default function Certifications() {
  return (
    <section id="certs" className="relative w-full py-24 bg-zinc-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Certifications
        </motion.h2>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl" />
              <h3 className="text-lg font-semibold text-white">{c.title}</h3>
              <p className="mt-1 text-sm text-zinc-400">{c.issuer}</p>
              <p className="mt-1 text-xs text-zinc-500">{c.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
