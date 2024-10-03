import React from 'react';

const NavbarContent = ({ isOpen, description }) => {
    return (
        <div className={`navbar_collapse ${isOpen ? 'open' : ''}`}>
            <p className='navbar_collapse_description'>
                {description}
            </p>
        </div>
    );
};

export default NavbarContent;