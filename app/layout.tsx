import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

// Configure Syne as the ONLY font
const syne = Syne({ 
  subsets: ["latin"], 
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"], 
  display: "swap",
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
      {/* Apply Syne variable globally */}
      <body className={`${syne.variable} bg-[#050505] text-[#ededed] antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}