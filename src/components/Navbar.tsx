import React, { useState } from 'react';
import { ExternalLink, Menu, X, BookOpen } from 'lucide-react';

interface NavbarProps {
  purchaseUrl: string;
  instagramUrl: string;
  logoUrl: string;
}

export const Navbar: React.FC<NavbarProps> = ({ purchaseUrl, logoUrl }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Sobre o Autor', href: '#sobre-o-autor' },
    { label: 'Sobre o Livro', href: '#sobre-o-livro' },
    { label: 'Para Quem É', href: '#para-quem-e' },
    { label: 'Conteúdos', href: '#newsletter' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#0b0f17]/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text wordmark with author identity */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={logoUrl}
            alt="Prof. Felipe Henry Logo"
            referrerPolicy="no-referrer"
            className="h-9 w-9 rounded-full object-cover border border-amber-500/30 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-serif-display text-xl font-bold tracking-tight text-slate-100 group-hover:text-amber-300 transition-colors">
            Prof. Felipe Henry
          </span>
        </a>

        {/* Zone 2: 4 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-amber-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary action */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={purchaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-md shadow-amber-950/30 transition-all duration-200 hover:from-amber-500 hover:to-amber-400 hover:shadow-lg active:scale-95 whitespace-nowrap"
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>QUERO O LIVRO</span>
            <ExternalLink className="h-3 w-3 opacity-75" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-300 hover:bg-slate-800/80 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-800 bg-[#0f1523] px-4 pt-3 pb-6 md:hidden">
          <div className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800/60 hover:text-amber-400"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 py-3 text-center text-sm font-semibold text-slate-950 shadow-md"
              >
                <BookOpen className="h-4 w-4" />
                <span>QUERO CONHECER O LIVRO</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
