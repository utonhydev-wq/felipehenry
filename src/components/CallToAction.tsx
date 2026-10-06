import React from 'react';
import { ArrowRight, BookOpen, ShieldCheck } from 'lucide-react';

interface CallToActionProps {
  purchaseUrl: string;
}

export const CallToAction: React.FC<CallToActionProps> = ({ purchaseUrl }) => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      
      {/* Visual backdrop lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
      >
        <div className="h-[380px] w-[600px] rounded-full bg-gradient-to-r from-amber-600/20 to-amber-500/10 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-amber-500/30 bg-gradient-to-b from-[#141b2c] via-[#101625] to-[#0c101a] p-8 sm:p-12 md:p-16 text-center shadow-2xl gold-glow">
          
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300">
            <BookOpen className="h-3.5 w-3.5" />
            <span>A Guerra Travada</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight max-w-2xl mx-auto text-balance">
            Talvez essa seja a leitura que você estava procurando.
          </h2>

          <p className="mt-5 max-w-xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed text-balance">
            Dê o primeiro passo para compreender os mecanismos da ansiedade através de reflexões conscientes e estratégias que você pode colocar em prática hoje mesmo.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={purchaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 px-9 py-4 text-base font-bold text-slate-950 shadow-xl shadow-amber-950/40 transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <span>QUERO CONHECER O LIVRO</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="h-4 w-4 text-amber-400" />
            <span>Página de pagamento oficial e segura via Kiwify</span>
          </div>

        </div>
      </div>
    </section>
  );
};
