import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const BlogContext = createContext();

const BlogContextProvider = (props) => {
    const [ posts, setPosts ] = useState(null);
    const [ postsByTag, setPostsByTag] = useState(null);

    useEffect(() => {
        const getPosts = async () => {
            const res = await axios.get('/api/blog');
            let tempPosts = res.data;
            const sortedPosts = tempPosts.sort((a,b) => {
                let postA = a.createdAt.substring(0, 10).split('-').join('');
                let postB = b.createdAt.substring(0, 10).split('-').join('');
                return postB - postA;
            });
            setPosts(sortedPosts);
        };
        getPosts();
    }, [])

    const getPostsByTag = async (e, tag) => {
        e.preventDefault();
        let res = await axios.get(`/api/posts/search?tag=${tag}`);
        setPostsByTag(res.data)
    }

    const resetPostsByTag = () => {
        setPostsByTag(null)
    };

    return (
        <BlogContext.Provider value={{
            posts,
            postsByTag,
            getPostsByTag,
            resetPostsByTag
        }}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogContextProvider;
