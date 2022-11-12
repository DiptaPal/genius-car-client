import React, { useState, useEffect, useRef } from 'react';
import Service from '../Service/Service';
import { Link } from 'react-router-dom';


const Services = () => {
    const [services, setServices] = useState([])

    const [isAsc, setIsAsc] = useState(true)
    const searchRef = useRef();
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch(`https://genius-car-server-sand-ten.vercel.app/services?search=${search}&order=${isAsc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [isAsc, search])

    const handleSearch = () =>{
        setSearch(searchRef.current.value)
    }

    return (
        <div className='my-20 px-6'>
            <div className='text-center mb-10 flex flex-col gap-6'>
                <p className='text-2xl font-bold text-red-500'>Service</p>
                <h1 className='text-5xl font-bold'>Our Service Area</h1>
                <p className='text-xl'>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='flex flex-col justify-between items-end my-10'>
                <div>
                    <input ref={searchRef} className='border outline-none py-2 rounded-md border-blue-300' type="text" />
                    <button onClick={handleSearch} className='btn btn-outline btn-accent'>Search</button>
                </div>
                <br />
                <button className='btn btn-active btn-primary' onClick={() => setIsAsc(!isAsc)}>{isAsc ? 'Desc' : 'Asc'}</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <Link to='services' className='mt-8 flex justify-center items-center'>
                <button className="btn btn-outline btn-error">More Services</button>
            </Link>
        </div>
    );
};

export default Services;