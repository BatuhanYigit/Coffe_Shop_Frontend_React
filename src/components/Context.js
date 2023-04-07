import React, { Component } from "react";

export const DataContext = React.createContext();

export class DataProvider extends Component {



    state = {


        products: [
            {
                "_id": "1",
                "title": "Americano",
                "src": "https://cdn.getiryemek.com/products/1610832197239_500x375.jpeg",
                "price": 16,
                "size": ["Küçük", "Orta", "Büyük"],
                "sugar": ["Şeker İstemiyorum", "Beyaz Şeker", "Esmer Şeker"],
                "syrup": ["Vanilya", "Karamel", "Fındık"],
                "count": 1

            },
            {
                "_id": "2",
                "title": "Classic Hot Chocolate",
                "src": "https://cdn.getiryemek.com/products/1602707770308_500x375.jpeg",
                "price": 32,
                "size": ["Küçük", "Orta", "Büyük"],
                "sugar": ["Şeker İstemiyorum", "Beyaz Şeker", "Esmer Şeker"],
                "syrup": ["Vanilya", "Karamel", "Fındık"],
                "count": 1

            },
            {
                "_id": "3",
                "title": "Caffe Misto",
                "src": "https://cdn.getiryemek.com/products/1602707857660_500x375.jpeg",
                "price": 24,
                "size": ["Küçük", "Orta", "Büyük"],
                "sugar": ["Şeker İstemiyorum", "Beyaz Şeker", "Esmer Şeker"],
                "syrup": ["Vanilya", "Karamel", "Fındık"],
                "count": 1

            },
            {
                "_id": "4",
                "title": "Iced White Chocolate Mocha",
                "src": "https://cdn.getiryemek.com/products/1602495560781_500x375.jpeg",
                "price": 16,
                "size": ["Küçük", "Orta", "Büyük"],
                "sugar": ["Şeker İstemiyorum", "Beyaz Şeker", "Esmer Şeker"],
                "syrup": ["Vanilya", "Karamel", "Fındık"],
                "count": 1

            },
            {
                "_id": "5",
                "title": "Fresh Filter Coffee",
                "src": "https://cdn.getiryemek.com/products/1602500171326_500x375.jpeg",
                "price": 30,
                "size": ["Küçük", "Orta", "Büyük"],
                "sugar": ["Şeker İstemiyorum", "Beyaz Şeker", "Esmer Şeker"],
                "syrup": ["Vanilya", "Karamel", "Fındık"],
                "count": 1

            },
            {
                "_id": "6",
                "title": "Berry Hibiscus Refresha",
                "src": "https://cdn.getiryemek.com/products/1620282769779_500x375.jpeg",
                "price": 45,
                "size": ["Küçük", "Orta", "Büyük"],
                "sugar": ["Şeker İstemiyorum", "Beyaz Şeker", "Esmer Şeker"],
                "syrup": ["Vanilya", "Karamel", "Fındık"],
                "count": 1

            }
        ],
        cart: []

    };

    getproducts_test() {
        const data = fetch("http://localhost:8000/products")
        console.log(data)
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
        console.log("deneme =======", dataCart[0])
    }

    addCart = (id) => {
        const { products, cart } = this.state;
        const check = cart.every(item => {
            return item._id !== id;
        })
        if (check) {
            const data = products.filter(product => {
                return product._id === id
            })
            this.setState({ cart: [...cart, ...data] })
        } else {
            alert("The product has been added to cart.")
        }
        const data = products.filter(product => {
            return product._id === id
        })
        this.setState({ cart: [...cart, ...data] })
        this.getTotal();
        console.log('dataCart', JSON.stringify(this.state.cart))
    };

    reduction = id => {
        const { cart } = this.state;
        cart.forEach(item => {
            if (item._id === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        this.setState({ cart: cart });
        this.getTotal();
    };
    increase = id => {
        const { cart } = this.state;
        cart.forEach(item => {
            if (item._id === id) {
                item.count += 1;
            }
        })
        this.setState({ cart: cart });
        this.getTotal();
        console.log(this.getproducts_test())
    };

    removeProduct = id => {
        if (window.confirm("Ürünü Silmek İstiyor musunuz?")) {
            const { cart } = this.state;
            cart.forEach((item, index) => {
                if (item._id === id) {
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
            return prev + (item.price * item.count);
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
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'))
        if (dataTotal !== null) {
            this.setState({ total: dataTotal });
        }

    }

    render() {
        const { products, cart, total } = this.state;
        const { addCart, reduction, increase, removeProduct, getTotal, payment } = this;
        return (
            <DataContext.Provider value={{ products, addCart, cart, reduction, increase, removeProduct, total, getTotal, payment }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}