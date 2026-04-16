import { type SortConfig } from "./FilterableTable";

interface Props {
  sortConfig: SortConfig;
  onSort: (key: SortConfig["key"]) => void;
}

export function SortControls({ sortConfig, onSort }: Props) {
  console.log("render: SortControls");
  const fields: SortConfig["key"][] = ["name", "category", "price"];
  return (
    <div>
      {fields.map((field) => (
        <button key={field} onClick={() => onSort(field)}>
          {field}{" "}
          {sortConfig.key === field ? (sortConfig.direction === "asc" ? "↑" : "↓") : ""}
        </button>
      ))}
    </div>
  );
}