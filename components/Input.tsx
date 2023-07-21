"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function Input() {
  const [url, setUrl] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  let urlSplit;
  let idSplit;
  let finalURL;

  return (
    <form
      className="flex relative"
      onSubmit={(e) => {
        e.preventDefault();
        // urlFix = urlFix[urlFix.length - 1].split("&");
        // urlFix = urlFix[0].split("=");
        // if (urlFix.length === 2) {
        //   router.push(`/${urlFix[1]}`);
        // } else {
        //   router.push(`/${urlFix[0]}`);
        // }
        if (url.indexOf("youtube") != -1) {
          urlSplit = url.split("/");
          idSplit = urlSplit[urlSplit.length - 1].split("&");
          idSplit = idSplit[0].split("=");
          console.log(idSplit[idSplit.length - 1]);
          finalURL = idSplit[idSplit.length - 1] + "?site=youtube";
          router.push(`/${finalURL}`);
        } else if (url.indexOf("tiktok") != -1) {
          urlSplit = url.split("/");
          idSplit = urlSplit[urlSplit.length - 1].split("&");
          idSplit = idSplit[0].split("=");
          idSplit = idSplit[0].split("?");
          finalURL = idSplit[0] + "?site=tiktok";
          router.push(`/${finalURL}`);
        } else {
          console.log("123");
        }
      }}
    >
      <input
        onChange={(e) => setUrl(e.target.value)}
        type="text"
        placeholder={
          pathname === "/"
            ? "https://youtu.be/NtfbWkxJTHw"
            : `https://youtu.be${pathname}`
        }
        className="group text-l md:text-xl px-6 focus:underline rounded-3xl 
            h-[3rem] w-full bg-input focus:outline-none placeholder:text-green-900/30 border border-black/40 placeholder:no-underline"
      />
      <button
        className="absolute flex justify-center items-center h-full right-0 text-xl md:text-3xl 
            pl-4 pr-2 rounded-full bg-button hover:bg-logo
            hover:outline hover:outline-1 hover:outline-black
            transition border border-black text-white"
      >
        Search
        <Image
          className="object-fit"
          src="images/search/search-left.svg"
          width={42}
          height={42}
          alt="search icon"
        />
      </button>
    </form>
  );
}
