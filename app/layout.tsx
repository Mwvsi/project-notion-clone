import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mindly",
  description: "A flexible workspace for organizing your thoughts,tasks, and projects.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/close.svg",
        href: "close.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/lotus-dark.svg",
        href: "/lotus-dark.svg",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="mindly-theme-key"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
