import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [serverMsg, setServerMsg] = useState(null);
    const [serverErrors, setServerErrors] = useState(null);

    const handleSubmit = async e => {
        e.preventDefault();
        const res = await axios.post('/api/contact', {name, email, message});
        if (res.status === 201) {
            setName('');
            setEmail('');
            setMessage('');
            setServerMsg(res.data.msg)
        } 
        if (res.status === 200) {
            setServerErrors(res.data.msg)
        }
    }

    return (
        <div className='cover h-screen pt-10 w-full'>
                    <div className='p-10 bg-gray-300 max-w-lg mx-auto self-center shadow-lg'>
                        <form onSubmit={handleSubmit}>
                            <div className='my-2 text-left'>
                                <label htmlFor='name' className='block ml-1 font-semibold text-gray-900 mb-2'>Your <span className='text-gray-600'>Name</span></label>
                                <input className='w-full border border-gray-400 rounded bg-gray-100 focus:outline-none focus:shadow-outline px-3 py-1'
                                     type='text' 
                                     name='name'
                                     value={name}
                                     onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            {
                                serverErrors && serverErrors.name ?  (
                                <div className="bg-blue-100 border border-blue-800 text-blue-700 px-4 py-1 rounded relative my-2" role="alert">
                                    <span className="block text-sm sm:inline">{serverErrors.name}</span>
                                    <span className="absolute top-0 bottom-0 right-0 px-1 py-1" onClick={(e) => setServerErrors(null)}>
                                        <svg className="fill-current h-4 w-4 text-blue-700" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                                    </span>
                                </div>
                                ) : null
                            }
                            <div className='my-2 text-left'>
                                <label htmlFor='email' className='block ml-1 font-semibold text-gray-900 mb-2'>Your <span className='text-gray-600'>Email</span></label>
                                <input className='w-full border border-gray-400 rounded bg-gray-100 focus:outline-none focus:shadow-outline px-3 py-1'
                                    type='email' 
                                    name='email' 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            {
                                serverErrors && serverErrors.email ? (
                                <div className="bg-blue-100 border border-blue-800 text-blue-700 px-4 py-1 rounded relative my-2" role="alert">
                                    <span className="block text-sm sm:inline">{serverErrors.email}</span>
                                    <span className="absolute top-0 bottom-0 right-0 px-1 py-1" onClick={(e) => setServerErrors(null)}>
                                        <svg className="fill-current h-4 w-4 text-blue-700" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                                    </span>
                                </div>
                                ) : null
                            }
                            <div className='my-2 text-left'>
                                <label htmlFor='message' className='block ml-1 font-semibold text-gray-900 mb-2'>Your <span className='text-gray-600'>Message</span></label>
                                <textarea className='w-full border border-gray-400 rounded bg-gray-100 focus:outline-none focus:shadow-outline px-3 py-1'
                                    rows='5' 
                                    name='message' 
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                            {
                                serverErrors && serverErrors.message ? (
                                <div className="bg-blue-100 border border-blue-800 text-blue-700 px-4 py-1 rounded relative my-2" role="alert">
                                    <span className="block text-sm sm:inline">{serverErrors.message}</span>
                                    <span className="absolute top-0 bottom-0 right-0 px-1 py-1" onClick={(e) => setServerErrors(null)}>
                                        <svg className="fill-current h-4 w-4 text-blue-700" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                                    </span>
                                </div>
                                ) : null
                            }
                            <div className='my-2'>
                                {
                                    serverMsg && (
                                        <div className="bg-blue-100 border border-blue-800 text-blue-700 px-4 py-1 rounded relative my-2" role="alert">
                                            <span className="block text-sm sm:inline">{serverMsg}</span>
                                            <span className="absolute top-0 bottom-0 right-0 px-1 py-1" onClick={(e) => setServerMsg(null)}>
                                                <svg className="fill-current h-4 w-4 text-blue-700" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                                            </span>
                                        </div>
                                    )
                                }
                                <button className='px-5 py-1 text-white bg-blue-800 rounded shadow-md'
                                    type='submit'
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
        </div>
    )
}

export default Contact
