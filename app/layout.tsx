import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Simran Kriplani — Academic Portfolio",
  description: "Academic portfolio of Dr. Simran Kriplani, endodontist, dental researcher, and educator.",
  other: { "codex-preview": "development" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
