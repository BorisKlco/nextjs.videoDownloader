"use client";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import fetchLink from "./fetchLink";
import { AiOutlineLoading } from "react-icons/ai";
import Image from "next/image";

type DownloadProps = {
  url: string;
  type: string;
  format: string;
};

export default function Download({ url, type, format }: DownloadProps) {
  const dataForFetch = { url: url, type: type };
  const link = useQuery(["link", dataForFetch], fetchLink, {
    enabled: false,
  });

  const linkData = link?.data ?? [];

  return (
    <>
      {link.isFetching ? (
        <button
          className="flex items-center justify-center 
    bg-button max-sm:w-[10rem] w-[12rem] h-[3rem] 
    rounded-full text-sm md:text-xl font-semibold 
    border border-black/40 transition 
    hover:bg-logo hover:border-black hover:border-2"
        >
          <AiOutlineLoading className="animate-spin text-white drop-shadow-md" />
        </button>
      ) : link.isFetched ? (
        <>
          <a
            className="flex gap-x-2 items-center justify-center 
    bg-button max-sm:w-[10rem] w-[12rem] h-[3rem] 
    rounded-full text-sm md:text-xl font-semibold  
    border border-black/40 transition 
    hover:bg-logo hover:border-black hover:border-2"
            href={linkData.url}
          >
            Download
            <Image
              className="object-fit"
              src="/images/search/download.svg"
              width={32}
              height={32}
              alt="download"
            />
          </a>
        </>
      ) : (
        <button
          onClick={() => {
            link.refetch();
            toast.success("Preparing it for uWu.. 🐱", { duration: 2000 });
          }}
          className="flex items-center justify-center 
      bg-button max-sm:w-[10rem] w-[12rem] h-[3rem] 
      rounded-full text-sm md:text-xl font-semibold 
      border border-black/40 transition 
      hover:bg-logo hover:border-black hover:border-2"
        >
          {format}
        </button>
      )}
    </>
  );
}
