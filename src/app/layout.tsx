import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bisratm.github.io"),
  title: {
    default: "Technical Portfolio | Network Security, Cloud & Infrastructure",
    template: "%s | Bisrat Melknew",
  },
  description:
    "A collection of hands-on projects, technical blogs, and real-world implementations covering network security, cloud identity, enterprise networking and infrastructure automation.",
  keywords: [
    "Infrastructure Engineer",
    "Security Engineer",
    "Cloud Architecture",
    "DevOps",
    "Network Security",
    "Kubernetes",
    "Terraform",
    "AWS",
    "Azure",
  ],
  authors: [{ name: "Bisrat Melknew" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bisratm.github.io",
    title: "Technical Portfolio | Network Security, Cloud & Infrastructure",
    description:
      "A collection of hands-on projects, technical blogs, and real-world implementations covering network security, cloud identity, enterprise networking and infrastructure automation.",
    siteName: "Bisrat Melknew Portfolio",
    images: [
      {
        url: "/images/banner-image.png",
        width: 1200,
        height: 630,
        alt: "Technical Portfolio | Network Security, Cloud & Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Portfolio | Network Security, Cloud & Infrastructure",
    description:
      "A collection of hands-on projects, technical blogs, and real-world implementations covering network security, cloud identity, enterprise networking and infrastructure automation.",
    images: ["/images/banner-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
