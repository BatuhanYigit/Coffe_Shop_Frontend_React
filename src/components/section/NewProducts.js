import React, { useContext, useEffect, useState } from 'react'
import Product from './Product'
import { DataContext } from '../Context'
const NewProducts = () => {
    const cartContext = useContext(DataContext)
    const [products, setProducts] = useState()

    const fetchPRoductsData = async () => {
        const response = await fetch("http://localhost:8000/item")
        const data = await response.json()
        setProducts(data)
    }

    useEffect(() => {
        fetchPRoductsData()
    }, [])

    return (
        <div id="product">
            {
                products?.data?.map(product => (
                    <Product key={product.name} name={product.item_name} price={product.item_price} image={product.item_code} addtocart={() => cartContext?.addCart(product.id)} />
                    // <div className="card" key={product._id}>
                    //     <Link to={`/product/${product._id}`}>
                    //         <img src={product.src} alt="" />
                    //     </Link>
                    //     <div className="content">
                    //         <h3>
                    //             <Link to={`/product/${product._id}`}>{product.title}</Link>
                    //         </h3>
                    //         <span>${product.price}</span>
                    //         <p>{product.description}</p>
                    //         <button onClick={() => this.context.addCart(product._id)}>Add to cart</button>
                    //     </div>
                    // </div>
                ))
            }
        </div>
    )
}


export default NewProducts