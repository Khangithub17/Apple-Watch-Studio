'use client'

import { motion } from 'framer-motion'
import { WatchBand } from '../types/watch'
import { useRef } from 'react'
import Image from 'next/image'

interface BandSelectorProps {
  bands: WatchBand[]
  selectedBand: WatchBand | null
  onSelect: (band: WatchBand) => void
}

export default function BandSelector({ bands, selectedBand, onSelect }: BandSelectorProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div 
          ref={containerRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-4 py-4"
        >
          {bands.map((band) => (
            <motion.button
              key={band.id}
              onClick={() => onSelect(band)}
              className={`flex-none w-48 aspect-square rounded-2xl p-4 flex flex-col items-center justify-center border-2 snap-center
                ${selectedBand?.id === band.id 
                  ? 'border-blue-600 bg-blue-50' 
                  : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative w-full aspect-square mb-4">
                <Image
                  src={band.image}
                  alt={band.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="font-medium text-sm">{band.name}</h3>
                <p className="text-sm text-gray-500">${band.price}</p>
              </div>
            </motion.button>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </motion.div>
    </div>
  )
}

