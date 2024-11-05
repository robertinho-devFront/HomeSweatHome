import React from 'react';
import arrowBack from './images/arrow_back.png';
import arrowForward from './images/arrow_forward.png';

const GalleryNavigation = ({ onPrev, onNext }) => {
    return (
        <div className="gallery_navigation">
            <button className="gallery_prev" onClick={onPrev}>
                <img src={arrowBack} className="arrow"alt="Précédent" />
            </button>
            <button className="gallery_next" onClick={onNext}>
                <img src={arrowForward} className="arrow" alt="Suivant" />
            </button>
        </div>
    );
};

export default GalleryNavigation;
