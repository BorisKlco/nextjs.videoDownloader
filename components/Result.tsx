import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import UrlError from "./UrlError";
import { Suspense } from "react";

type ResultProps = {
  url: string;
};

export default async function Result({ url }: ResultProps) {
  if (!url) return "";
  const res = await fetch(`http://127.0.0.1:8080/${url}`);
  const json = await res.json();
  if (json.error) {
    return <UrlError />;
  }
  const videoDate = moment(json.upload_date).format("MMMM Do YYYY");
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="py-4 px-8">
        <div className="flex justify-between text-2xl">
          <p className="truncate max-w-xl">{json.fulltitle}</p>
          <p className="truncate max-w-fit invisible xl:visible">{videoDate}</p>
        </div>
        <div className="flex mt-4 gap-4 flex-wrap">
          <div className="flex flex-col items-center sm:items-left">
            <Image
              className="object-contain md:max-w-sm xl:max-w-md rounded-3xl border border-black"
              src={`https://i.ytimg.com/vi/${json.id}/maxresdefault.jpg`}
              width={1280}
              height={720}
              quality={1}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAiEAACAAUEAwEAAAAAAAAAAAABAgMEBxESAAUGIQgJUmH/xAAVAQEBAAAAAAAAAAAAAAAAAAAABf/EAB4RAQABAgcAAAAAAAAAAAAAAAECAAQFERIiQaGx/9oADAMBAAIRAxEAPwBTLyRptRzcY3KeH0tMSb3YTUlGydJa6qVZ2LJkbEYgILKMQez2aI/tcSTdpNaQm0AmGLbl89fH5pppDaaSpWEwiW0U5y6A8K//2Q=="
              alt="thumb"
            />

            <Link
              className="flex items-center justify-center py-3 hover:underline"
              href={`https://i.ytimg.com/vi/${json.id}/maxresdefault.jpg`}
              target="_blank"
            >
              <p className="text-sm sm:text-md md:text-lg">
                I wanna download just Thumbnail...
              </p>
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
    </Suspense>
  );
}
