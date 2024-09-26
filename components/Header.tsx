import React from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, Heart, User } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link href="/" className="text-xl font-bold">Automobile Hub</Link>
      <div className="flex items-center">
        <Input placeholder="Search for parts..." className="mr-2" />
        <Button><Search /></Button>
        <Link href="/cart" className="ml-4"><ShoppingCart /></Link>
        <Link href="/wishlist" className="ml-4"><Heart /></Link>
        <Link href="/account" className="ml-4"><User /></Link>
      </div>
    </header>
  );
};

export default Header;