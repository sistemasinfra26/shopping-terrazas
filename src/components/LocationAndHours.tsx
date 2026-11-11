"use client";

import React, { useState } from "react";
import {
  MapPin,
  Clock,
  Car,
  Navigation,
  Compass,
  ArrowUpRight,
  CheckCircle2,
  Phone,
  Mail,
  Briefcase,
  Building2,
} from "./Icons";

interface LocationProps {
  onOpenMapModal: () => void;
}

export function LocationAndHours({ onOpenMapModal }: LocationProps) {
  const [selectedTransport, setSelectedTransport] = useState<"auto" | "reuniones" | "transporte">("auto");

  const commercialHours = [
    {
      sector: "Atención a Marcas, Locatarios & Franquicias",
      days: "Lunes a Viernes",
      hours: "09:00 a 19:00 hs",
      note: "Atención presencial en oficinas del shopping o por videollamada",
    },
    {
      sector: "Visitas a Locales & Recorrido del Predio",
      days: "Martes, Jueves y Sábados",
      hours: "10:00 a 16:30 hs",
      note: "Con cita previa para evaluación in situ de metrajes y frentes",
    },
    {
      sector: "Comité de Comercialización & Asignación",
      days: "Miércoles y Viernes",
      hours: "14:00 a 18:00 hs",
      note: "Análisis de propuestas y reserva de ubicaciones",
    },
    {
      sector: "WhatsApp & Asesoría Comercial Digital",
      days: "Lunes a Sábados",
      hours: "08:30 a 20:00 hs",
      note: "Respuesta en menos de 2 horas hábiles",
    },
  ];

  return (
    <section id="ubicacion" className="py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Ubicación Estratégica & Accesos</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ubicación privilegiada y <span className="gold-gradient-text">cómo llegar al Shopping</span>.
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base leading-relaxed">
            Emplazado en el polo comercial de mayor crecimiento de la zona sur, sobre
            Autopista Panamericana Km 28. Accesos directos y cocheras cubiertas para visitas e interesados.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Commercial Schedules */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-7 rounded-3xl bg-[#111317] border border-white/[0.08] shadow-xl">
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Oficina de Locaciones & Comercialización</h3>
                    <span className="text-[11px] text-zinc-400">Atención personalizada para nuevas marcas</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-950/60 text-emerald-300 border border-emerald-500/40">
                  Operativo
                </span>
              </div>

              <div className="divide-y divide-white/[0.06]">
                {commercialHours.map((item, index) => (
                  <div key={index} className="py-4">
                    <div className="flex items-baseline justify-between">
                      <h4 className="text-sm font-semibold text-white">{item.sector}</h4>
                      <span className="text-xs font-bold text-amber-400 font-mono">
                        {item.hours}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center justify-between text-xs text-zinc-400">
                      <span>{item.days}</span>
                    </div>
                    <p className="mt-1 text-[11px] text-zinc-400 italic">{item.note}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-white/[0.08] bg-white/[0.02] -mx-7 -mb-7 p-6 rounded-b-3xl">
                <div className="flex flex-col gap-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">Línea directa para marcas:</span>
                    <a
                      href="tel:+541148902150"
                      className="text-amber-400 hover:underline font-bold flex items-center gap-1"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      +54 11 4890-2150
                    </a>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-white/[0.04]">
                    <span className="text-zinc-400">Correo de locaciones:</span>
                    <a
                      href="mailto:comercial@shoppingterrazas.com"
                      className="text-amber-400 hover:underline font-bold flex items-center gap-1"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      comercial@shoppingterrazas.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Parking live card for visitors */}
            <div className="p-6 rounded-3xl bg-zinc-900/60 border border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Estacionamiento del Shopping</h4>
                  <p className="text-xs text-zinc-400">Cocheras disponibles para visitas comerciales e interesados</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 justify-end">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Acceso Libre
                </span>
                <span className="text-[10px] text-zinc-400">Sin costo para reuniones</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Interactive Map & Directions */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.08] bg-[#111317] shadow-2xl">
              {/* Map Mockup Header / Address Banner */}
              <div className="p-6 bg-[#16181e] border-b border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                    <MapPin className="w-4 h-4" />
                    <span>Dirección de Shopping Terrazas</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">Av. de las Terrazas 4500</h3>
                  <p className="text-xs text-zinc-400">Bajada directa Panamericana Km 28 • Polo Urbano Norte</p>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs flex items-center gap-1.5 transition-colors shadow-md shadow-amber-500/20"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Google Maps</span>
                  </a>
                  <a
                    href="https://waze.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs flex items-center gap-1.5 border border-white/10 transition-colors"
                  >
                    <span>Waze</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                  </a>
                </div>
              </div>

              {/* Visual Map Representation */}
              <div className="relative h-[300px] sm:h-[350px] w-full bg-zinc-950 overflow-hidden flex items-center justify-center">
                {/* Stylized vector map grid background */}
                <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                {/* Stylized road lines */}
                <div className="absolute w-full h-8 bg-zinc-800/60 top-1/2 -translate-y-1/2 border-y border-amber-500/20" />
                <div className="absolute h-full w-8 bg-zinc-800/60 left-1/2 -translate-x-1/2 border-x border-amber-500/20" />

                {/* Shopping Terrazas Pin Marker */}
                <div className="relative z-10 flex flex-col items-center animate-bounce duration-1000">
                  <div className="p-3 rounded-2xl bg-gradient-to-tr from-amber-600 to-amber-400 text-zinc-950 shadow-2xl shadow-amber-500/50 border-2 border-white flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-zinc-950 fill-zinc-950" />
                    <span className="font-extrabold text-xs tracking-tight">Shopping Terrazas</span>
                  </div>
                  <div className="w-3 h-3 bg-amber-500 rotate-45 -mt-1.5 border-r border-b border-white" />
                </div>

                {/* Satellite image fallback background */}
                <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none">
                  <div className="w-full h-full bg-gradient-to-t from-[#111317] via-transparent to-[#111317]" />
                </div>

                {/* Bottom interactive map overlay button */}
                <div className="absolute bottom-4 right-4 z-20">
                  <button
                    onClick={onOpenMapModal}
                    className="px-4 py-2 rounded-xl bg-black/80 backdrop-blur-md text-white hover:text-amber-300 text-xs font-semibold border border-white/20 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Ver accesos y conectividad</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Transport Tabs for Commercial Visitors */}
              <div className="p-6 bg-[#14161c] border-t border-white/[0.08]">
                <div className="flex gap-2 border-b border-white/[0.08] pb-3 mb-4">
                  <button
                    onClick={() => setSelectedTransport("auto")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${selectedTransport === "auto"
                        ? "bg-amber-500 text-zinc-950"
                        : "text-zinc-400 hover:text-white"
                      }`}
                  >
                    Llegar en Auto
                  </button>
                  <button
                    onClick={() => setSelectedTransport("reuniones")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${selectedTransport === "reuniones"
                        ? "bg-amber-500 text-zinc-950"
                        : "text-zinc-400 hover:text-white"
                      }`}
                  >
                    Agendar Reunión Comercial
                  </button>
                  <button
                    onClick={() => setSelectedTransport("transporte")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${selectedTransport === "transporte"
                        ? "bg-amber-500 text-zinc-950"
                        : "text-zinc-400 hover:text-white"
                      }`}
                  >
                    Accesos Públicos
                  </button>
                </div>

                {selectedTransport === "auto" && (
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Bajada directa km 28 por colectora oeste de Autopista Panamericana. Acceso vehicular asfaltado
                    con control de acceso e ingreso directo al estacionamiento del shopping.
                  </p>
                )}
                {selectedTransport === "reuniones" && (
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Para coordinar una reunión presencial con el equipo de Comercialización y Locaciones del shopping,
                    por favor agenda tu cita con anticipación llamando al <strong className="text-amber-400">+54 11 4890-2150</strong>.
                  </p>
                )}
                {selectedTransport === "transporte" && (
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Líneas de colectivo 60, 203 y 365 con parada sobre la colectora a 150 metros del acceso principal.
                    A 5 minutos de la estación ferroviaria en combi o taxi.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
