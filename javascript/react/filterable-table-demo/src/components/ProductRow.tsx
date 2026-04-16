import { type Product } from "../data";

interface Props {
  index: number;
  product: Product;
}

export function ProductRow({ product, index }: Props) {
  console.log(`render: ProductRow — ${product.name}`);
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>${product.price}</td>
    </tr>
  );
}