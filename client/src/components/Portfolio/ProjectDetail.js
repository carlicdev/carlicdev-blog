import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../../data';

const ProjectDetail = ({match}) => {
    const [project, setProject] = useState(null);

    useEffect(() => {
        const getProject = () => {
            const myProject = data.find(i => i.slug === match.params.slug);
            setProject(myProject);
        }
        getProject();
    },[]);

    console.log(project)
    return (
        <div>
            {
                !project && <p>Loading...</p>
            }
            {
                project && (
                    <div className='my-2'>
                        <div className='mx-auto lg:px-48 sm:px-5'>
                        <img src={require('../../images/teclado.jpeg')} alt='post cover' className='h-128 mx-auto mt-5'/>
                        <div className='text-blue-900 font-semibold text-5xl'>
                            {project.title}
                        </div>
                        <div className='text-gray-800 text-xl'>
                            {project.description}
                        </div>
                        {
                            project.url && (
                                <button className='mt-5 shadow-sm bg-green-700 px-3 py-2 text-white rounded focus:outline-none hover:bg-green-800'>
                                    Visit site
                                </button>
                            )
                        }
                        <div className='mt-5 text-justify'>
                            <div className='text-xl font-semibold text-blue-900'>
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
                            <div className='text-xl font-semibold text-blue-900 mt-3'>
                                Gallery
                            </div>
                            <div className='flex flex-wrap justify-center'>
                            <img src={require(`../../images/teclado.jpeg`)} alt='post cover' className='h-32 mx-auto mt-5'/>
                            <img src={require(`../../images/teclado.jpeg`)} alt='post cover' className='h-32 mx-auto mt-5'/>
                            <img src={require(`../../images/teclado.jpeg`)} alt='post cover' className='h-32 mx-auto mt-5'/>
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