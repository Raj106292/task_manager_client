import { Label, Modal, TextInput } from 'flowbite-react';
import { HiMail } from "react-icons/hi";
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const AddTaskModal = ({ openModal, setOpenModal }) => {

    const { user } = useContext(AuthContext);

    const handleModalClose = () => {
        setOpenModal(false);
    }

    const handleAddTaskModal = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const task = form.task.value;
        const picture = form.picture.files[0];

        const formData = new FormData();
        formData.append('image', picture);

        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_img_bb_key}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                const picture = imageData?.data?.display_url;
                let taskDetails = {};
                if (picture) {
                    taskDetails = { email, task, picture }
                }
                else {
                    taskDetails = { email, task }
                }
                console.log(taskDetails);
            })
            .catch(error => {
                const errorMessage = error.message;
                toast.error(errorMessage, { duration: 3000 });
            })

    }

    return (
        <div>
            <Modal
                show={openModal}
                size="md"
                popup={true}
                onClose={handleModalClose}
            >
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            Add Your Task
                        </h3>
                        <form onSubmit={handleAddTaskModal} className='space-y-5'>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="email"
                                        value="Your email"
                                    />
                                </div>
                                {
                                    user?.email ?
                                        <TextInput
                                            name="email"
                                            icon={HiMail}
                                            value={user?.email}
                                            readOnly={true}
                                            required={true}
                                        />
                                        :
                                        <TextInput
                                            name="email"
                                            icon={HiMail}
                                            placeholder="name@company.com"
                                            required={true}
                                        />
                                }
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="task"
                                        value="Your Task"
                                    />
                                </div>
                                <TextInput
                                    name="task"
                                    type="text"
                                    required={true}
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload Image</label>
                                <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" name="picture" type="file" />
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF.</p>
                            </div>
                            <div className="w-full">
                                <input type='submit' className='py-2 px-4 bg-blue-600 text-white rounded-md cursor-pointer' value='Add The Task' />
                            </div>
                        </form>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Don't have an account?{' '}
                            <Link
                                to="/sign-up"
                                className="text-blue-700 hover:underline dark:text-blue-500"
                            >
                                Create account
                            </Link>
                        </div>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Don't Login to your account?{' '}
                            <Link
                                to="/login"
                                className="text-blue-700 hover:underline dark:text-blue-500"
                            >
                                Please Login
                            </Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default AddTaskModal;