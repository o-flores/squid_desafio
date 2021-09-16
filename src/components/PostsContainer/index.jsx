import React, { useState, useEffect } from 'react';
import PostCard from '../PostCard';
import './style.css';

function PostsContainer() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
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
    setLoading(false);
  }, []);

  console.log(posts[9]);
  return (
    <div>
      {!loading && error && 'Houve um erro, por favor tente novamente mais tarde'}
      {!error && loading && 'loading'}
      <div className="post-container">
        {posts.length > 0 && posts.map(({
          uid, legenda, imagens, usuario: { username }, comentarios, upvotes, criadoEm,
        }) => (
          <PostCard
            key={uid}
            legenda={legenda}
            imagens={imagens}
            username={username}
            comentarios={comentarios}
            upvotes={upvotes}
            criadoEm={criadoEm}
          />
        ))}
      </div>
    </div>
  );
}

export default PostsContainer;
