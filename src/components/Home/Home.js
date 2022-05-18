import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import AddTask from './AddTask';

const Home = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <div className='mx-8'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl font-bold my-10'>To-Do App</h1>
                <button onClick={handleSignOut} className='text-xl text-white bg-[#96be25] py-2 px-4 rounded-lg'>Sign Out</button>
            </div>
            <AddTask></AddTask>
        </div>
    );
};

export default Home;