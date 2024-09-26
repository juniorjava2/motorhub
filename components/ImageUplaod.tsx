// components/ImageUpload.tsx
import React, { useState } from 'react';

const ImageUpload: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    // Implement API call to identify part based on image
    // Example: const result = await api.identifyPart(image);
    alert("Image uploaded for identification!"); // Mock response
  };

  return (
    <div className="mb-4">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">
        Upload
      </button>
    </div>
  );
};

export default ImageUpload;