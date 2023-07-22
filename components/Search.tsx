import { Suspense } from "react";
import { Result, Input, Loading } from ".";

type SearchProps = {
  url: string;
  site?: string;
  tiktok?: string;
};

export default function Search({ url, site = "", tiktok = "" }: SearchProps) {
  return (
    <Suspense fallback={<Loading />}>
      <div className="mt-6 md:mt-16 rounded-3xl border border-black">
        <div className="flex flex-col bg-search rounded-3xl w-min-16 w-full h-auto">
          <Input />
          {url != "/" && (
            <div>
              <Result url={url} site={site} tiktok={tiktok} />
            </div>
          )}
        </div>
      </div>
    </Suspense>
  );
}
