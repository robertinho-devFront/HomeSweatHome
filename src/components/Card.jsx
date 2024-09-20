import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, cover, id }) => {
    return (
        <Link to={`/logement/${id}`} className="card">
            <img src={cover} alt={title} className="card_image" />
            <h3>{title}</h3>
        </Link>
    );
};

export default Card;
