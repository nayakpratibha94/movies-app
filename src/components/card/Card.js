import React from 'react';
import './Card.css';

function Card({ imgUrl, title, id}) {
  return (
    <div key={id} className="card">
        <img src={imgUrl} alt="title" className="card-img" onError={({ currentTarget}) => {
            currentTarget.onerror = null;
            currentTarget.src = "placeholder_for_missing_posters.png"
        }} />
        <p className='card-title'>{title}</p>
    </div>
  );
}

export default Card;