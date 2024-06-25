import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import ActiveMenuContextProvider from "@/context/active-menu";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/theme/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

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
    <html lang="en" className="relative !scroll-smooth">
      <body className={`${inter.className} bg-[#d2e8f0] text-gray-950 relative pt-25 sm:pt-32 dark:bg-black/[0.95] dark:text-gray-50 dark:text-opacity-90 mx-[2%]`}>
        <div className="bg-[#a9a9ec] top-[6rem] -z-10  right-[30rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] fixed dark:bg-[#433c8f]"></div>

        {/* <div className="bg-[#d2e8f0] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div> */}
        <ThemeContextProvider>
          <ActiveMenuContextProvider>
            <Header />
            {children}

            <Toaster position="bottom-center"/>
            <ThemeSwitch />
          </ActiveMenuContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
