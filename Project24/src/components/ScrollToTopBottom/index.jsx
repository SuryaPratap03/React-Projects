import { useEffect, useState } from "react";

export const ScrollToTopBottom = (url) => {
  const [data, setData] = useState([]);
  const scrolltobottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const fetchAPI = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const d = await response.json();
    setData(d);
    // console.log(d);
    console.log( document.documentElement.scrollHeight);
  };

  useEffect(() => {
    fetchAPI();
  }, [url]);
  return (
    <div>
        <button onClick={()=>scrolltobottom()}>SCROLL TO BOTTOM</button>
      {data && data.products?.length > 0 && (
        <div>
          {data.products.map((product) => (
            <>
            <h1 key={product.id}>{product.title}</h1>
            <h1 >{product.title}</h1>
            <h1 >{product.title}</h1>
            <h1 >{product.title}</h1>
            </>
          ))}
        </div>
      )}
      <button onClick={()=>scrollToTop()}>SCROLL TO Top</button>
    </div>
  );
};
