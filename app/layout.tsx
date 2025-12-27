import type { Metadata } from "next";
import "./globals.css";
import NavMenu from "@/components/ui/nav-menu";
import FloatingParticles from "@/components/ui/floating-particles";

export const metadata: Metadata = {
  title: "Arani Software Solutions | Next-Gen Technology Architecture",
  description: "Enterprise-grade mobile, web, AI, and cloud solutions powered by advanced architecture and intelligent automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <FloatingParticles />
        <NavMenu />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
