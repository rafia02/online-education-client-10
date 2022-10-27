import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';

const Courses = () => {
    const datas = useLoaderData()
    console.log(datas)
    return (
        <div className='flex my-8 mx-5'>
            <div className=' w-4/12  '>
                <div className=''>
                    {
                        datas.map(data=> <LeftSidebar
                        key={data.id}
                        data={data}
                        ></LeftSidebar>)
                    }
                </div>
            </div>

            <div className='w-8/12  ml-10'>
                <div className='grid grid-cols-1 md:grid-cols-2  gap-y-14 gap-x-7'>
                    {
                        datas.map(data=> <RightSidebar
                        key={data.id}
                        data={data}
                        ></RightSidebar>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;