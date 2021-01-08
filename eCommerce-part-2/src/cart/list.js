import React from "react"
import { useSelector, useDispatch } from "react-redux"

const CartList = () => {
    const cartItems = useSelector((state)=> state.CartReducer.cartItems)
    const dispatch = useDispatch()
    let itemCount = 0
    const removeItem = (productID) => {
        const updatedCartItems = cartItems.filter((item)=> item.id != productID )
        dispatch({
            type:"UPDATE_CART_ITEM",
            payload: updatedCartItems
        })
    }
    const handleChangeQuantity = (e,productID) =>{
        
        const updatedCartItems = cartItems.map((item)=>{
            if(item.id == productID){
                item.count = e.target.name == "+"? item.count + 1 : item.count - 1
                item.count = item.count < 0 ? 0 : item.count
            }
            return item
        })
        dispatch({
            type: "UPDATE_CART_ITEM",
            payload: updatedCartItems
        })
    }
    return (
        <>
        <ul className="nav nav-tabs">
            <li className="nav-item dropdown show">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
                    aria-expanded="false">Cart</a>
                <div className="dropdown-menu show">
                    <ul className="nav">
                    {
                    cartItems.map((item)=>{
                        itemCount += item.count
                        return (
                            <li key={item.id} className="dropdown-item" href="#">

                                <div className="row">
                                    <p>{item.name}</p>
                                    <button onClick={()=>removeItem(item.id)} className="btn btn-danger float-right">x</button>
                                </div>
                                <div className="row">
                                
                                    <button onClick={(e)=>handleChangeQuantity(e, item.id)} name='+' className="btn btn-success">+</button>
                                    <span className="badge badge-light"> {item.count} </span>
                                    <button onClick={(e)=>handleChangeQuantity(e, item.id)} name='-' className="btn btn-warning">-</button>
                                </div>
                            </li>
                        )
                    })
                    }   
                    </ul>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Total: { itemCount }</a>
                </div>
            </li>
        </ul>
        </>

    )
}

export default CartList