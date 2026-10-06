import React from 'react';
import { 
  BookMarked, 
  Compass, 
  Lightbulb, 
  TrendingUp, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink 
} from 'lucide-react';

interface AboutBookProps {
  purchaseUrl: string;
}

export const AboutBook: React.FC<AboutBookProps> = ({ purchaseUrl }) => {
  const highlights = [
    {
      title: 'Reflexões sobre ansiedade',
      desc: 'Um olhar cuidadoso e consciente sobre os pensamentos e angústias que atravessam a mente contemporânea.',
      icon: Lightbulb,
    },
    {
      title: 'Estratégias práticas para o dia a dia',
      desc: 'Métodos e orientações diretas para lidar com momentos de tensão e recuperar a clareza em meio à rotina.',
      icon: Compass,
    },
    {
      title: 'Linguagem acessível',
      desc: 'Uma leitura fluida, sem termos excessivamente técnicos, pensada para quem busca clareza e aplicação imediata.',
      icon: BookMarked,
    },
    {
      title: 'Desenvolvimento pessoal',
      desc: 'Estímulo ao autoconhecimento, à maturidade emocional e ao domínio das próprias atitudes diárias.',
      icon: TrendingUp,
    },
    {
      title: 'Aplicação das reflexões na rotina',
      desc: 'Conexão real entre os ensinamentos das páginas e os desafios práticos vivenciados no trabalho e na convivência.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="sobre-o-livro" className="relative py-16 md:py-24 overflow-hidden">
      
      {/* Background glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute right-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-amber-500/5 blur-[120px]" 
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            A Obra
          </span>
          <h2 className="mt-2 font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            A Guerra Travada
          </h2>
          <p className="mt-2 font-serif-display text-xl sm:text-2xl text-amber-300/90 font-medium">
            A Batalha contra a Ansiedade
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Uma abordagem profunda e ao mesmo tempo acessível para compreender a dinâmica da ansiedade e construir recursos práticos no dia a dia.
          </p>
        </div>

        {/* 3D Book Showcase & Content Presentation */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Elegant 3D Book Stand / Representation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-xs sm:max-w-sm w-full">
              {/* Soft glow background */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/20 via-amber-700/10 to-transparent blur-xl rounded-3xl" />
              
              {/* Book 3D container */}
              <div className="relative mx-auto w-[250px] sm:w-[280px] h-[370px] sm:h-[410px] rounded-r-2xl rounded-l-md bg-gradient-to-br from-[#1c2438] via-[#111726] to-[#0a0d16] border-t border-r border-b border-amber-500/30 border-l-[14px] border-l-[#151c2c] shadow-[15px_20px_35px_rgba(0,0,0,0.7)] p-6 flex flex-col justify-between transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-[20px_25px_40px_rgba(217,119,6,0.15)]">
                
                {/* Book Spine texture line */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-amber-400/30 via-amber-500/10 to-transparent" />
                
                {/* Book Top Accent */}
                <div className="flex items-center justify-between border-b border-amber-500/20 pb-4">
                  <span className="text-[10px] uppercase tracking-widest text-amber-400 font-semibold">
                    Prof. Felipe Henry
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400">
                    Edição Oficial
                  </span>
                </div>

                {/* Book Center Title */}
                <div className="my-auto text-center py-4">
                  <div className="mx-auto mb-3 h-1 w-10 bg-amber-400/70 rounded-full" />
                  <h3 className="font-serif-display text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                    A GUERRA TRAVADA
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm font-medium text-amber-300/90 font-serif-display italic tracking-wide">
                    A Batalha contra a Ansiedade
                  </p>
                  <div className="mt-4 mx-auto w-12 h-12 rounded-full border border-amber-500/30 flex items-center justify-center bg-amber-500/5">
                    <BookMarked className="h-5 w-5 text-amber-400" />
                  </div>
                </div>

                {/* Book Bottom Badge */}
                <div className="border-t border-amber-500/20 pt-3 text-center">
                  <span className="text-[11px] text-slate-300 font-medium">
                    Reflexões & Práticas
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* Highlights List */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <h3 className="text-xl font-serif-display font-semibold text-slate-100">
              Pilares e Conteúdo da Obra
            </h3>

            <div className="space-y-3.5">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index} 
                    className="flex items-start gap-3.5 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4 transition-all duration-200 hover:border-amber-500/30 hover:bg-slate-900/60"
                  >
                    <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-2 text-amber-400 shrink-0 mt-0.5">
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-100">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA inside book section */}
            <div className="pt-4">
              <a
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-amber-950/30 hover:from-amber-400 hover:to-amber-500 transition-all duration-200 active:scale-95"
              >
                <span>QUERO ADQUIRIR O LIVRO</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

          </div>

        </div>

        {/* Ethical Disclaimer / Health Notice */}
        <div className="mt-12 rounded-2xl border border-slate-800/80 bg-[#0e1422]/60 p-4 sm:p-5 flex items-start gap-3.5 max-w-3xl mx-auto">
          <AlertCircle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong className="text-slate-100 font-semibold">Nota ética e de responsabilidade:</strong> Esta obra possui caráter reflexivo, educativo e de desenvolvimento pessoal. O livro não realiza diagnósticos, não substitui acompanhamento médico ou psicológico e não promete cura.
          </p>
        </div>

      </div>
    </section>
  );
};
