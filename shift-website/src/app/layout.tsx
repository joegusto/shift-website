import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SHIFT is IT | Not a staffing agency. A recruiting partner.",
  description:
    "SHIFT is IT is a boutique technical recruiting firm specializing in product and engineering talent. We help companies build teams and help people find work worth doing.",
  keywords: [
    "technical recruiting",
    "IT staffing",
    "product management recruiting",
    "engineering staffing",
    "Southern California recruiting",
    "Los Angeles IT staffing",
    "boutique recruiting firm",
  ],
  openGraph: {
    title: "SHIFT is IT | Not a staffing agency. A recruiting partner.",
    description:
      "Boutique technical recruiting firm specializing in product and engineering talent.",
    url: "https://shiftisit.com",
    siteName: "SHIFT is IT",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-64.png", sizes: "64x64", type: "image/png" },
    ],
    apple: { url: "/favicon-180.png", sizes: "180x180" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
