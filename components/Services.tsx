"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Snowflake,
  Package,
  BadgeDollarSign,
  MessageCircle,
  Truck,
} from "lucide-react";

const WHATSAPP =
  "https://wa.me/5541999343887?text=Ol%C3%A1%2C%20estou%20vindo%20do%20site%2C%20quero%20agendar%20um%20hor%C3%A1rio.";

const services = [
  {
    icon: Wrench,
    title: "Manutenção de Radiadores e Intercooler",
    description:
      "Conserto, limpeza, solda e troca de radiadores e intercoolers para linha leve e pesada. Diagnóstico preciso e serviço de qualidade.",
  },
  {
    icon: Snowflake,
    title: "Conserto de Ar Condicionado",
    description:
      "Manutenção completa do sistema de ar-condicionado automotivo. Recarga de gás, troca de componentes e diagnóstico de falhas.",
  },
  {
    icon: Package,
    title: "Peças Novas e Recondicionadas",
    description:
      "Trabalhamos com peças novas de primeira linha e opções recondicionadas de alta qualidade, sempre com garantia.",
  },
  {
    icon: BadgeDollarSign,
    title: "Preço Justo",
    description:
      "Orçamento transparente, sem surpresas. Qualidade com o melhor custo-benefício de Curitiba.",
  },
  {
    icon: Truck,
    title: "Linha Leve e Pesada",
    description:
      "Atendemos carros de passeio, utilitários, caminhões e veículos pesados nacionais e importados.",
  },
  {
    icon: MessageCircle,
    title: "Atendimento Ágil",
    description:
      "Equipe experiente e capacitada para resolver o seu problema com rapidez e profissionalismo.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-red-400 font-semibold tracking-wider text-sm uppercase">
            O que fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-5">
            Nossos Principais Serviços
          </h2>
          <p className="text-slate-300 text-lg">
            Somos especialistas em radiadores das linhas leve e pesada. Realizamos
            serviços em veículos nacionais e importados utilizando produtos novos e
            recondicionados.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative bg-slate-900/80 border border-white/5 hover:border-red-500/40 rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/20 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-red-600/15 group-hover:bg-red-600/25 flex items-center justify-center mb-5 transition-colors">
                <service.icon className="w-7 h-7 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-500 text-white px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl shadow-red-600/30"
          >
            <MessageCircle className="w-6 h-6" />
            Faça seu orçamento agora — sem custo
          </a>
        </motion.div>
      </div>
    </section>
  );
}
