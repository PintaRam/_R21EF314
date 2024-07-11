import React, { useState } from 'react';

const ProductFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: '',
    company: '',
    rating: '',
    priceRange: '',
    availability: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className="filters">
      <label>
        Category:
        <input type="text" name="category" value={filters.category} onChange={handleChange} />
      </label>
      <label>
        Company:
        <input type="text" name="company" value={filters.company} onChange={handleChange} />
      </label>
      <label>
        Rating:
        <input type="text" name="rating" value={filters.rating} onChange={handleChange} />
      </label>
      <label>
        Price Range:
        <input type="text" name="priceRange" value={filters.priceRange} onChange={handleChange} />
      </label>
      <label>
        Availability:
        <input type="text" name="availability" value={filters.availability} onChange={handleChange} />
      </label>
    </div>
  );
};

export default ProductFilters;
