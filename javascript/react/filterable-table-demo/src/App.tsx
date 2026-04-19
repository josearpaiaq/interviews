import { useState } from "react";
import { FilterableTable } from "./filterable-table/FilterableTable";

export default function App() {
  const [render, setRender] = useState<"table" | "accordion">(() => {
    console.log("App mounted");
    return "table";
  });

  const handleToggle = () => {
    setRender((prev) => (prev === "table" ? "accordion" : "table"));
  };

  return (
    <div>
      <h1>Practice React</h1>
      <button onClick={handleToggle}>
        Switch to {render === "table" ? "Accordion" : "Table"}
      </button>
      {render === "table" && <FilterableTable />}
      {render === "accordion" && <div> Accordion </div>}
    </div>
  );
}
