import React from "react";
import { NavLink } from "react-router-dom";
import './App.css';

const Menu = ()=>{
    return(
        <div className="menu">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/user">USER IN</NavLink>
            <NavLink to="/support">SUPPORT</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
            <NavLink to="/service">SERVICE</NavLink>
        </div>
    )
}
export default Menu;