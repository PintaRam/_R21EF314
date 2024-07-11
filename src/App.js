import React, { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [topN, setTopN] = useState(10); // Set the number of top products to display

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => setProducts(data.slice(0, topN))); // Fetch and set top N products
  }, [topN]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Top {topN} Products</h1>
        <ProductList products={products} />
      </header>
    </div>
  );
}

export default App;
