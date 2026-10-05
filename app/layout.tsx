import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire-Bot - AI Recruitment Assistant",
  description: "Hire-Bot",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
