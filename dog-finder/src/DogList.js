import React from "react";
import { Link } from "react-router-dom";

function DogList({dogs}) {
    return (
        <div className="DogList">
            <h1>
                Welcome! Take a look at our dogs. Click on them for more information!
            </h1>
            <div>
                {dogs?.map((d) => (
                    <div className="dog" key={d.name}>
                        <img src={d.src} alt={d.name} />
                        <h2>
                            <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DogList