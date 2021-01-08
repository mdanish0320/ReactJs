import React from 'react'

export const initialState = {
    productForm: {
        data: {
            id: "",
            name: "",
            description: ""
        },
        isUpdate: false
        
    },
    products: []
}

const productReducer = (state=initialState, action) => {
    switch(action.type){
        case "ADD_PRODUCT":
            return {
                ...state,
                products: [ ...state.products, action.payload ]
            }
        case "UPDATE_PRODUCT_FORM":
            return {
                ...state,
                productForm: action.payload

            }
        case "UPDATE_PRODUCT":
            return {
                ...state,
                products: action.payload
            }
        default:{
            return state
        }
            
    }
    
}

export default productReducer



