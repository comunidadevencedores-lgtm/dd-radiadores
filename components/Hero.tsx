"use client";

import { motion } from "framer-motion";
import { MessageCircle, Shield, Clock, Award } from "lucide-react";

const WHATSAPP =
  "https://wa.me/5541999343887?text=Ol%C3%A1%2C%20estou%20vindo%20do%20site%2C%20quero%20agendar%20um%20hor%C3%A1rio.";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient + pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-rose-950/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-900/20 via-transparent to-transparent" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-rose-600/20 border border-rose-500/30 text-rose-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-rose-400 rounded-full animate-pulse" />
              Radiadores DD · Curitiba - PR
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
              Especialistas em{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-600">
                Radiadores
              </span>{" "}
              e Ar Condicionado
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed">
              Soluções completas em manutenção de radiadores para veículos leves e
              pesados, nacionais e importados. Agilidade, excelência e preços que
              cabem no seu bolso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-rose-600 hover:bg-rose-500 text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl shadow-rose-600/40"
              >
                <MessageCircle className="w-6 h-6" />
                Faça seu orçamento grátis
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:bg-white/5"
              >
                Nossos serviços
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl sm:text-4xl font-black text-white">+20</div>
                <div className="text-sm text-slate-400 mt-1">Anos de experiência</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-white">100%</div>
                <div className="text-sm text-slate-400 mt-1">Satisfação</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-white">Rápido</div>
                <div className="text-sm text-slate-400 mt-1">Atendimento</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="grid gap-4">
              {[
                {
                  icon: Shield,
                  title: "Qualidade Garantida",
                  desc: "Peças novas e recondicionadas com excelência",
                },
                {
                  icon: Clock,
                  title: "Agilidade",
                  desc: "Atendimento rápido para você não ficar na mão",
                },
                {
                  icon: Award,
                  title: "Preço Justo",
                  desc: "Orçamento transparente e sem surpresas",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-rose-600/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-rose-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{item.title}</h3>
                    <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path
            d="M0 80L60 70C120 60 240 40 360 35C480 30 600 40 720 45C840 50 960 50 1080 45C1200 40 1320 30 1380 25L1440 20V80H0Z"
            fill="#0f172a"
          />
        </svg>
      </div>
    </section>
  );
}
