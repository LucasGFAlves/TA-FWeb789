import React from 'react';

function CartItem({ item }) {
  return (
    <li>
      <h3>{item.name}</h3>
      <p>Quantidade: {item.quantity}</p>
      <p>Preço: R$ {item.price}</p>
      {/* Adicione mais informações do item aqui */}
    </li>
  );
}

export default CartItem;