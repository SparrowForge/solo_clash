"use client";
import { useEffect, useState } from "react";

export default function ScrollHeader() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const header = document.getElementById("main-header");

      if (!header) return;

      // Hide header when scroll position is greater than 100px
      setIsHidden(currentScrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const header = document.getElementById("main-header");
    if (header) {
      header.style.opacity = isHidden ? "0" : "1";
      header.style.pointerEvents = isHidden ? "none" : "auto";
    }
  }, [isHidden]);

  return null;
}
