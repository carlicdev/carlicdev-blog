import React from 'react'

const PostDetail = ({match}) => {
    return (
        <div>
            <h1>Hi from PostDetail</h1>
            <p>{match.params.slug}</p>
        </div>
    )
}

export default PostDetail
