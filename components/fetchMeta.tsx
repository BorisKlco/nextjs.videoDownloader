import { ResultProps } from "@/type";

export default async function fetchMeta({
  url,
  site,
  tiktok = "",
}: ResultProps) {
  let api_url;
  if (tiktok === "") {
    api_url = `${process.env.LOCAL_API}/fetch_metadata/${url}?site=${site}`;
  } else {
    api_url = `${process.env.LOCAL_API}/fetch_metadata/${url}?tiktok=${tiktok}?site=${site}`;
  }
  const res = await fetch(api_url);

  if (!res.ok) {
    throw new Error("API fetch failed");
  }

  return res.json();
}
