import React from 'react';
import {Link} from "react-router-dom";
import '../App.css';

function Nav() {
    const nabvStyle={
        color:"white"
    };


  return (
    <nav>
        <Link to="/" style={nabvStyle}>
            <h3>Logo</h3>
        </Link>
        <ul className="nav-links">
            <Link to="/about" style={nabvStyle}>
                <li>About</li>
            </Link>
            <Link to="/shop" style={nabvStyle}>
                <li>Shop</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
