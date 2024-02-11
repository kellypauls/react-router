import React from "react";
import { NavLink } from "react-router-dom";


function Nav({dogs}) {
    const links = dogs.map(d => (
        <NavLink key={d.name} to={`/dogs/${d.name.toLowerCase()}`}>
            {d.name}
        </NavLink>
    ))
    return (
            <nav>
                <NavLink exact to="/dogs">Home</NavLink>
                {links}
            </nav>
    )
}

export default Nav;