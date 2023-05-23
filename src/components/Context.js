import React, { Component } from "react";

import { v4 } from "uuid"

export const DataContext = React.createContext();

export class DataProvider extends Component {



    state = {
        products: [],
        sugar: [],
        size: [],
        syrup: [],
        cart: []

    };





    getproducts_test() {
        const data = fetch("http://localhost:8000/item")


    }

    set_products = (data) => {

        this.setState({ products: data })

    }

    set_syrups = (syrup_data) => {

        this.setState({ syrup: syrup_data })
    }

    set_sugar = (sugar_data) => {
        this.setState({ sugar: sugar_data })
    }
    set_size = (size_data) => {
        this.setState({ size: size_data })
    }


    payment({ name, surname, address_name, email, phone, address_detail }) {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        const address_data = { name: name, surname: surname, address_name: address_name, email: email, phone: phone, address_detail: address_detail }
        const basketId = v4()


        fetch(`http://localhost:8000/json-test/${basketId}`, {
            method: 'POST',
            body: JSON.stringify({ dataCart, address_detail: { name, surname, address_name, email, phone, address_detail } }),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
        })
    }

    addCart = (id, size, syrup, sugar) => {
        const { products, cart } = this.state;
        const check = cart.every(item => {
            return item.id !== id;
        })
        if (check) {
            const data = products.filter(product => {
                return product.id === id
            })
            data[0]['syrup'] = Number(syrup)
            data[0]['size'] = Number(size)
            data[0]['sugar'] = Number(sugar)
            this.setState({ cart: [...cart, ...data] })
        } else {
            alert("The product has been added to cart.")
        }

        this.getTotal();
    };

    reduction = id => {
        const { cart } = this.state;
        cart.forEach(item => {
            if (item.id === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        this.setState({ cart: cart });
        this.getTotal();
    };
    increase = id => {
        const { cart } = this.state;
        cart.forEach(item => {
            if (item.id === id) {
                item.count += 1;
            }
        })
        this.setState({ cart: cart });
        this.getTotal();
    };

    removeProduct = id => {
        if (window.confirm("Ürünü Silmek İstiyor musunuz?")) {
            const { cart } = this.state;
            cart.forEach((item, index) => {
                if (item.id === id) {
                    cart.splice(index, 1)
                }
            })
            this.setState({ cart: cart });
            this.getTotal();

        }

    }

    getTotal = () => {
        const { cart, syrup, sugar, size } = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + ((item.item_price + syrup.find(ss => ss.id == item.syrup)?.syrup_price + size.find(sz => sz.id == item.size)?.size_price + sugar.find(sg => sg.id == item.sugar)?.sugar_price) * item.count);
        }, 0)
        this.setState({ total: res })
    };

    randomBasketId = () => {
        const baksetid = Math.floor(Math.random() * 99999)
        console.log(baksetid)
    }

    componentDidUpdate() {
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    }

    componentDidMount() {


        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        if (dataCart !== null) {
            this.setState({ cart: dataCart });
        }

    }

    render() {
        const { products, cart, total, syrup, size, sugar } = this.state;
        const { addCart, reduction, increase, removeProduct, getTotal, payment, set_products, set_syrups, set_size, set_sugar, randomBasketId } = this;
        return (
            <DataContext.Provider value={{ products, addCart, cart, reduction, increase, removeProduct, total, getTotal, payment, set_products, set_syrups, syrup, set_size, size, set_sugar, randomBasketId, sugar }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}