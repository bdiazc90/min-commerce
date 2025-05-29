import { type Product } from "../models/product";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

interface Props {
	product: Product;
}

export default function ProductCard({ product }: Props) {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error("No se encuentra CartContext");
	}
	const { cart, addToCart } = context;

	let quantityInCart = 0;
	if (cart && cart.length > 0) {
		const thisProduct = cart.find((cartItem) => cartItem.id === product.id);
		if (thisProduct) {
			quantityInCart = thisProduct.quantity;
		}
	}

	return (
		<div className="group relative p-4 sm:p-6 rounded-xl bg-white dark:bg-[#1F2937] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
			<div className="relative aspect-square w-full overflow-hidden rounded-lg mb-4">
				<img src={product.imageUrl} alt={product.title} className="w-40 transform transition-transform duration-300 group-hover:scale-105" />
			</div>

			<div className="space-y-4">
				<span className="inline-block text-xs px-3 py-1 rounded-full bg-[#F3F4F6] dark:bg-[#374151] text-[#4B5563] dark:text-[#D1D5DB]">{product.category}</span>

				<h3 className="text-lg leading-tight font-medium text-[#111827] dark:text-[#F9FAFB] truncate">{product.title}</h3>

				<p className="text-xl font-bold text-[#111827] dark:text-[#F9FAFB]">US$ {product.price}</p>

				{quantityInCart > 0 ? (
					<p className="text-white">Cantidad en el carrito: {quantityInCart}</p>
				) : (
					<button onClick={() => addToCart(product)} className="px-6 py-4 rounded-2xl bg-amber-400 text-white hover:bg-amber-700 cursor-pointer">
						Agregar al carrito
					</button>
				)}
			</div>
		</div>
	);
}
