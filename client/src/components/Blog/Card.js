import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../images/teclado.jpeg';

const Card = ({data}) => {
    return (
        <div className='lg:w-1/3 bg-gray-200 border border-gray-300 max-w-xs rounded-t shadow pb-3 m-5'>
            <img src={img1} alt='teclado' className='rounded-t'/>
            <div className='flex justify-around items-center'>
                <p className=' ml-2 mr-auto  text-2xl text-blue-900 font-semibold mt-2'>{data.title}</p>
                <p className=' mr-2 ml-auto  text-gray-700'>{data.date}</p>
            </div>
            <p className='text-gray-900 m-2'>{data.description}</p>
            <div className='flex justify-around items-end mt-4'>
                <div className='ml-2 mr-auto'>
                    {
                        data.tags.map(tag => {
                            return(
                                <div key={tag} className='inline pb-1 text-white rounded text-sm bg-green-700 px-1 m-1'>
                                    {tag}
                                </div>)
                        })
                    }
                </div>
                <div className='mr-2 ml-auto'>
                    <button type='button' className='bg-blue-900 rounded shadow-md text-white px-2 py-1'>
                        <Link to={`blog/${data.slug}`}>
                            Read more
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card
