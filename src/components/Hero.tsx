import React from 'react';
import { ArrowRight, Instagram, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroProps {
  purchaseUrl: string;
  instagramUrl: string;
  logoUrl: string;
}

export const Hero: React.FC<HeroProps> = ({ purchaseUrl, instagramUrl, logoUrl }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background atmospheric gradient */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
      >
        <div className="h-[420px] w-[650px] rounded-full bg-amber-500/10 blur-[130px] -translate-y-12" />
        <div className="h-[300px] w-[400px] rounded-full bg-blue-950/20 blur-[100px] translate-y-24" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Logo & Author badge / presentation */}
          <div className="mb-6 flex flex-col items-center">
            <div className="relative mb-4 group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500/30 to-amber-600/10 opacity-75 blur-sm transition duration-500 group-hover:opacity-100" />
              <img
                src={logoUrl}
                alt="Prof. Felipe Henry"
                referrerPolicy="no-referrer"
                className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-2xl object-cover shadow-2xl border border-amber-500/40 bg-[#111827]"
              />
            </div>

            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Prof. Felipe Henry</span>
            </div>
          </div>

          {/* Main Title & Subtitle */}
          <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-3xl leading-[1.08] text-balance">
            A Guerra Travada
          </h1>

          <p className="mt-3 text-xl sm:text-2xl md:text-3xl font-medium text-amber-200/90 tracking-wide font-serif-display">
            A Batalha contra a Ansiedade
          </p>

          {/* Support sentence */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-300 font-normal leading-relaxed text-balance">
            Um livro com reflexões e estratégias práticas para ajudar você a compreender melhor a ansiedade e lidar com os desafios do dia a dia.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href={purchaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 bg-[length:200%_auto] hover:bg-right px-8 py-4 text-base font-bold text-slate-950 shadow-xl shadow-amber-950/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
            >
              <span>QUERO CONHECER O LIVRO</span>
              <ArrowRight className="h-5 w-5" />
            </a>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700/80 bg-slate-900/60 hover:bg-slate-800/80 px-7 py-4 text-base font-semibold text-slate-200 hover:text-white transition-all duration-200 active:scale-[0.98] whitespace-nowrap"
            >
              <Instagram className="h-5 w-5 text-amber-400" />
              <span>CONHEÇA O AUTOR</span>
            </a>
          </div>

          {/* Quiet Trust and Safe Purchase indicator */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-amber-400/90" />
              <span>Compra 100% segura via Kiwify</span>
            </div>
            <span className="hidden sm:inline text-slate-600">·</span>
            <div className="flex items-center gap-1.5">
              <span>Acesso imediato</span>
            </div>
            <span className="hidden sm:inline text-slate-600">·</span>
            <div className="flex items-center gap-1.5">
              <span>Leitura transformadora e prática</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
