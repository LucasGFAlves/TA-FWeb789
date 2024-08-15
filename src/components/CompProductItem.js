import React from 'react';

function ProductItem({ product }) {
  return (
    <li>
      <h3>{product.name}</h3>
      <p>Preço: R$ {product.price}</p>
      {/* Adicione mais informações do produto aqui */}
      <button>Adicionar ao Carrinho</button>
    </li>
  );
}

export default ProductItem;