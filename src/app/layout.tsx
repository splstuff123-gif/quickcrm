import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuickCRM",
  description: "Manage customer contacts and track sales leads",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
