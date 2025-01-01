"use client";

import { useState, useEffect } from "react";
import Road from "./components/Road";
import InfoPanel from "./components/InfoPanel";
import useAlvinProgress from "./hooks/useAlvinProgress";

export default function Page() {
  // Tema state
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  // Alvin yolculuğu için useAlvinProgress hook'u
  const { currentProgress, remainingHours, totalHours } = useAlvinProgress();

  return (
    <section className="flex flex-col items-center justify-center py-20 gap-6">
      <h1 className="text-4xl font-bold">
        {isDark ? "Karanlık Tema" : "Aydınlık Tema"} & Alvin Yolculuğu
      </h1>

      {/* Alvin Road */}
      <Road currentProgress={currentProgress} />

      {/* Info Panel */}
      <InfoPanel
        currentProgress={currentProgress}
        remainingHours={remainingHours}
        totalHours={totalHours}
      />

    
    </section>
  );
}
