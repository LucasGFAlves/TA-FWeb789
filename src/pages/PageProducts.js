import React, { useState, useEffect } from 'react';
import ProductsList from '../components/CompProductsList';
import ProductService from '../services/ServProductService';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await ProductService.getProducts();
        setProducts(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Nossos Produtos</h2>
      <ProductsList products={products} />
    </div>
  );
}

export default Products;