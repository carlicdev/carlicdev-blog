import React from 'react';
import img1 from '../../images/icons/developmentIcon.png'

const Home = () => {
    return (
        <div className='cover h-screen w-full'>
            <div className='flex h-screen flex-wrap content-center w-full'>
            <div className='text-3xl  text-white w-full lg:w-1/2 font-black tracking-wide'>
                <img src={img1} className='w-48'alt='big cover icon'/>
            </div>
                <p className='text-5xl w-full lg:w-1/2 font-black tracking-wide'>Hi, I´m carlic</p>
                <p className='text-2xl w-full font-semibold'>Hello from fuck</p>
            </div>
        </div>
    )
}

export default Home
