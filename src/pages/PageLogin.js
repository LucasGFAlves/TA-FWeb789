import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/ServAuthService';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await AuthService.login(email, password);
      // Faça algo com a resposta do login, como redirecionar para a página inicial
      navigate('/');
    } catch (error) {
      console.error('Erro no login:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Entrar</button>
    </form>
  );
}

export default Login;