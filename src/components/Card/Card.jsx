import React from 'react';
import { Link } from 'react-router-dom';
import './card.scss';

const Card = ({ cover, title, id }) => {
    return (
        <Link 
            to={`/logement/${id}`} 
            className="card" 
            style={{ backgroundImage: `url(${cover})` }}  
        >
            <h3>{title}</h3> 
        </Link>
    );
};

export default Card;
