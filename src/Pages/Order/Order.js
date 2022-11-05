import React, { useEffect, useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';

const Order = ({ order, handleDelete, handleUpdate }) => {
    const {_id, serviceName, price, phone, service, customer, status } = order
    const [orderService, setOrderService] = useState({})

    useEffect(() => {
        fetch(`https://genius-car-server-sand-ten.vercel.app/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [service])

    

    return (
        <div className='flex flex-col sm:flex-row justify-between items-center my-6 border rounded-md p-4 gap-6 sm:gap-0'>
            <div className='flex flex-col sm:flex-row items-center gap-8'>
                <button onClick={() => handleDelete(_id)} className="px-2 py-2 rounded-full bg-gray-400">
                    <IoCloseSharp className='text-2xl'></IoCloseSharp>
                </button>
                <div className='flex flex-col md:flex-row items-center gap-8'>
                    <img src={orderService.img} className='w-36 h-36 object-cover object-center rounded-md' alt="" />
                    <div>
                        <h3 className='text-xl font-bold'>{customer}</h3>
                        <p>{phone}</p>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <h3 className='text-xl font-bold'>{serviceName}</h3>
                <p>${price}</p>
            </div>
            <div>
                <button onClick={() => handleUpdate(_id)} className={`rounded-md ${status ? 'bg-gray-500' : 'bg-red-500'}  text-white px-6 py-3`}>{status ? status : 'Pending'}</button>
            </div>
        </div>
    );
};

export default Order;