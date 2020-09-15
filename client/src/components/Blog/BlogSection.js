import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { BlogContext } from '../../context/blog-context';
import Moment from 'react-moment';

const BlogSection = ({currentPost}) => {
    const { posts } = useContext(BlogContext);
    const lastPosts = posts.filter(post => post._id !== currentPost._id).slice(0,3);
    return (
        <div>
            <hr/>
            <p className='text-4xl text-gray-800 font-semibold my-2 mx-auto'>
                You may also like...
            </p>
        <div className='flex flex-wrap justify-center my-8'>
            {
                lastPosts.map(post => {
                    return (
                        <div key={post._id}>
                            <div className='border border-gray-300 max-w-xs bg-gray-200 h-50 pb-4'>
                                <div className='flex flex-wrap justify-around items-center'>
                                    <p className=' ml-2 mr-auto  text-2xl text-blue-900 font-semibold mt-2'>{post.title}</p>
                                    <p className=' mr-2 ml-auto text-sm  mt-2 text-gray-700'>
                                    <Moment format='DD/MM/YYYY'>
                                        {post.createdAt}
                                    </Moment>
                                    </p>
                                </div>
                                <p className=' ml-2 mr-auto text-xl text-gray-800 mt-2'>{post.description}...</p>
                                <div className='flex justify-around items-end mt-4'>
                                    <div className='ml-2 mr-auto'>
                                    
                                        {
                                            post.tags.map(tag => {
                                                return(
                                                    <div key={tag} className='inline pb-1 text-white rounded text-sm bg-green-700 px-1 m-1'>
                                                        {tag}
                                                    </div>)
                                            })
                                        } 
                                    </div>
                                    <div className='mr-2 ml-auto'>
                                        <button type='button' className='bg-blue-900 hover:bg-blue-800 focus:outline-none rounded shadow-md text-white px-2 py-1'>
                                            <Link to={`${post.slug}`}>
                                                Read more
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}

export default BlogSection;
