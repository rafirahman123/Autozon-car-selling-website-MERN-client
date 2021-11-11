import React from 'react';
import img1 from '../../../images/fackedata/bmw.jpg';
import img2 from '../../../images/fackedata/jeep.jpg';
import img3 from '../../../images/fackedata/nissan.jpg';
import img4 from '../../../images/fackedata/toyotacorolla.jpg';
import img5 from '../../../images/fackedata/hondacivic.jpg';

import './LatestOffers.css';

const LatestOffers = () => {
    return (
        <>
            <div>
                <h1 className="text-secondary">Latest Offers</h1>
                <h5 className="text-danger">25% discount on 11.11.21</h5>
            </div>
            <div className="row offer-section">
                <div className="col-lg-4">
                    <img src={img2} className="img-fluid first-row-images" alt="" />
                    <h6 className="text-secondary">Jeep Wrangler</h6>
                    <button type="button" class="btn btn-outline-secondary">View Details</button>
                </div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-6 ">
                            <img src={img1} className="img-fluid second-row-images" alt="" />
                            <h6 className="text-secondary">BMW</h6>
                            <button type="button" class="btn btn-outline-secondary mb-2">View Details</button>
                        </div>
                        <div className="col-lg-6 ">
                            <img src={img3} className="img-fluid second-row-images" alt="" />
                            <h6 className="text-secondary">Nissan</h6>
                            <button type="button" class="btn btn-outline-secondary">View Details</button>
                        </div>
                        <div className="col-lg-6 ">
                            <img src={img4} className="img-fluid second-row-images" alt="" />
                            <h6 className="text-secondary">Toyota Corolla</h6>
                            <button type="button" class="btn btn-outline-secondary ">View Details</button>
                        </div>
                        <div className="col-lg-6 ">
                            <img src={img5} className="img-fluid second-row-images" alt="" />
                            <h6 className="text-secondary">Honda Civic</h6>
                            <button type="button" class="btn btn-outline-secondary">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LatestOffers;