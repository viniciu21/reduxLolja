import produce from 'immer'

export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART_SUCCESS':
      return produce(state, (draft) => {
        const { product } = action
        draft.push(product)
      })
    case 'REMOVE_FROM_CART':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.id)

        if (productIndex >= 0) {
          draft.splice(productIndex, 1)
        }
      })
    case 'UPDATE_AMOUNT':
      if (action.amount <= 0) {
        return state
      }
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.id)

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount)
        }
      })
    default:
      return state
  }
}
