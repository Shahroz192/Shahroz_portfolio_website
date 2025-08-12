import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Muhammad Shahroz Butt - AI & Machine Learning Developer",
  description: "Portfolio of Muhammad Shahroz Butt, AI and Machine Learning developer with expertise in full-stack AI solutions, computer vision, and Large Language Models.",
  keywords: ["Muhammad Shahroz Butt", "AI Developer", "Machine Learning", "PyTorch", "Computer Vision", "LLM", "MLOps", "Data Science"],
  authors: [{ name: "Muhammad Shahroz Butt" }],
  openGraph: {
    title: "Muhammad Shahroz Butt - AI & Machine Learning Developer",
    description: "Portfolio showcasing AI and Machine Learning projects with expertise in full-stack AI solutions",
    url: "https://shahrozbutt.dev",
    siteName: "Shahroz Butt Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Shahroz Butt - AI & Machine Learning Developer",
    description: "Portfolio showcasing AI and Machine Learning projects with expertise in full-stack AI solutions",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
