import React, { useState, useEffect } from 'react';
import CartComponent from '../components/CompCart';
import CartService from '../services/ServCartService';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await CartService.getCart();
        setCartItems(response.data);
      } catch (error) {
        console.error('Erro ao buscar carrinho:', error);
      }
    };

    fetchCart();
  }, []);

  return (
    <div>
      <CartComponent/>
      <h2>Meu Carrinho</h2>
      {/* Renderize os produtos do carrinho */}
      <button>Finalizar Compra</button>
    </div>
  );
}

export default Cart;