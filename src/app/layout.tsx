import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Gramatis — IT Consulting with AI Edge",
    template: "%s | Gramatis",
  },
  description:
    "Gramatis delivers IT infrastructure, cloud solutions, and AI-powered automation to businesses that need results — not reports.",
  keywords: [
    "IT consulting",
    "cloud solutions",
    "AI automation",
    "managed IT services",
    "South Africa",
    "Cape Town",
  ],
  openGraph: {
    title: "Gramatis — IT Consulting with AI Edge",
    description:
      "IT consulting that actually delivers. Cloud, infrastructure, and AI built for results.",
    url: "https://gramatis.com",
    siteName: "Gramatis",
    locale: "en_ZA",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml," +
          "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>" +
          "<rect width='32' height='32' rx='8' fill='%230B1B3D'/>" +
          "<path d='M10 16L14 10L18 16L14 22Z' fill='%234682B4'/>" +
          "<path d='M14 16L18 10L22 16L18 22Z' fill='%233D9BE9'/>" +
          "</svg>",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
