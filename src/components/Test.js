import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "id": "1",
                "title": "Americano",
                "src": "https://cdn.getiryemek.com/products/1610832197239_500x375.jpeg",
                "price": 16,
                "size": ["Küçük", "Orta", "Büyük"],
                "sugar": ["Şeker İstemiyorum", "Beyaz Şeker", "Esmer Şeker"],
                "syrup": ["Vanilya", "Karamel", "Fındık"],
                "count": 1

            },
            {
                "id": "2",
                "title": "Classic Hot Chocolate",
                "src": "https://cdn.getiryemek.com/products/1602707770308_500x375.jpeg",
                "price": 32,
                "size": ["Küçük", "Orta", "Büyük"],
                "sugar": ["Şeker İstemiyorum", "Beyaz Şeker", "Esmer Şeker"],
                "syrup": ["Vanilya", "Karamel", "Fındık"],
                "count": 1

            },
            {
                "id": "3",
                "title": "Caffe Misto",
                "src": "https://cdn.getiryemek.com/products/1602707857660_500x375.jpeg",
                "price": 24,
                "size": ["Küçük", "Orta", "Büyük"],
                "sugar": ["Şeker İstemiyorum", "Beyaz Şeker", "Esmer Şeker"],
                "syrup": ["Vanilya", "Karamel", "Fındık"],
                "count": 1

            },
            {
                "id": "4",
                "title": "Iced White Chocolate Mocha",
                "src": "https://cdn.getiryemek.com/products/1602495560781_500x375.jpeg",
                "price": 16,
                "size": ["Küçük", "Orta", "Büyük"],
                "sugar": ["Şeker İstemiyorum", "Beyaz Şeker", "Esmer Şeker"],
                "syrup": ["Vanilya", "Karamel", "Fındık"],
                "count": 1

            },
            {
                "id": "5",
                "title": "Fresh Filter Coffee",
                "src": "https://cdn.getiryemek.com/products/1602500171326_500x375.jpeg",
                "price": 30,
                "size": ["Küçük", "Orta", "Büyük"],
                "sugar": ["Şeker İstemiyorum", "Beyaz Şeker", "Esmer Şeker"],
                "syrup": ["Vanilya", "Karamel", "Fındık"],
                "count": 1

            },
            {
                "id": "6",
                "title": "Berry Hibiscus Refresha",
                "src": "https://cdn.getiryemek.com/products/1620282769779_500x375.jpeg",
                "price": 45,
                "size": ["Küçük", "Orta", "Büyük"],
                "sugar": ["Şeker İstemiyorum", "Beyaz Şeker", "Esmer Şeker"],
                "syrup": ["Vanilya", "Karamel", "Fındık"],
                "count": 1

            }
        ]
    }

    render() {
        const { products } = this.state;
        return (
            <DataContext.Provider value={{ products }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }

}

