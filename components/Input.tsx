"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";

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
        if (url.indexOf("youtube") != -1) {
          urlSplit = url.split("/");
          idSplit = urlSplit[urlSplit.length - 1].split("&");
          idSplit = idSplit[0].split("=");
          finalURL = idSplit[idSplit.length - 1] + "?site=youtube";
          router.push(`/${finalURL}`);
        } else if (url.indexOf("tiktok") != -1) {
          idSplit = url.split("@");
          idSplit = idSplit[1].split("?");
          idSplit = idSplit[0].split("/video/");
          finalURL = idSplit[0] + "?tiktok=" + idSplit[1] + "?site=tiktok";
          router.push(`/${finalURL}`);
        } else {
          toast.error("wOng URL? uWu🐱", { duration: 1500 });
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
