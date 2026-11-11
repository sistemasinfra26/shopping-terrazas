"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CommercialLeasingSection } from "@/components/CommercialLeasingSection";
import { LocationAndHours } from "@/components/LocationAndHours";
import { Footer } from "@/components/Footer";
import { MapModal, HoursModal } from "@/components/Modals";

// Componentes preservados para la fase de apertura al consumidor general (no renderizados por ahora):
// import { BrandsSection } from "@/components/BrandsSection";
// import { TerrazasGourmet } from "@/components/TerrazasGourmet";
// import { EntertainmentSection } from "@/components/EntertainmentSection";
// import { PromotionsSection } from "@/components/PromotionsSection";
// import { ServicesSection } from "@/components/ServicesSection";

export default function Home() {
  const [mapModalOpen, setMapModalOpen] = useState(false);
  const [hoursModalOpen, setHoursModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#08090a] text-zinc-100 selection:bg-amber-400 selection:text-black">
      {/* Barra de navegación superior con efecto glassmorphism */}
      <Navbar
        onOpenMapModal={() => setMapModalOpen(true)}
        onOpenHoursModal={() => setHoursModalOpen(true)}
      />

      {/* Contenido Principal - Fase Exclusiva de Comercialización B2B */}
      <main className="flex-1 flex flex-col">
        {/* 1. Hero Section enfocado en marcas, inversores y preventa */}
        <Hero
          onOpenHoursModal={() => setHoursModalOpen(true)}
          onOpenMapModal={() => setMapModalOpen(true)}
        />

        {/* 2. Sección Principal: Trae tu Marca / Franquicias / Espacios Disponibles / Formulario */}
        <CommercialLeasingSection />

        {/* 
          Componentes de experiencia para el público general (preservados sin eliminar):
          <BrandsSection />
          <TerrazasGourmet />
          <EntertainmentSection />
          <ServicesSection />
          <PromotionsSection />
        */}

        {/* 3. Ubicación del Shopping, Accesos y Horarios de Atención Comercial */}
        <LocationAndHours onOpenMapModal={() => setMapModalOpen(true)} />
      </main>

      {/* 4. Footer Comercial e Institucional */}
      <Footer />

      {/* Modales Interactivos de Ubicación del Shopping y Horarios de Atención */}
      <MapModal isOpen={mapModalOpen} onClose={() => setMapModalOpen(false)} />
      <HoursModal isOpen={hoursModalOpen} onClose={() => setHoursModalOpen(false)} />
    </div>
  );
}
