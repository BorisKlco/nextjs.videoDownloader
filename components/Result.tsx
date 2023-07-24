import Image from "next/image";
import Download from "./Download";
import Link from "next/link";
import moment from "moment";

type ResultDataProps = {
  data: {
    error?: string;
    id: string;
    upload_date: number;
    title: string;
    fulltitle: string;
    thumbnail: string;
    duration: number;
    length: number;
    original_url: string;
  };
};

export default function Result({ data }: ResultDataProps) {
  if (data.error || !data.title) {
    return (
      <div className="flex justify-center items-center">
        <h1 className="truncate my-4 text-xl sm:text-3xl">
          Something woOong. Try again?
        </h1>
        <Image
          src="/images/search/wrong.svg"
          height={32}
          width={32}
          className="object-fit"
          alt="SomethingWoOng"
        />
      </div>
    );
  }
  const videoDate = moment(data.upload_date).format("MMMM Do YYYY");
  return (
    <>
      <div className="py-4 px-6">
        <div className="flex justify-between text-2xl">
          {!data.fulltitle ? (
            <p className="truncate max-w-2xl">{data.title}</p>
          ) : (
            <p className="truncate max-w-2xl">{data.fulltitle}</p>
          )}
          <p className="truncate max-w-fit invisible xl:visible">{videoDate}</p>
        </div>
        <div className="flex mt-4 gap-2 flex-wrap">
          <div className="flex flex-col items-center sm:items-left">
            <Image
              className="object-cover aspect-video md:max-w-xs xl:max-w-md rounded-3xl border border-black"
              src={data.thumbnail}
              width={1280}
              height={720}
              quality={80}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAiEAACAAUEAwEAAAAAAAAAAAABAgMEBxESAAUGIQgJUmH/xAAVAQEBAAAAAAAAAAAAAAAAAAAABf/EAB4RAQABAgcAAAAAAAAAAAAAAAECAAQFERIiQaGx/9oADAMBAAIRAxEAPwBTLyRptRzcY3KeH0tMSb3YTUlGydJa6qVZ2LJkbEYgILKMQez2aI/tcSTdpNaQm0AmGLbl89fH5pppDaaSpWEwiW0U5y6A8K//2Q=="
              alt="thumb"
            />

            <Link
              className="flex items-center justify-center py-3 hover:underline"
              href={data.thumbnail}
              target="_blank"
            >
              <p className="text-sm sm:text-md md:text-lg">
                I wanna just Thumbnail...
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
            {data.duration > 5000 ? (
              <div>
                <p className="text-xl lg:text-2xl text-center">
                  Sorry, video longer than 1h:30min
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between gap-2 mx-auto">
                  <p className="text-xl lg:text-3xl hidden sm:block">Audio</p>
                  <Download url={data.original_url} type="audio" format="MP3" />
                </div>
                <div className="flex items-center justify-between gap-2 mx-auto">
                  <p className="text-xl lg:text-3xl hidden sm:block">Video</p>
                  <Download url={data.original_url} type="video" format="MP4" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
