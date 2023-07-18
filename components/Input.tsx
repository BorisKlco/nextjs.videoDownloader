"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Input() {
  const [url, setUrl] = useState("");
  const router = useRouter();
  let urlFix;

  return (
    <form
      className="flex relative"
      onSubmit={(e) => {
        e.preventDefault();
        urlFix = url.split("/");
        urlFix = urlFix[urlFix.length - 1].split("&");
        urlFix = urlFix[0].split("=");
        if (urlFix.length === 2) {
          router.push(`/${urlFix[1]}`);
        } else {
          router.push(`/${urlFix[0]}`);
        }
      }}
    >
      <input
        onChange={(e) => setUrl(e.target.value)}
        type="text"
        className="group text-l md:text-xl px-6 underline rounded-3xl 
            h-[3rem] w-full bg-input focus:outline-none border border-black"
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
