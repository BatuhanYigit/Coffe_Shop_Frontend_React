import React, { Component } from "react";
import { DataContext } from "../Context"
import { Link } from "react-router-dom";
import Size from "./Size";
import "../css/Details.css"
export class Cart extends Component {
    static contextType = DataContext;

    render() {
        const { cart } = this.context;
        return (
            <>
                {
                    cart.map(item => (
                        <div className="details" key={item._id}>
                            <img src={item.src} alt="" />
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>
                                <Size size={item.size} />
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <Link to="/cart" className="cart" >
                                    Add to cart
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default Cart