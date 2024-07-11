import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h2>{product.productname}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: ${product.rating}</p>
      <p>Discount: ${product.discount}</p>
      <h2>{product.availablity}</h2>
    </div>
  );
};

export default ProductCard;
