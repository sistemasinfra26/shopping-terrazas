"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Instagram, MapPin, Phone, CheckCircle2, ArrowUpRight, Briefcase } from "./Icons";

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
      {/* Decorative top amber line glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/[0.07]">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-black/50 p-1 border border-amber-500/40 shadow-lg shadow-amber-500/10">
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
                  <span className="text-[11px] uppercase tracking-widest text-amber-400 font-semibold">
                    Desarrollo Comercial • Preventa
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
                El centro comercial de diseño al aire libre más moderno y de mayor proyección
                en la zona norte. 35.000 m² diseñados para potenciar el crecimiento, visibilidad
                y rentabilidad de tu marca o franquicia.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors font-bold text-xs"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="mailto:comercial@shoppingterrazas.com"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                aria-label="Email Comercial"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links Column 1: Locales & Espacios */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Espacios Disponibles
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-zinc-400">
              <li>
                  <a href="#espacios" className="hover:text-white transition-colors">
                    Locales & Flagships
                  </a>
              </li>
              <li>
                  <a href="#espacios" className="hover:text-white transition-colors">
                    Espacios Gastronómicos
                  </a>
              </li>
              <li>
                  <a href="#espacios" className="hover:text-white transition-colors">
                    Islas & Pop-Up Stores
                  </a>
              </li>
              <li>
                  <a href="#espacios" className="hover:text-white transition-colors">
                    Grandes Tiendas & Servicios
                  </a>
              </li>
              <li>
                  <a href="#formulario-locatarios" className="text-amber-300 font-semibold hover:text-white transition-colors flex items-center gap-1">
                    <span>★ Postular mi Marca</span>
                  </a>
              </li>
            </ul>
          </div>

          {/* Navigation Links Column 2: El Proyecto & Ubicación */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              El Proyecto
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-zinc-400">
              <li>
                  <a href="#proyecto" className="hover:text-white transition-colors">
                    Masterplan & Métricas
                  </a>
              </li>
              <li>
                  <a href="#ventajas" className="hover:text-white transition-colors">
                    Infraestructura Técnica
                  </a>
              </li>
              <li>
                  <a href="#ubicacion" className="hover:text-white transition-colors">
                    Ubicación & Accesos
                  </a>
              </li>
              <li>
                  <a href="#ubicacion" className="hover:text-white transition-colors">
                    Horarios de Atención
                  </a>
              </li>
              <li>
                  <a href="mailto:comercial@shoppingterrazas.com" className="hover:text-white transition-colors">
                    Contacto para Franquicias
                  </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
              Novedades Comerciales & Avances de Obra
            </h4>
            <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
              Suscríbete para recibir los informes de avance del emprendimiento, planos actualizados
              y convocatorias exclusivas para nuevas marcas.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>¡Gracias! Te mantendremos informado sobre las novedades comerciales.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Tu correo corporativo..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-zinc-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 flex-1"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs transition-colors shrink-0 shadow-md shadow-amber-500/20 cursor-pointer"
                >
                  Suscribirme
                </button>
              </form>
            )}

            <div className="mt-6 flex flex-col gap-1.5 text-[11px] text-zinc-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Predio: Av. de las Terrazas 4500 (Panamericana Km 28)
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                Línea Comercial: +54 11 4890-2150 (Lun a Vie 09 a 19 hs)
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} Shopping Terrazas S.A. Todos los derechos reservados. Comercialización exclusiva.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Términos & Condiciones
            </a>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Políticas de Privacidad
            </a>
              <a href="mailto:comercial@shoppingterrazas.com" className="hover:text-zinc-300 transition-colors">
                comercial@shoppingterrazas.com
              </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
