import React, { Component } from 'react'
import { connect } from 'react-redux'

 class ItemShoe extends Component {
  render() {
  
    return (
      <div className='col-3'>
        <img className='w-100' src={this.props.data.image} alt="" />
        <h1>{this.props.data.name}</h1>
        <button onClick={()=>{this.props.handleAddToCart(this.props.data)}} className='btn btn-primary'>Add</button>
      </div>
    )
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleAddToCart : (shoe) => {
      let action = {
        type : "ADD",
        payload:shoe,
      }
      dispatch(action)
    }
  }
}


export default connect(null,mapDispatchToProps)(ItemShoe);