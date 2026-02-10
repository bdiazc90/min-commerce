// Para que una ruta responda a una petición HTTP tal como un Backend API, debe:
// 1. Estar dentro de la carpeta "app/api" (o una subcarpeta dentro de esta).
// 2. Tener un archivo con el nombre "route.ts"
// 3. Exportar una función con el nombre del método HTTP (GET, POST, etc.)

import { getProducts } from "@/src/controllers/productController";


export async function GET() {
    // Atrapas la solicitud

    // Llamar a un controller.
    const products = await getProducts();

    // Respondes
    return new Response(JSON.stringify(products), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}