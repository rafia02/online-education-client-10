import React from 'react';
import { Link } from 'react-router-dom';

const RightSidebar = ({data}) => {
    const { id, img, title, body, price, rating,  purchased} = data
    return (

            <div className="drop-shadow-lg rounded ">
                <div className='w-full rounded'>
                    <img className='h-48 rounded w-full ' src={img} alt="" />
                </div>





                <div className='bg-fuchsia-50 card-body  h-8/12'>
                    <h6 className='text-xl font-bold '>{title}</h6>
                    
                    <div>
                        {
                            body.length > 100 ?
                            <p>{body.slice(0, 100) +"...."} <Link to={`/courses/${id}`} className='text-blue-500'>Read More</Link></p>
                            
                            : <p>{body}</p>
                        }
                    </div>

                </div>
                <Link to={`/courses/${id}`}>
                  <div className=' b-0 rounded-lg bg-pink-600 text-white font-bold px-4 py-2 b-0 text-center items-center'>
                    Show Details
                  </div>
                  </Link>






            
            </div>
 
    );
};

export default RightSidebar;