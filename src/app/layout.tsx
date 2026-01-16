import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";
import { SiteHeader } from "@/components/site-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dahab-Rent | Verified Property Management for Somalia",
  description:
    "Dahab-Rent helps Somali landlords, tenants, and diaspora owners manage verified properties, collect mobile money payments, and monitor inspections.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <div className="gradient-overlay min-h-screen">
            <SiteHeader />
            <main>{children}</main>
            <footer
              id="contact"
              className="mx-auto mt-16 max-w-6xl rounded-3xl bg-brand-charcoal px-6 py-12 text-white shadow-lg"
            >
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-semibold">Dahab-Rent</h3>
                  <p className="mt-3 max-w-md text-sm text-white/70">
                    USD-focused leasing with verified agents across Somalia.
                    Secure diaspora oversight and mobile money collections in
                    one app.
                  </p>
                </div>
                <div className="flex flex-col gap-2 text-sm text-white/80">
                  <a href="mailto:hello@dahabrent.so">hello@dahabrent.so</a>
                  <a href="https://wa.me/252618000000" target="_blank">
                    WhatsApp: +252 61 800 0000
                  </a>
                  <p>Mogadishu | Hargeisa | Garowe</p>
                </div>
              </div>
              <p className="mt-8 text-xs text-white/40">
                © {new Date().getFullYear()} Dahab-Rent. All rights reserved.
              </p>
            </footer>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
