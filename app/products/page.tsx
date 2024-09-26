"use client"
import React, { useState } from 'react'
import { Search, Grid, List, ChevronDown, Upload, Filter, X } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Router } from 'next/router'
import Link from 'next/link'

export default function SearchResultsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  

  const searchResults = [
    { id: 1, name: "High-Performance Brake Pads", price: 79.99, brand: "BrakeMaster", compatibility: "Universal", condition: "New", image: "/img/head-gasket.png", rating: 4.5 },
    { id: 2, name: "LED Headlight Kit", price: 129.99, brand: "LuminoTech", compatibility: "Model X, Model Y", condition: "New", image: "/img/brakepads.png", rating: 4.8 },
    { id: 3, name: "Performance Air Filter", price: 49.99, brand: "AirFlow", compatibility: "Universal", condition: "New", image: "/img/steeringwheel.jpg", rating: 4.2 },
    { id: 4, name: "Synthetic Motor Oil", price: 39.99, brand: "LubePro", compatibility: "Universal", condition: "New", image: "/img/head-gasket.png", rating: 4.7 },
    { id: 5, name: "Spark Plug Set", price: 24.99, brand: "IgnitionMax", compatibility: "Model A, Model B", condition: "New", image: "/img/head-gasket.png", rating: 4.4 },
    { id: 6, name: "Suspension Lowering Kit", price: 299.99, brand: "RideLow", compatibility: "Model Z", condition: "New", image: "/img/head-gasket.png", rating: 4.6 },
  ]

  const brands = ["BrakeMaster", "LuminoTech", "AirFlow", "LubePro", "IgnitionMax", "RideLow"]
  const partTypes = ["Brake System", "Lighting", "Engine", "Suspension", "Electrical"]
  const conditions = ["New", "Used"]

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <Label htmlFor="price-range">Price Range</Label>
        <Slider
          id="price-range"
          min={0}
          max={1000}
          step={10}
          value={priceRange}
          onValueChange={setPriceRange}
          className="mt-2"
        />
        <div className="flex justify-between mt-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      <div>
        <Label>Brand</Label>
        <div className="space-y-2 mt-2">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center">
              <Checkbox id={`brand-${brand}`} />
              <label htmlFor={`brand-${brand}`} className="ml-2 text-sm">{brand}</label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label>Part Type</Label>
        <div className="space-y-2 mt-2">
          {partTypes.map((type) => (
            <div key={type} className="flex items-center">
              <Checkbox id={`type-${type}`} />
              <label htmlFor={`type-${type}`} className="ml-2 text-sm">{type}</label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label>Condition</Label>
        <div className="space-y-2 mt-2">
          {conditions.map((condition) => (
            <div key={condition} className="flex items-center">
              <Checkbox id={`condition-${condition}`} />
              <label htmlFor={`condition-${condition}`} className="ml-2 text-sm">{condition}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Search Results</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters for desktop */}
        <aside className="w-full md:w-1/4 hidden md:block">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-4">Filters</h2>
              <FilterContent />
            </CardContent>
          </Card>
        </aside>

        {/* Filters for mobile */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="mb-4">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="mt-4">
                <FilterContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Search Results */}
        <main className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Customer Rating</SelectItem>
                </SelectContent>
              </Select>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    Image Search
                    <Upload className="ml-2 h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-4">
                    <h3 className="font-medium">Upload an image to search</h3>
                    <Input type="file" accept="image/*" />
                    <Button className="w-full">Search with Image</Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-4'}>
            {searchResults.map((product) => (
              <Card key={product.id} className={viewMode === 'list' ? 'flex' : ''}>
                <CardContent className={`p-4 ${viewMode === 'list' ? 'flex' : ''}`}>
                  <div className={`${viewMode === 'list' ? 'w-1/4 mr-4' : 'mb-4'}`}>
                    <img src={product.image} alt={product.name} className="w-full h-auto rounded" />
                  </div>
                  <div className={viewMode === 'list' ? 'w-3/4' : ''}>
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <p className="text-lg font-bold text-green-600 mb-2">${product.price.toFixed(2)}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge>{product.brand}</Badge>
                      <Badge variant="outline">{product.compatibility}</Badge>
                      <Badge variant="secondary">{product.condition}</Badge>
                    </div>
                    <div className="flex items-center mb-2">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span>{product.rating.toFixed(1)}</span>
                    </div>
                    <Link href={`/products/${product.id}`}>Add to Cart</Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}