import type { Metadata } from "next";
import { bodoniBold } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Le Lapin Bleu",
  description: "Livre d'ingrédients en français, style catalogue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${bodoniBold.variable} antialiased bg-white text-neutral-900 font-sans`}>
        {children}
      </body>
    </html>
  );
}
