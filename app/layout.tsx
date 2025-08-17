import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Open_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
  preload: true,
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
  preload: true,
})

export const metadata: Metadata = {
  title: "Ali Akbar | Software Engineer & AI Enthusiast",
  description: "Modern portfolio showcasing software engineering projects, AI research, and creative work by Ali Akbar",
  generator: "v0.app",
  keywords: [
    "Software Engineer",
    "AI",
    "Machine Learning",
    "Portfolio",
    "React",
    "Flutter",
    "Web Development",
    "Mobile Development",
  ],
  authors: [{ name: "Ali Akbar", url: "https://github.com/AliAkberRaja" }],
  creator: "Ali Akbar",
  publisher: "Ali Akbar",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aliakbar.dev",
    title: "Ali Akbar | Software Engineer & AI Enthusiast",
    description:
      "Modern portfolio showcasing software engineering projects, AI research, and creative work by Ali Akbar",
    siteName: "Ali Akbar Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ali Akbar - Software Engineer & AI Enthusiast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Akbar | Software Engineer & AI Enthusiast",
    description:
      "Modern portfolio showcasing software engineering projects, AI research, and creative work by Ali Akbar",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${openSans.style.fontFamily};
  --font-sans: ${openSans.variable};
  --font-heading: ${montserrat.variable};
}
        `}</style>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${montserrat.variable} ${openSans.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
