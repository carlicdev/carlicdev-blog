import React, { useState, useEffect } from 'react'

const Modal = ({handleModal}) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        handleModal.open ? setShowModal(true) : setShowModal(false)
    }, [handleModal])

    return (
        <div>
            {
                showModal && (
                    <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none modal'>
                        <div className='relative w-auto my-6 mx-auto max-w-xl bg-gray-400 rounded p-2'>
                            <div>
                                <img src={require(`../../images/portfolio/${handleModal.image}`)} alt='project' className='w-128 h-128'/>
                            </div>
                            <div className='w-full text-right text-gray-100'>
                                <button className='bg-red-600 hover:bg-red-700 rounded px-4 py-2 focus:outline-none mt-2 shadow' onClick={() => setShowModal(false)}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Modal
