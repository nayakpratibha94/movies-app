import React from 'react';
import './Card.css';

function Card({ imgUrl, title, id}) {
  const placeholderImage = "placeholder_for_missing_posters.png";
  return (
    <div key={id} className="card">
        <img src={imgUrl ? imgUrl : placeholderImage} alt="title" className="card-img" onError={({ currentTarget}) => {
            currentTarget.onerror = null;
            currentTarget.src = placeholderImage
        }} />
        <p className='card-title'>{title}</p>
    </div>
  );
}

export default Card;