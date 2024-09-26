"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Define the props type for the Hero component
interface HeroProps {
  heroImages: string[]; // Array of image URLs
}

export const Hero: React.FC<HeroProps> = ({ heroImages }) => {
  const autoplay = React.useRef(
    Autoplay({ delay: 3000 })
  )

  return (
    <section className="relative">
      <Carousel
        plugins={[autoplay.current]}
        className="w-full"
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[400px] md:h-[600px]">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                      Premium Auto Parts
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">
                      Quality parts for every vehicle
                    </p>
                    <Button size="lg" className="bg-green-600 hover:bg-green-700">
                      Shop Now
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
