"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, MapPin, Clock, ArrowUpRight, Briefcase } from "./Icons";

interface NavbarProps {
  onOpenMapModal: () => void;
  onOpenHoursModal: () => void;
}

export function Navbar({ onOpenMapModal, onOpenHoursModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "El Proyecto", href: "#proyecto" },
    { label: "Locales Disponibles", href: "#espacios", highlight: true },
    { label: "Ventajas Operativas", href: "#ventajas" },
    { label: "Ubicación & Accesos", href: "#ubicacion" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
        ? "bg-[#090a0cb3] backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/40 py-3"
        : "bg-[#090a0c80] backdrop-blur-md border-b border-white/[0.04] py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a
            href="#inicio"
            className="flex items-center gap-3 group transition-transform duration-200 active:scale-95"
          >
            <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-black/40 p-1 border border-amber-500/30 group-hover:border-amber-400 transition-colors shadow-lg shadow-amber-500/10">
              <Image
                src="/logo.png"
                alt="Shopping Terrazas Isotipo"
                width={44}
                height={44}
                className="w-full h-full object-contain filter drop-shadow"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors flex items-center gap-1.5">
                Shopping Terrazas
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block animate-pulse" />
              </span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">
                Desarrollo Comercial • Preventa
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-zinc-900/60 p-1.5 rounded-full border border-white/[0.06] backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 ${link.highlight
                  ? "bg-amber-500/15 text-amber-300 border border-amber-500/40 hover:bg-amber-500 hover:text-zinc-950 font-semibold shadow-sm shadow-amber-500/10"
                  : "text-zinc-300 hover:text-white hover:bg-white/[0.08]"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden md:flex items-center gap-3">

            <a
              href="#formulario-locatarios"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-semibold text-xs lg:text-sm tracking-wide shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <Briefcase className="w-4 h-4 text-zinc-950" />
              <span>Postular mi Marca</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="#formulario-locatarios"
              className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30"
              aria-label="Postular mi Marca"
            >
              <Briefcase className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-zinc-900 text-zinc-200 border border-white/10 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div >

      {/* Mobile Drawer */}
      {
        mobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#0c0d10fa] backdrop-blur-2xl border-b border-white/10 px-6 py-6 shadow-2xl transition-all animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-3">
              {/* Live pill for mobile */}
              <div
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenHoursModal();
                }}
                className="flex items-center justify-between p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Oficina Comercial: Lun a Vie 09 a 19 hs</span>
                </span>
                <span className="text-[11px] underline text-emerald-400">Ver horarios</span>
              </div>

              <div className="h-px bg-white/[0.08] my-1" />

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${link.highlight
                    ? "bg-amber-500/15 text-amber-300 border border-amber-500/30 font-semibold"
                    : "text-zinc-200 hover:text-amber-400 hover:bg-white/[0.04]"
                    }`}
                >
                  <span className="flex items-center gap-2">
                    {link.highlight && <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />}
                    {link.label}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500" />
                </a>
              ))}

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="#formulario-locatarios"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 font-bold text-sm shadow-lg shadow-amber-500/25"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Postular mi Marca / Franquicia</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenMapModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.05] text-zinc-300 font-semibold text-xs border border-white/10"
                >
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Cómo llegar al Shopping</span>
                </button>
              </div>
            </div>
          </div>
        )
      }
    </header >
  );
}
