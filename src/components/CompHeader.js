import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Produtos</Link>
        <Link to="/cart">Carrinho</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Registro</Link>

        {/* Adicione links para Login e Register */}
      </nav>
    </header>
  );
}

export default Header;