import React, { useState, useEffect } from 'react'

import { MdAddShoppingCart } from 'react-icons/md'

import { ProductList } from './styles'

import { formatPrice } from '../../utils/format';

import api from '../../services/api';

const Home = () => {

  const [products, setProducts] = useState();

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/products');

      const dataFormat = data.map((product) => ({
        ...product, priceFormat: formatPrice(product.price)
      }))

      setProducts(dataFormat);
    })()
  }, []);

  return (
    <ProductList>
      {products?.map(product => (
        <li key={product.id}>
          <img
            src={product.image}
            alt="T-SHiRT"
          />
          <strong> {product.title}</strong>
          <span>{product.priceFormat}</span>
          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="white" /> 3
          </div>

            <span> Adicionar ao Carrinho </span>
          </button>
        </li>
      ))}
    </ProductList>
  )
}

export default Home
