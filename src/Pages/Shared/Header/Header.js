import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo1.svg';
import { BsSearch } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";

const Header = () => {
    const menuItems = <>
        <li><Link to='/' className='font-semibold'>Home</Link></li>
        <li><Link to='/service' className='font-semibold'>Services</Link></li>
        <li><Link to='/' className='font-semibold'>Blog</Link></li>
        <li><Link to='/' className='font-semibold'>Contact</Link></li>
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
                <Link>
                    <button className="btn btn-outline font-semibold btn-error">Appointment</button>
                </Link>
            </div>
        </div>
    );
};

export default Header;