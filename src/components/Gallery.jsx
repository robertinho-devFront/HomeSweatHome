import React, { useState } from 'react';

const Gallery = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0); // Suivi de l'image actuelle

    // Fonction pour passer à l'image suivante
    const nextImage = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Fonction pour revenir à l'image précédente
    const prevImage = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    // Vérifier s'il y a plusieurs images
    const showNavigation = pictures.length > 1;

    return (
        <div className="gallery">
            <img src={pictures[currentIndex]} alt={`Image ${currentIndex + 1}`} className="gallery_image" />
            
            {showNavigation && (
                <>
                    <button className="gallery_prev" onClick={prevImage}>
                        &#9664; {/* Flèche gauche */}
                    </button>
                    <button className="gallery_next" onClick={nextImage}>
                        &#9654; {/* Flèche droite */}
                    </button>
                    <div className="gallery_counter">
                        {currentIndex + 1}/{pictures.length}
                    </div>
                </>
            )}
        </div>
    );
};

export default Gallery;
