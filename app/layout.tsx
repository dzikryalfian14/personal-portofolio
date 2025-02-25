import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import StairTransition from "@/components/StairTransition";
import PageTransition from "@/components/PageTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Dzikry Alfian",
  description: "Hi! My Name is Dzikry Alfian, I am a web developer with one year of experience, specializing in frontend development using React.js and Vue.js. I have expertise in building responsive and interactive user interfaces while seamlessly integrating with backend services such as RESTful APIs.",              
  authors: {
    name: "Dzikry Alfian",
    url: "https://dzikryalfian.vercel.app/",
  },
  icons: [
    { url: "https://dzikryalfian.vercel.app/favicon.ico", type: "image/x-icon" },
    { url: "https://dzikryalfian.vercel.app/favicon.png", type: "image/png" },
  ],
  openGraph: {
    type: "website",
    title: "Dzikry Alfian",
    description:
      "Hi! My Name is Dzikry Alfian, I am a web developer with one year of experience, specializing in frontend development using React.js and Vue.js. I have expertise in building responsive and interactive user interfaces while seamlessly integrating with backend services such as RESTful APIs.",
    siteName: "Portofolio Dzikry Alfian",
    images: [
      {
        url: "https://dzikryalfian.vercel.app/photo.png",
        alt: "Dzikry Alfian - Software Engineer",
      },
    ],
  },
  alternates: {
    canonical: "https://dzikryalfian.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}