"use client";

import React, { useState } from "react";
import {
  MapPin,
  Clock,
  Car,
  Navigation,
  ArrowUpRight,
  X,
  CheckCircle2,
  Phone,
  Briefcase,
  Mail,
} from "./Icons";

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MapModal({ isOpen, onClose }: MapModalProps) {
  const [selectedFloor, setSelectedFloor] = useState<string>("pb");

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#121419] border border-amber-500/30 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
          <MapPin className="w-4 h-4" />
          <span>Ubicación & Accesos</span>
        </div>

        <h3 className="text-2xl font-bold text-white">Cómo llegar a Shopping Terrazas</h3>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1">
          Av. de las Terrazas 4500 (Panamericana Km 28), Polo Urbano Norte.
        </p>

        {/* Action Buttons for Navigation */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Shopping+Terrazas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/20 transition-all"
          >
            <Navigation className="w-4 h-4" />
            <span>Abrir en Google Maps</span>
          </a>
          <a
            href="https://www.waze.com/ul?q=Shopping+Terrazas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs sm:text-sm border border-white/10 transition-all"
          >
            <span>Navegar con Waze</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-400" />
          </a>
        </div>

        {/* Floor selector preview */}
        <div className="mt-7">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">
              Distribución del Masterplan:
            </span>
            <div className="flex gap-1.5">
              {[
                { id: "sub", label: "Subsuelo (Parking)" },
                { id: "pb", label: "Nivel 0 (Plaza)" },
                { id: "p1", label: "Nivel 1 (Moda)" },
                { id: "p2", label: "Nivel 2 (Terrazas)" },
              ].map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => setSelectedFloor(lvl.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${selectedFloor === lvl.id
                      ? "bg-amber-500 text-zinc-950"
                      : "bg-zinc-800 text-zinc-400 hover:text-white"
                    }`}
                >
                  {lvl.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-950 border border-white/[0.08]">
            {selectedFloor === "sub" && (
              <div>
                <h4 className="text-sm font-bold text-amber-400">Subsuelo 1 y 2: Logística & Parking Clientes</h4>
                <p className="text-xs text-zinc-300 mt-1">
                  1.500 cocheras cubiertas, muelles de descarga independientes para mercadería pesada, montacargas industriales y 8 puntos de carga EV.
                </p>
              </div>
            )}
            {selectedFloor === "pb" && (
              <div>
                <h4 className="text-sm font-bold text-amber-400">Nivel 0: Plaza Central & Oficina Comercial</h4>
                <p className="text-xs text-zinc-300 mt-1">
                  Acceso peatonal principal, oficinas de locaciones y comercialización, cafés de paso, bancos y áreas de servicios clave.
                </p>
              </div>
            )}
            {selectedFloor === "p1" && (
              <div>
                <h4 className="text-sm font-bold text-amber-400">Nivel 1: Paseo Comercial & Flagships</h4>
                <p className="text-xs text-zinc-300 mt-1">
                  Locales de 80 a 800 m² con doble altura, amplias vitrinas panorámicas y frentes directos a corredores principales de circulación.
                </p>
              </div>
            )}
            {selectedFloor === "p2" && (
              <div>
                <h4 className="text-sm font-bold text-amber-400">Nivel 2: Terrazas & Gastronomía al Aire Libre</h4>
                <p className="text-xs text-zinc-300 mt-1">
                  Locales con extracción a cuatro vientos homologada, gas industrial, pérgolas bioclimáticas y vistas panorámicas.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center justify-between text-xs text-zinc-400">
          <span>¿Quieres coordinar una visita técnica al predio?</span>
          <a href="tel:+541148902150" className="text-amber-400 font-bold flex items-center gap-1">
            <Phone className="w-3.5 h-3.5" />
            Llamar al Equipo Comercial
          </a>
        </div>
      </div>
    </div>
  );
}

interface HoursModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HoursModal({ isOpen, onClose }: HoursModalProps) {
  if (!isOpen) return null;

  const commercialHours = [
    {
      sector: "Atención Comercial a Marcas & Franquicias",
      hours: "09:00 a 19:00 hs",
      days: "Lunes a Viernes",
      note: "Atención presencial en oficinas del shopping o por videollamada",
    },
    {
      sector: "Visitas a Locales & Recorrido del Predio",
      hours: "10:00 a 16:30 hs",
      days: "Martes, Jueves y Sábados",
      note: "Con turno previo coordinado con el equipo de locaciones",
    },
    {
      sector: "Comité de Asignación de Locaciones",
      hours: "14:00 a 18:00 hs",
      days: "Miércoles y Viernes",
      note: "Evaluación de propuestas comerciales y reserva de espacios",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#121419] border border-amber-500/30 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-zinc-800 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
          <Clock className="w-4 h-4" />
          <span>Atención a Marcas & Franquicias</span>
        </div>

        <h3 className="text-2xl font-bold text-white">Horarios de Atención Comercial</h3>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1">
          Oficinas de locaciones y comercialización de Shopping Terrazas.
        </p>

        <div className="mt-6 space-y-4">
          {commercialHours.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-2xl bg-zinc-900/80 border border-white/[0.08] flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white">{item.sector}</h4>
                <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/30">
                  {item.hours}
                </span>
              </div>
              <div className="mt-2 text-xs text-zinc-400 flex items-center justify-between">
                <span>{item.days}</span>
                <span className="text-[11px] text-zinc-500">{item.note}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            <span>Oficina comercial abierta para atención personalizada</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-amber-500 text-zinc-950 font-bold text-xs cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
