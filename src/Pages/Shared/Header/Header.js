import React,{useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo1.svg';
import { BsSearch } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const navigate = useNavigate();
    const {user, logout} = useContext(AuthContext)
    const handleLogout = () =>{
        logout()
        .then(() => {
            navigate('/')
        })
        .catch(error => console.log(error.message))
    }
    const menuItems = <>
        <li><Link to='/' className='font-semibold'>Home</Link></li>
        <li><Link to='/about' className='font-semibold'>About</Link></li>
        <li><Link to='/services' className='font-semibold'>Services</Link></li>
        <li><Link to='/blog' className='font-semibold'>Blog</Link></li>
        <li><Link to='/contact' className='font-semibold'>Contact</Link></li>
        <li>
            {
                user?.uid ? 
                <Link onClick={handleLogout} className='font-semibold'>Logout</Link>
                :
                <Link to='/login' className='font-semibold'>Login</Link> 
            }
        </li>
        <li><Link><BiShoppingBag className='text-lg'></BiShoppingBag></Link></li>
        <li><Link><BsSearch className='text-lg'></BsSearch></Link></li>
    </>
    return (
        <div className="navbar bg-base-100 h-24 mb-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="normal-case text-xl">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='contact'>
                    <button className="btn btn-outline font-semibold btn-error">Appointment</button>
                </Link>
            </div>
        </div>
    );
};

export default Header;