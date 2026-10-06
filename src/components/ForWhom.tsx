import React from 'react';
import { Brain, Sparkles, Target, GraduationCap } from 'lucide-react';

export const ForWhom: React.FC = () => {
  const audienceCards = [
    {
      title: 'Para quem busca compreender melhor a ansiedade',
      description: 'Para quem deseja entender melhor os desafios relacionados à ansiedade.',
      icon: Brain,
    },
    {
      title: 'Para quem enfrenta desafios no dia a dia',
      description: 'Para quem procura reflexões e estratégias que possam ser aplicadas à rotina.',
      icon: Target,
    },
    {
      title: 'Para quem busca desenvolvimento pessoal',
      description: 'Para quem deseja refletir sobre seus pensamentos, sentimentos e comportamentos.',
      icon: Sparkles,
    },
    {
      title: 'Para estudantes',
      description: 'Para estudantes que buscam ferramentas e reflexões que possam contribuir para sua rotina.',
      icon: GraduationCap,
    },
  ];

  return (
    <section id="para-quem-e" className="relative py-16 md:py-24 border-t border-slate-800/60 bg-[#0d121c]/40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Identificação
          </span>
          <h2 className="mt-2 font-serif-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Para quem é o livro?
          </h2>
          <p className="mt-3 text-base text-slate-300">
            A leitura foi estruturada para quem busca clareza, acolhimento e ferramentas práticas em momentos de inquietação mental.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {audienceCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl border border-slate-800/90 bg-gradient-to-b from-[#131b2c]/80 to-[#0e1422]/90 p-6 sm:p-7 transition-all duration-300 hover:border-amber-500/40 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-950/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-2.5 text-amber-400 transition-colors group-hover:bg-amber-500/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-slate-400">
                    Público {idx + 1}
                  </span>
                </div>

                <h3 className="font-serif-display text-lg sm:text-xl font-bold text-slate-100 group-hover:text-amber-200 transition-colors leading-snug">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  &ldquo;{card.description}&rdquo;
                </p>
              </div>
            );
          })}
        </div>

        {/* Ethical boundary reminder */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-400 max-w-xl mx-auto leading-relaxed">
            * O conteúdo possui foco em desenvolvimento pessoal e reflexão. Não realizamos diagnósticos e não afirmamos tratar ou curar transtornos médicos ou psicológicos.
          </p>
        </div>

      </div>
    </section>
  );
};
