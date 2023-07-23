import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

type DownloadProps = {
  url: string;
  type: string;
  format: string;
};

export default function Download({ url, type, format }: DownloadProps) {
  const rounter = useRouter();

  async function handleDownload(
    url: string,
    type: string,
    rounter: AppRouterInstance
  ) {
    const obj = {
      url: url,
      type: type,
    };
    const res = await fetch(`http://127.0.0.1:8080/showme`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    const link = await res.json();
    console.log(link.test);
    rounter.push("/");
  }
  return (
    <button
      onClick={() => {
        const clickTest = handleDownload(url, type, rounter);
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
  );
}
