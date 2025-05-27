import ProductCard from './components/ProductCard';

import { products } from './models/product';

function App() {

  return (
    <main className='p-12'>
      <h1 className='text-4xl'>Min-Commerce</h1>
      <section className='flex justify-start pt-12 gap-8'>
        <ProductCard {...products[0]} />
        <ProductCard {...products[1]} />
        <ProductCard {...products[2]} />
      </section>
      
    </main>
  )
}

export default App
