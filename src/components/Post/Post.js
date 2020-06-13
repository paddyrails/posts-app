import React, { Component } from 'react';
import './Post.css';

const Post = (props) => {
    
        return(
            <div className="Post" onClick={props.clicked}>
                <div >{props.title}</div>
                <div>{props.author}</div>
            </div>
        )
    
}

export default Post;