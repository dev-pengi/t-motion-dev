import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "T Motion | FAQs",
  description: "explore T Motion frequent asked question",
  keywords: [
    "freelance team",
    "software development",
    "t motion",
    "software development team",
    "faqs",
  ],
  openGraph: {
    title: "T Motion Faqs",
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
  return <>{children}</>;
}
