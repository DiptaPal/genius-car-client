import React, {useState, useEffect} from 'react';
import Service from '../Service/Service';
import { Link } from 'react-router-dom';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://genius-car-server-sand-ten.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className='my-20 px-6'>
            <div className='text-center mb-10 flex flex-col gap-6'>
                <p className='text-2xl font-bold text-red-500'>Service</p>
                <h1 className='text-5xl font-bold'>Our Service Area</h1>
                <p className='text-xl'>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
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