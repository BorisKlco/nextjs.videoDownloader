import { Result, Input } from ".";

type SearchProps = {
  url: string;
};

export default function Search({ url }: SearchProps) {
  return (
    <div className="pt-16 ">
      <div className="flex flex-col bg-search rounded-3xl w-min-16 w-full h-auto border-b border-x border-black">
        <Input />
        <div>
          <Result url={url} />
        </div>
      </div>
    </div>
  );
}
