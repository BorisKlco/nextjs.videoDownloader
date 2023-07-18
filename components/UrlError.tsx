import Image from "next/image";

export default function UrlError() {
  return (
    <div className="flex justify-center items-center">
      <h1 className="truncate my-4 text-xl sm:text-3xl">
        Something woOong. Check URL?
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
