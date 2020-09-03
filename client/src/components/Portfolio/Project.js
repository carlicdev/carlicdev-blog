import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({project}) => {
    return (
        <div className='lg:w-1/3 max-w-md p-3'>
            <div className='bg-gray-200  max-w-xs rounded-lg shadow  pb-3 m-5 mx-auto'>
            <img src={require('../../images/teclado.jpeg')} alt='teclado' className='rounded-t h-56 w-full'/>
                <div className='font-semibold text-lg text-blue-900'>
                    {project.title}
                </div> 
                <div className='flex justify-center pt-2 px-5'>
                {
                    project.url && (
                        <button className='bg-green-700 hover:bg-green-600 text-white rounded px-2 py-1 shadow mr-2'>
                        <a href={project.url}>
                            Visit site
                        </a>
                    </button>
                    )
                }
                <button className='bg-blue-700 hover:bg-blue-600 text-white rounded px-2 py-1 shadow'>
                    <Link to={`portfolio/${project.slug}`}>
                        Details
                    </Link>
                </button>
               </div>
            </div>
        </div>
    )
}

export default Project;
