import React,{useState, useEffect} from 'react';
import PopularProduct from '../PropularProduct/PopularProduct';

const PopularProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('popular_products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    console.log();
    return (
        <div className='my-20 px-6'>
            <div className='text-center mb-10 flex flex-col gap-6'>
                <p className='text-2xl font-bold text-red-500'>Popular Products</p>
                <h1 className='text-5xl font-bold'>Browse Our Products</h1>
                <p className='text-xl'>The majority have suffered alteration in some form, by injected humour, or randomised<br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    products.map(product => <PopularProduct
                        key={product._id}
                        product={product}
                    ></PopularProduct>)
                }
            </div>
            <div className='mt-8 flex justify-center items-center'>
                <button className="btn btn-outline btn-error">More Services</button>
            </div>
        </div>
    );
};

export default PopularProducts;