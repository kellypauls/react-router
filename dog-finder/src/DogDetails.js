import React from "react";
import { Link, Navigate } from "react-router-dom"

function DogDetails({dog}) {

    if (!dog) return <Navigate to="/dogs"/>
    
    return (
        <div className="dog-details">
            <div>
                <h1>{dog.name}</h1>
                <h2>{dog.age}</h2>
                <img src={dog.src} alt={dog.name}></img>
                <ul>{dog.facts.map((fact, i) => (
                    <li key={i}>{fact}</li>
                ))}
                </ul>
            <Link to="/dogs">Back to Dogs</Link>
            </div>
        </div>
    )
}

export default DogDetails