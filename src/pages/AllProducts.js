import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import ProductFilters from '../components/ProductFilters';
import axios from 'axios';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products', { params: filters });
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <h1>All Products</h1>
      <ProductFilters onFilterChange={handleFilterChange} />
      <ProductList products={products} />
    </div>
  );
};

export default AllProducts;
