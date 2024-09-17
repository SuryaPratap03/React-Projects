import React, { useState, useEffect } from "react";

const ColourChanger = () => {
  const [colortype, setColortype] = useState("Hex Colour");
  const [color, setColor] = useState("");

  useEffect(() => {
    // Apply the color to the entire page background
    document.body.style.backgroundColor = color;
  }, [color]); // Update when color changes

  const GenerateRandomColor = () => {
    if (colortype === 'Hex Colour') {
      GenerateHexColor();
    } else {
      GenerateRGBColor();
    }
  };

  const GenerateHexColor = () => {
    setColortype('Hex Colour');
    const arr = '0123456789ABCDEF';
    let a = '#';
    for (let i = 1; i <= 6; i++) {
      a += arr[Math.floor(Math.random() * 16)];
    }
    setColor(a);
  };

  const GenerateRGBColor = () => {
    setColortype('RGB Colour');
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    let d = Math.floor(Math.random() * 256);
    let a = `rgb(${b}, ${c}, ${d})`;
    setColor(a);
  };

  return (
    <div className="container">
      <button onClick={() => GenerateHexColor()}>GENERATE HEX COLOR</button>
      <button onClick={() => GenerateRGBColor()}>GENERATE RGB COLOR</button>
      <button onClick={() => GenerateRandomColor()}>GENERATE RANDOM COLOR</button>
      <h1>{colortype}</h1>
      <br />
      <h1>{color}</h1>
    </div>
  );
};

export default ColourChanger;
