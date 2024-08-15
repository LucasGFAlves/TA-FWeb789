import React from 'react';
import CartItem from './CompCartItem';

function CartComponent({ cartItems }) {
  return (
    <ul>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default CartComponent;