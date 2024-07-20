import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kritbovorn Dev Social Media App",
  description: "Social media app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className=" bg-white px-4 md:px-28 lg:px-32 xl:px-30 2xl:m-64">
            <Navbar />
          </div>
          <div className=" bg-slate-100 px-4 md:px-28 lg:px-12 xl:px-30 2xl:m-64">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
