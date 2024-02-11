import React from "react";
import { Link } from "react-router-dom";
import "./ColorList.css";

function ColorList({colors}){
    const colorLinks = Object.keys(colors).map(colorName => (
        <li key={colorName}>
            <Link to={`/colors/${colorName}`}>{colorName}</Link>
        </li>
    ));

    return (
        <div className="list">
            <h1>Welcome to the color factory!</h1>
            <h2>
                <Link to="/colors/new">Add a color!</Link>
            </h2>
            <div>
                <p>Pick a color here!</p>
                <ul>{colorLinks}</ul>
            </div>
        </div>
    )
}

export default ColorList;