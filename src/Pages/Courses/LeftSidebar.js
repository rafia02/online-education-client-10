import React from 'react';
import { Link } from 'react-router-dom';

const LeftSidebar = ({data}) => {
    
    return (
        <div className='lg:w-2/3 '>
            <Link to={`/courses/${data.id}`} className='flex flex-col bg-fuchsia-200  hover:bg-fuchsia-300 ml-3 text-violet-800  text-center font-bold rounded-md mb-5 px-1 py-2 lg:py-3 '>
            <small className=''>{data.course_name}</small>
            </Link>
        </div>
    );
};

export default LeftSidebar;