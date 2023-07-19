"use client";

import { Toaster } from "react-hot-toast";

export default function ToasterProvider() {
  return (
    <Toaster
      toastOptions={{
        style: {
          border: "1px solid black",
          marginTop: "0.5rem",
          padding: "0.75rem 1.5rem",
          fontSize: "1.25rem",
          color: "black",
          background: "#CDD5C6",
          filter: "drop-shadow(0rem 0.1rem 0.5rem #ea5a47)",
        },
        iconTheme: {
          primary: "#ea5a47",
          secondary: "#EEE9D7",
        },
        duration: 4000,
      }}
    />
  );
}
