import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OG",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en">
      <body className="min-h-screen" style={{  backgroundColor: 'var(--paper)'}}>
        <main className="max-w-170 mx-auto px-4 sm:px-6 md:px-8 py-6">
          {children}
        </main>
      
      </body>
    </html>
  );
}
