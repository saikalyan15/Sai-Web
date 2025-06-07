import type { Metadata } from "next";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saikalyan Akunuri - n8n Automation Consultant",
  description:
    "Helping you automate smarter with n8n. I design open-source automations that save time and reduce costs.",
  keywords: [
    "n8n automation",
    "automation consultant",
    "workflow automation",
    "open-source automation",
    "n8n expert",
    "process automation",
    "time-saving solutions",
    "cost reduction",
  ],
  authors: [{ name: "Saikalyan Akunuri" }],
  creator: "Saikalyan Akunuri",
  publisher: "Saikalyan Akunuri",
  metadataBase: new URL("https://www.saikalyanakunuri.com"), // Replace with your actual domain
  openGraph: {
    title: "Saikalyan Akunuri - n8n Automation Consultant",
    description:
      "Helping you automate smarter with n8n. I design open-source automations that save time and reduce costs.",
    url: "https://www.saikalyanakunuri.com", // Replace with your actual domain
    siteName: "Saikalyan Akunuri - Automation Consultant",
    images: [
      {
        url: "/og-image.jpg", // Recommended: Create a specific Open Graph image
        width: 1200,
        height: 630,
        alt: "Saikalyan Akunuri - n8n Automation Consultant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saikalyan Akunuri - n8n Automation Consultant",
    description:
      "Helping you automate smarter with n8n. I design open-source automations that save time and reduce costs.",
    images: ["/og-image.jpg"], // Recommended: Create a specific Twitter image
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
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
