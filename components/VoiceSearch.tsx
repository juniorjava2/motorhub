// components/VoiceSearch.tsx
import React from 'react';

const VoiceSearch: React.FC = () => {
  const handleVoiceSearch = () => {
    // Implement voice recognition API
    alert("Voice search activated!"); // Mock response
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">Voice Search</h2>
      <button onClick={handleVoiceSearch} className="bg-yellow-500 text-white px-4 py-2 rounded">
        Start Voice Search
      </button>
    </div>
  );
};

export default VoiceSearch;