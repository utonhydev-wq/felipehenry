import React, { useState } from 'react';
import { Mail, User, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { submitLead } from '../services/leadService';

export const LeadCapture: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setStatus('error');
      setFeedbackMessage('Por favor, informe seu nome e e-mail.');
      return;
    }

    setStatus('loading');
    setFeedbackMessage('');

    try {
      const res = await submitLead({ name, email });
      if (res.success) {
        setStatus('success');
        setFeedbackMessage(res.message);
        setName('');
        setEmail('');
      } else {
        setStatus('error');
        setFeedbackMessage(res.message);
      }
    } catch {
      setStatus('error');
      setFeedbackMessage('Não foi possível processar agora. Tente novamente mais tarde.');
    }
  };

  return (
    <section id="newsletter" className="relative py-16 md:py-24 border-t border-slate-800/60 bg-[#0d121c]/60">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl border border-slate-800/90 bg-gradient-to-b from-[#131b2c] to-[#0c101a] p-8 sm:p-12 shadow-xl">
          
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Comunicação Direta
            </span>
            <h2 className="mt-2 font-serif-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Receba conteúdos do Prof. Felipe Henry
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
              Deixe seu contato para receber novidades, reflexões e conteúdos relacionados ao tema.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4 max-w-lg mx-auto">
            
            {/* Field: Nome */}
            <div>
              <label htmlFor="lead-name" className="block text-xs font-medium text-slate-300 mb-1.5">
                Seu nome completo
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                  <User className="h-4 w-4" />
                </div>
                <input
                  id="lead-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Como prefere ser chamado?"
                  className="w-full rounded-xl border border-slate-700/80 bg-slate-900/80 py-3.5 pl-10 pr-4 text-sm text-slate-100 placeholder-slate-500 transition-all focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Field: E-mail */}
            <div>
              <label htmlFor="lead-email" className="block text-xs font-medium text-slate-300 mb-1.5">
                Seu melhor e-mail
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                  <Mail className="h-4 w-4" />
                </div>
                <input
                  id="lead-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seuemail@exemplo.com"
                  className="w-full rounded-xl border border-slate-700/80 bg-slate-900/80 py-3.5 pl-10 pr-4 text-sm text-slate-100 placeholder-slate-500 transition-all focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Submission feedback */}
            {status === 'success' && (
              <div className="flex items-center gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-xs sm:text-sm text-emerald-300">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>{feedbackMessage}</span>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-xs sm:text-sm text-red-300">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{feedbackMessage}</span>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-amber-950/20 transition-all duration-200 hover:from-amber-400 hover:to-amber-500 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>ENVIANDO...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>QUERO RECEBER</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-[11px] text-center text-slate-400 pt-1">
              Respeitamos sua privacidade. Seus dados não serão compartilhados com terceiros.
            </p>

          </form>

        </div>

      </div>
    </section>
  );
};
