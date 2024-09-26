import React from 'react'
import { Button } from './ui/button'
import { Heart, MapPin, Search, ShoppingCart, User } from 'lucide-react'
import { Badge } from './ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select'
import Link from 'next/link'
import { Input } from './ui/input'

const Navbar = () => {

  const categories = [
    "Engine Parts", "Brake System", "Suspension", "Electrical", "Body Parts", "Transmission", "Exhaust", "Interior"
  ]

  return (
    <div className=''>
            {/* Top small navbar */}
      <nav className="bg-gray-800 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            <span>Your Location</span>
          </div>
          <div className="flex items-center space-x-4 ">
            <Select>
              <SelectTrigger className="w-[100px] bg-black  border-gray-200 text-white">
                <SelectValue placeholder="USD" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usd">USD</SelectItem>
                <SelectItem value="eur">EUR</SelectItem>
                <SelectItem value="gbp">GBP</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[100px] bg-transparent border-gray-700 text-white">
                <SelectValue placeholder="English" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </nav>

      {/* Main navbar */}
      <nav className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-green-600"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              <span className="text-2xl font-bold text-green-600">Auto Hub</span>
            </Link>
            <div className="relative">
              <Select>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category, index) => (
                    <SelectItem key={index} value={category.toLowerCase()}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex-grow mx-8">
            <div className="relative">
              <Input type="search" placeholder="Search for parts..." className="pl-10 pr-16 py-2 w-full" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Button size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                Image Search
              </Button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-6 w-6" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0">3</Badge>
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-6 w-6" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0">2</Badge>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Bottom navbar */}
      <nav className="bg-gray-100 border-b border-gray-200 py-2">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center space-x-8">
            <li><Link href="/mechanic" className="text-gray-600 hover:text-green-600">Virtual Mechanic</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-green-600">Blog</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-green-600">Support & FAQ</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-green-600">About Us</Link></li>
            <li><Link href="#" className="text-gray-600 hover:text-green-600">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar





// import React, { useState } from 'react';
// import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
// import Link from 'next/link';
// import Image from "next/image";
// import { Bell, Menu } from 'lucide-react';
// import logo from "../public/icons/logo.svg";


// interface NavbarProps {
//   toggleSidebar: () => void;
// }

// const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isProfileOpen, setIsProfileOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleProfile = () => {
//     setIsProfileOpen(!isProfileOpen);
//   };

//   return (
//     <div>
//       <nav className="bg-[#0D0F10] p-4 rounded-2xl flex justify-between items-center mx-4 my-2 ">
//         <div className="flex items-center">
//           <div className="w-10 h-10 flex items-center justify-center text-white font-bold mr-2">
//             <Image src={logo} width={32} height={32} alt="Logo" />
//           </div>
//           <span className="font-semibold hidden sm:inline">WorkSpace Dashboard</span>
//         </div>
//         <div className="flex items-center space-x-4">
//           <Bell className="text-gray-400" size={20} />
//           <div className="flex items-center">
//             <Image src="/img/ivan.jpg" width={32} height={32} className="w-8 h-8 rounded-full mr-2" alt="User avatar" />
//             <span className="text-sm hidden sm:inline">Jimmy</span>
//           </div>
//         </div>
//       </nav>
//       {/** Mobile Nav */}
//       <div className="sm:hidden  p-2">
//         <button onClick={toggleSidebar} className="flex items-center justify-center py-2 px-4 text-gray-400 hover:bg-gray-700 rounded-lg">
//           <Menu className="mr-2" size={20} />
//           <span>Menu</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;