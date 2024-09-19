import React, { useState } from "react";

const Folder = ({ files }) => {
  const [expand, setExpand] = useState(false);

  return (
    <div className="ml-0">
      {/* Folder Name and Button */}
      <div
        className="flex items-center bg-gray-700 text-xl text-white p-3 rounded-lg cursor-pointer 
                   hover:bg-gray-600 transition-all duration-200"
      >
        <span>
          {/* Toggle Button */}
          {files.isFolder && (
            <button
              onClick={() => setExpand(!expand)}
              className={`bg-blue-800 rounded-full h-8 w-8 flex items-center justify-center text-white 
                         transition-transform duration-300 transform 
                         ${expand ? 'rotate-90' : 'rotate-0'}`}
            >
              {">"}
            </button>
          )}
        </span>

        {/* Folder or File Name */}
        <span className="ml-3 font-semibold">{files.name}</span>
      </div>

      {/* Folder Contents */}
      {files.isFolder && expand && (
        <div className="ml-8 mt-2 space-y-1">
          {files.children.map((file, index) => (
            <Folder key={index} files={file} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
