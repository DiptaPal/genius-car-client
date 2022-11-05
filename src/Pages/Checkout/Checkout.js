import React, { useContext } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import './Checkout.css'
import img1 from '../../assets/images/checkout/checkout.png';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Checkout = () => {
    const server = useLoaderData();
    const { user } = useContext(AuthContext)
    const { title, _id, price } = server;

    const navigate = useNavigate();

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.first_name.value} ${form.last_name.value}`;
        const email = user?.email || 'unregister';
        const message = form.message.value;
        const phone = form.phone.value;
        const order = {
            service: _id,
            serviceName: title,
            price: price,
            customer: name,
            email,
            phone,
            message,
            
        }
        if (phone.length > 11) {
            alert('Phone number should be 10 character or longer')
        }
        else {
            fetch('http://localhost:5000/orders', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('genius-token')}`
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.acknowledged){
                        alert('Order Placed successfully')
                        form.reset();
                        navigate('/orders')
                    }
                })
                .catch(error => console.log(error.message))
        }

    }
    return (
        <div className='px-6 my-10'>
            <div className='mb-32'>
                <div className='relative'>
                    <div className='bg-image-blur'>
                        <img src={img1} className='w-full h-[300px] object-cover object-center rounded-xl' alt="" />
                    </div>
                    <div className='absolute top-[39%] left-6 md:left-16'>
                        <p className='text-xl md:text-4xl font-bold text-white'>{title}</p>
                        <p className='text-base md:text-3xl font-bold text-white'>{price}</p>
                    </div>
                    <div className='absolute clipper px-6 sm:px-10 left-14 sm:left-[39%] py-4 lg:px-16 text-center text-base md:text-xl bottom-0 bg-red-500'>
                        <Link to='/home' className='text-white'>Home</Link>
                        <span className='text-white'>/</span>
                        <Link className='text-white'>Checkout</Link>
                    </div>
                </div>
            </div>
            <form onSubmit={handlePlaceOrder} className='bg-slate-200 p-6 md:p-24 rounded-lg flex flex-col gap-9'>
                <div className='flex flex-col md:flex-row w-full gap-6'>
                    <div className='w-full md:w-1/2'>
                        <input className='py-3 rounded-md w-full px-6' type="text" name="first_name" id="first_name" placeholder='First Name' required />
                    </div>
                    <div className='w-full md:w-1/2'>
                        <input className='py-3 rounded-md w-full px-6' type="text" name="last_name" id="last_name" placeholder='Last Name' required />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row w-full gap-6'>
                    <div className='w-full md:w-1/2'>
                        <input className='py-3 rounded-md w-full px-6' type="number" name="phone" id="number" placeholder='Your Phone' required />
                    </div>
                    <div className='w-full md:w-1/2'>
                        <input className='py-3 rounded-md w-full px-6' type="email" name="email" id="email" defaultValue={user?.email} placeholder='Your Email' required readOnly />
                    </div>
                </div>
                <div>
                    <textarea className='rounded-md w-full resize-none px-6 py-2' name="message" id="message" rows="10" placeholder='Message...'></textarea>
                </div>
                <button type='submit' className='w-full rounded-md bg-red-500 text-white py-3'>Order Confirm</button>

            </form>
        </div>
    );
};

export default Checkout;