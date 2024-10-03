import React, { useState } from 'react';
import GalleryImage from './GalleryImage';  // Import du sous-composant GalleryImage
import GalleryNavigation from './GalleryNavigation';  // Import du sous-composant GalleryNavigation
import GalleryCounter from './GalleryCounter';  // Import du sous-composant GalleryCounter

const Gallery = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);  // Suivi de l'image actuelle

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
            <GalleryImage
                src={pictures[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
            />
            
            {showNavigation && (
                <>
                    <GalleryNavigation
                        onPrev={prevImage}
                        onNext={nextImage}
                    />
                    <GalleryCounter
                        currentIndex={currentIndex}
                        total={pictures.length}
                    />
                </>
            )}
        </div>
    );
};

export default Gallery;
