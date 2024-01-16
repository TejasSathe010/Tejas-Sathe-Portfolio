import React from 'react';

const AlertPopup = ({ description, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center">
    <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
    <div className="relative bg-white p-6 rounded-lg shadow-lg w-[60%]">
      <p className="text-gray-700">{description}</p>
      <button
        onClick={onClose}
        className="mt-4 bg-designColor text-white px-4 py-2 rounded hover:bg-designColor-200"
      >
        Close
      </button>
    </div>
  </div>
);

export default AlertPopup;
