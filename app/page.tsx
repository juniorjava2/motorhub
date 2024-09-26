"use client"
import React from 'react';
import Layout from '../components/Layout';
import VirtualMechanic from '../components/VirtualMechanic';
import ARPartPlacement from '../components/ARPartPlacement';
import VoiceSearch from '../components/VoiceSearch';
import InventoryManagement from '../components/InventoryManagement';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';

const HomePage: React.FC = () => {
  const categories = [
    { name: "Engine Parts", slug: "engine-parts" },
    { name: "Brakes", slug: "brakes" },
    { name: "Suspension", slug: "suspension" },
  ];

  const popularProducts = [
    { id: 1, name: "High-Performance Brake Pads", price: 79.99, image: "/img/brakepads.png" },
    { id: 2, name: "LED Headlight Kit", price: 129.99, image: "/img/head-gasket.png" },
    { id: 3, name: "Performance Air Filter", price: 49.99, image: "/img/brakepads.png" },
  ];

  return (
    <Layout>
      <section className="p-4">
        <h2 className="text-xl font-bold">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map(category => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>
      <section className="p-4">
        <h2 className="text-xl font-bold">Popular Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {popularProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <VirtualMechanic />
      <ARPartPlacement />
      <VoiceSearch />
      <InventoryManagement />
    </Layout>
  );
};

export default HomePage;