import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Toaster } from "sonner";

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
      <body className={`${interSans.variable} antialiased`}>
        <Toaster richColors position="top-right" />
        <div className="font-sans pt-12 pb-6 relative overflow-hidden">
          <div className="border-l border-r pointer-events-none border-sub-border max-w-[1280px] w-full h-full top-0 left-1/2 -translate-x-1/2  absolute"></div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
