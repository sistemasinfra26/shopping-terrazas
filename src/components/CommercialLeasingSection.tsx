"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Building2,
  Briefcase,
  TrendingUp,
  FileText,
  Download,
  Users,
  CheckCircle2,
  Send,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Phone,
  Mail,
} from "./Icons";

export function CommercialLeasingSection() {
  const [activeTab, setActiveTab] = useState<"locales" | "gastronomia" | "islas" | "wellness">("locales");
  const [formData, setFormData] = useState({
    fullName: "",
    brandName: "",
    category: "moda",
    sqm: "50-120",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.brandName && formData.email) {
      setSubmitted(true);
    }
  };

  const handleDownloadBrochure = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      alert("¡Dossier Comercial de Shopping Terrazas descargado exitosamente!");
    }, 1200);
  };

  const spaces = {
    locales: {
      title: "Locales Comerciales & Flagships",
      size: "80 a 800 m²",
      highlight: "Doble altura vidriada y frente sobre Plaza Central",
      description:
        "Espacios diseñados con arquitectura de vanguardia, amplios frentes vidriados para máxima visibilidad de marca, tomas de aire acondicionado central y acometida eléctrica trifásica de alta potencia.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
      features: [
        "Vitrinas panorámicas de piso a techo",
        "Áreas de depósito y trastienda integradas",
        "Acceso directo a muelles de carga y montacargas",
        "Ideal para indumentaria, calzado y tiendas insignia",
      ],
    },
    gastronomia: {
      title: "Locales Gastronómicos & Terrazas",
      size: "120 a 450 m²",
      highlight: "Área abierta con vistas panorámicas y gas industrial",
      description:
        "Locales con infraestructura gastronómica completa: conductos de extracción de humos reglamentaria de cuatro vientos, gas natural de alta presión, cámaras frigoríficas y terrazas semicubiertas con pérgolas bioclimáticas.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
      features: [
        "Conducto de extracción y campanas homologadas",
        "Conexión a gas natural industrial e instalación de agua trifásica",
        "Área de mesas exteriores exclusivas con calefacción radiante",
        "Horario nocturno extendido con acceso independiente",
      ],
    },
    islas: {
      title: "Islas Comerciales & Pop-Up Kiosks",
      size: "15 a 45 m²",
      highlight: "Ubicadas en los nodos peatonales de mayor circulación",
      description:
        "Puntos comerciales estratégicos en los pasillos de circulación principal y plazas temáticas. Perfectos para conceptos de alta rotación, cosmética, perfumería, accesorios, tecnología o café express.",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80",
      features: [
        "Visibilidad 360° en pasillos de alto tráfico",
        "Conexión eléctrica, red de datos e iluminación regulable",
        "Costos fijos optimizados y rápida puesta en marcha",
        "Flexibilidad de plazos para activaciones temporales o anuales",
      ],
    },
    wellness: {
      title: "Grandes Tiendas, Fitness & Servicios",
      size: "200 a 1.200 m²",
      highlight: "Grandes superficies para conceptos diferenciales",
      description:
        "Superficies amplias diseñadas para gimnasios premium, clínicas de belleza y salud estética, centros de coworking corporativo, ópticas de gran escala o salas de exposiciones tecnológicas.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80",
      features: [
        "Refuerzo estructural de losas para equipamiento pesado",
        "Vestuarios y núcleos sanitarios exclusivos",
        "Acceso directo desde el parking cubierto por ascensor",
        "Condiciones comerciales personalizadas según proyecto",
      ],
    },
  };

  const currentSpace = spaces[activeTab];

  return (
    <section id="locatarios" className="py-24 bg-gradient-to-b from-[#08090a] via-[#0f1014] to-[#08090a] relative scroll-mt-20 overflow-hidden">
      {/* Decorative Golden Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-amber-500/10 blur-[180px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-amber-600/10 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Top Header & Pitch */}
          <div id="proyecto" className="max-w-3xl mx-auto text-center mb-16 scroll-mt-28">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-400 text-xs font-bold tracking-wider uppercase mb-4 shadow-lg shadow-amber-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span>Comercialización Abierta • Locales & Franquicias</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Forma parte de Terrazas:{" "}
              <span className="gold-gradient-text drop-shadow-sm">Trae tu marca o franquicia</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
              El nuevo centro comercial y gastronómico diseñado para conectar tu negocio con un público
              de alto poder adquisitivo. Posiciona tu marca en un entorno exclusivo con más de{" "}
              <strong className="text-amber-300 font-semibold">450.000 visitas mensuales estimadas</strong>.
            </p>
          </div>

          {/* Commercial Highlights / The Investment Pitch */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
            <div className="glass-card p-6 rounded-3xl border border-white/[0.08] hover:border-amber-500/40 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-400">Tráfico Estimado</span>
                <Users className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
                +450K
              </div>
              <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                Visitantes mensuales proyectados en el corredor de mayor poder de compra.
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-white/[0.08] hover:border-amber-500/40 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-400">Superficie Total</span>
                <Building2 className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
                35.000 m²
              </div>
              <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                Área comercial, gastronómica y de entretenimiento de primer nivel.
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-white/[0.08] hover:border-amber-500/40 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-400">Ocupación Actual</span>
                <TrendingUp className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
                85%
              </div>
              <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                De los locales ya reservados por marcas de primera línea nacional e internacional.
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-white/[0.08] hover:border-amber-500/40 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-400">Marketing Integral</span>
                <Sparkles className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
                360°
              </div>
              <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                Campaña publicitaria multicanal de apertura y eventos de fidelización para clientes.
              </p>
            </div>
          </div>

          {/* Space Formats Interactive Showcase */}
            <div id="espacios" className="p-8 sm:p-10 rounded-3xl bg-[#12141a] border border-white/[0.09] shadow-2xl mb-16 scroll-mt-28">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 border-b border-white/[0.08] gap-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-1">
                    Tipologías de Locales Disponibles
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Espacios pensados para cada modelo de negocio
                  </h3>
                </div>

                {/* Type selector tabs */}
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: "locales", label: "Locales & Flagships" },
                    { id: "gastronomia", label: "Gastronomía & Rooftops" },
                    { id: "islas", label: "Islas & Stands" },
                    { id: "wellness", label: "Grandes Tiendas & Servicios" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${activeTab === tab.id
                          ? "bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/30 scale-105"
                          : "bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 border border-white/[0.06]"
                        }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Current Space Details Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8">
                <div className="lg:col-span-6 relative h-[320px] sm:h-[400px] rounded-2xl overflow-hidden border border-white/10 group shadow-xl">
                  <Image
                    src={currentSpace.image}
                    alt={currentSpace.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-transparent to-black/30" />
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-bold">
                    Metraje: {currentSpace.size}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                      {currentSpace.highlight}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      {currentSpace.title}
                    </h4>
                  </div>
                </div>

                <div className="lg:col-span-6 flex flex-col justify-between gap-6">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3">{currentSpace.title}</h4>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {currentSpace.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                      Especificaciones Técnicas:
                    </span>
                    {currentSpace.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-4">
                    <a
                      href="#formulario-locatarios"
                      className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-amber-500/20"
                    >
                      Postular mi Marca para este Espacio
                    </a>
                    <button
                      onClick={handleDownloadBrochure}
                      disabled={isDownloading}
                      className="px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs sm:text-sm border border-white/10 flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <Download className="w-4 h-4 text-amber-400" />
                      <span>{isDownloading ? "Generando..." : "Descargar Plano & Dossier"}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits for Brands & Franchises */}
              <div id="ventajas" className="mb-16 scroll-mt-28">
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <span className="text-xs uppercase font-bold tracking-widest text-amber-400 block mb-2">
                    Respaldado por Grupo Terrazas
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                    ¿Por qué abrir tu local en Shopping Terrazas?
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="glass-card p-6 rounded-3xl border border-white/[0.08] hover:border-amber-500/30 transition-colors">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Infraestructura 100% Garantizada</h4>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      Generadores propios de energía de respaldo total para todo el centro comercial, fibra óptica
                      dedicada para sistemas POS y muelles independientes para recepción de mercadería sin colapsos.
                    </p>
                  </div>

                  <div className="glass-card p-6 rounded-3xl border border-white/[0.08] hover:border-amber-500/30 transition-colors">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-4">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Seguridad & Gestión Integral</h4>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      Equipo de seguridad privada 24 horas, más de 300 cámaras HD con analítica de flujo,
                      brigada de primeros auxilios y gestión centralizada de residuos y reciclaje.
                    </p>
                  </div>

                  <div className="glass-card p-6 rounded-3xl border border-white/[0.08] hover:border-amber-500/30 transition-colors">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Acompañamiento en Ventas</h4>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      Inclusión de tu local en el programa de fidelidad Club Terrazas, promociones bancarias
                      financiadas por el shopping y activaciones periódicas en fechas clave (Navidad, Día de la Madre, Hot Sale).
                    </p>
                  </div>
                </div>
              </div>

              {/* Commercial Lead Intake Form */}
              <div id="formulario-locatarios" className="relative rounded-3xl overflow-hidden bg-[#13151b] border border-amber-500/40 p-8 sm:p-12 shadow-2xl">
                <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[140px] pointer-events-none -z-10" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* Left pitch */}
                  <div className="lg:col-span-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold uppercase mb-3">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>Contacto Comercial Directo</span>
                    </div>
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                      Hablemos sobre el futuro de tu negocio.
                    </h3>
                    <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                      Completa el formulario para que nuestro equipo de desarrollo comercial coordine una reunión
                      y te envíe los planos de ubicación, tarifas de alquiler y condiciones contractuales.
                    </p>

                    <div className="mt-8 space-y-4 text-xs text-zinc-300">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0">
                          <Phone className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-zinc-400 block text-[11px]">Línea directa Comercial:</span>
                          <strong className="text-white text-sm">+54 11 4890-2150 (Ext. 4)</strong>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-zinc-400 block text-[11px]">Correo de Locaciones:</span>
                          <strong className="text-white text-sm">comercial@shoppingterrazas.com</strong>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 p-4 rounded-2xl bg-zinc-900/80 border border-white/[0.08]">
                      <p className="text-[11px] text-zinc-400">
                        <strong className="text-amber-300">Confidencialidad garantizada:</strong> Tu propuesta de marca será tratada con estricta reserva y evaluada por el Comité de Comercialización en un plazo máximo de 48 horas hábiles.
                      </p>
                    </div>
                  </div>

                  {/* Right Interactive Form */}
                  <div className="lg:col-span-7 bg-[#0b0c0f] border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl">
                    {submitted ? (
                      <div className="py-12 text-center animate-in fade-in duration-300">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4">
                          <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-2">
                          ¡Propuesta Recibida con Éxito!
                        </h4>
                        <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                          Gracias por tu interés en ser parte de <strong className="text-amber-400">{formData.brandName}</strong>.
                          Nuestro Gerente de Locaciones se contactará a <strong>{formData.email}</strong> o por WhatsApp al <strong>{formData.phone}</strong> en menos de 24 horas.
                        </p>

                        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                          <button
                            onClick={handleDownloadBrochure}
                            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs flex items-center gap-2"
                          >
                            <Download className="w-4 h-4" />
                            <span>Descargar Dossier Comercial (PDF)</span>
                          </button>
                          <button
                            onClick={() => setSubmitted(false)}
                            className="px-5 py-2.5 rounded-xl bg-zinc-800 text-zinc-300 hover:text-white text-xs font-semibold"
                          >
                            Enviar otra consulta
                          </button>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
                              Nombre y Apellido *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Ej: Marcelo Rossi"
                              value={formData.fullName}
                              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                              className="w-full bg-zinc-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                            />
                          </div>

                          <div>
                            <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
                              Nombre de la Marca o Franquicia *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Ej: Havanna / Cafe Martínez"
                              value={formData.brandName}
                              onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                              className="w-full bg-zinc-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
                              Rubro Comercial *
                            </label>
                            <select
                              value={formData.category}
                              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                              className="w-full bg-zinc-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                            >
                              <option value="moda">Moda, Indumentaria & Calzado</option>
                              <option value="gastronomia">Gastronomía, Café & Rooftop</option>
                              <option value="belleza">Belleza, Cuidado & Estética</option>
                              <option value="tecnologia">Tecnología, Audio & Telefonía</option>
                              <option value="hogar">Hogar, Diseño & Deco</option>
                              <option value="isla">Isla / Kiosco en Pasillo</option>
                              <option value="servicios">Servicios / Salud / Fitness</option>
                              <option value="otro">Otro rubro comercial</option>
                            </select>
                          </div>

                          <div>
                            <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
                              Superficie Requerida *
                            </label>
                            <select
                              value={formData.sqm}
                              onChange={(e) => setFormData({ ...formData, sqm: e.target.value })}
                              className="w-full bg-zinc-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                            >
                              <option value="isla">Isla comercial (15 a 40 m²)</option>
                              <option value="hasta-50">Local pequeño (Hasta 50 m²)</option>
                              <option value="50-120">Local mediano estándar (50 a 120 m²)</option>
                              <option value="120-250">Local grande o gastronómico (120 a 250 m²)</option>
                              <option value="mas-250">Flagship o Megatienda (+250 m²)</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
                              Teléfono / WhatsApp *
                            </label>
                            <input
                              type="tel"
                              required
                              placeholder="+54 11 5555-5555"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full bg-zinc-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                            />
                          </div>

                          <div>
                            <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
                              Correo Corporativo *
                            </label>
                            <input
                              type="email"
                              required
                              placeholder="contacto@marca.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full bg-zinc-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
                            Detalles de tu propuesta o requerimientos particulares
                          </label>
                          <textarea
                            rows={3}
                            placeholder="Cuéntanos brevemente sobre tu marca, experiencia previa, si buscas abrir franquicia o local propio, etc."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full bg-zinc-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-sm shadow-xl shadow-amber-500/25 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <Send className="w-4 h-4 text-zinc-950" />
                          <span>Enviar Postulación Comercial</span>
                        </button>

                        <p className="text-[10px] text-zinc-500 text-center">
                          Al enviar autorizas el contacto de nuestro equipo de desarrollo comercial. No compartimos tus datos con terceros.
                        </p>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
          );
}

