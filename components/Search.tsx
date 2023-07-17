import Image from "next/image";

export default function Search() {
  return (
    <div className="pt-16">
      <div className="flex flex-col bg-search rounded-3xl w-[50vh] h-auto">
        <div className="flex relative">
          <input
            type="text"
            className="
            group
            text-xl
            px-6
            underline
            rounded-3xl 
            h-[3rem] 
            w-full 
            bg-input 
            focus:outline-1
            border border-black"
          />
          <button
            className="absolute 
            flex
            justify-center
            items-center
            h-full 
            right-0 
            text-3xl 
            pl-4
            pr-2
            rounded-full 
            bg-button
            hover:bg-logo
            hover:outline
            hover:outline-1
            hover:outline-black
            transition
            border border-black
            text-white
            "
          >
            Search
            <Image
              className="object-fit"
              src="images/search/search-left.svg"
              width={42}
              height={42}
              alt="search icon"
            />
          </button>
        </div>
        <div>
          <h1>asdasd</h1>
          <p>321321</p>
          <p>321321</p>
          <p>321321</p>
        </div>
      </div>
    </div>
  );
}
