import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Saikalyan Akunuri",
  description:
    "Get in touch. Available for fractional and fixed-scope remote engagements in US and European time zones.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
