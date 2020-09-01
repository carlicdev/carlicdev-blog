import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const BigCard = ({post}) => {
    return (
            <div className=''>
            <div className='bg-gray-200  max-w-xs md:max-w-xl rounded-lg shadow-lg pb-3 m-5 mx-auto'>
                <img src={require(`../../images/temp/${post.imageUrl}`)} alt='teclado' className='rounded-t h-56 w-full'/>
                <div className='flex flex-wrap justify-around items-center'>
                    <p className=' ml-2 mr-auto  text-2xl text-blue-900 font-semibold mt-2'>{post.title}</p>
                    <p className=' mr-2 ml-auto text-sm  mt-2 text-gray-700'>
                        <Moment format='DD/MM/YYYY'>
                            {post.createdAt}
                        </Moment>
                    </p>
                </div>
                <p className='text-gray-900 m-2'>{post.description}...</p>
                <div className='flex justify-around items-end mt-4'>
                    <div className='ml-2 mr-auto'>
                        
                        {
                            post.tags.map(tag => {
                                return(
                                    <div key={tag} className='inline pb-1 text-white rounded shadow-md text-sm bg-green-700 px-1 m-1'>
                                        {tag}
                                    </div>)
                            })
                        } 
                    </div>
                    <div className='mr-2 ml-auto'>
                        <button type='button' className='bg-blue-900 focus:outline-none hover:bg-blue-800 rounded shadow-md text-white px-2 py-1'>
                            <Link to={`blog/${post.slug}`}>
                                Read more
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default BigCard
