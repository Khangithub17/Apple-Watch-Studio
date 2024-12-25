'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { WatchConfiguration } from '../types/watch'

interface WatchPreviewProps {
  config: WatchConfiguration
}

export default function WatchPreview({ config }: WatchPreviewProps) {
  return (
    <motion.div 
      className="relative w-full aspect-square max-w-xl mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        layoutId="watch-preview"
      >
        {config.case ? (
          <Image
            src={config.case.image}
            alt={`${config.case.name} - ${config.size}`}
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Select a case to preview
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

