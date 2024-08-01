import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const location = useLocation();
    return (
        <header className="header">
            <nav>
                <ul className="header-container">
                    <li className="header-item">
                        <Link to="/" className={location.pathname === '/' ? 'poppins-bold' : ''}>Home</Link>
                    </li>
                    <li className="header-item">
                        <Link to="/about" className={location.pathname === '/about' ? 'poppins-bold' : ''}>About</Link>
                    </li>
                    <li className="header-item">
                        <Link to="/projects" className={location.pathname === '/projects' ? 'poppins-bold' : ''}>Projects</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
