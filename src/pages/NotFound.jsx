import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (

      <div className='fourzerofour'>
        <h1 className='title_404'>404</h1>
        <p className='texte_404'>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className='active'>Retourner sur la page d’accueil</Link>
      </div>

  );
};

export default NotFound;
