import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../Assets/reporting-tools-for-project-management.png'

const Home = () => {
    return (
        <section>
            <div className="">
                <div className="dark:bg-violet-400">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 bg-slate-200 dark:text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">Welcome to the Task Manager App, 2022</h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">Hello User. It's a task management app where you can add your task and can show your all tasks and completed task.</p>
                        <div className="flex flex-wrap justify-center">
                            <Link to='/navbars'><button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-blue-700 text-white dark:bg-gray-800 dark:text-gray-50">Add Task</button></Link>
                            <Link to='/navbars'><button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-black text-white dark:border-gray-700 dark:text-gray-900">My Task</button></Link>
                        </div>
                    </div>
                </div>
                <img src={img1} alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-xl lg:-mt-40 dark:bg-gray-500" />
            </div>
        </section>
    );
};

export default Home;

/* 


*/