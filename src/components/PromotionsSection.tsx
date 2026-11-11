"use client";

import React, { useState } from "react";
import { PROMOTIONS_DATA } from "@/data/mockData";
import { Tag, CreditCard, Sparkles, CheckCircle2, Star, ArrowUpRight } from "./Icons";

export function PromotionsSection() {
  const [clubEmail, setClubEmail] = useState("");
  const [clubSubmitted, setClubSubmitted] = useState(false);

  const handleClubSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (clubEmail.trim()) {
      setClubSubmitted(true);
      setTimeout(() => {
        setClubEmail("");
      }, 3000);
    }
  };

  return (
    <section id="promociones" className="py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Tag className="w-3.5 h-3.5" />
            <span>Beneficios Exclusivos</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Promociones bancarias y <span className="gold-gradient-text">Club Terrazas</span>.
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Aprovecha los mejores descuentos semanales con tus entidades bancarias y accede 
            a beneficios preferenciales en gastronomía, moda y entretenimiento.
          </p>
        </div>

        {/* Bank Promotions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PROMOTIONS_DATA.map((promo) => (
            <div
              key={promo.id}
              className="glass-card p-6 rounded-3xl border border-white/[0.08] hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <CreditCard className="w-5 h-5 text-amber-400" />
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${promo.badgeColor}`}
                  >
                    {promo.days}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-zinc-300">{promo.bank}</h3>
                <div className="text-3xl font-extrabold text-white mt-1 group-hover:text-amber-300 transition-colors">
                  {promo.discount}
                </div>
                <p className="mt-2 text-xs font-medium text-amber-400">{promo.installments}</p>
                <p className="mt-3 text-xs text-zinc-400">{promo.category}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-500">
                <span>Tope de reintegro aplicable</span>
                <span className="text-zinc-400 group-hover:text-amber-400 transition-colors">
                  Ver bases →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Club Terrazas VIP Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#17140e] via-[#1b1916] to-[#121216] border border-amber-500/30 p-8 sm:p-12 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[130px] pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[11px] font-bold uppercase tracking-wider mb-3">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>Membresía Gratuita VIP</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Únete a Club Terrazas y vive una experiencia a tu medida.
              </h3>
              <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl">
                Registra tus visitas y compras para acumular puntos, canjear horas de estacionamiento gratis, 
                obtener invitaciones a avant-premieres de cine y degustaciones gourmet exclusivas.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>3 Horas de Parking Gratis</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Acceso a Rooftop VIP</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Descuentos en Cumpleaños</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-black/50 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-2xl">
              <h4 className="text-lg font-bold text-white mb-2">Suscripción al Club</h4>
              <p className="text-xs text-zinc-400 mb-5">
                Ingresa tu correo y recibe tu credencial digital en tu smartphone al instante.
              </p>

              {clubSubmitted ? (
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-center animate-in fade-in">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                  <p className="text-xs font-bold">¡Bienvenido a Club Terrazas!</p>
                  <p className="text-[11px] text-emerald-200/80 mt-0.5">
                    Revisa tu bandeja de entrada para activar tu membresía.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleClubSubmit} className="flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Tu correo electrónico..."
                    value={clubEmail}
                    onChange={(e) => setClubEmail(e.target.value)}
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
                  >
                    Obtener mi Membresía Digital Gratis
                  </button>
                  <span className="text-[10px] text-zinc-500 text-center">
                    Sin costos ocultos ni compromisos. Puedes darte de baja en cualquier momento.
                  </span>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

