import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import FaqPage from "./pages/FaqPage";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { CartProvider } from "./context/cartContext";

function App() {

	return (
		<CartProvider>
			<Router>
				<header className="w-full p-4 bg-gray-300">
					<nav className="flex gap-4">
						<Link to="/cart">Carrito</Link>
						<Link to="/">Home</Link>
						<Link to="/faq">Faq</Link>
					</nav>
				</header>
				<main>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/cart" element={<CartPage />} />
						<Route path="/faq" element={<FaqPage />} />
					</Routes>
				</main>
			</Router>
		</CartProvider>
	);
}

// Antes:
// App -> Router -> Routes -> HomePage -> *ProductCard
//                         -> *CartPage 

// Ahora:
// App -> CartProvider -> Router -> Routes -> HomePage -> Padre -> hijo -> nieto -> ProductCard*

export default App;
