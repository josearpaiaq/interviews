export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

export const products: Product[] = [
  { id: 1, name: "Wireless Mouse", category: "Electronics", price: 29.99 },
  { id: 2, name: "Mechanical Keyboard", category: "Electronics", price: 89.99 },
  { id: 3, name: "Standing Desk", category: "Furniture", price: 349.99 },
  { id: 4, name: "Monitor Stand", category: "Furniture", price: 49.99 },
  { id: 5, name: "USB-C Hub", category: "Electronics", price: 39.99 },
  { id: 6, name: "Notebook", category: "Stationery", price: 9.99 },
  { id: 7, name: "Desk Lamp", category: "Furniture", price: 34.99 },
  { id: 8, name: "Webcam", category: "Electronics", price: 79.99 },
  { id: 9, name: "Pen Set", category: "Stationery", price: 14.99 },
  { id: 10, name: "Chair Cushion", category: "Furniture", price: 24.99 },
];