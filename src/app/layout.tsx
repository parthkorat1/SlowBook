import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RetroSpace - Nostalgic Social Media",
  description: "A social media app inspired by the 2008-2012 internet era",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-mood="blue">
      <body>{children}</body>
    </html>
  );
}
