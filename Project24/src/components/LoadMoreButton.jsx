import React, { useEffect, useState } from "react";

const LoadMoreButton = () => {
  const [images, setImages] = useState([]);
  const [limit, setLimit] = useState(20);

  const fetchImages = async () => {
    try {
      let response = await fetch(
        `https://picsum.photos/v2/list?page=1&limit=${limit}`
      );
      let data = await response.json();
      setImages(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchImages();
  }, [limit]);
  return (
    <div className="">
      {images && images.length > 0 && (
        <div className="gap-10 flex-wrap flex items-center justify-center min-h-96 min-w-96 ">
          {images.map((image, index) => (
            <img
              key={image.id}
              src={image.download_url}
              className="h-64 w-64 border-8 border-white-500 "
            ></img>
          ))}
        </div>
      )}
      { images.length>0 && images.length<100 
      && <div>
          <button
            className=" m-10 h-16 w-24 bg-blue-800 text-white"
            onClick={() => setLimit(limit + 20)}
          >
            LOAD MORE
          </button>
        </div>
      }
    </div>
  );
};

export default LoadMoreButton;
