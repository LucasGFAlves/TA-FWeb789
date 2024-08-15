import axios from 'axios';

const API_URL = 'https://fakestoreapi.com'; // Substitua pela sua API

const ProductService = {
  getProducts: async () => {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  },
};

export default ProductService;