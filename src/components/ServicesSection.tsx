"use client";

import React from "react";
import { SERVICES_DATA } from "@/data/mockData";
import {
  Car,
  Wifi,
  PawPrint,
  ShieldCheck,
  Zap,
  Sparkles,
  CheckCircle2,
} from "./Icons";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Car,
  Wifi,
  PawPrint,
  ShieldCheck,
  Zap,
  Sparkles,
};

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-[#0a0b0e] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comodidad & Experiencia</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Servicios diseñados para tu <span className="gold-gradient-text">máxima tranquilidad</span>.
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Cada detalle de Shopping Terrazas está pensado para que tu visita sea fluida, segura y placentera.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => {
            const Icon = iconMap[service.iconName] || Sparkles;
            return (
              <div
                key={service.id}
                className="bg-[#121418] border border-white/[0.07] hover:border-amber-500/40 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {service.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-xs font-semibold text-amber-400 block mt-0.5">
                    {service.subtitle}
                  </span>

                  <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>Sin costo para clientes</span>
                  </span>
                  <span className="text-[11px] text-zinc-500 font-mono">Conserjería Nivel 0</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

