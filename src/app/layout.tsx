import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DRUF SYSTEMS — Diseño & Desarrollo Web de Élite",
  description:
    "Creamos experiencias digitales que convierten visitantes en clientes. Diseño web premium, desarrollo a medida y estrategias que hacen crecer tu negocio.",
  keywords: [
    "diseño web",
    "desarrollo web",
    "portfolio",
    "web design",
    "Next.js",
    "sitios web profesionales",
  ],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "DRUF SYSTEMS — Diseño & Desarrollo Web de Élite",
    description:
      "Experiencias digitales que convierten visitantes en clientes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground noise-overlay`}
      >
        {children}
      </body>
    </html>
  );
}
