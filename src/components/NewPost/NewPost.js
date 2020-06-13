import React, { Component } from 'react';
import Axios from 'axios';

class NewPost extends Component {

    state = {
        title: '',
        content: '',
        author: 'Max'
    }


    postDataHandler = () => {
        const newPost = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author
        }

        Axios.post('/posts', newPost)
            .then(response => {
                console.log(response)
            })
    }

    render(){
        return(
            <div>
            <h3>Add a Post</h3>
            <p>Title : <input type="" value={this.state.title} onChange={(event)=>{this.setState({title:event.target.value})}} ></input></p>
            <p>Content : <textarea  value={this.state.content} onChange={(event)=>{this.setState({content:event.target.value})}} /></p>
            <p><select value={this.state.author} onChange={(event)=>{this.setState({author:event.target.value})}} >
                <option value="Max">Max</option>
                <option value="Manu">Manu</option>
            </select></p>
            <button onClick={this.postDataHandler}>Post!</button>
            </div>
        );
    }
}

export default NewPost;