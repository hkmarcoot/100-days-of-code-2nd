import React, { useState, useEffect } from "react";

export default function Counter() {
  const [clickCount, setClickCount] = useState(0);

  // your code here
  const increment = () => setClickCount((prev) => prev + 1);

  useEffect(() => {
    document.addEventListener("mousedown", increment);
    // Specify how to clean up after the effect:
    return () => {
      document.removeEventListener("mousedown", increment);
    };
  });

  return <h1>Document Clicks: {clickCount}</h1>;
}
