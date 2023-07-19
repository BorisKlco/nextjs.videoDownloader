"use client";
import toast, { Toaster } from "react-hot-toast";

type DownloadProps = {
  id: string;
  option: string;
  format?: string;
};

export default function Download({ id, option, format = "" }: DownloadProps) {
  return (
    <a
      onClick={() => toast.success("Preparing... wait a few sec 🎧")}
      href={`https://api.tricksofthe.trade/download?id=${id}&option=${option}`}
      className="flex items-center justify-center bg-button max-sm:w-[10rem] w-[12rem] h-[3rem] rounded-full font-semibold  border border-black transition hover:bg-logo"
    >
      {format ? format : "mp3"}
    </a>
  );
}
