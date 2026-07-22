"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Mais de 20 anos de experiência no mercado",
  "Atendimento a veículos leves e pesados",
  "Nacionais e importados",
  "Peças novas e recondicionadas de qualidade",
  "Equipe experiente e capacitada",
  "Preço justo e orçamento sem custo",
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-red-400 font-semibold tracking-wider text-sm uppercase">
              Quem somos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-6 leading-tight">
              Seu veículo nas mãos de quem entende
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              A <strong className="text-white">Radiadores DD</strong> é uma empresa
              especializada na manutenção de radiadores e sistemas de ar-condicionado
              para veículos leves e pesados, nacionais e importados.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Com mais de <strong className="text-white">20 anos de experiência</strong>,
              oferecemos serviços de alta qualidade, garantindo o bom desempenho e a
              durabilidade. Nosso compromisso é com a{" "}
              <strong className="text-white">segurança</strong>, a eficiência e a{" "}
              <strong className="text-white">satisfação dos clientes</strong>, sempre
              prezando por atendimento ágil e preço justo.
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="bg-red-600/20 border border-red-500/30 rounded-xl px-5 py-3">
                <div className="text-2xl font-black text-white">+20</div>
                <div className="text-xs text-red-300 uppercase tracking-wide">
                  Anos de experiência
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-3">
                <div className="text-2xl font-black text-white">Curitiba</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">
                  Referência no mercado
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-slate-950/50 border border-white/10 rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-xl font-bold text-white mb-6">
              Por que escolher a DD Radiadores?
            </h3>
            <ul className="space-y-4">
              {benefits.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-slate-200">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
