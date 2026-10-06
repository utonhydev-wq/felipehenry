import React from 'react';
import { Instagram, ExternalLink, ArrowUp, BookOpen } from 'lucide-react';

interface FooterProps {
  purchaseUrl: string;
  instagramUrl: string;
  logoUrl: string;
}

export const Footer: React.FC<FooterProps> = ({ purchaseUrl, instagramUrl, logoUrl }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#080c14] pb-24 sm:pb-12 pt-14 text-slate-400 text-xs sm:text-sm">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Identity */}
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <img
              src={logoUrl}
              alt="Prof. Felipe Henry"
              referrerPolicy="no-referrer"
              className="h-10 w-10 rounded-full object-cover border border-amber-500/30"
            />
            <div>
              <div className="font-serif-display text-base font-bold text-slate-100">
                Prof. Felipe Henry
              </div>
              <div className="text-xs text-amber-400/90 font-medium font-serif-display">
                A Guerra Travada – A Batalha contra a Ansiedade
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-xs sm:text-sm">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Instagram className="h-4 w-4" />
              <span>Instagram</span>
              <ExternalLink className="h-3 w-3 opacity-60" />
            </a>

            <a
              href={purchaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <BookOpen className="h-4 w-4" />
              <span>Comprar Livro</span>
              <ExternalLink className="h-3 w-3 opacity-60" />
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
              aria-label="Voltar ao início"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Topo</span>
            </button>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-slate-400 text-xs">
          <p className="max-w-2xl leading-relaxed">
            Conteúdo informativo e educacional. O livro não substitui acompanhamento profissional de saúde.
          </p>
          <p className="shrink-0 text-slate-400">
            © {new Date().getFullYear()} Prof. Felipe Henry. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};
