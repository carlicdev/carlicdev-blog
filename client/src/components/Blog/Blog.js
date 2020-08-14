import React from 'react'
import Card from './Card';
import data from '../../data';

const Blog = () => {
    return (
        <div>
            <h1>Hello from Blog</h1>
            <div className='flex flex-wrap justify-around'>
                {
                    data.map(i => {
                        return <Card key={i.id} data={i} />
                    })
                }
            </div>
        </div>
    )
}

export default Blog
