import React from 'react';
import Card from "./Card";
import logements from './logements.json'; // Assure-toi que le chemin est correct

const ContainerCards = () => {
    return (
        <div className='container_cards'>
            {logements.map((logement) => (
                <Card
                    key={logement.id}
                    id={logement.id} // Passe l'ID au composant Card
                    title={logement.title}
                    cover={logement.cover}
                />
            ))}
        </div>
    );
};

export default ContainerCards;
