import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import AddService from '../../Pages/AddService/AddService';
import Checkout from '../../Pages/Checkout/Checkout';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/checkout',
                element: <Checkout></Checkout>
            },
            {
                path: '/service',
                element: <AddService></AddService>
            }
        ]
    }
])

export default router