/**
 * 1. What are actions?
 * 2. What are actions like in the browser?
 * 3. Why did we case the variables below how we did?
 *
 * THE ACTION'S NAME (VARIABLES)
 */
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const UPDATE_QUANTITY_FOR_PRODUCT = 'UPDATE_QUANTITY_FOR_PRODUCT'

export default {

  /**
   * Action Creators
   * Create an ADD_TO_CART action
   *
   * @param product
   * @param quantity
   *
   * @returns {{type: string}}
   */
  addToCart(product = {}, quantity = 1) {
    return {
      type: ADD_TO_CART,
      product,
      quantity
    }
  },

  removeFromCart(product={}) {
    return {
      type: REMOVE_FROM_CART,
      product,
    }
  },

  updateQuantity(product={}, quantity=1) {
    return {
      type: UPDATE_QUANTITY_FOR_PRODUCT,
      product,
      quantity
    }
  }

}

