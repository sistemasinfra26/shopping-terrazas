"use client";

import React from "react";
import Image from "next/image";
import { Briefcase, MapPin, ChevronRight, Building2, ChevronDown } from "./Icons";

interface HeroProps {
  onOpenHoursModal: () => void;
  onOpenMapModal: () => void;
}

export function Hero({ onOpenHoursModal, onOpenMapModal }: HeroProps) {
  return (
    <section id="inicio" className="relative w-full flex flex-col items-center overflow-hidden pb-20 lg:pb-28">
      {/* 1. FULL-WIDTH CINEMATIC HERO IMAGE BANNER (100% Ancho de Pantalla & Ultra-Alta Resolución) */}
      <div className="relative w-full h-[64vh] sm:h-[75vh] lg:h-[85vh] min-h-[460px] max-h-[940px] overflow-hidden bg-black">
        {/* Render 2.5K Ultra HD (2560x1440 Lanczos3 Crisp) */}
        <Image
          src="/hero-shopping-terrazas.webp"
          alt="Fachada principal y terrazas al aire libre de Shopping Terrazas"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center sm:object-[center_35%]"
        />

        {/* Top subtle vignette so navbar blends smoothly */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#08090a]/80 via-[#08090a]/40 to-transparent pointer-events-none" />

        {/* Bottom deep gradient fade for seamless transition to dark content */}
        <div className="absolute inset-x-0 bottom-0 h-44 sm:h-64 bg-gradient-to-t from-[#08090a] via-[#08090a]/75 to-transparent pointer-events-none" />

        {/* Down Indicator / Scroll Cue */}
        <a
          href="#propuesta-comercial"
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 text-zinc-400 hover:text-[#ffb303] transition-colors text-xs font-medium cursor-pointer"
        >
          <span>Conoce la propuesta</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#ffb303]" />
        </a>
      </div>

      {/* 2. COMMERCIAL PITCH & HEADLINE SECTION (Placed right below the full-width image) */}
      <div
        id="propuesta-comercial"
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center w-full mt-6 sm:mt-10 lg:mt-14 scroll-mt-24"
      >
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#ffb303]/40 backdrop-blur-md mb-6 sm:mb-8 animate-in fade-in duration-700">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffb303] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffb303]"></span>
          </span>
          <span className="text-xs uppercase tracking-widest text-[#ffb303] font-semibold">
            Etapa de Comercialización & Preventa
          </span>
          <span className="text-zinc-600">•</span>
          <button
            onClick={onOpenHoursModal}
            className="text-xs text-zinc-300 hover:text-white transition-colors flex items-center gap-1 cursor-pointer font-medium"
          >
            Oficina Comercial Lun a Vie 09:00 a 19:00 hs
            <ChevronRight className="w-3.5 h-3.5 text-[#ffb303]" />
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
          proyectado de <strong className="text-[#ffb303] font-semibold">+450.000 visitantes mensuales</strong> con
          alto poder adquisitivo. Espacios disponibles para locales, gastronomía e islas comerciales.
        </p>

        {/* CTA Button Group with Exact Logo Yellow (#ffb303) */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none">
          <a
            href="#formulario-locatarios"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#ffb303] via-[#ffc22e] to-[#ffb303] text-zinc-950 font-bold text-base shadow-xl shadow-[#ffb303]/30 hover:shadow-[#ffb303]/45 hover:scale-[1.02] active:scale-95 transition-all duration-200"
          >
            <Briefcase className="w-5 h-5 text-zinc-950" />
            <span>Postular mi Marca / Franquicia</span>
          </a>

          <a
            href="#espacios"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-zinc-900/80 hover:bg-zinc-800 text-white font-semibold text-base border border-white/10 hover:border-[#ffb303]/50 backdrop-blur-md active:scale-95 transition-all duration-200"
          >
            <Building2 className="w-5 h-5 text-[#ffb303]" />
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
          <div className="glass-card p-5 rounded-2xl text-left border border-white/[0.06] hover:border-[#ffb303]/40 transition-all duration-300 group">
            <div className="text-[#ffb303] mb-2 font-mono text-xs uppercase tracking-wider font-semibold">
              Afluencia Estimada
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-[#ffb303] transition-colors">
              +450K
            </div>
            <p className="mt-1 text-xs text-zinc-400">Visitantes mensuales proyectados (Nivel ABC1)</p>
          </div>

          <div className="glass-card p-5 rounded-2xl text-left border border-white/[0.06] hover:border-[#ffb303]/40 transition-all duration-300 group">
            <div className="text-[#ffb303] mb-2 font-mono text-xs uppercase tracking-wider font-semibold">
              Superficie Total
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-[#ffb303] transition-colors">
              35.000 m²
            </div>
            <p className="mt-1 text-xs text-zinc-400">Paseo comercial y terrazas al aire libre</p>
          </div>

          <div className="glass-card p-5 rounded-2xl text-left border border-white/[0.06] hover:border-[#ffb303]/40 transition-all duration-300 group">
            <div className="text-[#ffb303] mb-2 font-mono text-xs uppercase tracking-wider font-semibold">
              Espacios Comprometidos
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-[#ffb303] transition-colors">
              85%
            </div>
            <p className="mt-1 text-xs text-zinc-400">De locales ya reservados por primeras marcas</p>
          </div>

          <div className="glass-card p-5 rounded-2xl text-left border border-white/[0.06] hover:border-[#ffb303]/40 transition-all duration-300 group">
            <div className="text-[#ffb303] mb-2 font-mono text-xs uppercase tracking-wider font-semibold">
              Parking Clientes
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-[#ffb303] transition-colors">
              1.500+
            </div>
            <p className="mt-1 text-xs text-zinc-400">Cocheras cubiertas con guiado inteligente</p>
          </div>
        </div>
      </div>
    </section>
  );
}
