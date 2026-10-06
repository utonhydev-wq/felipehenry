import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';

interface AboutAuthorProps {
  instagramUrl: string;
  logoUrl: string;
}

export const AboutAuthor: React.FC<AboutAuthorProps> = ({ instagramUrl, logoUrl }) => {
  return (
    <section id="sobre-o-autor" className="relative py-16 md:py-24 border-t border-slate-800/60 bg-[#0d121c]/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
          
          {/* Visual Presentation / Portrait frame with Author's Logo */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-amber-500/20 via-amber-600/10 to-transparent blur-md" />
              <div className="relative rounded-3xl border border-amber-500/30 bg-[#121929] p-4 shadow-2xl">
                <img
                  src={logoUrl}
                  alt="Prof. Felipe Henry"
                  referrerPolicy="no-referrer"
                  className="aspect-square w-full rounded-2xl object-cover shadow-inner"
                />
                <div className="mt-4 text-center">
                  <h3 className="font-serif-display text-xl font-bold text-slate-100">
                    Prof. Felipe Henry
                  </h3>
                  <p className="text-xs text-amber-400 font-medium tracking-wide mt-0.5">
                    Autor de &quot;A Guerra Travada&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text and Presentation */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Conheça o Autor
            </span>
            
            <h2 className="mt-2 font-serif-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Sobre o Autor
            </h2>

            <div className="mt-4 text-2xl font-serif-display text-amber-200/90 font-medium">
              Prof. Felipe Henry
            </div>

            <div className="mt-6 space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                O Prof. Felipe Henry dedica sua trajetória a compartilhar reflexões profundas e caminhos práticos para quem busca compreender e enfrentar a ansiedade no cotidiano.
              </p>
              <p>
                Por meio de uma comunicação séria, empática e acolhedora, seu propósito é auxiliar leitores a desacelerar ruídos mentais, identificar desafios internos e construir ferramentas conscientes para o desenvolvimento pessoal.
              </p>
              <p className="text-slate-400 text-sm italic">
                Acompanhe suas reflexões e produções diárias nas redes sociais.
              </p>
            </div>

            <div className="mt-8 pt-2">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 px-6 py-3.5 text-sm font-semibold text-amber-300 hover:text-amber-200 transition-all duration-200 shadow-sm active:scale-95"
              >
                <Instagram className="h-4 w-4" />
                <span>CONHEÇA MEU INSTAGRAM</span>
                <ArrowUpRight className="h-4 w-4 opacity-75" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
