import { type Product } from "../data";
import {ProductRow} from "./ProductRow";

interface Props {
  items: Product[];
}

export function ProductList({ items }: Props) {
  console.log("render: ProductList");
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map((product, index) => (
          <ProductRow key={product.id} product={product} index={index} />
        ))}
      </tbody>
    </table>
  );
}