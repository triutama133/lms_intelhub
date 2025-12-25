import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { PWARegistration } from "./components/PWARegistration";

// Using system fonts to avoid Google Fonts download issues
const geistSans = {
  variable: "--font-geist-sans",
  className: "",
};

const geistMono = {
  variable: "--font-geist-mono",
  className: "",
};

export const metadata: Metadata = {
  title: "Integrated Learning Hub",
  description: "Integrated Learning Hub — Platform pembelajaran terintegrasi",
  manifest: "/manifest.json",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0ea5a4",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <PWARegistration />
        <Analytics />
      </body>
    </html>
  );
}
