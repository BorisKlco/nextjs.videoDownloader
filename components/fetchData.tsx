import { QueryFunctionContext } from "@tanstack/react-query";
export default async function fetchData({ queryKey }: QueryFunctionContext) {
  const url = queryKey[1];

  const res = await fetch(`http://127.0.0.1:8080/extract_info`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(url),
  });

  if (!res.ok) {
    throw new Error("fetch not ok");
  }

  return res.json();
}
