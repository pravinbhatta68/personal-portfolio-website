import type { Metadata } from "next";
import "./globals.css";
import { LoadingScreen } from "@/components/loading-screen";
import { ScrollProgress } from "@/components/scroll-progress";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brand } from "@/lib/data";
import { siteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} | AI Marketing Expert & Consultant`,
    template: `%s | ${brand.name}`,
  },
  description:
    "Premium AI marketing consulting, automation, content strategy, lead generation, SEO, and digital transformation by Pravin Bhatta in Nepal.",
  applicationName: brand.name,
  keywords: [
    "AI marketing expert",
    "AI consultant Nepal",
    "marketing automation",
    "prompt engineering",
    "SEO strategy",
    "Asthetic Pravin",
  ],
  authors: [{ name: brand.owner }],
  creator: brand.owner,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${brand.name} | AI Marketing Expert & Consultant`,
    description:
      "Transform your business with AI-powered marketing, automation, intelligent content, and digital transformation.",
    siteName: brand.name,
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: brand.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} | AI Marketing Expert`,
    description: "AI-powered marketing consulting for smarter business growth.",
    images: ["/images/og-image.png"],
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: brand.name,
    founder: brand.owner,
    email: brand.email,
    telephone: brand.phone,
    address: brand.location,
    url: siteUrl,
    areaServed: "Worldwide",
    serviceType: "AI Marketing Consulting",
  };

  return (
    <html lang="en" className="dark">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <LoadingScreen />
        <ScrollProgress />
        <div className="page-shell">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
