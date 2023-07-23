import Image from "next/image";

export default function Loading() {
  return (
    <div className="mt-6 md:mt-16 rounded-3xl border border-black">
      <div className="flex flex-col bg-search rounded-3xl w-min-16 w-full h-auto">
        <div className="flex justify-center items-center">
          <h1 className="truncate my-4 text-xl sm:text-3xl">
            LoAd1nG.. SeRvEr go Brrr..
          </h1>
          <Image
            src="/images/search/brr.svg"
            height={48}
            width={48}
            className="object-fit sm:pl-2"
            alt="Loading"
          />
        </div>
      </div>
    </div>
  );
}
