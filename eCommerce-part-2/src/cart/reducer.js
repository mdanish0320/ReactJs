import React from "react"

const initialState = {
    cartItems:[]
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case "ADD_ITEM_IN_CART":
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        case "UPDATE_CART_ITEM":
            return {
                ...state,
                cartItems: action.payload
            }
        default:{
            return state
        }
    }
}

export default reducer