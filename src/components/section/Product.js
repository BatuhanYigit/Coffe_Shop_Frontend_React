import React, { useContext } from 'react'
import { DataContext } from '../Context'

const Product = ({ product }) => {
    const cartContext = useContext(DataContext)
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center" }} >
            <img src={product.item_code} />
            <h1>{product.name}</h1>
            <h3>{product.price}</h3>
            <button onClick={() => cartContext.addCart(product.id)}>add to cart</button>
        </div>
    )
}

export default Product