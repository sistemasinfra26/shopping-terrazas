"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MOVIES_DATA, MovieItem } from "@/data/mockData";
import { Film, Ticket, Calendar, Clock, Star, Sparkles, ArrowUpRight } from "./Icons";

export function EntertainmentSection() {
  const [selectedMovie, setSelectedMovie] = useState<MovieItem | null>(null);

  const weekendEvents = [
    {
      title: "Sunset Acoustic Sessions",
      day: "Viernes 19:30 hs",
      location: "Terraza Nivel 3 - Aura Lounge",
      category: "Música en Vivo",
    },
    {
      title: "Taller Infantil de Arte y Robótica",
      day: "Sábado 16:00 hs",
      location: "Plaza Kids - Nivel 2",
      category: "Familias & Niños",
    },
    {
      title: "Avant Premiere Cinépolis Laser",
      day: "Domingo 20:00 hs",
      location: "Sala IMAX Principal",
      category: "Cine Exclusivo",
    },
  ];

  return (
    <section id="entretenimiento" className="py-24 bg-[#0a0b0e] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3">
              <Film className="w-3.5 h-3.5" />
              <span>Cartelera & Entretenimiento</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Emoción en pantalla gigante y <span className="gold-gradient-text">planes para todos</span>.
            </h2>
            <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-2xl">
              Vive las mejores películas en salas con sonido inmersivo Dolby Atmos, proyección láser 4K 
              y una agenda de espectáculos pensada para cada fin de semana.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-xs font-medium text-zinc-300">
              8 Salas Láser
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-xs font-bold text-amber-300">
              Sala IMAX Oficial
            </span>
          </div>
        </div>

        {/* Movie Billboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {MOVIES_DATA.map((movie) => (
            <div
              key={movie.id}
              className="bg-[#121418] border border-white/[0.08] hover:border-amber-500/40 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/10 group flex flex-col justify-between"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={movie.image}
                  alt={movie.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-transparent to-black/30" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-amber-500 text-zinc-950 shadow-md">
                  {movie.format}
                </span>
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-bold bg-black/70 backdrop-blur-md text-white border border-white/10">
                  {movie.rating}
                </span>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-zinc-300 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl">
                  <span>{movie.genre}</span>
                  <span className="text-zinc-400 font-mono">{movie.duration}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {movie.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-2 text-xs text-amber-400 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Próximas funciones: {movie.nextShowtime}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[11px] text-zinc-400">Butacas reclinables VIP</span>
                  <button
                    onClick={() => setSelectedMovie(movie)}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-zinc-950 font-bold text-xs transition-all cursor-pointer"
                  >
                    <Ticket className="w-3.5 h-3.5" />
                    <span>Comprar / Horarios</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Weekend Cultural Agenda */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-zinc-900 to-[#15171d] border border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 pb-6 border-b border-white/[0.08] gap-4">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                <Calendar className="w-4 h-4" />
                <span>Agenda Cultural & Shows</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Eventos de este Fin de Semana</h3>
            </div>
            <span className="text-xs text-zinc-400">Acceso libre y gratuito para visitantes</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {weekendEvents.map((evt, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-amber-500/30 transition-colors"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  {evt.category}
                </span>
                <h4 className="text-base font-bold text-white">{evt.title}</h4>
                <div className="mt-3 flex flex-col gap-1 text-xs text-zinc-400">
                  <span className="text-zinc-300 font-medium">{evt.day}</span>
                  <span>{evt.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ticket Modal Mock */}
      {selectedMovie && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedMovie(null)}
        >
          <div
            className="bg-[#131519] border border-amber-500/40 rounded-3xl max-w-md w-full p-6 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMovie(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white text-lg"
            >
              ✕
            </button>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Film className="w-4 h-4" />
              <span>Cinépolis Shopping Terrazas</span>
            </div>
            <h3 className="text-xl font-bold text-white">{selectedMovie.title}</h3>
            <p className="text-xs text-zinc-400 mt-1">Formato: {selectedMovie.format} • Duración: {selectedMovie.duration}</p>

            <div className="mt-5 p-4 rounded-xl bg-zinc-900 border border-white/10">
              <span className="text-xs text-zinc-400 block mb-2 font-medium">Selecciona tu función:</span>
              <div className="grid grid-cols-3 gap-2">
                {["17:40", "19:50", "22:15"].map((time) => (
                  <button
                    key={time}
                    onClick={() => {
                      alert(`Redirigiendo a boletería oficial para la función de las ${time} hs.`);
                      setSelectedMovie(null);
                    }}
                    className="py-2.5 rounded-lg bg-white/[0.05] hover:bg-amber-500 hover:text-zinc-950 text-white font-bold text-xs border border-white/10 transition-colors"
                  >
                    {time} hs
                  </button>
                ))}
              </div>
            </div>

            <p className="mt-4 text-[11px] text-zinc-500 text-center">
              Descuentos automáticos 2x1 con Banco Galicia, Santander, BBVA y Club Terrazas.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

