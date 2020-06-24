import React from 'react';
import Post from './Post';

const PostList = ({ posts }) => (
  <>
    { posts.map( p => 
      <Post key={p.id}{...p}/>
    ) 
    }
  </>
)

export default PostList;