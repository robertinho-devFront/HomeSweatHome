

import React from 'react';
import NavbarToogle from './NavbarToogle';

const ContainerDescription = () => {
    return (
        <div className='container_description'>
            <NavbarToogle 
            title="Fiabilité"
            description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes" />
            <NavbarToogle 
            title="Respect"
            description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinnage entraînera une exclusion de notre plateforme" />
            <NavbarToogle 
            title="Service"
            description="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance" />
            <NavbarToogle title="Sécurité"
            description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établie par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de verifier que les standart sont bien respectés. Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes." />
        </div>
    );
};

export default ContainerDescription;