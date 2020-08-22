import React, { useEffect, useContext } from 'react';
import Card from './Card';
import { BlogContext } from '../../context/blog-context';
import BigCard from './BigCard';

const Blog = () => {
    const { posts, postsByTag, resetPostsByTag } = useContext(BlogContext);

    useEffect(() => {
        window.scroll(0,0);
    })

    let postsToPrint = postsByTag ? postsByTag : posts;
    return (
        <div>
            {
                !posts && (
                    <div>Loading...</div>
                )
            }
            {
                posts && (
                    <div>
                        {
                            postsByTag && (
                                <div onClick={resetPostsByTag}>Back</div>
                            )
                        }
                        <BigCard post={postsToPrint[0]} />
                        <div className='flex flex-wrap justify-around xl:max-w-1/3'>
                            {
                                postsToPrint.map(i => {
                                    return <Card key={i._id} post={i} />
                                })
                            }
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Blog
