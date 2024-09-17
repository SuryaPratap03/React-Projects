import React, { useState } from "react";
import data from "../data/data";

const Accodian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);

  const handleSingleSelected = (incomingId) => {
    setSelected(selected === incomingId ? null : incomingId);
  };

  const handleMultipleSelected = (incomingId) => {
    const idx = multipleSelected.indexOf(incomingId);
    if (idx === -1) {
      setMultipleSelected([...multipleSelected, incomingId]);
    } else {
      setMultipleSelected(
        multipleSelected.filter((id) => id !== incomingId)
      );
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="container">
        <button
          onClick={() => {setEnableMultipleSelection(!enableMultipleSelection)
            setMultipleSelected([])
          }}
          className="mb-4 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
        >
          {enableMultipleSelection ? 'Disable' : 'Enable'} Multiple Selection
        </button>

        <div className="accordion border border-gray-200 rounded-lg shadow-md divide-y">
          {data.length > 0 &&
            data.map((dataitem) => (
              <div
                key={dataitem.id}
                onClick={
                  enableMultipleSelection
                    ? () => handleMultipleSelected(dataitem.id)
                    : () => handleSingleSelected(dataitem.id)
                }
                className="accordion-item cursor-pointer p-4 hover:bg-gray-100"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">{dataitem.question}</h2>
                  <span className="text-xl">
                    {enableMultipleSelection
                      ? multipleSelected.includes(dataitem.id)
                        ? "-"
                        : "+"
                      : selected === dataitem.id
                      ? "-"
                      : "+"}
                  </span>
                </div>

                {/* For multiple selection */}
                {enableMultipleSelection &&
                  multipleSelected.includes(dataitem.id) && (
                    <div className="mt-2 bg-gray-50 p-3 rounded-md shadow-inner">
                      <h3 className="text-gray-700">{dataitem.answer}</h3>
                    </div>
                  )}

                {/* For single selection */}
                {!enableMultipleSelection && selected === dataitem.id && (
                  <div className="mt-2 bg-gray-50 p-3 rounded-md shadow-inner">
                    <h3 className="text-gray-700">{dataitem.answer}</h3>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Accodian;
