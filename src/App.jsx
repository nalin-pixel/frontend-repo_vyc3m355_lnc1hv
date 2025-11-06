import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

export default function App() {
  const [active, setActive] = useState('home');
  const [isDark, setIsDark] = useState(true);

  // Smooth scroll to sections
  const sectionRefs = useRef({});

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'certs', 'contact'];
    sections.forEach((id) => {
      sectionRefs.current[id] = document.getElementById(id);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((id) => {
      const el = sectionRefs.current[id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  function handleNavigate(id) {
    const el = sectionRefs.current[id] || document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' });
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-white">
      <Navbar active={active} onNavigate={handleNavigate} isDark={isDark} onToggleTheme={() => setIsDark((d) => !d)} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-sm text-zinc-400 flex items-center justify-between">
          <p>© 2025 Koushik. Built with ❤️ using React.</p>
          <a href="#home" onClick={(e)=>{e.preventDefault(); handleNavigate('home');}} className="hover:text-white transition">Back to top</a>
        </div>
      </footer>
    </div>
  );
}
