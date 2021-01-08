import React from "react"
import { useSelector, useDispatch } from "react-redux"

const ProductList = () => {
    // handle state
    const products = useSelector((state) => state.ProductReducer.products)
    const cartItems = useSelector((state) => state.CartReducer.cartItems)
    const dispatch = useDispatch()
    
    // handle events
    const handleBuyNow = (productID) => {
        let itemAlreadyInCart = false
        const [selectedProduct] = products.filter((product)=>product.id == productID)
        const updatedCartItems = cartItems.map((item)=>{
            if(item.id == productID){
                item.count++
                itemAlreadyInCart = true
            }
            return item
        })
        
        if(itemAlreadyInCart){
            dispatch({
                type: "UPDATE_CART_ITEM",
                payload: updatedCartItems
            })
        }else{
            dispatch({
                type: "ADD_ITEM_IN_CART",
                payload: {...selectedProduct, count: 1}
            })
        }
    }
    const handleUpdate = (productID) => {
        const [selectedProduct] = products.filter((product)=> product.id == productID)
        dispatch({
            type:"UPDATE_PRODUCT_FORM",
            payload: { 
                data: selectedProduct, 
                isUpdate: true 
            }
        })
    }
    return (
        <>
        {
            products.map((product)=>{
                return (
                    <div key={product.id} className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"> {product.name} </h5>
                                <p className="card-text">{product.description}</p>
                                <a onClick={()=>handleUpdate(product.id)}href="#" className="btn btn-primary">Update</a>
                                <a onClick={()=>handleBuyNow(product.id)}href="#" className="btn btn-info">Buy Now</a>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </>
        

    )
}

export default ProductList