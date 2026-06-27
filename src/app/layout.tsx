import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bruno Difante | Portfólio",
  description:
    "Portfólio pessoal — Desenvolvimento de software e IA. Estudante de Ciência da Computação com experiência em Python, Django, Java e LangChain.",
  keywords: [
    "desenvolvedor",
    "software",
    "portfólio",
    "ciência da computação",
    "python",
    "django",
    "java",
    "IA",
    "LangChain",
  ],
  authors: [{ name: "Bruno Difante" }],
  openGraph: {
    title: "Bruno Difante | Desenvolvedor de Software",
    description: "Portfólio pessoal — Desenvolvimento de software e IA.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-surface text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
