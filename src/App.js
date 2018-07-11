import React from 'react'
import styled from 'styled-components'
import Cart from './components/Cart'

const Shell = styled.section`
  flex: 1;
  display: flex;
  border: 1px solid red;
  flex-direction: column;
`

export default () => (
  <Shell>
    <Cart />
  </Shell>
)
