import Image from "next/image";
import toast from "react-hot-toast";

async function handleSubmit(url: string) {
  console.log(url);
  const data = { url: url };
  const response = await fetch("http://127.0.0.1:8080/test", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  //console.log(await response.json());
}

export default async function Input() {
  async function handleForm(formData: FormData) {
    "use server";
    const formURL = formData.get("url");
    console.log(formURL);
  }
  return (
    <form
      className="flex relative"
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   handleSubmit(url);
      //   console.log("test");
      // }}
      action={handleForm}
    >
      <input
        type="text"
        name="url"
        className="group text-l md:text-xl px-6 focus:underline rounded-3xl 
            h-[3rem] w-full bg-input focus:outline-none placeholder:text-green-900/30 border border-black/40 placeholder:no-underline"
      />
      <button
        className="absolute flex justify-center items-center h-full right-0 text-xl md:text-3xl 
            pl-4 pr-2 rounded-full bg-button hover:bg-logo
            hover:outline hover:outline-1 hover:outline-black
            transition border border-black text-white"
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
    </form>
  );
}
