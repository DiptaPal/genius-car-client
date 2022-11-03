import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { BsGoogle, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="footer px-10 sm:px-36 py-32 bg-black text-white">
            <div>
                <img src={logo} alt="" />
                <p>Edwin Diaz is a software and web<br />technologies engineer, a life coach<br />trainer who is also a serial .</p>
                <div className='flex justify-around items-center gap-2'>
                    <Link className='p-2 rounded-full bg-gray-800'><BsGoogle className='text-white'></BsGoogle></Link>
                    <Link className='p-2 rounded-full bg-gray-800'><BsTwitter className='text-white'></BsTwitter></Link>
                    <Link className='p-2 rounded-full bg-gray-800'><BsInstagram className='text-white'></BsInstagram></Link>
                    <Link className='p-2 rounded-full bg-gray-800'><BsLinkedin className='text-white'></BsLinkedin></Link>
                </div>
            </div>
            <div>
                <span className="text-xl font-semibold text-white">About</span>
                <Link to='/home' className="link link-hover">Home</Link>
                <Link className="link link-hover">Service</Link>
                <Link className="link link-hover">Contact</Link>
            </div>
            <div>
                <span className="text-xl font-semibold text-white">Company</span>
                <Link className="link link-hover">Why Car Doctor</Link>
                <Link className="link link-hover">About</Link>
                <Link to='/login' className='link link-hover'>Login</Link>
            </div>
            <div>
                <span className="text-xl font-semibold text-white">Support</span>
                <Link className="link link-hover">Support Center</Link>
                <Link className="link link-hover">Feedback</Link>
                <Link className="link link-hover">Accesbility</Link>
            </div>
        </footer>
    );
};

export default Footer;