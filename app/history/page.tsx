import Link from "next/link";
import Image from "next/image";
import fetchHistory from "@/components/fetchHistory";
import { Suspense } from "react";

type HistoryData = {
  id: number;
  title: string;
  image: string;
  link: string;
};

export default async function History() {
  const data: HistoryData[] = await fetchHistory();
  return (
    <>
      <div className="mt-6 md:mt-8 flex flex-wrap">
        {data.map((item) => (
          <div
            key={item.id}
            className="group aspect-square max-w-[16rem] p-4 mx-auto m-4 drop-shadow-lg"
          >
            <Link href={item.link} target="_blank">
              <p className="truncate mb-2 ">{item.title}</p>
              <Image
                src={item.image}
                loading="lazy"
                width={256}
                height={256}
                quality={50}
                className="object-cover aspect-square rounded-xl transition group-hover:scale-[1.025] border border-black"
                alt="history"
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
