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
  title: {
    default: "Bisrat M. — Senior Infrastructure & Security Engineer",
    template: "%s | Bisrat M.",
  },
  description:
    "Portfolio of a Senior Infrastructure & Security Engineer specializing in designing, deploying, and securing scalable enterprise infrastructure across cloud and on-prem environments.",
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
  authors: [{ name: "Bisrat M." }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Bisrat M. — Senior Infrastructure & Security Engineer",
    description:
      "Designing, deploying, and securing scalable enterprise infrastructure.",
    siteName: "Bisrat M. Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bisrat M. — Senior Infrastructure & Security Engineer",
    description:
      "Designing, deploying, and securing scalable enterprise infrastructure.",
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
          defaultTheme="system"
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
