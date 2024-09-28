import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRemovetoCart } from "../../features/CartSlice";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const cartdata = useSelector(c => c.cart.value); // Get cart data from Redux store
  const dispatch = useDispatch();

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://dummyjson.com/products');
      const d = await response.json();
      setData(d?.products);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const isInCart = (item) => {
    // Check if the item is already in the cart
    return cartdata.some(cartItem => cartItem.id === item.id);
  };

  return (
    <div className="container mx-auto p-6">
      {loading ? (
        <div className="text-center text-xl font-semibold">Loading Please Wait...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data && data.map((item) => (
            <div key={item.id} className="border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h1 className="text-xl font-bold">{item.title}</h1>
                <p className="text-gray-600">{item.description}</p>
                <h2 className="text-lg font-semibold mt-2">${item.price}</h2>
                <button 
                  onClick={() => dispatch(addRemovetoCart(item))}
                  className={`mt-4 w-full text-white font-semibold py-2 rounded transition 
                    ${isInCart(item) ? 'bg-red-500 hover:bg-red-400' : 'bg-green-600 hover:bg-green-500'}`}>
                  {isInCart(item) ? 'REMOVE FROM CART' : 'ADD TO CART'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
