import { ResultProps } from "@/type";

export default async function fetchMeta({ url }) {
  console.log(url);
  if (!url) return {};
  let res = await fetch(`http://127.0.0.1:8080/test`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(url),
  });

  if (!res.ok) {
    throw new Error("API fetch failed");
  }

  return res.json();
}
