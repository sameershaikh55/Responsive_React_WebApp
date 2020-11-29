import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
            <div className="header">
                <h2 className="brand_name">SaymTechnical</h2>
                <ul className="navbar">
                    <li><NavLink exact className="navbarrr" activeClassName="main_link" to="/" > Home </NavLink></li>
                    <li><NavLink exact className="navbarrr" activeClassName="main_link" to="/service" > Service </NavLink></li>
                    <li><NavLink exact className="navbarrr" activeClassName="main_link" to="/about" > About </NavLink></li>
                    <li><NavLink exact className="navbarrr" activeClassName="main_link" to="/contact" > Contact </NavLink></li>
                </ul>
            </div>  
    )
}

export default Navbar;
