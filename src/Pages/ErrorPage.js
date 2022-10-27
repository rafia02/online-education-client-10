import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center mt-20'>
            <h1 className='text-center mb-8'> 404........ This page is no found!!!!!</h1>
            <Link className='bg-blue-500 text-white p-3  rounded-lg' to="/">Go back to home</Link>
        </div>
    );
};

export default ErrorPage;
