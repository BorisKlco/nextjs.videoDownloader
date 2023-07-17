import { Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";

const customFont = Comic_Neue({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "yt-mp3 - audio, video, thumbnail downloader",
  description:
    "Do you need download youtube video? mp3, webm, mp4 formats, jpg thumbnail downloader...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${customFont.className} bg-main flex min-h-screen flex-col items-center sm:pt-2`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
