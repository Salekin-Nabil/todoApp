import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddTask from './AddTask';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className=''>
            <AddTask></AddTask>
            <div className='md:flex justify-around items-center'>
                <button onClick={()=>navigate('/ViewTask')} className='text-xl text-white bg-[#96be25] hover:bg-[#374904] py-2 px-16 mb-10 rounded-lg'>View Task Details</button>
                <button className='text-xl text-white bg-red-600 hover:bg-red-900 py-2 px-28 mb-10 rounded-lg'>Complete</button>
            </div>
        </div>
    );
};

export default Home;