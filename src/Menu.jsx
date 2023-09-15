import React from "react";
import { NavLink } from "react-router-dom";
import './App.css';

const Menu = ()=>{
    return(
        <div className="menu">
            <NavLink exact activeClassName="active" to="/">HOME</NavLink>
            <NavLink exact activeClassName="active" to="/user">USER IN</NavLink>
            <NavLink exact activeClassName="active" to="/search">SEARCH</NavLink>
            <NavLink exact activeClassName="active" to="/support">SUPPORT</NavLink>
            <NavLink exact activeClassName="active" to="/contact">CONTACT</NavLink>
            <NavLink exact activeClassName="active" to="/service">SERVICE</NavLink>
        </div>
    )
}
export default Menu;