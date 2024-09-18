import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const ImageSlider = () => {
  const [currimg, setCurrimg] = useState(0);
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      let response = await fetch(`https://picsum.photos/v2/list?page=1&limit=10`);
      let data = await response.json();
      setImages(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="relative w-80 h-60 overflow-hidden flex items-center justify-center">
      <FaArrowLeft 
        className="absolute left-4 h-10 w-10 bg-black text-white rounded-full cursor-pointer"
        onClick={() => setCurrimg(currimg === 0 ? images.length - 1 : currimg - 1)}
      />
      {images.length > 0 && (
        <img
          src={images[currimg].download_url}
          alt="slider"
          className="w-full h-full object-cover"
        />
      )}
      <FaArrowRight 
        className="absolute right-4 h-10 w-10 bg-black text-white rounded-full cursor-pointer"
        onClick={() => setCurrimg(currimg === images.length - 1 ? 0 : currimg + 1)}
      />
      <div className="absolute bottom-4 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={()=>setCurrimg(index)}
            className={`h-4 w-4 rounded-full ${index === currimg ? 'bg-white' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
