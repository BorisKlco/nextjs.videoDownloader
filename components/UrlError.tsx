import Image from "next/image";

type ErrorProps = {
  error: string;
};

export default function UrlError({ error }: ErrorProps) {
  console.log(error);
  return (
    <div className="flex justify-center items-center">
      <h1 className="truncate my-4 text-xl sm:text-3xl">
        Something woOong. {error}?
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
