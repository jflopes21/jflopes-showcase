import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "João Lopes - Portfólio",
  description: "Portfólio de João Francisco Perassoli Lopes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${figtree.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}