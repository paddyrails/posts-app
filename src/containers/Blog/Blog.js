import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedPost: null
    }

    componentDidMount () {
        axios.get('/posts')
            .then( (response) => this.setState({posts:response.data}))
    }

    selectPostHandler = (id) => {
        this.setState({selectedPost:this.state.posts[id]})        
    }

    render(){

        const posts = this.state.posts.slice(0,5).map(post => {
            return <Post 
                        key={post.id} 
                        title={post.title} 
                        author={post.userId}
                        clicked={() => this.selectPostHandler(post.id)}
                        />
        })


        return(
            <div>
                <div className="Posts">
                    {posts}                    
                </div>
                <div>
                    <FullPost post={this.state.selectedPost}/>
                </div>
                <section >
                    <NewPost/>
                </section>
            </div>
        );
    }
}

export default Blog;