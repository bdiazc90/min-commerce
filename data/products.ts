import { type Product } from "@/src/types/product";

export const productos : Product[] = [
    {
        id: "nike-zap-456",
        name: "Zapatilla Nike 456",
        price: 300,
        image: "/images/zapatilla-nike-456.jpg",
        category: "calzado",
        description: "Zapatillas deportivas de alta calidad para correr y entrenar.",
        inStock: true,
    },
    {
        id: "adidas-pan-789",
        name: "Pantalon Adidas 789",
        price: 250,
        image: "/images/pantalon-adidas-789.jpg",
        category: "ropa",
        inStock: true,
    },
    {
        id: "reebok-gor-123",
        name: "Gorra Reebok 123",
        price: 50,
        image: "/images/gorra-reebok-123.jpg",
        category: "accesorios",
        description: "Gorra deportiva con diseño moderno y ajuste cómodo para protegerte del sol.",
        inStock: true,
    },
    {
        id: "puma-cam-321",
        name: "Camiseta Puma 321",
        price: 150,
        image: "/images/camiseta-puma-321.jpg",
        category: "ropa",
        description: "Camiseta deportiva de alta calidad con tecnología de absorción de sudor para mantenerte fresco durante tus entrenamientos.",
        inStock: false,
    }
]