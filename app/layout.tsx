import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({ 
  subsets: ["latin"], 
  variable: "--font-fraunces",
  weight: ["300", "400", "600", "700", "900"] 
});

export const metadata: Metadata = {
  title: "Culturar - Home, Delivered",
  description: "The Marketplace for African Diaspora in Europe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fraunces.variable} bg-[#FFF8F5]`}>
        {children}
      </body>
    </html>
  );
}
