import type { Metadata } from "next";
import "@/app/globals.css";
import { Inter, Playfair_Display, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-playfair",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Saikalyan Akunuri -- Fractional Programme Manager & Agile Coach",
  description:
    "Fractional Programme Manager and Agile Coach with 25 years in software engineering. Available for remote engagements with engineering organisations scaling Agile across multiple teams.",
  keywords: [
    "fractional programme manager",
    "agile coach",
    "scrum of scrums",
    "PI planning",
    "DBS agile",
    "SAFe",
    "remote agile coaching",
    "software engineering leadership",
  ],
  authors: [{ name: "Saikalyan Akunuri" }],
  creator: "Saikalyan Akunuri",
  publisher: "Saikalyan Akunuri",
  metadataBase: new URL("https://www.saikalyanakunuri.com"),
  openGraph: {
    title: "Saikalyan Akunuri -- Fractional Programme Manager & Agile Coach",
    description:
      "Fractional Programme Manager and Agile Coach with 25 years in software engineering. Available for remote engagements with engineering organisations scaling Agile across multiple teams.",
    url: "https://www.saikalyanakunuri.com",
    siteName: "Saikalyan Akunuri",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saikalyan Akunuri",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saikalyan Akunuri -- Fractional Programme Manager & Agile Coach",
    description:
      "Fractional Programme Manager and Agile Coach with 25 years in software engineering. Available for remote engagements with engineering organisations scaling Agile across multiple teams.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${sourceSerif.variable} ${jetbrainsMono.variable} font-sans flex flex-col min-h-screen antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow bg-background">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
