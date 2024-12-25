'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

interface CaseSelectorViewProps {
  selectedMaterial: 'Aluminum' | 'Titanium'
  onSelectMaterial: (material: 'Aluminum' | 'Titanium') => void
}

export default function CaseSelectorView({ selectedMaterial, onSelectMaterial }: CaseSelectorViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const watches = [
    {
      id: 1,
      material: 'Aluminum',
      color: 'Silver',
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-silver-nc-s10_VW_PF+watch-face-46-aluminum-silver-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3Ni9MMjFrdVpVbER4UTlYL0F6UUxMTXlKN3h2cmJhZy9Wa2xIdm9lcGFpb09vMDVrRDBTL1JGOWgwenZrMUlPenphRldCVytibDdFVW4zaGQraXo4V2lGb0grci9sTHk0cW5yeWNFd2tRMXRGdEhRVmRIZVBLS2FtUFNyZG1CeE42K3pwNksvT0dGY2JoTXF2c2VwQjBkWnN2Vk1ody9NdjZEK2lsUWRsVWo3"
    },
    {
      id: 2,
      material: 'Aluminum',
      color: 'Space Gray',
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-aluminum-spacegray-nc-s10_VW_PF+watch-face-42-aluminum-spacegray-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=Tmx5N2FJN2lxM3QwMWlJbWNYWU5zcUVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFejM0dWNRQ25LYnpVd3RzVVhGSlBDMS9ZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv"
    },
    {
      id: 3,
      material: 'Titanium',
      color: 'Natural',
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-natural-cell-s10_VW_PF+watch-face-46-titanium-natural-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqdVRaQzNERGRFYWpOR2ZYa2tEblo3UFZicVRRN09oTDNPbVJoakNOdFBsL3NqLzlHdDZiZk5mQ3ZsSjZIUUJtOVQzcnNWTHRlNVlONzMza21GaTAwQVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0ovZGsxSWVXMUdpaWRhNWpRQmhXV0tOaHBEUXBSMFJXejZtUTJFZDZ4OHJy"
    },
    {
      id: 4,
      material: 'Titanium',
      color: 'Black',
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-black-cell-s10_VW_PF+watch-face-46-titanium-black-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqdVRaQzNERGRFYWpOR2ZYa2tEblo3UFZicVRRN09oTDNPbVJoakNOdFBsL3NqLzlHdDZiZk5mQ3ZsSjZIUUJtOVQzcnNWTHRlNVlONzMza21GaTAwQVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0ovZGsxSWVXMUdpaWRhNWpRQmhXV0tOaHBEUXBSMFJXejZtUTJFZDZ4OHJy"
    }
  ]

  const filteredWatches = watches.filter(watch => watch.material === selectedMaterial)

  useEffect(() => {
    setCurrentIndex(0) // Reset index when material changes
  }, [selectedMaterial])

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredWatches.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredWatches.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="relative">
        {/* Navigation Arrows */}
        <button 
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white/90 transition-colors"
          aria-label="Previous case"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button 
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white/90 transition-colors"
          aria-label="Next case"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Watch Images */}
        <div className="relative w-full max-w-2xl mx-auto aspect-square overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={filteredWatches[currentIndex]?.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-0"
            >
              <Image
                src={filteredWatches[currentIndex]?.image}
                alt={`Apple Watch ${filteredWatches[currentIndex]?.material} ${filteredWatches[currentIndex]?.color}`}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Material Selector Buttons */}
        <div className="flex justify-center mt-8">
          <div className="inline-flex rounded-full bg-[#f5f5f7] p-1">
            {['Aluminum', 'Titanium'].map((material) => (
              <motion.button
                key={material}
                onClick={() => onSelectMaterial(material as 'Aluminum' | 'Titanium')}
                className={`px-6 py-2 rounded-full text-sm font-normal transition-colors
                  ${selectedMaterial === material 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-900 hover:bg-white/50'
                  }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {material}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <motion.div 
          className="text-center mt-8 space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-xs uppercase tracking-wide text-[#6e6e73]">
            APPLE WATCH SERIES 10
          </div>
          <h1 className="text-2xl font-normal">
            46mm {filteredWatches[currentIndex]?.material} {filteredWatches[currentIndex]?.color} Case with Black Solo Loop
          </h1>
          <p className="text-xl">
            From {selectedMaterial === 'Titanium' ? '$799' : '$429'}
          </p>
        </motion.div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {filteredWatches.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors
                ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

