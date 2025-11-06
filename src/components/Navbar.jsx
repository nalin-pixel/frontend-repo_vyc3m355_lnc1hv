import React from 'react';
import { Github, Linkedin, Sun, Moon } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'certs', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ active = 'home', onNavigate, isDark, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" onClick={(e)=>{e.preventDefault(); onNavigate('home');}} className="text-lg font-semibold tracking-wide text-cyan-300 hover:text-cyan-200 transition">
          Koushik
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e)=>{e.preventDefault(); onNavigate(item.id);}}
              className={`text-sm transition font-medium ${active === item.id ? 'text-cyan-300' : 'text-zinc-300 hover:text-white'}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md text-zinc-300 hover:text-white hover:bg-white/10 transition">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md text-zinc-300 hover:text-white hover:bg-white/10 transition">
            <Linkedin size={18} />
          </a>
          <button
            aria-label="Toggle theme"
            onClick={onToggleTheme}
            className="p-2 rounded-md text-amber-300 hover:text-amber-200 hover:bg-white/10 transition"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
