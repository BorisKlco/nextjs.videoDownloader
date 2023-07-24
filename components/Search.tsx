"use client";
import { Result } from ".";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchData from "./fetchData";
import toast from "react-hot-toast";

export default function Search() {
  const [url, setUrl] = useState<String>("");
  const result = useQuery(["url", url], fetchData, { enabled: !!url });
  const resultData = result?.data ?? [];
  const supportedSites = [
    "youtube",
    "tiktok",
    "instagram",
    "twitch",
    "twitter",
    "reddit",
  ];

  function checkSupported(userInput: String) {
    return supportedSites.some((item) => userInput.includes(item));
  }

  return (
    <div className="mt-6 md:mt-8 rounded-3xl border border-black">
      <div className="flex flex-col bg-search rounded-3xl w-min-16 w-full h-auto">
        <form
          className="flex relative"
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const extractURL = formData.get("url") as String;
            if (checkSupported(extractURL)) {
              if (extractURL.indexOf("list") === -1) {
                setUrl(extractURL);
              } else {
                toast.error("Playlist not supported..uWu🐱", {
                  duration: 2000,
                });
              }
            } else {
              toast.error("wOng URL? uWu🐱", { duration: 2000 });
            }
          }}
        >
          <input
            type="text"
            name="url"
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
        {result.isFetching ? (
          <div className="flex justify-center items-center">
            <h1 className="truncate my-4 text-xl sm:text-3xl">
              LoAd1nG.. SeRvEr go Brrr..
            </h1>
            <Image
              src="/images/search/brr.svg"
              height={48}
              width={48}
              className="object-fit sm:pl-2"
              alt="Loading"
            />
          </div>
        ) : result.isFetched ? (
          <div>
            <Result data={resultData} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
