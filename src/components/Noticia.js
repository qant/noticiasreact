import React from "react";

const Noticia = ({ noticia }) => {
  const { urlToImage, url, description, title } = noticia;

  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          <img src={urlToImage} alt={title} />
        </div>
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

export default Noticia;
