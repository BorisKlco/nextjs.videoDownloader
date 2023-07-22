import { Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";
import ToasterProvider from "@/components/ToasterProvider";
import Image from "next/image";

const customFont = Comic_Neue({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Scrappy🐱 - audio, video, thumbnail downloader",
  description:
    "Do you need download youtube, tiktok video? mp3, webm, mp4 formats, jpg thumbnail downloader...",
  keywords: ["tiktok", "youtube", "download"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${customFont.className} bg-main flex min-h-screen flex-col items-center antialiased`}
      >
        <ToasterProvider />
        <Navbar />
        <main className="w-full px-2 lg:w-4/5 2xl:w-4/5 max-w-5xl mb-8">
          <section className="relative select-none mt-6 md:mt-10 h-full w-full flex flex-col items-center justify-center sm:gap-x-3 ">
            <div className="relative flex items-center">
              <Image
                src="/images/logo/yt.svg"
                width={155}
                height={170}
                className="object-contain -rotate-12 h-[8rem] sm:h-full "
                alt="ytb logo"
              />
              <h1 className="text-6xl sm:text-8xl">Scrappy</h1>
            </div>
            <h3 className="text-xl">Youtube & TikTok downloader</h3>
          </section>
          {children}
        </main>
      </body>
    </html>
  );
}
