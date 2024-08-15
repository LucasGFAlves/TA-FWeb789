import React from 'react';
import ProductItem from './CompProductItem';

function ProductsList({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default ProductsList;