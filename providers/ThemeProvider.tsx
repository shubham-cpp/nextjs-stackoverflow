"use client";
import { createContext, useEffect, useLayoutEffect, useState } from "react";

interface DarkModeContext {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContext>({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

const toggleDarkModeClass = (mode = true) => {
  if (mode) {
    document.documentElement.classList.add("dark");
    document.documentElement.style.setProperty("color-scheme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.style.setProperty("color-scheme", "light");
  }
};

const DarkModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useLayoutEffect(() => {
    // FIXME: Issue darkMode is applied after navbar loads, so this defaults to light theme regardless
    if (
      localStorage.getItem("darkMode") === "true" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      toggleDarkModeClass();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    toggleDarkModeClass(isDarkMode);
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
