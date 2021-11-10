import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setItems(data.slice(0, 6)))
    }, [])
    return (
        <div className="products-container">
            {
                items.map(item => <Product
                    key={item._id}
                    item={item}
                ></Product>)
            }
        </div>
    );
};

export default Products;