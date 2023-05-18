import React, { Component } from "react";

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


    payment() {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        fetch("http://localhost:8000/payment", {
            method: 'POST',
            body: JSON.stringify(dataCart[0]),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
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
        const { cart } = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.item_price * item.count);
        }, 0)
        this.setState({ total: res })
    };

    componentDidUpdate() {
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    }

    componentDidMount() {


        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        if (dataCart !== null) {
            this.setState({ cart: dataCart });
        }
        // const dataTotal = JSON.parse(localStorage.getItem('dataTotal'))
        // if (dataTotal !== null) {
        //     this.setState({ total: dataTotal });
        // }

    }

    render() {
        const { products, cart, total, syrup, size, sugar } = this.state;
        const { addCart, reduction, increase, removeProduct, getTotal, payment, set_products, set_syrups, set_size, set_sugar } = this;
        return (
            <DataContext.Provider value={{ products, addCart, cart, reduction, increase, removeProduct, total, getTotal, payment, set_products, set_syrups, syrup, set_size, size, set_sugar, sugar }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}