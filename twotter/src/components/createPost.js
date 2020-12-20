import React from 'react';

export const CreatePost = ({createPost}) => {
    
    return(
        <div className="post-button">
            <div className="btn">
                <button type="button" onClick={(e) => createPost()} className="btn btn-warning">Create new post</button>
            </div>
        </div>
    )
}