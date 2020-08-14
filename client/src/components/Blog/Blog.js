import React, { useContext } from 'react';
import Card from './Card';
import { BlogContext } from '../../context/blog-context';

const Blog = () => {
    const { posts } = useContext(BlogContext);
    return (
        <div>
            <h1>Hello from Blog</h1>
            <div className='flex flex-wrap justify-around'>
                {
                    posts.map(i => {
                        return <Card key={i._id} post={i} />
                    })
                }
            </div>
        </div>
    )
}

export default Blog
