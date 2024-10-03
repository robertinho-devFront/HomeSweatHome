

import React, { useState } from 'react';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div
        className="collapse_header"
        onClick={toggleCollapse}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleCollapse()}
        tabIndex={0}
        role="button"
        aria-expanded={isOpen}
      >
        <p>{title}</p>
        <button className={`collapse_btn ${isOpen ? 'open' : ''}`} aria-expanded={isOpen}>
          <svg width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.2897 0.789661C11.9591 0.120242 13.0462 0.120242 13.7157 0.789661L23.9979 11.0719C24.6674 11.7414 24.6674 12.8285 23.9979 13.4979C23.3285 14.1673 22.2414 14.1673 21.572 13.4979L12.5 4.42595L3.42804 13.4926C2.75862 14.162 1.67148 14.162 1.00206 13.4926C0.332646 12.8231 0.332646 11.736 1.00206 11.0666L11.2843 0.784306L11.2897 0.789661Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className={`collapse_content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;

