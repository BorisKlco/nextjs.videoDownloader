"use client";

import Link from "next/link";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="mt-8 md:mt-12 flex flex-col gap-4 items-center flex-wrap">
      <h2 className="text-3xl">Something went wrong!</h2>
      <div className="">
        <Link
          href={"/"}
          className="underline cursor-pointer text-2xl hover:text-logo"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default Error;
