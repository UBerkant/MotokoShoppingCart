import React, { memo } from 'react';

const ProductList = ({ products }) => {
  console.log('ProductList rendered'); // Performans izleme için

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default memo(ProductList);
