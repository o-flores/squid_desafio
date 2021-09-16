import React, { useState, useEffect } from 'react';
import PostCard from '../PostCard';

function PostsContainer() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('https://us-central1-squid-apis.cloudfunctions.net/test-front-basic');
        const data = await response.json();
        setPosts(data);
        setError(false);
      } catch (e) {
        console.log(e);
        setError(true);
      }
    }
    fetchPosts();
  }, []);
  console.log(posts[0]);
  return (
    <div>
      {error && 'Houve um erro, por favor tente novamente mais tarde'}
      {posts.length > 0 && posts.map(({ uid, legenda, imagens }) => (
        <PostCard
          key={uid}
          legenda={legenda}
          imagens={imagens}
        />
      ))}
    </div>
  );
}

export default PostsContainer;
