import { FilterableTable } from "./features/filterable-table/FilterableTable";
import FAQs from "./features/FAQs";
import { ThemeProvider } from "./contexts/theme/ThemeProvider";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import styles from "./app.module.css";

export default function App() {
  return (
    <ThemeProvider>
      <div className={styles.app}>
        <div className={styles.nav}>
          <h1>App Test</h1>
          <ThemeToggle />
        </div>
        <h2>Products</h2>
        <FilterableTable />
        <FAQs />
      </div>
    </ThemeProvider>
  );
}
