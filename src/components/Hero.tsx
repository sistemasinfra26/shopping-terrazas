"use client";

import React from "react";
import Image from "next/image";
import { Clock, Briefcase, MapPin, ChevronRight, Building2, TrendingUp, Users, ArrowUpRight, FileText } from "./Icons";

interface HeroProps {
  onOpenHoursModal: () => void;
  onOpenMapModal: () => void;
}

export function Hero({ onOpenHoursModal, onOpenMapModal }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden pt-8 pb-16 lg:py-24"
    >
      {/* Background with Ambient Glows and Architectural Overlay */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Warm Mustard Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-amber-600/20 via-amber-500/15 to-transparent blur-[130px] rounded-full" />
        <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-amber-400/10 blur-[150px] rounded-full" />

        {/* High-res Atmospheric Architecture Background Image with Deep Gradient Masks */}
        <div className="absolute inset-0 opacity-25 mix-blend-luminosity">
          <Image
            src="https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=2000&q=80"
            alt="Arquitectura moderna de Shopping Terrazas"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Gradient Mask Overlays for seamless luxury dark blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090a]/80 via-[#08090a]/90 to-[#08090a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-amber-500/30 backdrop-blur-md mb-8 animate-in fade-in duration-700">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
          </span>
          <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">
            Etapa de Comercialización & Preventa
          </span>
          <span className="text-zinc-600">•</span>
          <button
            onClick={onOpenHoursModal}
            className="text-xs text-zinc-300 hover:text-white transition-colors flex items-center gap-1 cursor-pointer font-medium"
          >
            Oficina Comercial Lun a Vie 09:00 a 19:00 hs
            <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>

        {/* Main Hero Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.1] sm:leading-[1.1]">
          El escenario ideal para expandir y{" "}
          <span className="gold-gradient-text drop-shadow-sm">hacer brillar tu marca</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-zinc-300 max-w-3xl font-normal leading-relaxed">
          Súmate al nuevo centro comercial de vanguardia en la zona norte. Más de{" "}
          <strong className="text-white font-semibold">35.000 m²</strong> diseñados para captar un flujo
          proyectado de <strong className="text-amber-300 font-semibold">+450.000 visitantes mensuales</strong> con
          alto poder adquisitivo. Espacios disponibles para locales, gastronomía e islas comerciales.
        </p>

        {/* CTA Button Group */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none">
          <a
            href="#formulario-locatarios"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-zinc-950 font-bold text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-200"
          >
            <Briefcase className="w-5 h-5 text-zinc-950" />
            <span>Postular mi Marca / Franquicia</span>
          </a>

          <a
            href="#espacios"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-zinc-900/80 hover:bg-zinc-800 text-white font-semibold text-base border border-white/10 hover:border-amber-400/40 backdrop-blur-md active:scale-95 transition-all duration-200"
          >
            <Building2 className="w-5 h-5 text-amber-400" />
            <span>Ver Tipologías de Locales</span>
          </a>

          <button
            onClick={onOpenMapModal}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-transparent hover:bg-white/[0.04] text-zinc-300 hover:text-white font-medium text-base transition-colors cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-zinc-400" />
            <span>Cómo llegar al Shopping</span>
          </button>
        </div>

        {/* Stats Strip / Key Investment Metrics */}
        <div className="mt-16 sm:mt-20 w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          <div className="glass-card p-5 rounded-2xl text-left border border-white/[0.06] hover:border-amber-500/30 transition-all duration-300 group">
            <div className="text-amber-400 mb-2 font-mono text-xs uppercase tracking-wider font-semibold">
              Afluencia Estimada
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-amber-300 transition-colors">
              +450K
            </div>
            <p className="mt-1 text-xs text-zinc-400">Visitantes mensuales proyectados (Nivel ABC1)</p>
          </div>

          <div className="glass-card p-5 rounded-2xl text-left border border-white/[0.06] hover:border-amber-500/30 transition-all duration-300 group">
            <div className="text-amber-400 mb-2 font-mono text-xs uppercase tracking-wider font-semibold">
              Superficie Total
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-amber-300 transition-colors">
              35.000 m²
            </div>
            <p className="mt-1 text-xs text-zinc-400">Paseo comercial y terrazas al aire libre</p>
          </div>

          <div className="glass-card p-5 rounded-2xl text-left border border-white/[0.06] hover:border-amber-500/30 transition-all duration-300 group">
            <div className="text-amber-400 mb-2 font-mono text-xs uppercase tracking-wider font-semibold">
              Espacios Comprometidos
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-amber-300 transition-colors">
              85%
            </div>
            <p className="mt-1 text-xs text-zinc-400">De locales ya reservados por primeras marcas</p>
          </div>

          <div className="glass-card p-5 rounded-2xl text-left border border-white/[0.06] hover:border-amber-500/30 transition-all duration-300 group">
            <div className="text-amber-400 mb-2 font-mono text-xs uppercase tracking-wider font-semibold">
              Parking Clientes
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-amber-300 transition-colors">
              1.500+
            </div>
            <p className="mt-1 text-xs text-zinc-400">Cocheras cubiertas con guiado inteligente</p>
          </div>
        </div>
      </div>
    </section >
  );
}
