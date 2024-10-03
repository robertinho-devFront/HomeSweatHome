import React from 'react';

const GalleryNavigation = ({ onPrev, onNext }) => {
    return (
        <div className="gallery_navigation">
            <button className="gallery_prev" onClick={onPrev}>
                &#9664; 
            </button>
            <button className="gallery_next" onClick={onNext}>
                &#9654; 
            </button>
        </div>
    );
};

export default GalleryNavigation;
