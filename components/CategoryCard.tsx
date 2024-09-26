import React from 'react';
import Link from 'next/link';

interface Category {
  name: string;
  slug: string;
}

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => {
  return (
    <Link href={`/category/${category.slug}`} className="block border rounded-lg p-4 text-center hover:bg-gray-100">
      <h3 className="text-lg font-semibold">{category.name}</h3>
    </Link>
  );
};

export default CategoryCard;