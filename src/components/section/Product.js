import React from 'react'

const Product = ({ name, price, image, addtocart }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center" }} >
            <img src={image} />
            <h1>{name}</h1>
            <h3>{price}</h3>
            <button onClick={() => addtocart}>add to cart</button>
        </div>
    )
}

export default Product