 
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WagmiProviderComp from "../lib/wagmi-provider";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from "../lib/config";
import { ThemeProvider } from "next-themes";
import Home from "./page";
import { Navbar } from "@/components/navbar";
 
const inter = Inter({ subsets: ["latin"] });
 
export const metadata: Metadata = {
  title: "Next.js App",
  description: "Next.js App",
};
 
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, (await headers()).get('cookie'));
 
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiProviderComp initialState={initialState}>
          <ThemeProvider attribute="class">
            <Navbar/>
            {children}
          </ThemeProvider>
        </WagmiProviderComp>
      </body>
    </html>
  );
}