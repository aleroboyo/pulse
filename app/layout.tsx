import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";;
import "@/styles/globals.css";
import { PulseProvider } from "@/context/PulseContext";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Pulse - Feel the Pulse of your City",
  description: "Discover events, book tickets, and experience nightlife in your city with Pulse."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${inter.variable} antialiased`}
      >

        <div>
          <PulseProvider>
            {children}
          </PulseProvider>
        </div>

      </body>
    </html>
  );
}




