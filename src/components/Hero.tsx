import Image from "next/image";

export function Hero() {
  return (
    <section id="inicio" className="relative flex w-full flex-col items-center overflow-hidden pb-10">
      <div className="relative h-[64vh] min-h-[360px] max-h-[940px] w-full overflow-hidden bg-black sm:h-[75vh] lg:h-[85vh]">
        <Image
          src="/hero-shopping-terrazas.webp"
          alt="Fachada principal y terrazas al aire libre de Shopping Terrazas"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center sm:object-[center_35%]"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#08090a]/40 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#08090a] via-[#08090a]/60 to-transparent sm:h-64" />
      </div>

      <div className="relative z-10 mx-auto mt-6 flex w-full max-w-5xl flex-col items-center px-4 text-center sm:mt-10 sm:px-6 lg:mt-14 lg:px-8">
        <h1 className="max-w-5xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
          El escenario ideal para expandir y{" "}
          <span className="gold-gradient-text drop-shadow-sm">hacer brillar tu marca</span>
        </h1>
        <p className="mt-6 max-w-3xl text-base font-normal leading-relaxed text-zinc-300 sm:text-xl">
          Súmate al nuevo centro comercial de vanguardia en la zona norte. Más de{" "}
          <strong className="font-semibold text-white">35.000 m²</strong> diseñados para captar un flujo
          proyectado de <strong className="font-semibold text-[#ffb303]">+250.000 visitantes mensuales</strong>{" "}
          con alto poder adquisitivo. Espacios disponibles para locales, gastronomía e islas comerciales.
        </p>
      </div>
    </section>
  );
}
