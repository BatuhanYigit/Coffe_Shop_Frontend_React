import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../Context'

const Product = ({ product }) => {


    const cartContext = useContext(DataContext)
    return (
        <div className="card" key={product.id}>
            <Link to={`/product/${product.id}`}>
                <img src={product.item_code} alt="" />
            </Link>
            <div className="content">
                <h3>
                    <Link to={`/product/${product.id}`}>{product.item_name}</Link>
                </h3>
                <span>${product.item_price}</span>
                <p><select class="form-select form-select-lg mb-3" defaultValue={"default"} id="default">
                    <option value={"default"} disabled>Şurup Seçiniz</option>

                    {cartContext.syrup.map(syrup_item => {
                        return (
                            <option key={syrup_item.id} value={syrup_item.id}>{syrup_item.syrup_type}</option>

                        )
                    })}
                </select></p>
                <p><select class="form-select form-select-lg mb-3" defaultValue={"default"} id="default">
                    <option value={"default"} disabled>Boyut Seçiniz</option>

                    {cartContext.size.map(size_item => {
                        return (
                            <option key={size_item.id} value={size_item.id}>{size_item.size}</option>
                        )
                    })}
                </select></p>
                <p><select class="form-select form-select-lg mb-3" defaultValue={"default"} id="default">
                    <option value={"default"} disabled>Şeker Seçiniz</option>

                    {cartContext.sugar.map(sugar_item => {
                        return (
                            <option key={sugar_item.id} value={sugar_item.id}>{sugar_item.sugar_type}</option>
                        )
                    })}
                </select></p>
                <p>{product.description}</p>
                <button onClick={() => cartContext.addCart(product.id)}>Add to cart</button>
            </div>
        </div>
    )
}



export default Product