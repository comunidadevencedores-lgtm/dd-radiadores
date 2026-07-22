"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const photos = [
  {
    src: "/images/fachada-dd-radiadores.webp",
    alt: "Fachada da DD Radiadores em Curitiba",
    caption: "Nossa fachada",
  },
  {
    src: "/images/manutencao-veiculo-dd.webp",
    alt: "Manutenção de veículo na DD Radiadores",
    caption: "Manutenção especializada",
  },
  {
    src: "/images/carga-de-gas-ar-condicionado.webp",
    alt: "Recarga de gás de ar-condicionado automotivo",
    caption: "Recarga de ar-condicionado",
  },
];

export default function Gallery() {
  return (
    <section className="py-20 md:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-red-400 font-semibold tracking-wider text-sm uppercase">
            Nossa estrutura
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-5">
            Conheça a DD Radiadores
          </h2>
          <p className="text-slate-300 text-lg">
            Estrutura completa para atender veículos leves e pesados com agilidade e
            qualidade.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-white/5 hover:border-red-500/40 transition-all duration-300 h-72"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-semibold">{photo.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
