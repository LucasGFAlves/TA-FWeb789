import axios from 'axios';

const API_URL = 'https://api.example.com'; // Substitua pela sua API

const AuthService = {
  login: async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    return response.data;
  },
  register: async (name, email, password) => {
    const response = await axios.post(`${API_URL}/register`, {
      name,
      email,
      password,
    });
    return response.data;
  },
};

export default AuthService;