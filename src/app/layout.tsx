import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MLForge Studio — Take AI from pilot to production",
  description:
    "MLForge Studio designs, builds and runs AI and software inside the systems your business already depends on.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Only the two weights used above the fold. */}
        <link
          rel="preload"
          href="/fonts/GeneralSans-500.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/GeneralSans-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Without JS the observer never fires, so drop the hidden state entirely. */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: "[data-reveal]{opacity:1!important;transform:none!important}",
            }}
          />
        </noscript>
      </head>
      <body className="min-h-full flex flex-col bg-bg text-ink">{children}</body>
    </html>
  );
}
