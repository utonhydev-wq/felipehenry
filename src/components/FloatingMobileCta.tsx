import React, { useEffect, useState } from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

interface FloatingMobileCtaProps {
  purchaseUrl: string;
}

export const FloatingMobileCta: React.FC<FloatingMobileCtaProps> = ({ purchaseUrl }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Exibe o botão flutuante após 180px de scroll
      if (window.scrollY > 180) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div 
      className="fixed bottom-0 inset-x-0 z-30 p-3 sm:hidden bg-gradient-to-t from-[#0b0f17] via-[#0b0f17]/95 to-transparent backdrop-blur-md transition-all duration-300"
      style={{ maxHeight: '12vh' }}
    >
      <div className="mx-auto max-w-sm">
        <a
          href={purchaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-4 text-xs font-bold text-slate-950 shadow-xl shadow-amber-950/50 active:scale-[0.98] transition-transform"
        >
          <BookOpen className="h-4 w-4" />
          <span>CONHECER O LIVRO</span>
          <ExternalLink className="h-3.5 w-3.5 opacity-80" />
        </a>
      </div>
    </div>
  );
};
