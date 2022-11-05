import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import img1 from '../../assets/images/orders.png';
import Order from '../Order/Order';

const Orders = () => {
    const { user, logout } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://genius-car-server-sand-ten.vercel.app/orders?email=${user?.email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                   return logout()
                }
               return res.json()
            })
            .then(data => {

                setOrders(data)
            })
    }, [user?.email, logout])


    const handleDelete = (id) =>{
        const agree = window.confirm(`Are you sure, you want to cancel this order`)
        if(agree){
            fetch(`https://genius-car-server-sand-ten.vercel.app/orders/${id}`,{
                method: 'DELETE',
                headers:{
                    authorization: `Bearer ${localStorage.getItem('genius-token')}`
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    const remaining = orders.filter(odr => odr._id !== id)
                    setOrders(remaining)
                    alert('Deleted Successfully')
                }
            })
        }
    }

    const handleUpdate = id =>{
        fetch(`https://genius-car-server-sand-ten.vercel.app/orders/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type' : 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                const  remaining = orders.filter(odr => odr._id !== id)
                const approving = orders.find(odr => odr._id === id)
                approving.status = 'Approving';

                const newOrders = [approving, ...remaining];
                setOrders(newOrders)
            }
        })
        console.log('click');
    }

    return (
        <div className='px-6 my-10'>
            <div className='mb-32'>
                <div className='relative'>
                    <div className='bg-image-blur'>
                        <img src={img1} className='w-full h-[300px] object-cover object-center rounded-xl' alt="" />
                    </div>
                    <div className='absolute top-[39%] left-6 md:left-16'>
                        <p className='text-xl md:text-4xl font-bold text-white'>Orders</p>
                    </div>
                    <div className='absolute clipper px-6 sm:px-10 left-14 sm:left-[39%] py-4 lg:px-16 text-center text-base md:text-xl bottom-0 bg-red-500'>
                        <Link to='/home' className='text-white'>Home</Link>
                        <span className='text-white'>/</span>
                        <Link className='text-white'>Orders</Link>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-2xl font-bold text-center pb-5'>Your order is: {orders.length}</h1>
                <div>
                    {
                        orders.map(order => <Order
                            key={order._id}
                            order={order}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}
                        ></Order>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Orders;