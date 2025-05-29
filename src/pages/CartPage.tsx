import { useContext } from "react";
import { CartContext } from "../context/cartContext";


export default function CartPage() {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error("No se encuentra CartContext");
	}
	const { cart } = context;

	return (
		<article className="p-24">
			<h2 className="text-xl">Carrito de Compras</h2>
			<hr />
			{cart && cart.length > 0 && cart.map((cartItem, index) => <section key={index}>{cartItem.title} - Cantidad: {cartItem.quantity}</section>)}
		</article>
	);
}
