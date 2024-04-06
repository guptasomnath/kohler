import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MyProvider } from "./redux/provider";
import { BASE_URL } from "@/constant";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern Bathroom & Kitchen Products in Kolkata | Premium Bathware",
  description:
    "Discover our range of modern bathroom and kitchen products in Kolkata with Premium Bathware. Elevate your home with our exquisite range. Get Quote Now!",
  metadataBase: new URL(`${BASE_URL}`),
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta charSet="UTF-8" />
      <head>
        <meta
          name="google-site-verification"
          content="d4Bf3KWXhS6XpFYsNws0n3OgpdlrAzu12gjek_G31dM"
        />
      </head>
      <body
        cz-shortcut-listen="true"
        className={inter.className + "overflow-y-hidden bg-[#F5F5F5]"}
      >
        <MyProvider child={children} />
      </body>
    </html>
  );
}
