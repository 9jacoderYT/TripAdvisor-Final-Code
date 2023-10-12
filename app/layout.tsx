import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavbarSimple from "@/components/navbar/index";
import Footer from "@/components/footer/index";

const inter = Inter({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="border-b border-1 shadow-sm mb-5 md:mb-0">
          <NavbarSimple />
        </div>

        <div className="z-2">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
