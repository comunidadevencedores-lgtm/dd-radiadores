"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP =
  "https://wa.me/5541999343887?text=Ol%C3%A1%2C%20estou%20vindo%20do%20site%2C%20quero%20agendar%20um%20hor%C3%A1rio.";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center shadow-2xl shadow-green-900/40 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white fill-white" />
      <span className="absolute right-full mr-3 bg-slate-900 text-white text-sm font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Orçamento grátis
      </span>
    </motion.a>
  );
}
