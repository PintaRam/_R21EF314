// src/components/ProductDetail.js
import React, { useState, useEffect } from 'react';
import { getProductById } from '../api/api';
import { Spinner } from 'react-bootstrap';

const ProductDetail = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(productId);
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>;
  }

  return (
    <div className="container mt-4">
      <h2>Product Details</h2>
      <p>Name: {product.name}</p>
      <p>Company: {product.company}</p>
      <p>Category: {product.category}</p>
      {/* Add more product details as needed */}
    </div>
  );
};

export default ProductDetail;
