// components/ARPartPlacement.tsx
import React from 'react';

const ARPartPlacement: React.FC = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">Augmented Reality Part Placement</h2>
      <p>Use your camera to visualize parts in your vehicle.</p>
      <button className="bg-green-500 text-white px-4 py-2 rounded mt-2">
        Start AR
      </button>
    </div>
  );
};

export default ARPartPlacement;