import React, { Component } from 'react'
import { connect } from 'react-redux'
import { shoeArr } from './data'
import ItemShoe from './ItemShoe';

 class ListShoe extends Component {
  render() {
    let {list} = this.props;
    return (
      <div className='col-6 row'>
       {list.map((item)=>{
        return <ItemShoe data = {item}></ItemShoe>
       })}
      </div>
    )
  }
}
let mapStateToProps = (state) => {
return{
    list : state.shoeArr,
}
}
export default connect(mapStateToProps)(ListShoe);