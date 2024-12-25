'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { WatchCase } from '../types/watch'

interface CaseSelectorProps {
  cases: WatchCase[]
  selectedCase: WatchCase | null
  onSelect: (watchCase: WatchCase) => void
}

export default function CaseSelector({ cases, selectedCase, onSelect }: CaseSelectorProps) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {cases.map((watchCase) => (
          <motion.button
            key={watchCase.id}
            onClick={() => onSelect(watchCase)}
            className={`relative aspect-square rounded-2xl p-4 flex flex-col items-center justify-center border-2 transition-colors
              ${selectedCase?.id === watchCase.id 
                ? 'border-blue-600 bg-blue-50' 
                : 'border-gray-200 hover:border-gray-300 bg-white'
              }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative w-full aspect-square mb-4">
              <Image
                src={watchCase.image}
                alt={watchCase.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center">
              <h3 className="font-medium text-sm">{watchCase.name}</h3>
              <p className="text-sm text-gray-500">From ${watchCase.price}</p>
            </div>
          </motion.button>
        ))}
      </motion.div>
    </div>
  )
}

