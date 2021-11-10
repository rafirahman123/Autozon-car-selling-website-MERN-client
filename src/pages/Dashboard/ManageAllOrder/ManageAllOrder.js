import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';


const ManageAllOrder = () => {
    const { user } = useAuth();
    const [allOrder, setAllOrder] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/manageAllOrder')
            .then(res => res.json())
            .then(data => setAllOrder(data));
    }, [allOrder?._id]);

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure, you want to delete?");
        if (proceed) {
            fetch(`http://localhost:5000/deleteOrder/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully");
                        const remainingOrders = allOrder?.filter(allOrder => allOrder._id !== id);
                        setAllOrder(remainingOrders);
                    }
                });
        }
    };

    return (
        <div className='manageAllOrders-content'>
            <h1>Manage All Orders {allOrder?.length}</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Order No</th>
                        <th>Name</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {allOrder?.map((allOrder, index) => (
                    <tbody>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{allOrder?.name}</td>
                            <td>{allOrder?.Name}</td>
                            <td>{allOrder?.price}</td>
                            <td>{allOrder?.email}</td>
                            <button onClick={() => handleDelete(allOrder?._id)} className="btn bg-danger p-2">Delete</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageAllOrder;