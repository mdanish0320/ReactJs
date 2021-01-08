import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { v4 as uuidv4 } from 'uuid'

// local imports
import { initialState } from './reducer'

const ProductForm = () => {
    // handle state
    const [product, setProduct] = useState(initialState.productForm.data)
    const dispatch = useDispatch()
    const productUpdateData = useSelector((state) => state.ProductReducer.productForm)
    const products = useSelector((state) => state.ProductReducer.products)
    useEffect(()=>{
        setProduct(productUpdateData.data)
    },[productUpdateData])

    // handle events
    const handleSubmit = (e)=> {
        e.preventDefault()

        const newProduct = {
            ...product,
            id: uuidv4()
        }
        dispatch({
            type: "ADD_PRODUCT",
            payload: newProduct
        })
        clearForm()
    }
    const handleUpdate = (productID) => {
        const updatedProductList = products.map((oldProduct)=>{
            if(oldProduct.id == productID){
                oldProduct = {...product}
            }
            return oldProduct
        }) 

        dispatch({
            type: "UPDATE_PRODUCT",
            payload: updatedProductList
        })
        dispatch({
            type: "UPDATE_PRODUCT_FORM",
            payload: {
                isUpdate: false,
                data: initialState.productForm.data
            }
        })
        clearForm()
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setProduct({...product, [name]:value})
    }
    const clearForm = () => {
        setProduct(initialState.productForm.data)
    }
    
    return (
        <form onSubmit={handleSubmit}> 
            <div className="form-group">
                <label htmlFor="name">Product Name</label>
                <input onChange={handleChange} value={product.name} name="name" type="text" className="form-control" id="name" placeholder="Name" required />
                
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input onChange={handleChange} value={product.description} name="description" type="text" className="form-control" id="description" placeholder="Description" />
            </div>
            
            <button onSubmit={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
            <button onClick={()=>{handleUpdate(product.id)}} type="button" className={"btn btn-warning updateFormButton " + (productUpdateData.isUpdate? "active": "") }>Update</button>
            
        </form>
    )
}

export default ProductForm