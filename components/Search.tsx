import { Result, Input } from ".";

type SearchProps = {
  url: string;
};

export default function Search({ url }: SearchProps) {
  return (
    <div className="mt-16 rounded-3xl border border-black">
      <div className="flex flex-col bg-search rounded-3xl w-min-16 w-full h-auto">
        <Input />
        {url != "/" && (
          <div>
            <Result url={url} />
          </div>
        )}
      </div>
    </div>
  );
}
