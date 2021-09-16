import React from 'react';

function PostCard({imagens, legenda}) {
  return (
    <img
      src={imagens.thumbnail.url}
      alt={legenda}
      style={{width: '150px', height: '150px'}}
    />
  );
}

export default PostCard;
