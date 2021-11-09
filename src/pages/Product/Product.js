import React from 'react';
import './Product.css';

const Product = ({ item }) => {
    const { name, description, price, img } = item;
    return (
        <div>
            <div class="col-4 mb-5">
                <div class="card">
                    <img src={img} class="card-image" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{description}</p>
                        <h5 class="card-text">${price}</h5>
                        {/* <Link to={`/review/${_id}`}>
                            <button type="button" class="btn btn-outline-info m-2">Book Now</button>
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;