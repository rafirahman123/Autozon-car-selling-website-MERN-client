import React from 'react';
import './AddProduct.css'
import { useForm } from "react-hook-form";
// import useFirebase from '../../../hooks/useFirebase';

const AddProduct = () => {
    // const { user, admin } = useFirebase();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        //data.email = user?.email;
        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (data) {
                    alert('Product Added successfully');
                    reset();
                }
            });
        console.log(data);
    }


    return (
        <div className='addProduct-container'>
            <h1 className="mt-5 text-center text-info">Please Add Products</h1>
            <div className="login-box w-25 m-auto mt-5">
                <div className="product-box border border d-flex justify-content-center align-items-center">
                    <div className="login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("name", { required: true })}
                                placeholder="Product Name"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("description", { required: true })}
                                placeholder="Description"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("price", { required: true })}
                                placeholder="Price"
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            <input
                                {...register("img", { required: true })}
                                placeholder="Image Link"
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" value="Add Product" className="btn btn-info w-50" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;