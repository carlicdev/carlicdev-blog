import React from 'react';
import img1 from '../../images/codeJs.jpg';

const Contact = () => {
    return (
        <div className='cover h-screen pt-10 w-full'>
                    <div className='p-10 bg-gray-300 max-w-lg mx-auto self-center shadow-lg'>
                        <form>
                            <div className='my-2 text-left'>
                                <label htmlFor='name' className='block ml-1 font-semibold text-gray-900 mb-2'>Your <span className='text-gray-600'>Name</span></label>
                                <input type='text' name='name' className='w-full border border-gray-400 rounded bg-gray-100 focus:outline-none focus:shadow-outline px-3 py-1'/>
                            </div>
                            <div className='my-2 text-left'>
                                <label htmlFor='email' className='block ml-1 font-semibold text-gray-900 mb-2'>Your <span className='text-gray-600'>Email</span></label>
                                <input type='text' name='email' className='w-full border border-gray-400 rounded bg-gray-100 focus:outline-none focus:shadow-outline px-3 py-1'/>
                            </div>
                            <div className='my-2 text-left'>
                                <label htmlFor='message' className='block ml-1 font-semibold text-gray-900 mb-2'>Your <span className='text-gray-600'>Message</span></label>
                                <textarea rows='5' name='message' className='w-full border border-gray-400 rounded bg-gray-100 focus:outline-none focus:shadow-outline px-3 py-1'/>
                            </div>
                            <div className='my-2'>
                                <button className='px-5 py-1 text-white bg-blue-800 rounded shadow-md'>
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
        </div>
        /*
        <div>
            <div className='flex border border-gray-400 md:max-w-lg lg:max-w-5xl lg:mx-auto mx-auto lg:my-24 lg:mx-5 shadow-lg '>
                <div className='lg:w-1/2 mx-auto'>
                <img src={img1} alt='code background' className='lg:hidden' />
                    <div className='p-10 bg-gray-200'>
                        <form>
                            <div className='my-2 text-left'>
                                <label htmlFor='name' className='block ml-1 font-semibold text-gray-900 mb-2'>Your <span className='text-gray-600'>Name</span></label>
                                <input type='text' name='name' className='w-full border border-gray-400 rounded bg-gray-100 focus:outline-none focus:shadow-outline px-3 py-1'/>
                            </div>
                            <div className='my-2 text-left'>
                                <label htmlFor='email' className='block ml-1 font-semibold text-gray-900 mb-2'>Your <span className='text-gray-600'>Email</span></label>
                                <input type='text' name='email' className='w-full border border-gray-400 rounded bg-gray-100 focus:outline-none focus:shadow-outline px-3 py-1'/>
                            </div>
                            <div className='my-2 text-left'>
                                <label htmlFor='message' className='block ml-1 font-semibold text-gray-900 mb-2'>Your <span className='text-gray-600'>Message</span></label>
                                <textarea rows='5' name='message' className='w-full border border-gray-400 rounded bg-gray-100 focus:outline-none focus:shadow-outline px-3 py-1'/>
                            </div>
                            <div className='my-2'>
                                <button className='px-5 py-1 text-white bg-blue-800 rounded shadow-md'>
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='hidden contact-card lg:block lg:w-1/2  lg:order-first'>
                </div>
            </div>
    </div> {*/
    )
}

export default Contact
