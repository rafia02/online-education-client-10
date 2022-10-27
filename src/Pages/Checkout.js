import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const data = useLoaderData()
    const {img, title} = data
    return (
        <div className='lg:w-1/2 mx-auto my-20 p-4'>
           <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className='h-40'  src={img} alt="Album"/></figure>
            <div className="card-body items-center bg-fuchsia-100 justify-center">
                <h2 className="card-title">{title}</h2>
               
            </div>
            </div>
        </div>
    );
};

export default Checkout;