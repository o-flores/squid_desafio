import React, { useState, useEffect } from 'react';
import MockPosts from './post';

function PostsContainer() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // async function fetchPosts() {
    //   try {
    //     const response = await fetch('https://us-central1-squid-apis.cloudfunctions.net/test-front-basic', { method:  'GET', redirect: 'follow' });
    //     console.log(response);
    //     const data = await response.json();
    //     setPosts(data);
    //   } catch (e) {
    //     // console.log(e);
    //   }
    // }
    // fetchPosts();
    setPosts(MockPosts)
  }, []);

  return (
    <div>hello world</div>
  );
}

export default PostsContainer;
