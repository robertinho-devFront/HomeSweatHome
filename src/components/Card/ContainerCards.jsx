

import React from 'react';
import CardList from './CardList'; 
import logements from './logements.json';  

import './card.scss'

const ContainerCards = () => {
    return (
        <div className='container_cards'>
            <CardList logements={logements} />  
        </div>
    );
};

export default ContainerCards;
