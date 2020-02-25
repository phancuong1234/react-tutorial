import React, { Component } from 'react';

class Footer extends Component {
    render() {
        var products = [
            {
                id: 1,
                name: 'iphone 6',
                price: 1000
            },
            {
                id: 2,
                name: 'iphone 7',
                price: 1000
            },
            {
                id: 3,
                name: 'iphone 8',
                price: 1000
            }
        ];
        var elements = products.map((el, index) => {
            return (
                <div key={ el.id }>{ el.name }</div>
            );
        })
        return (
           <div>{ elements }</div>
        );
    }
}

export default Footer;