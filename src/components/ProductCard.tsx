import { type Product } from "../models/product";

export default function ProductCard(props: Product) {
    return <div style={{padding: 20, border: '1px solid gray'}}>
        <h3>{props.title}</h3>
    </div>
}