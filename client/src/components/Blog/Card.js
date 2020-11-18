import React, { useContext } from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { BlogContext } from '../../context/blog-context';


const Card = ({post}) => {
    const { getPostsByTag } = useContext(BlogContext)
    return (
        <div className='lg:w-1/3'>
        <div className='bg-gray-100  max-w-xs rounded-lg shadow pb-3 m-5 mx-auto'>
            <img src={`https://bucket-for-carlicdev.s3.us-east-2.amazonaws.com/${post.imageUrl}`} alt='teclado' className='rounded-t h-56 w-full'/>
            <div className='flex flex-wrap justify-around items-center px-2 pb-2'>
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
                                <button key={tag} className='inline pb-1 text-white rounded shadow-md focus:outline-none text-sm bg-green-700 px-1 m-1' onClick={(e) => getPostsByTag(e,tag)}>
                                    {tag}
                                </button>)
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

export default Card
