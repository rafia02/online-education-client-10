import React from 'react';
import '../App.css'

const Home = () => {
    return (
        <div className='  mb-40'>




            <div className=" header-contant w-full mt-5 mb-14">
                <div className='flex px-7 pt-28 lg:pt-32 justify-center items-center'>
                <h1 className='text-5xl t-40 text-white font-extrabold'>Learn With It Education</h1>
                </div>
            </div>


            <div className='w-3/4 bg-fuchsia-50 p-10 rounded-lg mx-auto'>

                <h1 className='text-3xl mb-5 text-center font-bold'>Online Course</h1>
                <p  className=' text-center'>75% of our learners achieve career transition within 6 months of the program. Learn to design data models, web development, digital marketing build data warehouses and data lakes, automate data pipelines, and work with massive datasets. At the end of the program, you’ll combine your new skills by completing a capstone project.</p>

            </div>
        </div>
    );
};

export default Home;