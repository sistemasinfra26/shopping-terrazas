"use client";

import { useEffect, useState } from "react";

const announcements = [
  "Estamos preparando todo para recibirte.",
  "Muy pronto compartiremos novedades.",
  "Gracias por acompañarnos.",
];

export function ComingSoon() {
  const [announcementIndex, setAnnouncementIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setAnnouncementIndex((current) => (current + 1) % announcements.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section
      aria-labelledby="coming-soon-title"
      className="flex flex-1 flex-col items-center justify-center px-6 py-12 text-center"
    >
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ffb303]/35 bg-[#ffb303]/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#ffb303]">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ffb303] opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ffb303]" />
        </span>
        Estamos trabajando
      </div>
      <h1
        id="coming-soon-title"
        className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
      >
        Próximamente
      </h1>
      <p
        aria-live="polite"
        aria-atomic="true"
        className="mt-4 min-h-7 text-base text-zinc-300 sm:text-lg"
      >
        {announcements[announcementIndex]}
      </p>
    </section>
  );
}
