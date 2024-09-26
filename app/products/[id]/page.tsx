"use client"
import React, { useState } from 'react'
import { Minus, Plus, Star, Truck, ChevronRight } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import { BiLogoPlayStore } from "react-icons/bi";
import { IoIosAppstore } from "react-icons/io";





const product = {
  name: "High-Performance Brake Pads",
  price: 79.99,
  oldPrice: 89.99,
  discount: 11,
  description: "Upgrade your vehicle's braking system with our high-performance brake pads. Engineered for superior stopping power and durability, these brake pads are perfect for both daily driving and high-performance applications.",
  sku: "BP-12345",
  brand: "BrakeMaster",
  category: "Brake System",
  stock: 50,
  rating: 4.5,
  reviews: 127,
  images:["/img/brakepadkit.jpg","/img/brakepadkit2.jpg","/img/brakepadkit3.jpg","/img/brakepadkit4.jpg","/img/brakepadkit5.jpg"],

  features: [
    "Advanced ceramic compound",
    "Low dust formula",
    "Quiet operation",
    "Extended pad life",
  ]
}


export default function ProductDetailsPage() {
  const [mainImage, setMainImage] = useState(product.images[0])
  


  const relatedProducts = [
    { id: 1, name: "Brake Rotors", price: 129.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 2, name: "Brake Fluid", price: 19.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 3, name: "Brake Caliper", price: 89.99, image: "/placeholder.svg?height=200&width=200" },
  ]

  const categories = [
    "Brake System", "Engine Parts", "Suspension", "Electrical", "Body Parts"
  ]

  const handleImageChange = (image: string) => {
    setMainImage(image)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column: Product Image and Details */}
        <div className="lg:w-2/3">
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            {/* Product Image Gallery */}
            <div className="md:w-1/2">
              <div className="mb-4">
                <img src={mainImage} alt={product.name} className="w-full h-auto rounded-lg" />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.slice(1).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-auto rounded cursor-pointer"
                    onClick={() => handleImageChange(image)}
                    onMouseEnter={() => handleImageChange(image)}
                  />
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="md:w-1/2">
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="text-sm text-gray-600">{product.reviews} reviews</span>
              </div>
              <div className="mb-4">
                <Badge className="bg-green-500 text-white mb-2">Save {product.discount}%</Badge>
                <div>
                  <span className="text-3xl font-bold text-green-600">${product.price.toFixed(2)}</span>
                  <span className="text-xl text-gray-500 line-through ml-2">${product.oldPrice.toFixed(2)}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <div className="flex items-center mb-6">
                <Button variant="outline" size="icon">
                  <Minus className="h-4 w-4" />
                </Button>
                <div className="text-center w-10 h-12 bg-transparent border rounded flex items-center justify-center">1</div>
                <Button variant="outline" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
                <Button className="ml-4 bg-green-600 hover:bg-green-700">Add to Cart</Button>
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-6">
                <Truck className="mr-2 h-5 w-5" />
                <span>Free shipping on orders over $99</span>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <p><strong>SKU:</strong> {product.sku}</p>
                <p><strong>Brand:</strong> {product.brand}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Availability:</strong> {product.stock > 0 ? 'In stock' : 'Out of stock'}</p>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <Tabs defaultValue="description" className="mt-8">
            <TabsList>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="additional">Additional Information</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Product Description</h2>
              <p className="mb-4">{product.description}</p>
              <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc pl-5 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="additional" className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Additional Information</h2>
              <table className="w-full">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-semibold">Weight</td>
                    <td className="py-2">2.5 lbs</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-semibold">Dimensions</td>
                    <td className="py-2">6 x 4 x 2 inches</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-semibold">Material</td>
                    <td className="py-2">Ceramic compound</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-semibold">Compatibility</td>
                    <td className="py-2">Universal fit (check vehicle specifications)</td>
                  </tr>
                </tbody>
              </table>
            </TabsContent>
            <TabsContent value="reviews" className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Customer Reviews</h2>
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="text-lg font-semibold">{product.rating} out of 5</span>
              </div>
              <p>{product.reviews} global ratings</p>
              {/* Add more detailed review content here */}
            </TabsContent>
          </Tabs>

          {/* Related Products */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <Card key={product.id}>
                  <CardContent className="p-4">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <p className="text-green-600 font-bold">${product.price.toFixed(2)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Categories and Newsletter */}
        <div className="lg:w-1/3">
          {/* Categories Sidebar */}
          <Card className="mb-8">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-4">Categories</h2>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <Link href="#" className="text-blue-600 hover:underline">{category}</Link>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Newsletter Signup */}
          <Card className="bg-green-50">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Stay updated with our latest offers</h2>
              <p className="mb-4 text-sm text-gray-600">Subscribe to our newsletter and get exclusive deals you won't find anywhere else straight to your inbox!</p>
              <div className="flex flex-col space-y-2">
                <Input type="email" placeholder="Your email address" />
                <Button className="w-full bg-green-600 hover:bg-green-700">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 border-t pt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Auto Hub</h3>
            <p className="text-sm text-gray-600">Your one-stop shop for all automotive parts and accessories.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">About Us</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">Shipping</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">Returns</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">Payment Options</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Download Our App</h3>
            <div className="flex space-x-4">
              <Link href="#" className="flex border-2 py-2 px-4 items-center rounded-xl bg-blue-200  border-blue-600 text-blue-600">
                 <IoIosAppstore size={30}/> <b>Appstore</b>
              </Link>
              <Link href="#" className="flex border-2 py-2 px-4 items-center rounded-xl bg-green-200 border-green-600 text-green-600">
                 <BiLogoPlayStore size={30}/> <b>Playstore</b>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          <p>&copy; 2023 Auto Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}