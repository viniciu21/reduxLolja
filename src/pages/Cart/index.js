import React from 'react'
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md'

import { useDispatch, useSelector } from 'react-redux'
import * as CartAction from '../../store/modules/cart/actions'

import { Container, ProductTable, Total } from './styles'

import { formatPrice } from '../../utils/format'

const Cart = () => {
  function increment(product) {
    dispatch(CartAction.updateAmountRequest(product.id, product.amount + 1))
  }

  const total = useSelector(state => formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount
    }, 0)))

  const cart = useSelector(state => state.cart.map((product) => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })))

  const dispatch = useDispatch();

  function decrement(product) {
    dispatch(CartAction.updateAmountRequest(product.id, product.amount - 1))
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th></th>
            <th>PRODUCT</th>
            <th>QNTD</th>
            <th>SUBTOTAl</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => dispatch(CartAction.removeFromCart(product.id))}
                >
                  <MdDelete size={30} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>Total</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  )
}

export default Cart;
