export default async function fetchData({ queryKey }) {
  const url = queryKey[1];
  console.log("q", url);

  const res = await fetch(`http://127.0.0.1:8080/test`, {
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
