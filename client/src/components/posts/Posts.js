import React, { Component } from 'react';
import axios from 'axios';
import PostList from './PostList';
import PostForm from './PostForm';
class Posts extends Component {
  state = { posts: [] }
  componentDidMount() {
    // grab all the posts from db
    axios.get('/api/posts')
      .then( res => {
        // set the posts to state
        this.setState({ posts: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }
  addPost = (post) => {
    // add the post to the db
    axios.post('/api/posts', { post } )
    // add the post to the state
      .then(res => {
        const { posts } = this.state 
        this.setState({ posts: [...posts, res.data] })
      })
      .catch( err => {
        console.log(err)
      })
  }
  updatePost = (id, post) => {
    // update the post in the db
    // update the post in state
  }
  deletePost = (id) => {
    // delete the from db
    // delete from the state
  }
  render() {
    const { posts } = this.state
    return(
      <>
        <h1>Posts</h1>
        <PostForm addPost={this.addPost} />
        <PostList posts={posts} />
      </>
    )
  }
}
export default Posts;