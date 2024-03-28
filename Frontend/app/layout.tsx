import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MyProvider } from "./redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Premium Bathware",
  description: "This is for demo",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + "overflow-y-hidden bg-[#F5F5F5]"}>
        <MyProvider child = {children}/>
      </body>
    </html>
  );
}
