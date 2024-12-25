'use client'

import { motion } from 'framer-motion'

interface SizeSelectorProps {
  selectedSize: '42mm' | '46mm'
  onSelect: (size: '42mm' | '46mm') => void
}

export default function SizeSelector({ selectedSize, onSelect }: SizeSelectorProps) {
  return (
    <motion.div 
      className="flex justify-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {['42mm', '46mm'].map((size) => (
        <button
          key={size}
          onClick={() => onSelect(size as '42mm' | '46mm')}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-colors
            ${selectedSize === size 
              ? 'bg-gray-900 text-white' 
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            }`}
        >
          {size}
        </button>
      ))}
    </motion.div>
  )
}

