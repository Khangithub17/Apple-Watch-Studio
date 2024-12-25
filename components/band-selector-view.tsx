'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

interface BandSelectorViewProps {
  selectedBandType: string
  onSelectBandType: (bandType: string) => void
}

export default function BandSelectorView({ selectedBandType, onSelectBandType }: BandSelectorViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const bandTypes = [
    'Stainless Steel',
    'Sport Loop',
    'Sport Band',
    'FineWoven',
    'Braided Solo Loop',
    'Solo Loop',
    'Nike Sport Loop',
    'Nike Sport Band'
  ]

  const bands = [
    {
      id: 1,
      type: 'Sport Loop',
      color: 'Black/Blue',
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=czdWc1FNWHZRRGZrVTlpcjVQTEJxVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM"
    },
    {
      id: 2,
      type: 'Stainless Steel',
      color: 'Silver',
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC7J4ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=dEtVZDJwdGdSUTNydjBzY0ltbTBpRHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM"
    },
    {
      id: 3,
      type: 'Sport Band',
      color: 'Black',
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLQ3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=SUJyaDZZRFhzbEdXcWNtc2VCd0kwVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM"
    },
    {
      id: 4,
      type: 'FineWoven',
      color: 'Taupe',
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXWY3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=cENDQStWaTl2LytFZ0J1Z08zeVNPanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM"
    },
    {
      id: 5,
      type: 'Braided Solo Loop',
      color: 'Blue',
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY373ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=azQvbVNwVzRJcWRlblRnV01DRGIrVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHo3dVZ6ekhOOGpwOW00bzV1Ni8rVGc"
    }
  ]

  const filteredBands = bands.filter(band => band.type === selectedBandType)

  useEffect(() => {
    setCurrentIndex(0) // Reset index when band type changes
  }, [selectedBandType])

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredBands.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredBands.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="relative">
        {/* Navigation Arrows */}
        <button 
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white/90 transition-colors"
          aria-label="Previous band"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button 
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white/90 transition-colors"
          aria-label="Next band"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Watch Preview with Band */}
        <div className="relative w-full max-w-2xl mx-auto aspect-square overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-aluminum-jetblack-nc-s10_VW_PF+watch-face-42-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=Tmx5N2FJN2lxM3QwMWlJbWNYWU5zcUVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFejM0dWNRQ25LYnpVd3RzVVhGSlBDMS9ZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv"
              alt="Apple Watch Case"
              fill
              className="object-contain"
              priority
            />
          </div>
          <AnimatePresence mode="wait">
            {filteredBands[currentIndex] && (
              <motion.div
                key={filteredBands[currentIndex].id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute inset-0"
              >
                <Image
                  src={filteredBands[currentIndex].image}
                  alt={`${filteredBands[currentIndex].type} ${filteredBands[currentIndex].color}`}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Band Type Selector */}
        <div className="flex justify-start gap-4 mt-8 overflow-x-auto pb-4 no-scrollbar">
          {bandTypes.map((bandType) => (
            <motion.button
              key={bandType}
              onClick={() => onSelectBandType(bandType)}
              className={`px-6 py-2 rounded-full text-sm font-normal whitespace-nowrap transition-colors
                ${selectedBandType === bandType 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-[#f5f5f7] text-gray-900 hover:bg-gray-200'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {bandType}
            </motion.button>
          ))}
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
            46mm Jet Black Aluminum Case with{' '}
            {filteredBands[currentIndex] ? `${filteredBands[currentIndex].type} - ${filteredBands[currentIndex].color}` : ''}
          </h1>
          <p className="text-xl">
            From $429
          </p>
        </motion.div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {filteredBands.map((_, index) => (
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

