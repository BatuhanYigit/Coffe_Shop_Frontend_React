import React, { Component } from "react";
import Products from "./section/Products";
import Details from "./section/Details";
import { Route } from "react-router-dom";


export class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/product" Component={Products} />
                <Route path="product/:id" Component={Details} />
            </section>
        )
    }
}

export default Section