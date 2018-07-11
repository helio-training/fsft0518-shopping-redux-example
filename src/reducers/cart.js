import { ADD_TO_CART } from '../actions'

export default (state = [], { type, quantity, product }) => {
  switch (type) {
    case ADD_TO_CART :
      return [...state, { quantity, ...product }]
  }

  return state
}
