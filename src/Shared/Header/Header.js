import { Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';

const Header = () => {

    const { user, userLogOut } = useContext(AuthContext);

    const handleUserLogOut = () => {
        const process = window.confirm('Are you sure to log out?');
        if(process){
            userLogOut();
            toast.success('Log Out Successful');
        }
    }

    return (
        <div>
            <Navbar
                fluid={true}
                rounded={true}
                className='bg-slate-400'
            >
                <Navbar.Brand to="https://flowbite.com/">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Task Manager
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Link
                        to="/"
                        className='font-semibold text-lg'
                    >
                        Home
                    </Link>
                    <Link to="/add-task" className='font-semibold text-lg'>
                        Add Task
                    </Link>
                    <Link to="/navbars" className='font-semibold text-lg'>
                        My Task
                    </Link>
                    <Link to="/navbars" className='font-semibold text-lg'>
                        Completed Task
                    </Link>
                    {
                        user?.email ?
                            <div className='flex justify-end'>
                                <button onClick={handleUserLogOut} type="button" className="font-semibold text-lg rounded hover:text-blue-600 dark:bg-gray-100 dark:text-gray-800">Log Out</button>
                            </div>
                            :
                            <Link to="/login" className='font-semibold text-lg'>
                                Log In
                            </Link>
                    }
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;