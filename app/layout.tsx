import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Susan Lady Rumokoy | Portofolio",
  description: "Susan is a university student in Binus University, currently majoring in Computer Science.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative h-auto pt-25 sm:pt-32`}>
        <div className="bg-[#d2d2fa] absolute top-[-6rem] -z-10  right-[11rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>

        <div className="bg-[#d2e8f0] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
