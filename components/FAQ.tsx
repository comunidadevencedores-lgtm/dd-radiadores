"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Quanto tempo demora o conserto de um radiador?",
    answer:
      "Depende do problema, mas a maioria dos serviços é feita no mesmo dia. Traga o veículo pela manhã e, na maior parte dos casos, você já sai com ele pronto.",
  },
  {
    question: "Vocês atendem carros importados e veículos pesados?",
    answer:
      "Sim. Atendemos linha leve e pesada, nacionais e importados, com peças novas e recondicionadas de qualidade.",
  },
  {
    question: "Preciso agendar horário ou posso levar direto?",
    answer:
      "Recomendamos chamar no WhatsApp antes pra garantir atendimento rápido, mas também recebemos por ordem de chegada conforme disponibilidade.",
  },
  {
    question: "O orçamento tem algum custo?",
    answer:
      "Não. O orçamento é gratuito e sem compromisso — você só decide depois de saber o valor.",
  },
  {
    question: "Qual o horário de funcionamento da DD Radiadores?",
    answer:
      "Funcionamos de segunda a sexta das 8h às 18h e aos sábados das 8h às 12h.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-rose-400 font-semibold tracking-wider text-sm uppercase">
            Perguntas frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3">
            Dúvidas comuns antes de agendar
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className="bg-slate-950/50 border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                aria-expanded={openIndex === i}
              >
                <span className="font-bold text-white">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-rose-400 shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-slate-300 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
