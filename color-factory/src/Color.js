import React from "react";
import { Link } from "react-router-dom";
import "./Color.css"



function Color({color, hex}) { 

    return (
        <div className="Color" style={{ backgroundColor: hex}}>
            <div>
            <p>This is {color}.</p>
            <p>How beautiful!</p>
            <p>
                <Link to="/">Return to Color Selector</Link>
            </p>
            </div>
        </div>
    );
}

export default Color;