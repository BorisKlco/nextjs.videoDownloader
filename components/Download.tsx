"use client";
import toast from "react-hot-toast";

type DownloadProps = {
  id: string;
  option: string;
  format: string;
  format_id?: string;
};

export default function Download({
  id,
  option,
  format,
  format_id,
}: DownloadProps) {
  return (
    <a
      onClick={() => toast.success("Preparing it for uWu.. 🐱")}
      href={`${process.env.NEXT_PUBLIC_DOWNLOAD_API}/download?id=${id}&option=${option}&format=${format}&format_id=${format_id}`}
      className="flex items-center justify-center 
      bg-button max-sm:w-[6rem] w-[8rem] h-[2rem] 
      rounded-full text-sm font-semibold 
      border border-black/40 transition 
      hover:bg-logo hover:border-black hover:border-2"
    >
      {format}
    </a>
  );
}
