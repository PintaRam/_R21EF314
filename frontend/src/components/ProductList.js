// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../api/api';
import { ListGroup } from 'react-bootstrap';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mt-4">
      <h2>All Products</h2>
      <ListGroup>
        {products.map(product => (
          <ListGroup.Item key={product._id}>
            <h4>{product.name}</h4>
            <p>Company: {product.company}</p>
            <p>Category: {product.category}</p>
            {/* Add more product details as needed */}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ProductList;
