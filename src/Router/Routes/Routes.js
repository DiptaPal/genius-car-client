import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import About from '../../Pages/About/About';
import AddService from '../../Pages/AddService/AddService';
import AllServices from '../../Pages/AllServices/AllServices';
import Blog from '../../Pages/Blog/Blog';
import Checkout from '../../Pages/Checkout/Checkout';
import Contact from '../../Pages/Contact/Contact';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Home from '../../Pages/Home/Home/Home';
import Services from '../../Pages/Home/Services/Services';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import ServiceDetails from '../../Pages/ServiceDetails/ServiceDetails';
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
                path: '/services',
                element: <AllServices></AllServices>
            },
            {
                path: '/service_details/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <Checkout></Checkout>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`) 
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router