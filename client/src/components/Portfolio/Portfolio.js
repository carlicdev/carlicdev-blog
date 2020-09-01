import React, { useEffect } from 'react';

import data from '../../data';
import Project from './Project';

const Portfolio = () => {

    useEffect(() => {
        window.scroll(0,0)
    })

    return (
        <div>
            <h1>hello from Portfolio</h1>
            <div className='flex flex-wrap justify-center content-top w-full'>
                {
                    data.map(i => {
                        return <Project key={i.id} project={i} />
                    })
                }
            </div>
        </div>
    )
}

export default Portfolio
