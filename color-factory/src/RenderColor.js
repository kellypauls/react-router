import React from "react";
import { useParams } from "react-router-dom";
import Color from "./Color";

function RenderCurrentColor(colors) {
    const { color } = useParams();
    const hex = colors.colors[color];
    return <Color {...colors} hex={hex} color={color} />;
  };

export default RenderCurrentColor;