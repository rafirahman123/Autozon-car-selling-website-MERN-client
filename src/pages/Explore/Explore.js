import React from 'react';
import { Link } from 'react-router-dom';

const Explore = ({ item }) => {
    const { name, description, price, img, _id } = item;
    return (
        <div>
            <div class="col-4 mb-5">
                <div class="card">
                    <img src={img} class="card-image" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{description}</p>
                        <h5 class="card-text">${price}</h5>
                        <Link to={`/purchase/${_id}`}>
                            <button type="button" class="btn btn-outline-dark m-2">Purchase</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;