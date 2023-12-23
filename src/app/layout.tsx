import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "T Motion Dev | Home",
  description:
    "freelance software team turning ideas into real life products. making your journey painless",
  keywords: [
    "freelance team",
    "software development",
    "t motion",
    "software development team",
  ],
  openGraph: {
    title: "T Motion",
    description:
      "freelance software team turning ideas into real life products. making your journey painless",
    type: "website",
    images: "/graph-cover",
    locale: "ar",
    siteName: "T Motion",
    url: "https://tmotion.dev",
    countryName: "algeria",
    emails: "tmotiondev@gmail.com",
  },
  twitter: {
    title: "T Motion",
    description:
      "freelance software team turning ideas into real life products. making your journey painless",
    card: "summary",
    images: "/twitter-cover",
    creator: "tmotiondev",
    creatorId: "1738125123616419840",
    site: "https://tmotion.dev",
  },
  category: "software development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
