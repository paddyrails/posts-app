import React, { Component } from 'react';
import axios from 'axios';

const FullPost = (props) => {
    
    const fullPost = props.post !== null ? 
                    <div>                
                        <h3>{props.post.title}</h3>
                        <p>{props.post.body}</p>
                        <p>{props.post.userId}</p>
                    </div>
                    :
                    <div></div>
    return(
        fullPost
        )
}

export default FullPost;