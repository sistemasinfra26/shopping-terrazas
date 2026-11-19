"use client";

import React, { useState, useRef } from "react";
import {
  Briefcase,
  ArrowUpRight,
  CheckCircle2,
  Users,
  Sparkles,
  ShieldCheck,
  Building2,
  X,
  ChevronDown,
} from "./Icons";

export function CareersSection() {
  const hiringRoomUrl =
    process.env.NEXT_PUBLIC_HIRINGROOM_URL ||
    "https://terrazas.hiringroom.com/jobs";

  const [isIframeOpen, setIsIframeOpen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const iframeContainerRef = useRef<HTMLDivElement>(null);

  const handleToggleIframe = () => {
    if (!isIframeOpen) {
      setIsIframeOpen(true);
      // Desplazamiento suave hacia el contenedor una vez desplegado
      setTimeout(() => {
        iframeContainerRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    } else {
      setIsIframeOpen(false);
    }
  };

  return (
    <section
      id="trabaja-con-nosotros"
      className="relative w-full overflow-hidden bg-[#08090a] py-20 lg:py-28"
    >
      {/* Luces Ambientales Corporativas en Oro (#FFB303) */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#ffb303]/10 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 -z-10 h-[400px] w-[400px] rounded-full bg-[#ffb303]/[0.06] blur-[140px]" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* 1. ENCABEZADO SUPERIOR EDITORIAL */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge Dorado Oficial */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#ffb303]/35 bg-[#ffb303]/[0.08] px-4 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ffb303] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ffb303]" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#ffb303]">
              OPORTUNIDADES LABORALES • BOLSA DE EMPLEO OFICIAL
            </span>
          </div>

          {/* Título Principal */}
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Trabajá con{" "}
            <span className="gold-gradient-text drop-shadow-sm">Nosotros</span>
          </h2>

          {/* Subtítulo Descriptivo */}
          <p className="mt-5 text-base leading-relaxed text-zinc-300 sm:text-lg">
            ¿Querés formar parte del equipo de Shopping Terrazas? Conocé las
            oportunidades laborales vigentes y postulá a los puestos disponibles
            para sumarte al nuevo centro comercial de vanguardia.
          </p>
        </div>

        {/* 2. TARJETAS INTERACTIVAS DE ACCESO (VISTA PREVIA ELEGANTE) */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* OPCIÓN A: Explorar búsquedas vigentes */}
          <div className="glass-card group flex flex-col justify-between rounded-2xl border border-white/10 p-7 transition-all duration-300 hover:border-[#ffb303]/40 hover:shadow-xl hover:shadow-[#ffb303]/5">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ffb303]/10 text-[#ffb303] transition-colors group-hover:bg-[#ffb303]/20">
                  <Briefcase className="h-6 w-6 text-[#ffb303]" />
                </div>
                <span className="rounded-full border border-[#ffb303]/30 bg-[#ffb303]/10 px-3 py-1 text-[11px] font-semibold text-[#ffb303]">
                  Vacantes Activas
                </span>
              </div>

              <h3 className="text-xl font-bold text-white transition-colors group-hover:text-[#ffb303]">
                Explorar búsquedas vigentes
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-zinc-400">
                Accedé al listado actualizado de puestos de trabajo disponibles en
                Shopping Terrazas y postulá en tiempo real a través de nuestro portal.
              </p>
            </div>

            <div className="mt-6 border-t border-white/[0.06] pt-4">
              <button
                type="button"
                onClick={handleToggleIframe}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ffb303] to-[#e59e00] py-3 text-xs sm:text-sm font-bold text-zinc-950 shadow-md shadow-[#ffb303]/20 transition-all duration-200 hover:from-[#ffc22e] hover:to-[#ffb303] hover:shadow-lg hover:shadow-[#ffb303]/35 active:scale-95 cursor-pointer"
              >
                <span>
                  {isIframeOpen
                    ? "Ocultar Portal de Búsquedas"
                    : "Ver Búsquedas Activas"}
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-zinc-950 transition-transform duration-300 ${isIframeOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
            </div>
          </div>

          {/* OPCIÓN B: Dejanos tu CV en nuestra base general */}
          <div className="glass-card group flex flex-col justify-between rounded-2xl border border-white/10 p-7 transition-all duration-300 hover:border-[#ffb303]/40 hover:shadow-xl hover:shadow-[#ffb303]/5">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ffb303]/10 text-[#ffb303] transition-colors group-hover:bg-[#ffb303]/20">
                  <Users className="h-6 w-6 text-[#ffb303]" />
                </div>
                <span className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold text-zinc-300">
                  Postulación Espontánea
                </span>
              </div>

              <h3 className="text-xl font-bold text-white transition-colors group-hover:text-[#ffb303]">
                Dejanos tu CV en nuestra base general
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-zinc-400">
                Si no encontrás una vacante que se ajuste a tu perfil actual, cargá
                tu currículum para ser tenido en cuenta en futuras búsquedas.
              </p>
            </div>

            <div className="mt-6 border-t border-white/[0.06] pt-4">
              <a
                href={hiringRoomUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#ffb303]/40 bg-[#ffb303]/10 py-3 text-xs sm:text-sm font-bold text-[#ffb303] transition-all duration-200 hover:bg-[#ffb303] hover:text-zinc-950 hover:shadow-lg hover:shadow-[#ffb303]/25 active:scale-95"
              >
                <span>Cargar Currículum en HiringRoom</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 3. CONTENEDOR ENMARCADO DEL IFRAME DE HIRINGROOM (ANCHO CONTROLADO max-w-5xl) */}
        {isIframeOpen && (
          <div
            ref={iframeContainerRef}
            className="mt-12 overflow-hidden rounded-2xl border border-white/15 bg-zinc-950 shadow-2xl shadow-black/90 scroll-mt-28 animate-in fade-in slide-in-from-top-6 duration-500"
          >
            {/* Barra superior minimalista */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] bg-zinc-900/90 px-5 py-3.5 backdrop-blur-md">
              <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-white">
                  Portal oficial en tiempo real
                </span>
                <span className="text-zinc-600 hidden sm:inline">•</span>
                <span className="text-zinc-400 text-[11px] hidden sm:inline">
                  Shopping Terrazas &amp; HiringRoom
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={hiringRoomUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold text-zinc-300 transition-colors hover:border-[#ffb303]/40 hover:bg-[#ffb303] hover:text-zinc-950"
                >
                  <span>Abrir en nueva pestaña</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => setIsIframeOpen(false)}
                  className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white cursor-pointer"
                  title="Cerrar vista del portal"
                >
                  <X className="h-3.5 w-3.5" />
                  <span>Cerrar</span>
                </button>
              </div>
            </div>

            {/* Iframe con altura controlada min-h-[920px] y loader */}
            <div className="relative min-h-[750px] sm:min-h-[920px] w-full bg-white">
              {!iframeLoaded && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-zinc-950 text-center">
                  <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#ffb303] border-t-transparent" />
                  <p className="text-sm font-medium text-zinc-300">
                    Cargando búsquedas de empleo...
                  </p>
                  <p className="text-xs text-zinc-500 font-mono">
                    Conectando con HiringRoom
                  </p>
                </div>
              )}

              <iframe
                src={hiringRoomUrl}
                title="Bolsa de Empleo Shopping Terrazas - HiringRoom"
                width="100%"
                onLoad={() => setIframeLoaded(true)}
                className="min-h-[750px] sm:min-h-[920px] w-full border-0 bg-white"
                allow="camera; microphone; clipboard-write; encrypted-media"
              />
            </div>
          </div>
        )}


      </div>
    </section>
  );
}
