import { Rating } from '@mui/material';
import React from 'react';
import './Show.css';

const Show = ({ item }) => {
    const { name, email, review, rating } = item;
    return (
        <div>

            <div class="col-4 mb-5">
                <div class="card-review">
                    <div class="card-body">
                        <h4 class="card-title">{name}</h4>
                        <p class="card-text">{email}</p>
                        <p class="card-text">{review}</p>
                        <Rating name="read-only" value={rating} readOnly />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Show;