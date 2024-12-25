'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import SizeSelectorView from '@/components/size-selector-view'
import CaseSelectorView from '@/components/case-selector-view'
import BandSelectorView from '@/components/band-selector-view'

export default function CustomizePage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedSize, setSelectedSize] = useState<'42mm' | '46mm'>('42mm')
  const [selectedMaterial, setSelectedMaterial] = useState<'Aluminum' | 'Titanium'>('Aluminum')
  const [selectedBandType, setSelectedBandType] = useState('Sport Loop')
  const [activeView, setActiveView] = useState<'size' | 'case' | 'band'>('size')

  const collections = [
    'Apple Watch Series 10',
    'Apple Watch Series 11',
    'Apple Watch Series 12'
  ]

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-black flex items-center gap-2">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" fill="currentColor"/>
            </svg>
            <span className="text-sm font-normal tracking-wide">WATCH</span>
          </Link>

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 text-sm font-normal"
            >
              Collections
              <svg 
                className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2"
              >
                {collections.map((collection) => (
                  <button
                    key={collection}
                    onClick={() => {
                     
                      setIsDropdownOpen(false)
                    }}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                  >
                    {collection}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
          <Link href="https://www.apple.com/shop/buy-watch/apple-watch?configured=true&option.watch_cases=MWX13LW/A&option.watch_bands=MYA33AM/A&product=Z0YQ&step=select" target="_blank" rel="noopener noreferrer">
            <button className="text-sm font-normal text-white bg-[#0076DF] rounded-xl p-2">
            Save
            </button>
          </Link>
        </div>
      </header>

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {activeView === 'size' && (
            <SizeSelectorView 
              selectedSize={selectedSize}
              onSelect={setSelectedSize}
            />
          )}
          
          {activeView === 'case' && (
            <CaseSelectorView
              selectedMaterial={selectedMaterial}
              onSelectMaterial={setSelectedMaterial}
            />
          )}

          {activeView === 'band' && (
            <BandSelectorView
              selectedBandType={selectedBandType}
              onSelectBandType={setSelectedBandType}
            />
          )}

          <motion.div 
            className="flex justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button 
              onClick={() => setActiveView('size')}
              className={`px-6 py-2 rounded-full text-sm font-normal transition-colors
                ${activeView === 'size' 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-[#f5f5f7] hover:bg-gray-200'
                }`}
            >
              Size
            </button>
            <button 
              onClick={() => setActiveView('case')}
              className={`px-6 py-2 rounded-full text-sm font-normal transition-colors
                ${activeView === 'case' 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-[#f5f5f7] hover:bg-gray-200'
                }`}
            >
              Case
            </button>
            <button 
              onClick={() => setActiveView('band')}
              className={`px-6 py-2 rounded-full text-sm font-normal transition-colors
                ${activeView === 'band' 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-[#f5f5f7] hover:bg-gray-200'
                }`}
            >
              Band
            </button>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

