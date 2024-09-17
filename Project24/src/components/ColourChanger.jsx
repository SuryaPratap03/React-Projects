import React, { useState } from "react";

const ColourChanger = () => {
  const [colortype, setColortype] = useState("Hex Colour");
  const [color, setColor] = useState("");

  const GenerateRandomColor = () => {
    if (colortype === "Hex Colour") {
      GenerateHexColor();
    } else {
      GenerateRGBColor();
    }
  };

  const GenerateHexColor = () => {
    setColortype("Hex Colour");
    const arr = "0123456789ABCDEF";
    let a = "#";
    for (let i = 1; i <= 6; i++) {
      a += arr[Math.floor(Math.random() * 16)];
    }
    setColor(a);
    document.body.style.backgroundColor = a; // Set the background color here
  };

  const GenerateRGBColor = () => {
    setColortype("RGB Colour");
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    let d = Math.floor(Math.random() * 256);
    let a = `rgb(${b}, ${c}, ${d})`;
    setColor(a);
    document.body.style.backgroundColor = a; // Set the background color here
  };

  return (
    <div className="container mx-auto mt-10 text-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          {colortype} Generator
        </h1>

        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={GenerateHexColor}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            GENERATE HEX COLOR
          </button>

          <button
            onClick={GenerateRGBColor}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            GENERATE RGB COLOR
          </button>

          <button
            onClick={GenerateRandomColor}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            GENERATE RANDOM COLOR
          </button>
        </div>

        <h2 className="text-xl font-semibold text-gray-700">Current Color:</h2>
        <div
          className="text-3xl font-bold mt-4"
          style={{ color: color === "" ? "black" : color }}
        >
          {color ? color : "No color selected"}
        </div>
      </div>
    </div>
  );
};

export default ColourChanger;
