import React from 'react';

const GalleryCounter = ({ currentIndex, total }) => {
    return (
        <div className="gallery_counter">
            {currentIndex + 1}/{total}
        </div>
    );
};

export default GalleryCounter;
