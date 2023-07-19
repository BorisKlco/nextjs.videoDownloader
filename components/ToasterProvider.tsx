"use client";

import { Toaster } from "react-hot-toast";

export default function ToasterProvider() {
  return (
    <Toaster
      toastOptions={{
        style: {
          border: "1px solid black",
          padding: "0.5rem 1rem",
          fontSize: "1.25rem",
          color: "black",
          background: "#CDD5C6",
        },
        iconTheme: {
          primary: "#ea5a47",
          secondary: "#EEE9D7",
        },
        duration: 2500,
      }}
    />
  );
}
