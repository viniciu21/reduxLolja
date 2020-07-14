export function addToCart(product){
  return{
    type: 'ADD_TO_CART',
    product,
  }
}

export function removeFromCart(id){
  return {
    type: 'REMOVE_FROM_CART',
    id,
  }
}

export function updateAmount(id, amount){
  return{
    type: 'UPDATE_AMOUNT',
    id,
    amount,
  }
}
