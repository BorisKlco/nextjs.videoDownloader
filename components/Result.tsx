import Image from "next/image";

export default function Result() {
  return (
    <div className="py-4 px-8">
      <div className="flex justify-between text-3xl">
        <p className="truncate max-w-lg">
          AWS CodeWhisperer… The Copilot Killer?
        </p>
        <p className="truncate max-w-fit invisible sm:visible">Apr 14, 2023</p>
      </div>
      <div className="flex mt-4 gap-4 flex-wrap">
        <div className="flex flex-col items-center sm:items-left">
          <Image
            className="object-contain md:max-w-sm xl:max-w-md rounded-3xl border border-black"
            src="/images/thumb.jpg"
            width={1920}
            height={1080}
            alt="thumb"
          />
          <div className="flex items-center justify-center pt-3 text-xl">
            <p>I wanna download just Thumbnail...</p>
            <Image
              src="/images/search/download.svg"
              width={32}
              height={32}
              alt="download"
            />
          </div>
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
