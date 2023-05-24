import React, { Component } from 'react'
import Products from './section/Products'
import PaymentCompleted from './section/PaymentCompleted'
import { Route } from "react-router-dom"
import Cart from './section/Cart'
import NewProducts from './section/NewProducts'
import Payment from './section/Payment'


export class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/" component={NewProducts} exact />
                <Route path="/product" component={NewProducts} exact />
                <Route path="/cart" component={Cart} exact />
                <Route path="/payment" component={Payment} exact />
                <Route path="/paymentcompleted" component={PaymentCompleted} exact />
            </section>
        )
    }
}

export default Section

