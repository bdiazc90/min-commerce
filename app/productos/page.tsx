import ProductCard from "@/src/components/product-card";

import { productos } from "@/data/products";

// Debe llamarse: page.tsx
// Componente de React "export default"
export default function ProductsPage() {
  return (
    <div className="ms-24 mt-24">
      <h1 className="text-amber-600 text-8xl">Productos</h1>
      <hr className="my-8" />
      {productos.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}