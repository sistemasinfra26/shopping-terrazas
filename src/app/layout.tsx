import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopping Terrazas | Moda, Gastronomía y Entretenimiento Exclusivo",
  description:
    "El centro comercial más moderno y exclusivo. Más de 150 marcas, terrazas gastronómicas al aire libre, cines de última generación y experiencias únicas.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#0b0c0e] text-zinc-100 antialiased selection:bg-amber-400 selection:text-black">
        {children}
      </body>
    </html>
  );
}
