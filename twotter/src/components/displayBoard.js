import React from 'react';

export const DisplayBoard = ({getAllPosts}) => {
    
    return(
        <div className="display-board">
            <div className="btn">
                <button type="button" onClick={(e) => getAllPosts()} className="btn btn-warning">Get all posts</button>
            </div>
        </div>
    )
}