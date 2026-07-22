"use client";

import { MapPin, Mail, Phone, Instagram, MessageCircle } from "lucide-react";

const WHATSAPP =
  "https://wa.me/5541999343887?text=Ol%C3%A1%2C%20estou%20vindo%20do%20site%2C%20quero%20agendar%20um%20hor%C3%A1rio.";

export default function Footer() {
  return (
    <footer id="contato" className="bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-rose-600 flex items-center justify-center font-black text-white">
                DD
              </div>
              <div>
                <span className="font-bold text-white text-lg block leading-none">
                  Radiadores DD
                </span>
                <span className="text-xs text-rose-400 tracking-wider">
                  CURITIBA - PR
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Especialistas em manutenção de radiadores e ar condicionado para
              veículos leves e pesados.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://maps.google.com/?q=R.+Prof.+Nivaldo+Braga,+1922+-+Capão+da+Imbuia,+Curitiba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-slate-400 hover:text-rose-400 transition-colors"
                >
                  <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>
                    R. Prof. Nivaldo Braga, 1922
                    <br />
                    Capão da Imbuia - Curitiba/PR
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@ddradiadores.com.br"
                  className="flex items-center gap-3 text-slate-400 hover:text-rose-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  contato@ddradiadores.com.br
                </a>
              </li>
              <li>
                <a
                  href="tel:4132319088"
                  className="flex items-center gap-3 text-slate-400 hover:text-rose-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (41) 3231-9088
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-white mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Início", href: "#inicio" },
                { label: "Sobre nós", href: "#sobre" },
                { label: "Serviços", href: "#servicos" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-rose-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA + Social */}
          <div>
            <h4 className="font-bold text-white mb-4">Fale conosco</h4>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white px-5 py-3 rounded-full text-sm font-semibold transition-all mb-6"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <div>
              <p className="text-slate-500 text-xs mb-2">Siga no Instagram</p>
              <a
                href="https://www.instagram.com/radiadoresdd/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-rose-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                @radiadoresdd
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>Copyright © {new Date().getFullYear()} Radiadores DD | Curitiba - PR</p>
          <p>CNPJ: 24.394.046/0001-09</p>
        </div>
      </div>
    </footer>
  );
}
