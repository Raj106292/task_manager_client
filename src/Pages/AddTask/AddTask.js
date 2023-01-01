import React, { useState } from 'react';
import task from '../../Assets/add_task.jpg';
import AddTaskModal from './AddTaskModal';

const AddTask = () => {

    const [openModal, setOpenModal] = useState(false);
    const handleModal = () => {
        setOpenModal(true);
    }

    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Hello,
                            <span className="text-violet-400"> welcome </span>to Add Task section
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Here you can add your task
                            <br /><span className="hidden md:inline"> and upload your favorite image</span>
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <button onClick={handleModal} className="px-8 py-3 text-lg btn font-semibold rounded bg-violet-400 text-gray-900">Add a Task</button>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={task} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
            <AddTaskModal openModal={openModal} setOpenModal={setOpenModal} />
        </div>
    );
};

export default AddTask;