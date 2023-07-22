import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import UrlError from "./UrlError";
import Download from "./Download";
import { FormatProps, ResultProps } from "@/type";
import fetchMeta from "./fetchMeta";

export default async function Result({ url, site, tiktok = "" }: ResultProps) {
  if (!url) return "";
  const data = await fetchMeta({ url, site, tiktok });
  if (data[0].error) {
    return <UrlError error={data[0].error} />;
  }
  const videoDate = moment(data[1].upload_date).format("MMMM Do YYYY");
  return (
    <>
      <div className="py-4 px-6">
        <div className="flex justify-between text-2xl">
          <p className="truncate max-w-2xl">{data[1].fulltitle}</p>
          <p className="truncate max-w-fit invisible xl:visible">{videoDate}</p>
        </div>
        <div className="flex mt-4 gap-2 flex-wrap">
          <div className="flex flex-col items-center sm:items-left">
            <Image
              className="object-contain md:max-w-xs xl:max-w-md rounded-3xl border border-black"
              src={data[1].thumbnail}
              width={1280}
              height={720}
              quality={1}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAiEAACAAUEAwEAAAAAAAAAAAABAgMEBxESAAUGIQgJUmH/xAAVAQEBAAAAAAAAAAAAAAAAAAAABf/EAB4RAQABAgcAAAAAAAAAAAAAAAECAAQFERIiQaGx/9oADAMBAAIRAxEAPwBTLyRptRzcY3KeH0tMSb3YTUlGydJa6qVZ2LJkbEYgILKMQez2aI/tcSTdpNaQm0AmGLbl89fH5pppDaaSpWEwiW0U5y6A8K//2Q=="
              alt="thumb"
            />

            <Link
              className="flex items-center justify-center py-3 hover:underline"
              href={data[1].thumbnail}
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
          <div className="flex flex-col justify-center mb-10 gap-6 w-full md:w-1/2">
            {data[1].duration > 5000 ? (
              <div>
                <p className="text-xl lg:text-2xl text-center">
                  Sorry, video longer than 1h:30min
                </p>
              </div>
            ) : (
              <>
                <p className="text-md lg:text-md text-center">
                  <p className="text-md lg:text-md text-center">
                    WebM should be better quality than MP3.
                  </p>
                  MP3 need to be converted, 1h video take ~1min.
                </p>
                <div className="flex items-center justify-between gap-2 mx-auto">
                  <p className="text-xl lg:text-2xl">Audio</p>
                  <Download
                    id={data[1].id}
                    option="audio"
                    format="mp3"
                    format_id="bestaudio"
                  />
                  <Download
                    id={data[1].id}
                    option="audio"
                    format="webm"
                    format_id="bestaudio"
                  />
                </div>
                <div className="flex items-center justify-between gap-2 mx-auto">
                  <p className="text-xl lg:text-2xl">Video</p>
                  {data[0].reverse().map((format: FormatProps) => (
                    <Download
                      key={format.format_id}
                      id={data[1].id}
                      option="video"
                      format={format.format_note}
                      format_id={format.format_id}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
