"use client";
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <div>
        <h1>Sowy</h1>
        {error.message}
      </div>
    </>
  );
}
