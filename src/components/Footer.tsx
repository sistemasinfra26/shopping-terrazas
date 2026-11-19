"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Instagram, CheckCircle2, ArrowUpRight, Briefcase } from "./Icons";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#050607] border-t border-white/[0.08] relative pt-16 pb-12 overflow-hidden">
      {/* Decorative top amber line glow in exact logo yellow (#FFB303) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#ffb303]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/[0.07]">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-black/50 p-1 border border-[#ffb303]/40 shadow-lg shadow-[#ffb303]/10">
                  <Image
                    src="/logo.png"
                    alt="Shopping Terrazas"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain filter drop-shadow"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white tracking-tight">
                    Shopping Terrazas
                  </h3>
                  <span className="text-[11px] uppercase tracking-widest text-[#ffb303] font-semibold">
                    Portal Oficial • Próximamente
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
                El nuevo centro comercial de vanguardia en la zona norte. Más de
                35.000 m² diseñados con arquitectura al aire libre, terrazas
                gastronómicas y una experiencia única.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/shoppingterrazas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#ffb303] hover:border-[#ffb303]/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/shopping-terrazas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#ffb303] hover:border-[#ffb303]/40 transition-colors font-bold text-xs"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="mailto:rrhh@shoppingterrazas.com"
                title="rrhh@shoppingterrazas.com"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#ffb303] hover:border-[#ffb303]/40 transition-colors"
                aria-label="Email de Recursos Humanos"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links: Secciones activas */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#ffb303] mb-4">
              Navegación
            </h4>
            <ul className="flex flex-col gap-3 text-xs sm:text-sm text-zinc-400">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#trabaja-con-nosotros"
                  className="text-zinc-300 hover:text-[#ffb303] transition-colors flex items-center gap-1.5"
                >
                  <span>Trabajá con Nosotros</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#ffb303]/15 text-[#ffb303] border border-[#ffb303]/30 font-semibold">
                    HiringRoom
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:rrhh@shoppingterrazas.com"
                  className="hover:text-white transition-colors"
                >
                  Contacto de Selección
                </a>
              </li>
              <li>
                <a
                  href="mailto:comercial@shoppingterrazas.com"
                  className="hover:text-white transition-colors"
                >
                  Contacto Comercial
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#ffb303] mb-2">
              Novedades &amp; Avances de Obra
            </h4>
            <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
              Suscribite para recibir noticias del lanzamiento, avances del
              emprendimiento y aperturas comerciales exclusivas.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>¡Gracias por suscribirte a nuestras novedades!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-zinc-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#ffb303] transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#ffb303] to-[#e59e00] text-zinc-950 font-bold text-xs hover:from-[#ffc22e] hover:to-[#ffb303] transition-all cursor-pointer shadow-md shadow-[#ffb303]/20"
                  >
                    Suscribirme
                  </button>
                </div>
                <span className="text-[10px] text-zinc-500">
                  Sin spam. Podés darte de baja en cualquier momento.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © {new Date().getFullYear()} Shopping Terrazas. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-[11px]">
            <span>Términos y Condiciones</span>
            <span>Políticas de Privacidad</span>
            <span className="text-zinc-600">v0.2.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
