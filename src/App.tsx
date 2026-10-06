/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutAuthor } from './components/AboutAuthor';
import { AboutBook } from './components/AboutBook';
import { ForWhom } from './components/ForWhom';
import { CallToAction } from './components/CallToAction';
import { LeadCapture } from './components/LeadCapture';
import { InstagramSection } from './components/InstagramSection';
import { Footer } from './components/Footer';
import { FloatingMobileCta } from './components/FloatingMobileCta';

export const OFFICIAL_DATA = {
  author: 'Prof. Felipe Henry',
  bookTitle: 'A Guerra Travada',
  bookSubtitle: 'A Batalha contra a Ansiedade',
  instagramUrl: 'https://www.instagram.com/prof.felipehenry',
  logoUrl: 'https://i.postimg.cc/Bv9TYMmJ/WA-1791250022248.jpg',
  purchaseUrl: 'https://pay.kiwify.com.br/CU43Uf8',
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-200">
      {/* 3-zone standard navigation top bar */}
      <Navbar
        purchaseUrl={OFFICIAL_DATA.purchaseUrl}
        instagramUrl={OFFICIAL_DATA.instagramUrl}
        logoUrl={OFFICIAL_DATA.logoUrl}
      />

      <main className="flex-1">
        {/* 1. Hero / Primeira Dobra */}
        <Hero
          purchaseUrl={OFFICIAL_DATA.purchaseUrl}
          instagramUrl={OFFICIAL_DATA.instagramUrl}
          logoUrl={OFFICIAL_DATA.logoUrl}
        />

        {/* 2. Sobre o Autor */}
        <AboutAuthor
          instagramUrl={OFFICIAL_DATA.instagramUrl}
          logoUrl={OFFICIAL_DATA.logoUrl}
        />

        {/* 3. Sobre o Livro */}
        <AboutBook purchaseUrl={OFFICIAL_DATA.purchaseUrl} />

        {/* 4. Para Quem É o Livro? */}
        <ForWhom />

        {/* 5. Chamada Para Ação (High conversion focal section) */}
        <CallToAction purchaseUrl={OFFICIAL_DATA.purchaseUrl} />

        {/* 6. Captação de Leads (Extensible for email marketing / webhooks) */}
        <LeadCapture />

        {/* 7. Instagram Section */}
        <InstagramSection instagramUrl={OFFICIAL_DATA.instagramUrl} />
      </main>

      {/* 8. Rodapé */}
      <Footer
        purchaseUrl={OFFICIAL_DATA.purchaseUrl}
        instagramUrl={OFFICIAL_DATA.instagramUrl}
        logoUrl={OFFICIAL_DATA.logoUrl}
      />

      {/* 9. CTA Fixo no Celular (Discreet, high-converting sticky bar) */}
      <FloatingMobileCta purchaseUrl={OFFICIAL_DATA.purchaseUrl} />
    </div>
  );
}
