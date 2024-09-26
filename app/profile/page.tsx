import React from 'react'
import { Search, ShoppingCart, Heart, User, ChevronDown, MapPin, Phone } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import { Hero } from '@/components/Hero'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function HomePage() {
  const category = [
    "Engine Parts", "Brake System", "Suspension", "Electrical", "Body Parts", "Transmission", "Exhaust", "Interior"
  ]

  const categories = [
    { id: 1, name: "Engines & Engine Parts", image: "/img/categories/engine.svg"},
    { id: 2, name: "Tire & Wheels", image: "/img/categories/wheel.svg"},
    { id: 3, name: "Filters",  image: "/img/categories/filter.png"},
    { id: 4, name: "Oils & Fluids",  image: "/img/categories/oil.svg" },
    { id: 5, name: "Accessories",  image: "/img/categories/interior.svg"},
    { id: 6, name: "Lighting", image: "/img/categories/lighting.svg"},
    {id:7, name: "Bets, Hoses & Pulleys", image:"/img/categories/pulleys.svg"}
  ]

  const popularProducts = [
    { id: 1, name: "High-Performance Brake Pads", price: 79.99, oldPrice: 89.99, image: "/img/brakepads.png", tag: "Sale" },
    { id: 2, name: "LED Headlight Kit", price: 129.99, oldPrice: 149.99, image: "/img/brakepadkit.jpg", tag: "New" },
    { id: 3, name: "Performance Air Filter", price: 49.99, oldPrice: 59.99, image: "/img/steeringwheel.jpg", tag: "Hot" },
    { id: 4, name: "Exhaust Pipe", price: 39.99, oldPrice: 44.99, image: "/img/ehaustpipe.jpg", tag: "Sale" },
    { id: 5, name: "Spark Plug Set", price: 24.99, oldPrice: 29.99, image: "/img/head-gasket.png", tag: "New" },
    { id: 6, name: "Suspension Lowering Kit", price: 299.99, oldPrice: 349.99, image: "/img/head-gasket.png", tag: "Hot" },
  ]

  const newArrivals = [
    { id: 1, name: "Carbon Fiber Hood", price: 599.99, image: "/img/brakepadkit.jpg" },
    { id: 2, name: "Racing Steering Wheel", price: 249.99, image: "/img/steeringwheel.jpg" },
    { id: 3, name: "High-Flow Exhaust System", price: 449.99, image: "/img/ehaustpipe.jpg" },
    { id: 4, name: "Coilover Suspension Kit", price: 899.99, image: "/img/head-gasket.png" },
    { id: 5, name: "Performance Chip", price: 199.99, image: "/img/steeringwheel4.jpg" },
    { id: 6, name: "Cold Air Intake", price: 129.99, image: "/img/brakepadkit3.jpg" },
  ]

  const heroImages = [
    "/img/toyota-1zr-fe.jpg",
    "/img/brakepads.png",
    "/img/brakepads.png",
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
        

      <main>
        {/* Hero Section with Carousel */}
        <Hero heroImages={heroImages}/>

        <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Shop by Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categories.map((product) => (
                <Card key={product.id}>
                  <CardContent className="p-4 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="">
                        <Image src={product.image} alt='category' width={45} height={45} className='object-contain'/>
                      </span>
                    </div>
                    <h3 className="font-semibold">{product.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>



          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Popular Products</h2>
            <Tabs defaultValue="all" className="w-full">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="engine">Engine</TabsTrigger>
                <TabsTrigger value="brakes">Brakes</TabsTrigger>
                <TabsTrigger value="suspension">Suspension</TabsTrigger>
                <TabsTrigger value="electrical">Electrical</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {popularProducts.map((product) => (
                    <Card key={product.id}>
                      <CardContent className="p-4">
                        <div className="relative mb-4">
                          <div className="h-52 object-contain  rounded">
                            <Image src={product.image} alt={product.name} fill  />
                          </div>
                          <span className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">
                            {product.tag}
                          </span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="absolute top-2 right-2 bg-white bg-opacity-75 hover:bg-opacity-100"
                          >
                            <Heart className="h-6 w-6 text-red-500" />
                          </Button>
                        </div>
                        <h3 className="font-semibold mb-2">{product.name}</h3>
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="text-lg font-bold text-green-600">${product.price.toFixed(2)}</span>
                            <span className="text-sm text-gray-500 line-through ml-2">${product.oldPrice.toFixed(2)}</span>
                          </div>
                          <Button variant="outline" size="sm">Add to Cart</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">New Arrivals</h2>
            <div className="relative overflow-hidden">
              <div className="flex animate-marquee">
                {[...newArrivals, ...newArrivals].map((product, index) => (
                  <div key={index} className="flex-shrink-0 w-48 mx-4">
                    <Card>
                      <CardContent className="p-4">
                        <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded mb-2" />
                        <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
                        <p className="text-green-600 font-bold">${product.price.toFixed(2)}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </section>


        </div>

        {/* Promotion Banner */}
        <section className="bg-green-600 text-white py-8 mb-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h2 className="text-3xl font-bold mb-2">Summer Sale!</h2>
                <p className="text-xl">Get up to 50% off on selected items</p>
              </div>
              <Button size="lg" variant="outline" className="bg-white text-green-600 hover:bg-green-50">
                Shop Now
              </Button>
            </div>
          </div>
        </section>
      </main>

     <Footer/>
    </div>
  )
}