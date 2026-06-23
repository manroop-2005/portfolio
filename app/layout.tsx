import type { Metadata } from "next";
import portfolioData from "@/data/portfolio.json";
import "./globals.css";

export const metadata: Metadata = {
  title: portfolioData.seo.title,
  description: portfolioData.seo.description,
  keywords: portfolioData.seo.keywords,
  authors: [{ name: portfolioData.profile.name }],
  openGraph: {
    title: portfolioData.seo.title,
    description: portfolioData.seo.description,
    type: "website",
    images: ["/images/developer-workstation.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-ink font-sans text-slate-100 antialiased">{children}</body>
    </html>
  );
}
