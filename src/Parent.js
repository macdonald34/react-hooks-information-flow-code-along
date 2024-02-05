import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor] = useState(getRandomColor());

  function onChangeColor(newChildColor) {
    setChildColor(newChildColor)
    setColor(getRandomColor())
  } 

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={onChangeColor} childColor={childColor} />
      <Child onChangeColor={onChangeColor} childColor={childColor} />
    </div>
  );
}

export default Parent;