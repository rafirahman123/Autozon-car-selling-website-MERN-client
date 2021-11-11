import React from 'react';
import './Show.css';

const Show = ({ item }) => {
    const { name, email, review, rating } = item;
    return (
        <div>

            <div class="col-4 mb-5">
                <div class="card-review">
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{email}</p>
                        <p class="card-text">{review}</p>
                        <p class="card-text">{rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Show;