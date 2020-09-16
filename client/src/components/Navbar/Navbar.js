import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle, AiFillHome } from 'react-icons/ai';

const Navbar = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <div className='bg-blue-800 text-white sticky top-0 shadow'>
            <div className='flex py-3 justify-around items-center'>
                <div className='ml-3 mr-auto '>
                    <button className='text-2xl font-bold'>
                        <Link to='/'><AiFillHome /></Link>
                    </button>
                </div>
                <div className='hidden lg:inline mx-auto'>
                    <ul>
                        <li className='inline mx-4'>
                            <Link to='/portfolio'>
                                PORTFOLIO
                            </Link>
                        </li>
                        <li className='inline mx-4'>
                            <Link to='/blog'>
                                BLOG
                            </Link>
                        </li>
                        <li className='inline mx-4'>
                            <Link to='/about'>
                                ABOUT
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='hidden lg:inline mr-2 ml-auto'>
                    <button className='bg-green-700 rounded-full px-4 py-1 focus:outline-none shadow hover:bg-green-600'>
                        <Link to='/contact'>
                            Contact
                        </Link>
                    </button>
                </div>
                <div className='ml-auto mr-2 text-2xl lg:hidden'>
                    <button type='button'
                        className='hover:text-blue-500 focus:outline-none focus:text-blue-500' 
                        onClick={() => setIsOpen(!isOpen)} >
                        {
                            isOpen ? <AiFillCloseCircle /> : <GiHamburgerMenu />
                        }
                    </button>
                </div>
            </div>
            {
                isOpen && (
                    <div className='bg-blue-700 py-2 px-2'>
                        <Link to='/portfolio' 
                            className='block py-1 rounded hover:bg-blue-800 rounded' 
                            onClick={() => setIsOpen(!isOpen)}>
                                Portfolio
                        </Link>
                        <Link to='/blog' 
                            className='block py-1 rounded hover:bg-blue-800 rounded' 
                            onClick={() => setIsOpen(!isOpen)}>
                                Blog
                        </Link>
                        <Link to='/about' 
                            className='block py-1 rounded hover:bg-blue-800 rounded' 
                            onClick={() => setIsOpen(!isOpen)}>
                                About
                        </Link>
                        <Link to='/contact' 
                            className='block py-1 rounded hover:bg-blue-800 rounded' 
                            onClick={() => setIsOpen(!isOpen)}>
                                Contact
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default Navbar;
