import { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

const inter = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/fav.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} antialiased tracking-tight`}>
      <body>{children}</body>
    </html>
  );
}
