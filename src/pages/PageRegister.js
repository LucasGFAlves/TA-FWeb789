import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/ServAuthService';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await AuthService.register(name, email, password);
      // Faça algo com a resposta do cadastro, como redirecionar para a página de login
      navigate('/login');
    } catch (error) {
      console.error('Erro no cadastro:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro</h2>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default Register;