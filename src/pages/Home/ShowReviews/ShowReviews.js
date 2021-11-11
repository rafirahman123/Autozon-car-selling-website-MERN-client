import React, { useEffect, useState } from 'react';
import Show from '../Show/Show';
import './ShowReviews.css';

const ShowReviews = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://salty-basin-32126.herokuapp.com/addReview')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <>
            <div>
                <h1 className="text-secondary">Our Customer Reviews</h1>
            </div>

            <div className="review-container">
                {
                    items.map(item => <Show
                        key={item._id}
                        item={item}
                    ></Show>)
                }
            </div>
        </>
    );
};

export default ShowReviews;