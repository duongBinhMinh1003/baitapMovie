import React, { Component } from 'react'
import { connect } from 'react-redux'

 class CartShoe extends Component {
  render() {
    return (
      <div className='col-6 '>
        <table className='table'>
          <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Img</th>
            <th>Action</th>
            <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((item)=>{
              return (
            
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><img width={70} src={item.image} alt="" /></td>
                <td>{item.soLuong}</td>
                <td><button onClick={()=> {this.props.handelDelete(item.id)}} className='btn btn-danger'>Delete</button></td>
              </tr>
              )
              })}
          </tbody>
        </table>
        </div>
    )
  }
}
let mapStateToProps = (state) => {
  return {
    cart : state.cart,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    handelDelete : (id) => {
      let action = {
        type : "DELETE",
        payload:id,
      }
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartShoe);