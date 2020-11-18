import React, { useState, useEffect } from 'react';
import { RiCloseCircleFill } from 'react-icons/ri';

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
                        <div className='relative w-auto my-6 mx-auto lg:max-w-xl max-w-sm bg-gray-400 rounded p-2'>
                            <button className='absolute text-red-600  hover:text-red-800 focus:outline-none modal-close' onClick={() => setShowModal(false)}>
                                <RiCloseCircleFill size={40}/>
                            </button>
                            <div>
                                <img src={require(`../../images/portfolio/${handleModal.image}`)} alt='project' className='w-128 h-128'/>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Modal
