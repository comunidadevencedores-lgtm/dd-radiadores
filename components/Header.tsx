"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const WHATSAPP =
  "https://wa.me/5541999343887?text=Ol%C3%A1%2C%20estou%20vindo%20do%20site%2C%20quero%20agendar%20um%20hor%C3%A1rio.";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-slate-950/95 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center group">
            <Image
              src="/images/logo.webp"
              alt="DD Radiadores"
              width={160}
              height={91}
              priority
              className="h-12 md:h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-rose-500 after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:4132319088"
              className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              (41) 3231-9088
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white px-4 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-lg shadow-rose-600/30"
            >
              <MessageCircle className="w-4 h-4" />
              Orçamento Grátis
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950 border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-slate-200 hover:text-rose-400"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <a
                  href="tel:4132319088"
                  className="flex items-center gap-2 text-slate-300"
                >
                  <Phone className="w-5 h-5" />
                  (41) 3231-9088
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-rose-600 text-white px-4 py-3 rounded-full font-semibold"
                >
                  <MessageCircle className="w-5 h-5" />
                  Orçamento Grátis no WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
