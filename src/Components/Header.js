import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <nav className="header-nav">
                <Link to="/SimpleEditor" className="header-title">Chaeban Editor</Link>
            </nav>
        </header>
    )
}

export default Header;