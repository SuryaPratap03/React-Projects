import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addRemovetoCart } from '../../features/CartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const cartArray = useSelector((state) => state.cart.value);

    // Calculate the total value of the items in the cart
    const total = cartArray.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Your Cart</h1>

            {cartArray && cartArray.length > 0 ? (
                <>
                    {/* Cart items grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cartArray.map(item => (
                            <div key={item.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
                                <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h1 className="text-2xl font-semibold text-gray-900">{item.title}</h1>
                                    <p className="text-gray-600 my-2">{item.description}</p>
                                    <h3 className="text-xl font-bold text-gray-800 mt-4">${item.price}</h3>
                                    <button 
                                        onClick={() => dispatch(addRemovetoCart(item))}
                                        className="mt-4 w-full bg-red-600 text-white py-2 rounded-md font-semibold hover:bg-red-500 transition duration-300"
                                    >
                                        Remove From Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Total Price and Checkout Section */}
                    <div className="text-center mt-12">
                        <h2 className="text-3xl font-bold text-gray-800">Total: <span className="text-green-600">${total.toFixed(2)}</span></h2>
                        <button 
                            className="mt-8 bg-green-600 text-white py-3 px-8 rounded-lg text-xl font-semibold hover:bg-green-500 transition duration-300"
                        >
                            Checkout
                        </button>
                    </div>
                </>
            ) : (
                <div className="text-center text-xl font-semibold text-gray-700 mt-20">
                    Your cart is empty.
                </div>
            )}
        </div>
    );
};

export default Cart;
