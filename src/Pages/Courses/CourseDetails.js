import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaFilePdf} from 'react-icons/fa'
import ReactToPrint from 'react-to-print';

const CourseDetails = () => {
    const data = useLoaderData()
    const ref = useRef()
    console.log(data)
    const {img, course_name, id, title, body, price, rating, purchased} = data
    return (
        <div className='w-1/2 mx-auto my-10'>


            <div className='flex w-1/2 mx-auto justify-between my-10 items-center'>

            <div>
                <h1 className='text-2xl font-bold text-center text-orange-600 m '>{course_name}</h1>  

            </div>


               <div className='w-8'>
               <ReactToPrint trigger={()=><FaFilePdf className='text-orange-600 text-2xl' title="download pdf"></FaFilePdf>} content={()=>ref.current}></ReactToPrint>
               </div>

               
                
            </div>
 
            <div ref={ref} className="border rounded drop-shadow-md  w-94">
                
                <div className='w-full rounded'>
                    <img className='h-64 rounded w-full ' src={img} alt="" />
                </div>

                <div className=' card-body bg-fuchsia-50 h-8/12'>
                    <h6 className='text-2xl font-bold mb-2'>{title}</h6>
                    
                    <p className='mb-10'>{body}</p>
                    <div>
                    
                    <div class="flex justify-between items-center">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">Price: ${price}</span>
                        <Link to={`/checkout/${id}`} href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Premium Access</Link>
                    </div>
                    </div>
                </div>

                

            </div>
        </div>
    );
};

export default CourseDetails;