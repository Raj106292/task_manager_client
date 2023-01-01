import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';

const AddTaskModal = ({ openModal, setOpenModal }) => {

    const { user } = useContext(AuthContext);

    const handleModalClose = () => {
        setOpenModal(false);
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
                                        id="email"
                                        defaultValue={user?.email}
                                        readOnly={true}
                                        required={true}
                                    />
                                    :
                                    <TextInput
                                        id="email"
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
                                id="task"
                                type="text"
                                required={true}
                            />
                        </div>
                        <div className="w-full">
                            <Button>
                                Add The Task
                            </Button>
                        </div>
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