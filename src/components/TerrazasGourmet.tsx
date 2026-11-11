"use client";

import React, { useState } from "react";
import Image from "next/image";
import { DINING_HIGHLIGHTS, DiningItem } from "@/data/mockData";
import { Utensils, Clock, Sparkles, MapPin, ArrowUpRight, Star } from "./Icons";

export function TerrazasGourmet() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="gastronomia" className="py-24 relative overflow-hidden scroll-mt-20">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-amber-600/10 blur-[170px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-amber-500/5 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <Utensils className="w-3.5 h-3.5" />
            <span>Experiencia Terrazas & Gourmet</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Sabores memorables bajo el cielo abierto.
          </h2>
          <p className="mt-4 text-zinc-300 text-base sm:text-lg leading-relaxed">
            Un circuito culinario de primer nivel con terrazas panorámicas, coctelería de autor y cocinas 
            al fuego. El punto de encuentro predilecto para almuerzos de negocios, atardeceres con amigos 
            y cenas inolvidables.
          </p>
        </div>

        {/* Feature Editorial Highlight Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Big Visual Card */}
          <div className="lg:col-span-7 relative h-[420px] sm:h-[500px] rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1400&q=80"
              alt="Terrazas Rooftop al atardecer"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090a0c] via-black/40 to-transparent" />

            {/* Floating Top Badge */}
            <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-bold flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Sunset & Live Music</span>
            </div>

            {/* Floating Info on Image */}
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                Rooftop & Coctelería
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Aura Sky Bar & Terrazas
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-300 max-w-xl line-clamp-2">
                Disfruta de las Golden Hour Sessions con DJ en vivo, tragos diseñados por bartenders de renombre 
                y una vista panorámica inigualable de la ciudad.
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs text-amber-200">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  Dom a Jue hasta 00:00 hs | Vie y Sáb hasta 02:00 hs
                </span>
              </div>
            </div>
          </div>

          {/* Side Editorial Details */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="glass-card p-6 rounded-3xl border border-white/10 hover:border-amber-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                  01
                </div>
                <h4 className="text-lg font-bold text-white">Cocina Internacional & Fuego</h4>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Desde cortes madurados a la brasa hasta trattorias italianas artesanales, sushi nikkei 
                y gastronomía de autor concebida por reconocidos chefs locales e internacionales.
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-white/10 hover:border-amber-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                  02
                </div>
                <h4 className="text-lg font-bold text-white">Ambiente Bioclimático</h4>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Pérgolas motorizadas, calefacción radiante en invierno y microclima con nebulización 
                refrescante en verano para disfrutar del exterior durante los 365 días del año.
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-white/10 hover:border-amber-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                  03
                </div>
                <h4 className="text-lg font-bold text-white">Café de Especialidad & Brunch</h4>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Rincones tranquilos rodeados de fuentes y jardines para desayunos tempranos, reuniones 
                de trabajo con Wi-Fi de alta velocidad o meriendas con pastelería de masa madre.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Restaurants Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DINING_HIGHLIGHTS.map((item) => (
            <div
              key={item.id}
              className="bg-[#111317] border border-white/[0.07] hover:border-amber-500/40 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5 group flex flex-col justify-between"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-transparent to-black/20" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-black/70 backdrop-blur-md text-amber-400 border border-amber-500/30">
                  {item.type}
                </span>
                <span className="absolute bottom-3 left-3 text-xs text-zinc-300 flex items-center gap-1 font-medium bg-black/60 px-2 py-0.5 rounded">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  {item.location}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                    {item.atmosphere}
                  </p>

                  <div className="mt-4 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                    <span className="text-[10px] uppercase tracking-wider text-amber-400 font-semibold block">
                      Recomendado de la casa:
                    </span>
                    <span className="text-xs text-zinc-200 font-medium">
                      {item.featuredPlate}
                    </span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="text-zinc-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-zinc-500" />
                    {item.openingHours}
                  </span>
                  <a
                    href="#horarios"
                    className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Ver Reserva</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

