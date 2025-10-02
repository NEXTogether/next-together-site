"use client";

import { useEffect } from "react";

export default function ForceDarkMode() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return null; // Non renderizza nulla
}
