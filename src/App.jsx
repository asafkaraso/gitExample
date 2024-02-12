import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FILTER_BY_ARR , SORT_BY_ARR , PRODUCTS_ARR} from './constants/data'
import CollectionSort from './components/CollectionSort/CollectionSort'
import ProductCard from './components/ProductCard/ProductCard'
import Products from '.'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav className="product-filter">
        <h1>Jackets</h1>
        <div className="sort">
            <CollectionSort label={"FILTER BY:"} arr={FILTER_BY_ARR} />
            <CollectionSort label={"SORT BY:"} arr={SORT_BY_ARR} />
        </div>
    </nav>
    <section className="products">

        {PRODUCTS_ARR.map(product => <ProductCard src={product.src} title={product.title} price={product.price} />)}

    </section>
</>
  )
}

export default App
