import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
// import ActionCreators from './actions'
import { Provider } from 'react-redux'

import Store from './store'

Store.subscribe(() =>
  console.log(Store.getState())
)

// console.log('Initial State', Store.getState())
//
// const addToCartAction = ActionCreators.addToCart({ id: 1, name: 'Prez. Business', price: 9.99 })
// console.log('Action', addToCartAction)
// Store.dispatch(addToCartAction)

injectGlobal`
  ${reset}
  
  html, 
  body, 
  #root {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
  }
`

const Wrapped = () => (
  <Provider store={Store}>
    <App />
  </Provider>
)

ReactDOM.render(<Wrapped />, document.getElementById('root'))
registerServiceWorker()
