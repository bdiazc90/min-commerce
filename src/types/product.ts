export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    description?: string;
    inStock: boolean;
}

// Esto lo usará React para componentes del Front-end
// Y también lo usará el Back-end para definir la estructura de los productos.