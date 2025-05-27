export interface Product {
    id: string,
    title: string,
    price: number,
    imageUrl: string,
    category: string,
    onSale?: boolean,
}

export const products: Array<Product> = [
  {
    id: '1',
    title: 'Zapatillas Jordan',
    price: 179.99,
    imageUrl: 'https://i.ebayimg.com/images/g/hG8AAOSwvvFn7FgX/s-l1600.jpg',
    category: 'Calzado',
    onSale: true
  },
  {
    id: '2',
    title: 'Nike Dunk Low SB',
    price: 199.99,
    imageUrl: 'https://i.ebayimg.com/images/g/rWYAAOSwUf9kGWcE/s-l2400.webp',
    category: 'Calzado',
    onSale: true
  },
  {
    id: '3',
    title: 'Adidas Shoes',
    price: 145.00,
    imageUrl: 'https://i.ebayimg.com/images/g/k14AAOSwVzdnuo9E/s-l1600.jpg',
    category: 'Calzado',
    onSale: true
  },
];