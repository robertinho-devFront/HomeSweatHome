import React from 'react';
import './rating.scss';
import starActive from './images/star-active 1.svg';
import starInactive from './images/star-inactive 1.svg';

const Rating = ({ rating }) => {
    const totalStars = 5; // Nombre total d'étoiles

    return (
        <div className="rating">
            {[...Array(totalStars)].map((_, index) => (
                <img
                    key={index}
                    src={index < rating ? starActive : starInactive}
                    alt={index < rating ? 'Active star' : 'Inactive star'}
                    className="star"
                />
            ))}
        </div>
    );
};

export default Rating;
