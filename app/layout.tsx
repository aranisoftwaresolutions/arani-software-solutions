import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/client-layout";


export const metadata: Metadata = {
  title: "Arani Software Solutions | Next-Gen AI Technology Architecture",
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
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}