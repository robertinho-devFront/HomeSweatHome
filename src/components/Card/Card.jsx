import React from 'react';
import { Link } from 'react-router-dom';
import './card.scss';

const Card = ({ cover, id }) => {
    return (
        <Link 
            to={`/logement/${id}`} 
            className="card" 
            style={{ backgroundImage: `url(${cover})` }}  
        >
          
        </Link>
    );
};

export default Card;
