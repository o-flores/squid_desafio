import React from 'react';
import PropTypes from 'prop-types';

function PostCard({ imagens, legenda }) {
  return (
    <img
      src={imagens.thumbnail.url}
      alt={legenda}
      style={{ width: '150px', height: '150px' }}
    />
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
}.isRequired;

export default PostCard;
