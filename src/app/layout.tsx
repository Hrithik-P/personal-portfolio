import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./ui/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hrithik-dev",
  description: "Hrithik's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-zinc-950 text-white flex flex-col justify-center items-center`}>
        {children}
      </body>
    </html>
  );
}
