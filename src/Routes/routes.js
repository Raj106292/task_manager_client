import AddTask from "../Pages/AddTask/AddTask";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/add-task',
                element: <AddTask />
            },
            {
                path: '/login',
                element: <LogIn />
            },
            {
                path: '/sign-up',
                element: <Register />
            },
        ]
    },
]);

export default routes;