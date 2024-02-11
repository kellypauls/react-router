import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import NewColorForm from "./NewColorForm";
import ColorList from "./ColorList"
import RenderCurrentColor from "./RenderColor";

function ColorRoutes() {

    const initialColors = JSON.parse(localStorage.getItem("colors")) || {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF"
    };
    const [colors, updateColors] = useState(initialColors);

    useEffect(
        () => localStorage.setItem("colors", JSON.stringify(colors)),
        [colors]
    );
    function handleAdd(newColor) {
        updateColors(prevColors => ({ ...prevColors, ...newColor}));
    };


    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/colors" element={<ColorList colors={colors}/>} />
                <Route exact path ="/colors/new" element={<NewColorForm addColor={handleAdd}/>} />
                <Route path="/colors/:color" element={<RenderCurrentColor colors={colors}/>} />
                <Route path="/" element={<Navigate to="/colors"/>}/>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    )

}

export default ColorRoutes;