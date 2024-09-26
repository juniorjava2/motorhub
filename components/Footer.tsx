// components/Footer.tsx
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 dark:text-white border-t border-gray-200">
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <h3 className="font-semibold text-lg mb-4">Auto Hub</h3>
          <p className="text-gray-600 mb-4">
            Your one-stop shop for all automotive parts and accessories.
          </p>
          <div className="flex space-x-4">
            <Button variant="outline" size="icon" className='text-blue-500'>
              <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </Button>
            <Button variant="outline" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </Button>
            <Button variant="outline" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </Button>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-gray-600 hover:text-green-600">About Us</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-green-600">Contact</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-green-600">Careers</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Account</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-gray-600 hover:text-green-600">My Account</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-green-600">Orders</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-green-600">Wishlist</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Help</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-gray-600 hover:text-green-600">FAQs</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-green-600">Shipping</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-green-600">Returns</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
        <p>&copy; 2023 Auto Hub. All rights reserved.</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;