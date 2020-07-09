import React from 'react'
import logo from '../../assets/logo.svg'
import { MdShoppingBasket } from 'react-icons/md'

import { Link } from 'react-router-dom'

import { Container, Cart } from './styles'

const Header = () => {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="LOLJa" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong> Carrinho ME COMPRAAAAAA</strong>
          <span> 3 itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  )
}

export default Header
