import { QueryFunctionContext } from "@tanstack/react-query";

type Keys = {
  url: string;
  type: string;
};

export default async function fetchData({ queryKey }: QueryFunctionContext) {
  const queryKeyArray: Keys[] = queryKey as Keys[];
  const { url, type } = queryKeyArray[1];

  const obj = {
    url: url,
    type: type,
  };

  const res = await fetch(`http://127.0.0.1:8080/get_me_link`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  if (!res.ok) {
    throw new Error("Link preparation not ok");
  }

  return await res.json();
}
