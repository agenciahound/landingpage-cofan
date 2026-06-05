import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, CTA_LABEL } from '../config/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cofan-navy shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <img src="/COFAN_LOGO.png" alt="COFAN logo" className="h-10 w-auto" />

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors font-inter"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#formulario"
            className="ml-2 px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg font-inter"
          >
            {CTA_LABEL}
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-cofan-navy border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-white text-sm font-medium font-inter"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#formulario"
            onClick={() => setMenuOpen(false)}
            className="px-5 py-2.5 bg-amber-600 text-white text-sm font-semibold rounded-lg text-center font-inter"
          >
            {CTA_LABEL}
          </a>
        </div>
      )}
    </nav>
  );
}
