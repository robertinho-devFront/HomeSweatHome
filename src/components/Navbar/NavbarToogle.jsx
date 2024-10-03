import React, { useState } from 'react';
import NavbarHeader from './NavbarHeader';
import NavbarContent from './NavbarContent';

const NavbarToogle = ({ title, description }) => { 
    const [isOpen, setIsOpen] = useState(false); // Gérer l'état ouvert/fermé

    const toggleNavbar = () => {
        setIsOpen(!isOpen); // Inverser l'état au clic
    };

    return (
        <nav className='navbar_description'>
            <NavbarHeader title={title} isOpen={isOpen} onToggle={toggleNavbar} />
            <NavbarContent isOpen={isOpen} description={description} />
        </nav>
    );
};

export default NavbarToogle;
