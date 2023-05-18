import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../Context'

const Product = ({ product }) => {



    const [selectedSyrupValue, setSyrupValue] = useState();
    const [selectedSizeValue, setSizeValue] = useState();
    const [selectedSugarValue, setSugarValue] = useState();
    const cartContext = useContext(DataContext)
    const handleChange_syrup = (event) => {
        setSyrupValue(event.target.value);
    };
    const handleChange_size = (event) => {
        setSizeValue(event.target.value);
    };
    const handleChange_sugar = (event) => {
        setSugarValue(event.target.value);
    };
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
                <p><select className="form-select form-select-lg mb-3" id="default" defaultValue={"default"} value={selectedSyrupValue} onChange={handleChange_syrup}>
                    <option value={"default"} disabled>Şurup Seçiniz</option>

                    {cartContext.syrup.map(syrup_item => {
                        return (
                            <option key={syrup_item.id} value={syrup_item.id}>{syrup_item.syrup_type}</option>


                        )
                    })}
                </select></p>
                <p><select className="form-select form-select-lg mb-3" defaultValue={"default"} id="default" value={selectedSizeValue} onChange={handleChange_size}>
                    <option value={"default"} disabled>Boyut Seçiniz</option>

                    {cartContext.size.map(size_item => {
                        return (
                            <option key={size_item.id} value={size_item.id}>{size_item.size}</option>
                        )
                    })}
                </select></p>
                <p><select className="form-select form-select-lg mb-3" defaultValue={"default"} id="default" value={selectedSugarValue} onChange={handleChange_sugar}>
                    <option value={"default"} disabled>Şeker Seçiniz</option>

                    {cartContext.sugar.map(sugar_item => {
                        return (
                            <option key={sugar_item.id} value={sugar_item.id}>{sugar_item.sugar_type}</option>
                        )
                    })}
                </select></p>
                <p>{product.description}</p>
                <button onClick={() => cartContext.addCart(product.id, selectedSizeValue, selectedSyrupValue, selectedSugarValue)}>Add to cart</button>
            </div >
        </div >
    )
}



export default Product