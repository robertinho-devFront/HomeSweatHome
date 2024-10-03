import React from 'react';

const GalleryImage = ({ src, alt }) => {
    return (
        <img src={src} alt={alt} className="gallery_image" />
    );
};

export default GalleryImage;
