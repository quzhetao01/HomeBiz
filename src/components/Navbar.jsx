import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarCSS from "../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <nav>
            <div className={NavbarCSS.logo}>
                <NavLink to='/'>
                    <img src='http://localhost:3000/logo.png' alt="HomeBiZ logo" />
                </NavLink>
            </div>
            <div className={NavbarCSS.links}>
                <NavLink to='/'>View My Business</NavLink>
                <NavLink to='/login'>Logout</NavLink>
            </div>
        </nav>
      );
}

export default Navbar;