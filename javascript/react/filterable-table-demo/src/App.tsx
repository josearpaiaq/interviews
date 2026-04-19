import { FilterableTable } from "./features/filterable-table/FilterableTable";
import FAQs from "./features/FAQs";

export default function App() {
  return (
    <div>
      <h1>Products</h1>
      <FilterableTable />
      <FAQs />
    </div>
  );
}
