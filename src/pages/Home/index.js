import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { MdAddShoppingCart } from 'react-icons/md'

import { ProductList } from './styles'

import { formatPrice } from '../../utils/format'

import api from '../../services/api'

import * as CartAction from '../../store/modules/cart/actions'

function Home() {

  const [products, setProducts] = useState([]);
  const dispatch = useDispatch()
  const amount = useSelector(state => state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }));

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('products')

      const dataFormat = data.map((product) => ({
        ...product,
        priceFormated: formatPrice(product.price),
      }))

      setProducts(dataFormat);

    } loadProducts()
  }, [])

  const handleAddProduct = (id) => {
    dispatch(CartAction.addToCartRequest(id))
  }

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt="T-SHiRT" />
          <strong> {product.title}</strong>
          <span>{product.priceFormated}</span>
          <button
            type="button"
            onClick={() => handleAddProduct(product.id)}
          >
            <div>
              <MdAddShoppingCart size={16} color="white" />
              {amount[product.id] || 0}
            </div>

            <span> Adicionar ao Carrinho </span>
          </button>
        </li>
      ))}
    </ProductList>
  )
}



export default Home;
