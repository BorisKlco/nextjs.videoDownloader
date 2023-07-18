import Image from "next/image";
import Link from "next/link";
import moment from "moment";

type ResultProps = {
  url: string;
};

// Thumb
// "https://i.ytimg.com/vi/{VideoID}/maxresdefault.jpg"

export default async function Result({ url }: ResultProps) {
  if (!url) return "";
  const res = await fetch(`http://127.0.0.1:8080/${url}`);
  const json = await res.json();
  const videoDate = moment(json.upload_date).format("MMMM Do YYYY");
  return (
    <div className="py-4 px-8">
      <div className="flex justify-between text-3xl">
        <p className="truncate max-w-lg">{json.fulltitle}</p>
        <p className="truncate max-w-fit invisible sm:visible">{videoDate}</p>
      </div>
      <div className="flex mt-4 gap-4 flex-wrap">
        <div className="flex flex-col items-center sm:items-left">
          <Image
            className="object-contain md:max-w-sm xl:max-w-md rounded-3xl border border-black"
            src={`https://i.ytimg.com/vi/${url}/maxresdefault.jpg`}
            width={1920}
            height={1080}
            alt="thumb"
          />

          <Link
            className="flex items-center justify-center pt-3 text-xl"
            href={`https://i.ytimg.com/vi/${url}/maxresdefault.jpg`}
            target="_blank"
          >
            <p>I wanna download just Thumbnail...</p>
            <Image
              src="/images/search/download.svg"
              width={32}
              height={32}
              alt="download"
            />
          </Link>
        </div>
        <div className="flex flex-col justify-center mb-10 gap-8 mx-auto">
          <div className="flex items-center justify-between gap-4">
            <p className="text-3xl">Audio:</p>
            <div className="flex gap-2">
              <button className="bg-button w-[6rem] h-[3rem] rounded-full font-semibold  border border-black transition hover:bg-logo">
                mp3
              </button>
              <button className="bg-button w-[6rem] h-[3rem] rounded-full font-semibold  border border-black transition hover:bg-logo">
                webm
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <p className="text-3xl">Video:</p>
            <div className="flex gap-2">
              <button className="bg-button w-[6rem] h-[3rem] rounded-full font-semibold  border border-black transition hover:bg-logo">
                720p
              </button>
              <button className="bg-button w-[6rem] h-[3rem] rounded-full font-semibold  border border-black transition hover:bg-logo">
                1080p
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
