import React from "react"

// local exports
import ProductForm from "./product/form" 
import ProductList from "./product/list" 
import CartList from "./cart/list" 


const App = () => {
    return (
        <>
        <div className="container">
            
            <div className="row">
                <div className="col-lg-10">
                    <ProductForm />
                </div>
                <div className="col-lg-2">
                    <CartList />
                </div>
            </div> {/** row */}
            <div className="row">
                <div className="col-lg-10">
                    <div className="row">
                        <ProductList />
                    </div>
                    
                </div>
            </div>{/** row */}

        </div> {/** container */}
        </>
        
    )
}

export default App