import { useCallback, useMemo, useState } from "react";
import { type Product, products } from "../data";
import SearchBar from "./SearchBar";
import SortControls from "./SortControls";
import ProductList from "./ProductList";

export interface SortConfig {
  key: keyof Omit<Product, "id">;
  direction: "asc" | "desc";
}

export function FilterableTable() {
  console.log("render: FilterableTable");

  const [query, setQuery] = useState("");
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: "name",
    direction: "asc",
  });

  const handleSearch = useCallback((value: string) => {
    setQuery(value);
  }, []);

  const handleSort = useCallback((key: SortConfig["key"]) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  }, []);

  const filteredAndSorted = useMemo(() => products
    .filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => {
      const valA = a[sortConfig.key];
      const valB = b[sortConfig.key];
      if (valA < valB) return sortConfig.direction === "asc" ? -1 : 1;
      if (valA > valB) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    }), [ query, sortConfig ]);

  return (
    <div>
      <SearchBar onChange={handleSearch} />
      <SortControls sortConfig={sortConfig} onSort={handleSort} />
      <ProductList items={filteredAndSorted} />
    </div>
  );
}