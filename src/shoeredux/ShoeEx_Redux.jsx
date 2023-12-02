import React, { Component } from 'react'
import CartShoe from './CartShoe'
import ListShoe from './ListShoe'

export default class ShoeEx_Redux extends Component {
  render() {
    return (
      <div className='row'>
        <CartShoe></CartShoe>
        <ListShoe></ListShoe>
      </div>
    )
  }
}
