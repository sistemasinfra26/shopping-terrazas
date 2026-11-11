"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { STORES_DATA, StoreItem } from "@/data/mockData";
import { Search, ShoppingBag, Utensils, Film, Sparkles, MapPin, ChevronRight, Tag } from "./Icons";

export function BrandsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("todas");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedStore, setSelectedStore] = useState<StoreItem | null>(null);

  const categories = [
    { id: "todas", label: "Todas las Marcas", icon: Sparkles },
    { id: "moda", label: "Moda & Accesorios", icon: ShoppingBag },
    { id: "gastronomia", label: "Gastronomía", icon: Utensils },
    { id: "tecnologia", label: "Tecnología & Hogar", icon: Tag },
    { id: "entretenimiento", label: "Cines & Ocio", icon: Film },
  ];

  const filteredStores = useMemo(() => {
    return STORES_DATA.filter((store) => {
      const matchesCategory =
        activeCategory === "todas" ||
        (activeCategory === "tecnologia"
          ? store.category === "tecnologia" || store.category === "hogar"
          : store.category === activeCategory);

      const matchesSearch =
        store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        store.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="marcas" className="py-20 lg:py-28 relative scroll-mt-20">
      {/* Subtle section glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-3">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Locales & Marcas</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Diseño, estilo y tus <span className="gold-gradient-text">marcas favoritas</span>.
            </h2>
            <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-2xl">
              Explora una cuidada selección de flagships exclusivas, indumentaria de vanguardia, 
              tecnología y servicios pensados para una experiencia de compra inigualable.
            </p>
          </div>

          {/* Real-time search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar tienda, marca o rubro..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900/80 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/40 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
              >
                Limpiar
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-amber-500 text-zinc-950 font-semibold shadow-md shadow-amber-500/30 scale-105"
                    : "bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 border border-white/[0.08]"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-zinc-950" : "text-amber-400"}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Store Grid */}
        {filteredStores.length === 0 ? (
          <div className="text-center py-16 bg-zinc-900/30 border border-white/[0.06] rounded-2xl">
            <ShoppingBag className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
            <p className="text-lg font-semibold text-white">No encontramos locales con "{searchQuery}"</p>
            <p className="text-sm text-zinc-400 mt-1">Prueba con otra búsqueda o selecciona otra categoría.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("todas");
              }}
              className="mt-4 px-4 py-2 bg-amber-500 text-zinc-950 rounded-xl text-xs font-semibold"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredStores.map((store) => (
              <div
                key={store.id}
                onClick={() => setSelectedStore(store)}
                className="group relative bg-[#111317] border border-white/[0.07] hover:border-amber-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5 cursor-pointer flex flex-col justify-between"
              >
                {/* Image & Badges */}
                <div className="relative h-48 w-full overflow-hidden bg-zinc-800">
                  <Image
                    src={store.image}
                    alt={store.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-transparent to-black/30" />

                  {store.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-amber-500 text-zinc-950 shadow-md">
                      {store.badge}
                    </span>
                  )}

                  <span className="absolute bottom-2.5 left-3 text-[11px] font-medium text-amber-300 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    {store.floor}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                      {store.categoryLabel}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors mt-0.5">
                      {store.name}
                    </h3>
                    <p className="mt-2 text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                      {store.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {store.tags.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-white/[0.04]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform flex items-center">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Directory Banner Bottom */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-amber-950/30 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">¿Tienes una marca o franquicia exclusiva?</h4>
              <p className="text-xs sm:text-sm text-zinc-400">
                Súmate al centro comercial con mayor proyección y afluencia del país. Consultas por espacios disponibles.
              </p>
            </div>
          </div>
          <a
            href="mailto:comercial@shoppingterrazas.com?subject=Consulta%20Espacio%20Comercial"
            className="px-5 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs sm:text-sm font-semibold border border-white/10 transition-colors whitespace-nowrap"
          >
            Contacto Comercial
          </a>
        </div>
      </div>

      {/* Store Quick View Modal */}
      {selectedStore && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedStore(null)}
        >
          <div
            className="bg-[#121418] border border-amber-500/30 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 w-full">
              <Image
                src={selectedStore.image}
                alt={selectedStore.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-transparent to-black/40" />
              <button
                onClick={() => setSelectedStore(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                ✕
              </button>
              {selectedStore.badge && (
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber-500 text-zinc-950">
                  {selectedStore.badge}
                </span>
              )}
            </div>

            <div className="p-6">
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                {selectedStore.categoryLabel}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">{selectedStore.name}</h3>

              <div className="mt-3 flex items-center gap-2 text-sm text-zinc-300">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>{selectedStore.floor}</span>
              </div>

              <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
                {selectedStore.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {selectedStore.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-white/[0.08]"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center justify-between">
                <div className="text-xs text-zinc-400">
                  Horario de atención: <strong className="text-white">10:00 a 22:00 hs</strong>
                </div>
                <button
                  onClick={() => setSelectedStore(null)}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 text-zinc-950 font-bold text-xs"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

