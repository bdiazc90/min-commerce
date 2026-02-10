import ProductCard from "@/src/components/product-card";

import { productos } from "@/data/products";

export default function Catalog() {
    return (
        <section className="flex flex-wrap gap-2">
            {productos.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    );
}