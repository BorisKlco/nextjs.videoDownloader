type DownloadProps = {
  params: { option: string };
  searchParams: { selection: string };
};

export default async function Home({ params, searchParams }: DownloadProps) {
  console.log(params, searchParams);
  const res = await fetch(
    `http://127.0.0.1:8080/download?id=${params.option}&option=${searchParams.selection}`
  );
  return res;
}
