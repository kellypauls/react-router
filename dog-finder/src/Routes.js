import React from "react";
import { 
    Routes,
    Route,
    Navigate
  } from 'react-router-dom';
import DogList from "./DogList";
import FilterDog from "./FilterDog";

function DogRoutes({dogs}) {
    return (
        <Routes>
            <Route exact path="/dogs" element={<DogList name={dogs.name}/>}/>
            <Route path="/dogs/:name" element={<FilterDog dogs={dogs} />}/>
            <Route path="/" element={<Navigate to="/dogs" />}/>
        </Routes>
    )
}

export default DogRoutes;