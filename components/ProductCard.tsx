import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-700">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;