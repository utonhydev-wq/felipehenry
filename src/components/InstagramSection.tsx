import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';

interface InstagramSectionProps {
  instagramUrl: string;
}

export const InstagramSection: React.FC<InstagramSectionProps> = ({ instagramUrl }) => {
  return (
    <section className="relative py-16 md:py-20 border-t border-slate-800/60 overflow-hidden">
      
      {/* Subtle backdrop */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 h-64 w-96 rounded-full bg-pink-500/5 blur-[100px]" 
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-pink-500/30 bg-gradient-to-tr from-pink-500/10 via-purple-500/10 to-amber-500/10 text-pink-400 shadow-inner">
          <Instagram className="h-7 w-7" />
        </div>

        <h2 className="font-serif-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
          Acompanhe o Prof. Felipe Henry
        </h2>

        <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
          Siga o perfil no Instagram para acompanhar novas reflexões, vídeos e discussões diárias sobre os temas abordados no livro.
        </p>

        <div className="mt-2 text-xs font-medium text-amber-400">
          @prof.felipehenry
        </div>

        <div className="mt-7 flex justify-center">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-2xl border border-pink-500/30 bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-amber-600/20 px-8 py-3.5 text-sm font-semibold text-slate-100 hover:text-white transition-all duration-200 hover:border-pink-500/60 hover:shadow-lg hover:shadow-pink-950/20 active:scale-95"
          >
            <Instagram className="h-4 w-4 text-pink-400" />
            <span>SEGUIR NO INSTAGRAM</span>
            <ArrowUpRight className="h-4 w-4 opacity-70" />
          </a>
        </div>

      </div>
    </section>
  );
};
