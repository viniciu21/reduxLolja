import React from 'react'
import logo from '../../assets/logo.svg'
import { MdShoppingBasket } from 'react-icons/md'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import { Container, Cart } from './styles'

const Header = ({ cartSize }) => {
  // console.log(cart)
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="LOLJa" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong> Carrinho ME COMPRAAAAAA</strong>
          <span> {cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  )
}

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header)
