import React, { useEffect, useState } from 'react';
import Explore from '../Explore/Explore';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const Explores = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setItems(data.slice(0, 12)))
    }, [])
    return (
        <>
            <Header />
            <div className="products-container">
                {
                    items.map(item => <Explore
                        key={item._id}
                        item={item}
                    ></Explore>)
                }
            </div>
            <Footer />
        </>
    );
};

export default Explores;