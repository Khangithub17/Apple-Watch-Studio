'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface SizeSelectorViewProps {
  selectedSize: '42mm' | '46mm'
  onSelect: (size: '42mm' | '46mm') => void
}

export default function SizeSelectorView({ selectedSize, onSelect }: SizeSelectorViewProps) {
  const watchImage = "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-aluminum-jetblack-nc-s10_VW_PF+watch-face-42-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=Tmx5N2FJN2lxM3QwMWlJbWNYWU5zcUVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFejM0dWNRQ25LYnpVd3RzVVhGSlBDMS9ZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv"

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="relative">
        {/* Navigation Arrows */}
        <button 
          onClick={() => onSelect('42mm')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg"
          aria-label="Previous size"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button 
          onClick={() => onSelect('46mm')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg"
          aria-label="Next size"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Watch Images */}
        <div className="relative w-full max-w-2xl mx-auto aspect-square overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSize}
              initial={{ opacity: 0, x: selectedSize === '46mm' ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: selectedSize === '46mm' ? -100 : 100 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-0"
            >
              <Image
                src={watchImage}
                alt={`Apple Watch ${selectedSize}`}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Size Selector Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          {['42mm', '46mm'].map((size) => (
            <motion.button
              key={size}
              onClick={() => onSelect(size as '42mm' | '46mm')}
              className={`px-6 py-2 rounded-full text-sm font-normal transition-colors
                ${selectedSize === size 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-[#f5f5f7] text-gray-900 hover:bg-gray-200'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {size}
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
            {selectedSize} Jet Black Aluminum Case with Black Solo Loop
          </h1>
          <p className="text-xl">
            From $429
          </p>
        </motion.div>
      </div>
    </div>
  )
}

