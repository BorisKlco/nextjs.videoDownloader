export default async function fetchHistory() {
  const res = await fetch("http://127.0.0.1:8080/history", {
    next: { revalidate: 20 },
  });
  if (!res.ok) {
    throw new Error("History API fetch failed.");
  }

  return res.json();
}
