import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';
import ReactMarkdown from 'react-markdown';
import BlogSection from './BlogSection';
import { FiCalendar, FiUser } from 'react-icons/fi';

const PostDetail = ({match}) => {
    const [post, setPost] = useState(null);
    const [newSlug, setNewSlug] = useState('');

    useEffect(() => {
        window.scroll(0,0)
    },[post]);

    useEffect(()=> {
        const getPost = async () => {
            const res = await axios.get(`/api/blog/${match.params.slug}`);
            setPost(res.data[0]);
        }
        getPost();
    },[newSlug, match.params.slug]);

    useEffect(() => {
        const slug = match.params.slug;
        const getSlug = () => {
            setNewSlug(slug)
        }
       getSlug();
    });

    return (
        <div>
            {
                !post && (
                    <div>Loading...</div>
                )
            }
            {
                post && (
                   <div>
                    <div className='mx-auto lg:px-48 sm:px-5'>
                        <div className='text-6xl font-semibold mt-5'>{post.title}</div>
                        <img src={`https://bucket-for-carlicdev.s3.us-east-2.amazonaws.com/${post.imageUrl}`} alt='post cover' className='h-64 mx-auto mt-5'/>
                            <div className='text-gray-700 my-10 mx-auto'>
                                <FiUser className='inline mr-1 mb-1'/>
                                <span className='text-cursive mr-4'>
                                    Carlic
                                </span>
                                <FiCalendar className='inline mr-1 mb-1'/>
                                <span className='text-cursive'>
                                    <Moment format='DD/MM/YYYY'>
                                        {post.createdAt}
                                    </Moment>
                                </span>
                            </div>   
                        <div className='text-justify m-2'>
                            <ReactMarkdown className='prose lg:prose-xl mx-auto' source={post.content} />
                        </div>
                    </div>
                    <button className='rounded border my-5 text-white font-semibold border-red-600 text-xl py-2 px-5 bg-red-500 hover:bg-red-600 focus:outline-none'>
                        <Link to='/blog'>
                            Blog Index
                        </Link>
                    </button>
                    <BlogSection currentPost={post}/>
                    </div>
                )
            }

        </div>
    )
}

export default PostDetail
