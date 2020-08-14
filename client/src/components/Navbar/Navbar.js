import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle, AiFillHome } from 'react-icons/ai';

const Navbar = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <div className='bg-blue-800 text-white sticky top-0'>
            <div className='flex py-3 justify-around items-center'>
                <div className='ml-2'>
                    <button className='text-2xl font-bold'>
                        <Link to='/'><AiFillHome /></Link>
                    </button>
                </div>
                <div className='ml-auto mr-2 text-2xl '>
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
