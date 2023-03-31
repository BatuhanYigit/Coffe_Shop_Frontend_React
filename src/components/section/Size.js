import React, { Component } from 'react'

export class Size extends Component {
    render() {
        const { size } = this.props;
        return (
            <div className="size">
                {
                    size.map((size, index) => (
                        <button key={index} >{size}</button>
                    ))
                }
            </div>
        )
    }
}

export default Size
