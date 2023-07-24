export default async function Loading() {
  return (
    <>
      <div className="mt-6 md:mt-8 flex flex-wrap">
        {Array.from({ length: 12 }, (movie, i) => (
          <div className="max-w-[16rem] p-4 mx-auto m-4 animate-pulse" key={i}>
            <p className="truncate mb-2 invisible">Loading</p>
            <div className="h-[256px] lg:h-[256px] bg-gray-700/50 aspect-square rounded-xl animate-pulse"></div>
          </div>
        ))}
      </div>
    </>
  );
}
