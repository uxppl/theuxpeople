import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Toaster } from "sonner";
import Script from "next/script";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "The UX People",
  description:
    "Great businesses deserve exceptional apps, featuring seamless business operations and captivating user experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-2F8LXJCZLX"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-2F8LXJCZLX');
          `}
        </Script>
      </head>

      <body className={`${interSans.variable} antialiased`}>
        <Toaster richColors position="top-right" />
        <div className="font-sans pt-12 pb-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-36 blur-[90px] bg-gradient-to-t from-[#06aba4] to-[#0F7768] opacity-15"></div>
          <div className="border-l border-r pointer-events-none border-sub-border max-w-[1280px] w-full h-full top-0 left-1/2 -translate-x-1/2  absolute"></div>

          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
