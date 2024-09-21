import React, { useState } from 'react';
import { FaHome, FaUser, FaCog } from 'react-icons/fa'; // Example icons

const Tabs = ({ tabarray }) => {
    const [currentSelected, setCurrentSelected] = useState(0);

    const handleClick = (getCurrIndex) => {
        setCurrentSelected(getCurrIndex);
    };

    return (
        <div className="max-w-md mx-auto border rounded-lg shadow-lg overflow-hidden">
            <div className="flex border-b bg-gray-100">
                {tabarray && tabarray.length > 0 && tabarray.map((tabitem, index) => (
                    <div 
                        key={index}
                        onClick={() => handleClick(index)} 
                        className={`flex-1 py-4 cursor-pointer transition-colors duration-300 text-lg font-medium ${currentSelected === index ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    >
                        <div className="flex items-center justify-center">
                            {tabitem.icon && <span className="mr-2">{tabitem.icon}</span>}
                            {tabitem.label}
                        </div>
                    </div>
                ))}
            </div>
            <div className="p-6 bg-white">
                <h1 className="text-2xl font-bold mb-4">
                    {tabarray[currentSelected] && tabarray[currentSelected].content}
                </h1>
                <p className="text-gray-600 leading-relaxed">
                    This is some additional content related to the selected tab. It provides more context and information to the user.
                </p>
            </div>
        </div>
    );
};

export default Tabs;