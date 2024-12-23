import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Homepage 2 react/next.js",
  description: "Explore my personal portfolio showcasing my skills, projects, and expertise. Discover who I am, what I do, and how I can contribute to your team or project.",
  openGraph: {
    title: "Homepage 2 react/next.js",
    description: "Explore my personal portfolio showcasing my skills, projects, and expertise. Discover who I am, what I do, and how I can contribute to your team or project.",
    url: "https://tomaszjader.github.io/homepage-2-react/",
    siteName: "Homepage 2 react/next.js",
    images: [
      {
        url: "https://tomaszjader.github.io/homepage-2-react/assets/img/open_graph_img.png",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
