import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

const Home = () => {
    return (
        <div className='cover h-screen w-full'>
            <div className='flex h-screen flex-wrap content-center justify-center text-white w-full'>
                <p className='text-5xl w-full lg:w-1/2 font-bold tracking-wide'>Full-stack Web Developer</p>
                <p className='text-2xl w-full font-semibold'>I specialize in Javascript.</p>
                <Link to='/portfolio'>
                    <button className='flex content-center pl-4 pr-2 pt-3 pb-3 bg-blue-700 text-white focus:outline-none m-5 hover:bg-blue-800 rounded'>
                        <p className='inline-block'>Check out my Portfolio</p> <span className='inline-block ml-1'> <IoIosArrowForward size={25}/></span>
                    </button>
                </Link>
                <Link to='/blog'>
                    <button className='flex content-center pl-4 pr-2 pt-3 pb-3 bg-green-700 text-white focus:outline-none m-5 hover:bg-green-800 rounded'>
                    <p className='inline-block'>Read my Blog</p> <span className='inline-block ml-1'> <IoIosArrowForward size={25}/></span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home
