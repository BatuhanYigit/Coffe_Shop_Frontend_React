import React, { Component } from "react";
import { DataContext } from "../Context"
import Size from "./Size";
import "../css/Details.css"
import { Link } from "react-router-dom";
import "../css/Cart.css"
export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount() {
        this.context.getTotal();
    }

    render() {
        const { cart, increase, reduction, removeProduct, total, payment } = this.context;
        if (cart.length === 0) {
            return <h2 style={{ textAlign: "center" }}>Sepet Boş</h2>

        }
        return (
            <>
                {
                    cart.map(item => (
                        <div className="details" key={item.id}>
                            <img src={item.item_code} alt="" />
                            <div className="box">
                                <div className="row">
                                    <h2>{item.item_name}</h2>
                                    <span>${item.item_price * item.count}</span>
                                </div>
                                <Size size={item.size} />
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <div className="amount">
                                    <button className="count" onClick={() => reduction(item.id)}> - </button>
                                    <span>{item.count}</span>
                                    <button className="count" onClick={() => increase(item.id)}> + </button>

                                </div>
                            </div>
                            <div className="delete" onClick={() => removeProduct(item.id)}>X</div>
                        </div>
                    ))
                }
                <div className="total">
                    <Link to="/payment" onClick={() => payment(cart)} >Payment</Link>
                    <h3>Total: ${total}</h3>
                </div>
            </>
        )
    }
}

export default Cart
