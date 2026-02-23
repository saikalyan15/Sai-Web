import type { Metadata } from "next";
import "@/app/globals.css";
import { Playfair_Display, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
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
  title: "Saikalyan Akunuri - Responsible AI Writer and Practitioner",
  description:
    "30 years in software engineering. Now writing about what Responsible AI actually means for the teams building AI systems, not the boardrooms governing them.",
  keywords: [
    "Responsible AI",
    "software engineering",
    "AI governance",
    "engineering ethics",
    "tech writing",
    "automation",
  ],
  authors: [{ name: "Saikalyan Akunuri" }],
  creator: "Saikalyan Akunuri",
  publisher: "Saikalyan Akunuri",
  metadataBase: new URL("https://www.saikalyanakunuri.com"),
  openGraph: {
    title: "Saikalyan Akunuri - Responsible AI Writer and Practitioner",
    description:
      "30 years in software engineering. Now writing about what Responsible AI actually means for the teams building AI systems, not the boardrooms governing them.",
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
    title: "Saikalyan Akunuri - Responsible AI Writer and Practitioner",
    description:
      "30 years in software engineering. Now writing about what Responsible AI actually means for the teams building AI systems, not the boardrooms governing them.",
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
        className={`${playfair.variable} ${sourceSerif.variable} ${jetbrainsMono.variable} font-serif flex flex-col min-h-screen antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
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
