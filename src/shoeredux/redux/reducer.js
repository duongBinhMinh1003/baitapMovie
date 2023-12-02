import { shoeArr } from "../data"

const initialState = {
    shoeArr : shoeArr,
    cart:[],
}

export let shoeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD" : {
     let cloneCart = [...state.cart];
     let viTri = cloneCart.findIndex((item)=>{
      return item.id == payload.id;
     })
     if(viTri == -1 ){
      let newShoe = {...payload,soLuong:1}
      cloneCart.push(newShoe);

     }
     else{
      cloneCart[viTri].soLuong++
     }
     state.cart = cloneCart;
      return{...state}
    }
    case "DELETE" : {
    
      let index = state.cart.filter(( item)=>{
        return item.id != payload;
      })
      return{...state,cart:index};
    }
   


  default:
    return state
  }
}
