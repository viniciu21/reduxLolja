import React, { Component } from 'react'

import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';

import { MdAddShoppingCart } from 'react-icons/md'

import { ProductList } from './styles'

import { formatPrice } from '../../utils/format'

import api from '../../services/api'

import * as CartAction from '../../store/modules/cart/actions';
class Home extends Component {
  state = {
    products: [],
  }

  async componentDidMount() {
    const { data } = await api.get('products')

    const dataFormat = data.map((product) => ({
      ...product,
      priceFormated: formatPrice(product.price),
    }))

    this.setState({ products: dataFormat })
  }

  handleAddProduct = (product) => {
    const { addToCart } = this.props

    addToCart(product);
  }

  render() {
    const { products } = this.state

    return (
      <ProductList>
        {products?.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt="T-SHiRT" />
            <strong> {product.title}</strong>
            <span>{product.priceFormated}</span>
            <button
              type="button"
              onClick={() => this.handleAddProduct(product)}
            >
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
}

const mapDispatchToProps = dispatch => bindActionCreators(CartAction, dispatch);

export default connect(null, mapDispatchToProps)(Home)
