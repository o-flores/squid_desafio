import React, { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';
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
      setLoading(false);
    }
    fetchPosts();
  }, []);

  return (
    <div>
      {!loading && error && (
        <p className="error-message">
          Houve um erro, por favor tente novamente mais tarde
        </p>
      )}
      {!error && loading && (
        <span className="loading-message">
          <FaSpinner className="spinner" />
          Carregando...
        </span>
      )}
      <div className="post-container">
        {posts.length > 0 && posts.map(({
          uid, legenda, imagens, usuario: { username }, comentarios, upvotes, criadoEm, link,
        }) => (
          <PostCard
            key={uid}
            legenda={legenda}
            imagens={imagens}
            username={username}
            comentarios={comentarios}
            upvotes={upvotes}
            criadoEm={criadoEm}
            link={link}
          />
        ))}
      </div>
    </div>
  );
}

export default PostsContainer;
