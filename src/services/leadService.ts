import { LeadFormData, LeadSubmissionResult } from '../types';

const LEADS_STORAGE_KEY = 'prof_felipe_henry_leads';

/**
 * Service de captação de leads preparado para integração futura com
 * ferramentas de E-mail Marketing (ActiveCampaign, Mailchimp, RD Station,
 * ConvertKit, Resend ou Webhook customizado).
 * 
 * Atualmente armazena os leads no localStorage do navegador para não
 * perder contatos durante os testes e demonstrações até a definição da plataforma.
 */
export async function submitLead(data: LeadFormData): Promise<LeadSubmissionResult> {
  // Simulação de delay de rede suave (350ms)
  await new Promise((resolve) => setTimeout(resolve, 350));

  try {
    // Validação básica
    if (!data.name.trim() || !data.email.trim()) {
      return {
        success: false,
        message: 'Por favor, preencha todos os campos.',
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      return {
        success: false,
        message: 'Por favor, insira um e-mail válido.',
      };
    }

    const newLead: LeadFormData = {
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      timestamp: new Date().toISOString(),
    };

    // Armazenamento em localStorage seguro
    const stored = localStorage.getItem(LEADS_STORAGE_KEY);
    const leads: LeadFormData[] = stored ? JSON.parse(stored) : [];
    
    // Evita duplicar o mesmo e-mail na lista local
    const exists = leads.some((l) => l.email === newLead.email);
    if (!exists) {
      leads.push(newLead);
      localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(leads));
    }

    /*
     * PONTO DE EXTENSÃO PARA INTEGRAÇÃO FUTURA:
     * Para conectar a um webhook ou API de Email Marketing no futuro:
     * 
     * await fetch('/api/subscribe', {
     *   method: 'POST',
     *   headers: { 'Content-Type': 'application/json' },
     *   body: JSON.stringify(newLead)
     * });
     */

    return {
      success: true,
      message: 'Inscrição confirmada com sucesso! Você receberá nossos conteúdos.',
    };
  } catch (error) {
    console.error('Erro ao registrar lead:', error);
    return {
      success: false,
      message: 'Ocorreu um erro ao enviar seus dados. Tente novamente em instantes.',
    };
  }
}
