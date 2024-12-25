'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <header className=" top-0 left-0 right-0 z-50 bg-white">
        <div className="container mx-auto px-4 h-16 flex items-center gap-2">
          <Link href="/" className="text-black">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" fill="currentColor"/>
            </svg>
          </Link>
          <span className="text-sm font-normal tracking-wide">WATCH</span>
        </div>
      </header>

      <main className=" pb-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-left mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className=" text-[#6e6e73] text-xl mb-6 font-normal">Apple Watch Studio</h2>
            <div className="space-y-4 mb-8 ">
              <motion.h1 
                className="text-[56px] leading-[1.07143] font-bold tracking-[-0.005em]  "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Choose a case.
              </motion.h1>
              <motion.h1 
                className="text-[56px] leading-[1.07143] font-bold tracking-[-0.005em]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Pick a strap.
              </motion.h1>
              <motion.h1 
                className="text-[56px] leading-[1.07143] font-bold tracking-[-0.005em]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Create your own style.
              </motion.h1>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link 
                href="/studio/customize" 
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#0071e3] px-8 text-base font-normal text-white hover:bg-[#0077ED] transition-colors"
              >
                Get started
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative w-full max-w-2xl mx-auto aspect-square"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-aluminum-jetblack-nc-s10_VW_PF+watch-face-42-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=Tmx5N2FJN2lxM3QwMWlJbWNYWU5zcUVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFejM0dWNRQ25LYnpVd3RzVVhGSlBDMS9ZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv"
              alt="Apple Watch Series 10"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </main>
    </div>
  )
}

