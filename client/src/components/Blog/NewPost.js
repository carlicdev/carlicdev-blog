import React, { useState } from 'react';
import axios from 'axios';

const NewPost = () => {
    const [ file, setFile ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ content, setContent ] = useState('');
    const [ tags, setTags ] = useState('');

    const onChange = e => {
        setFile(e.target.files[0]);
    };

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', title);
        formData.append('content', content);
        formData.append('tags', tags);

        try {
            await axios.post('/api/blog/new-post', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='max-w-lg mx-auto'>
            <form onSubmit={onSubmit}>
                <div className='mb-4 text-left'>
                    <label htmlFor='title' className='block ml-1 mb-2 text-gray-900 font-semibold'>Title</label>
                    <input type='text' 
                        name='title' 
                        className='w-full border border-gray-400 rounded bg-gray-200 focus:outline-none focus:shadow-outline px-3 py-1'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                </div>
                    <div className='mb-4 text-left'>
                        <label htmlFor='tags' className='block mx-1 mb-2 text-gray-900 font-semibold'>Tags</label>
                        <input type='text' 
                            name='tags' 
                            className='w-full border border-gray-400 rounded bg-gray-200 focus:outline-none focus:shadow-outline px-3 py-1'
                            value={tags}
                            onChange={(e) => setTags(e.target.value)} 
                        />
                    </div>
                <div className='mb-4 text-left'>
                    <label htmlFor='content' className='block ml-1 mb-2 text-gray-900 font-semibold'>Content</label>
                    <textarea rows='5' 
                        name='content' 
                        className='w-full border border-gray-400 rounded bg-gray-200 focus:outline-none focus:shadow-outline px-3 py-1'
                        value={content}
                        onChange={(e) => setContent(e.target.value)} 
                    />
                </div>
                <div className='mb-4 text-left'>
                    <label htmlFor='file' className='block ml-1 mb-2 text-gray-900 font-semibold'>Image</label>
                    <input type='file' 
                        name='title' 
                        className='w-full border border-gray-400 rounded bg-gray-200 focus:outline-none focus:shadow-outline px-3 py-1'
                        onChange={onChange} 
                    />
                </div>
                <div className='flex'>
                    <button type='submit' className='bg-blue-800 text-white py-2 px-4 '>
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default NewPost
