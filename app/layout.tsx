import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Growth X | Aceleradora de Empresas",
  description:
    "Cresça suas vendas 10x mais com a Growth X. Consultoria em marketing e vendas com IA e CRM para acelerar seu negócio.",
  keywords: [
    "marketing",
    "vendas",
    "consultoria",
    "CRM",
    "IA",
    "automação",
    "growth",
    "aceleradora",
  ],
  authors: [{ name: "Growth X" }],
  openGraph: {
    title: "Growth X | Aceleradora de Empresas",
    description:
      "Cresça suas vendas 10x mais com a Growth X. Consultoria em marketing e vendas com IA e CRM.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={plusJakarta.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
