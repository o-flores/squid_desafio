import React from 'react';
import PropTypes from 'prop-types';

function PostCard({
  imagens, legenda, username, comentarios, upvotes, criadoEm,
}) {
  return (
    <div>
      <img
        src={imagens.thumbnail.url}
        alt={legenda}
        style={{ width: '150px', height: '150px' }}
      />
      <div>
        <span>{`@${username}`}</span>
        <span>{upvotes}</span>
        <span>{comentarios}</span>
        <span>{criadoEm}</span>
      </div>
    </div>
  );
}

const imagesType = PropTypes.shape({
  height: PropTypes.number,
  width: PropTypes.number,
  url: PropTypes.string,
});

PostCard.propTypes = {
  imagens: PropTypes.shape({
    resolucaoMedia: imagesType,
    resolucaoPadrao: imagesType,
    thumbnail: imagesType,
  }),
  legenda: PropTypes.string,
  username: PropTypes.string,
  comentarios: PropTypes.string,
  upvotes: PropTypes.string,
  criadoEm: PropTypes.string,
}.isRequired;

export default PostCard;
