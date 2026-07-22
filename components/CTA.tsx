"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP =
  "https://wa.me/5541999343887?text=Ol%C3%A1%2C%20estou%20vindo%20do%20site%2C%20quero%20agendar%20um%20hor%C3%A1rio.";

export default function CTA() {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-rose-700 via-rose-600 to-rose-700" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_50%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Faça hoje seu orçamento!
          </h2>
          <p className="text-xl text-rose-100 mb-2 font-medium">
            Sem custo · Referência em Curitiba
          </p>
          <p className="text-rose-100/80 mb-10 max-w-2xl mx-auto">
            Tem alguma dúvida? Fale conosco agora mesmo e garanta o melhor
            atendimento para o seu veículo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-rose-700 hover:bg-rose-50 px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp — Orçamento Grátis
            </a>
            <a
              href="tel:4132319088"
              className="inline-flex items-center gap-3 border-2 border-white/40 hover:border-white text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:bg-white/10 w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              (41) 3231-9088
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
