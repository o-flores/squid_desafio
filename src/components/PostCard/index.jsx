import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function PostCard({
  imagens, legenda, username, comentarios, upvotes, criadoEm, link,
}) {
  const ano = criadoEm.slice(0, 4);
  const mes = criadoEm.slice(5, 7);
  const dia = criadoEm.slice(8, 10);
  const hora = criadoEm.slice(11, 16);
  const createdAt = `${dia}/${mes}/${ano} ${hora}`;
  return (
    <div className="post-card">
      <a href={link} target="_blank" rel="noreferrer">
        <img
          src={imagens.thumbnail.url}
          alt={legenda}
        />
        <div className="post-infos">
          <p>{`@${username}`}</p>
          <p>{upvotes}</p>
          <p>{comentarios}</p>
          <p>{createdAt}</p>
        </div>
      </a>
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
  link: PropTypes.string,
}.isRequired;

export default PostCard;
