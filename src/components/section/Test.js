import React, { Component } from "react";
import { Link } from 'react-router-dom'
// import { DataContext } from "../Context";

export class Products extends Component {
    static contextType = DataContext;
    render() {
        const { products } = this.context;
        return (
            <div id="product">
                {
                    products.map(product => (
                        <div className="card" key={product}>
                            <Link to={'/product/${product.id}'}>
                                <img src={product.src} alt=""></img>
                            </Link>

                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Products