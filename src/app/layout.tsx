import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Juan Lopez's Site",
  description: "Portfolio website of Juan Lopez - Aspiring fullstack developer with an interest in data science",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}