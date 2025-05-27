import { type Product } from "../models/product";

export default function ProductCard(props: Product) {
    return <div className="p-4 rounded-2xl border-3 border-amber-500">
        <h3 className="text-xl">{props.title}</h3>
    </div>
}