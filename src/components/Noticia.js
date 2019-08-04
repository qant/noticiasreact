import React from "react";
import PropTypes from "prop-types";

const Noticia = ({ noticia }) => {
  const { urlToImage, url, description, title, source } = noticia;

  const image = urlToImage ? (
    <div className="card-image">
      <img src={urlToImage} alt={title} />
      <span className="card-title">{source.name}</span>
    </div>
  ) : null;

  return (
    <div className="col s12 m6 l4">
      <div className="card">
        {image}
        <div className="card-content">
          <h3>{title}</h3>
          {description}
        </div>
        <div className="card-action">
          <a
            href={url}
            target="_blank"
            className="btn"
            rel="noopener noreferrer"
          >
            Leer mas
          </a>
        </div>
      </div>
    </div>
  );
};

Noticia.propTypes = {
  noticia: PropTypes.object.isRequired
};

export default Noticia;
