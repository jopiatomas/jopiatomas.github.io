import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = `${site.name} · ${site.role}`;
const description =
  "Desarrollador frontend-first especializado en Angular y React, con experiencia sólida en backend usando Java y Spring Boot. Portfolio de proyectos, stack y contacto.";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: title,
    template: `%s · ${site.name}`,
  },
  description,
  keywords: [
    "Tomás Jopia",
    "Full Stack Developer",
    "Angular",
    "React",
    "Java",
    "Spring Boot",
    "Desarrollador Frontend",
    "Portfolio",
  ],
  authors: [{ name: site.name, url: site.siteUrl }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: site.siteUrl,
    siteName: `${site.name} · Portfolio`,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg font-sans">
        <Nav />
        <Sidebar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
