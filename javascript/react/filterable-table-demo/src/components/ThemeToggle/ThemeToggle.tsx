import { useTheme } from "../../contexts/theme/ThemeContext";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div onClick={toggleTheme} className={styles.button}>
      {theme === "light" ? "🌞" : "🌚"}
    </div>
  );
}