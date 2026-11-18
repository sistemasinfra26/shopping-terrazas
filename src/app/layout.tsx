import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./tailwind.css";

const siteUrl = "https://www.shoppingterrazas.com";
const siteTitle = "Shopping Terrazas | Próximamente";
const siteDescription = "Muy pronto, Shopping Terrazas. Estamos preparando una nueva experiencia.";
const socialImage = "/hero-shopping-terrazas.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Shopping Terrazas",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: socialImage,
        width: 2560,
        height: 1440,
        alt: "Fachada de Shopping Terrazas al atardecer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [socialImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffb303",
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
