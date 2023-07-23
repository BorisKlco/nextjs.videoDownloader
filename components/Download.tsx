"use client";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import fetchLink from "./fetchLink";
import { AiOutlineLoading } from "react-icons/Ai";
import { useRouter } from "next/navigation";

type DownloadProps = {
  url: string;
  type: string;
  format: string;
};

export default function Download({ url, type, format }: DownloadProps) {
  const router = useRouter();
  const test = { url: url, type: type };
  const link = useQuery(["link", test], fetchLink, {
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
        <button
          className="flex items-center justify-center 
    bg-button max-sm:w-[10rem] w-[12rem] h-[3rem] 
    rounded-full text-sm md:text-xl font-semibold 
    border border-black/40 transition 
    hover:bg-logo hover:border-black hover:border-2"
        >
          <a href={linkData.url}>Click to Download</a>
        </button>
      ) : (
        <button
          onClick={() => {
            link.refetch();
            toast.success("Preparing it for uWu.. 🐱");
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
