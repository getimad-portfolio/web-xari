import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

function ThemeToggleBtn() {
  const [theme, setTheme] = useState<"dark" | "light">(
    localStorage.theme || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <button
      type="button"
      onClick={handleThemeToggle}
      className="place-items-center grid hover:bg-primary-ori/10 dark:hover:bg-dark-primary-ori/10 rounded-md w-10 h-10 transition-colors duration-300 ease-in-out"
    >
      <FontAwesomeIcon icon={theme === "light" ? faSun : faMoon} />
    </button>
  );
}

export default ThemeToggleBtn;
