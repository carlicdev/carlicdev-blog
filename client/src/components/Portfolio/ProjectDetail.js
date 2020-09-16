import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../../data';
import Modal from '../Modal/Modal';

const ProjectDetail = ({match}) => {
    const [project, setProject] = useState(null);
    const [modalState, setModalState] = useState({open: false, image: null});

    useEffect(() => {
        const getProject = () => {
            const myProject = data.find(i => i.slug === match.params.slug);
            setProject(myProject);
        }
        getProject();
    },[match.params.slug]);

    console.log(project)
    return (
        <div>
            <Modal handleModal={modalState} />
            {
                !project && <p>Loading...</p>
            }
            {
                project && (
                    <div className='my-2'>
                        <div className='mx-auto lg:px-48 sm:px-5'>
                        <div className='text-blue-900 font-semibold text-5xl'>
                            {project.title}
                        </div>
                        <div className='text-gray-800 text-xl'>
                            {project.description}
                        </div>
                        <img src={require(`../../images/portfolio/${project.imgUrl}`)} alt='post cover' className='h-64 mx-auto mt-5'/>
                        {
                            project.url && (
                                <button className='mt-5 shadow-sm bg-green-700 px-3 py-2 text-white rounded focus:outline-none hover:bg-green-800'>
                                    <a href={project.url} >
                                        Visit site
                                    </a>
                                </button>
                            )
                        }
                        <div className='mt-5 text-justify max-w-2xl mx-auto'>
                            <div className='flex flex-wrap justify-center'>
                                <button className='focus:outline-none p-1' onClick={() => setModalState({open: true, image: `${project.gallery1}`})}>
                                    <img src={require(`../../images/portfolio/${project.gallery1}`)} alt='post cover' className='h-32 w-48 mx-auto mt-5'/>
                                </button>
                                <button className='focus:outline-none p-1' onClick={() => setModalState({open: true, image: `${project.gallery2}`})}>
                                    <img src={require(`../../images/portfolio/${project.gallery2}`)} alt='post cover' className='h-32 w-48 mx-auto mt-5'/>
                                </button>
                                <button className='focus:outline-none p-1' onClick={() => setModalState({open: true, image: `${project.gallery3}`})}>
                                    <img src={require(`../../images/portfolio/${project.gallery3}`)}  alt='post cover' className='h-32 w-48 mx-auto mt-5'/>
                                </button>
                            </div>
                            <div className='text-xl font-semibold text-blue-900 mt-10'>
                                The requirements
                            </div>
                            <div className='text-gray-800'>
                                {project.requirements}
                            </div>
                            <div className='text-xl font-semibold text-blue-900 mt-3'>
                                The process
                            </div>
                            <div className='text-gray-800'>
                                {project.process}
                            </div>
                        </div>
                        </div>
                    </div>
                )
            }
            <hr/>
            <div className='flex w-full justify-center'>
                <button className='bg-blue-700 text-white py-2 px-3 hover:bg-blue-600 shadow-sm rounded focus:outline-none my-5'>
                    <Link to='/portfolio'>
                    Back to portfolio
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default ProjectDetail
