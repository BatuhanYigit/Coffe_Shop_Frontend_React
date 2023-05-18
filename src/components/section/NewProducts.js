import React, { useContext, useEffect, useState } from 'react'
import Product from './Product'
import { DataContext } from '../Context'
const NewProducts = () => {
    const cartContext = useContext(DataContext)
    const fetchPRoductsData = async () => {
        const response = await fetch("http://localhost:8000/item")
        const data = await response.json()
        cartContext.set_products(data.data)

    }
    const fetchSyrupData = async () => {
        const response = await fetch("http://localhost:8000/syrup")
        const syrup_data = await response.json()
        cartContext.set_syrups(syrup_data.data)
    }
    const fetchSugarData = async () => {
        const response = await fetch("http://localhost:8000/sugar")
        const sugar_data = await response.json()
        cartContext.set_sugar(sugar_data.data)
    }
    const fetchSizeData = async () => {
        const response = await fetch("http://localhost:8000/size")
        const size_data = await response.json()
        cartContext.set_size(size_data.data)
    }


    useEffect(() => {
        fetchPRoductsData()
        fetchSyrupData()
        fetchSugarData()
        fetchSizeData()

    }, [])

    return (
        <div id="product">
            {
                cartContext.products?.map(product => (
                    <Product key={product.id} product={product} />

                ))
            }
        </div>
    )
}


export default NewProducts