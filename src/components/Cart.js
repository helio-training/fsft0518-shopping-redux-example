import React, { Fragment } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import ActionCreators from '../actions'

const AddToCart = styled.button`
  font-size: 22px;
  font-weight: 500;
  margin: 10px;
`

const mapStateToProps = ({ cart }, props) => ({
  cart
})

const mapDispatchToProps = (dispatch, props) => ({
  onAddToCart(product = {}) {
    return dispatch(ActionCreators.addToCart(product))
  }
})

const Cart = props => (
  <Fragment>
    <h3>How many items: {props.cart.length}</h3>
    <AddToCart onClick={e => props.onAddToCart({ id: 1, name: 'Blah', price: 9.99 })}>
      Add to Cart
    </AddToCart>
  </Fragment>
)

export default connect(mapStateToProps, mapDispatchToProps)(Cart)





