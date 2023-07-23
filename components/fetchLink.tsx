export default async function fetchData({ queryKey }) {
  const { url, type } = queryKey[1];
  console.log("qLink", url, type);

  const obj = {
    url: url,
    type: type,
  };

  const res = await fetch(`http://127.0.0.1:8080/showme`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  if (!res.ok) {
    throw new Error("Link preparation not ok");
  }

  const test = await res.json();
  console.log("fTest", test);
  return test;
}
