import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Saikalyan Akunuri",
  description:
    "Three ways to work with a fractional Programme Manager and Agile Coach. Fractional retainer, Agile team onboarding, or a programme health check.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
