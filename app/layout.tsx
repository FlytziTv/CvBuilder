import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CV Builder – ATS Optimisé",
  description: "Créez un CV optimisé pour les systèmes ATS de recrutement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="antialiased">
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  );
}
