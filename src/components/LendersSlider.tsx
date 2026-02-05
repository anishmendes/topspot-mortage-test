// src/components/LendersSlider.tsx
import { motion } from 'framer-motion'

// Import logos (same as Banks.jsx)
import amp from '../assets/banks/amp_bank_logo.jpg'
import anz from '../assets/banks/anz.jpg'
import bankwest from '../assets/banks/bankwest.png'
import boq from '../assets/banks/boq.png'
import cwb from '../assets/banks/cwb.png' // Commonwealth Bank
import hsbc from '../assets/banks/hsbc.jpg'
import ing from '../assets/banks/ing.jpg'
import suncorp from '../assets/banks/Suncorp.jpg'
import westpac from '../assets/banks/westpac.png'

const lenders = [
  { name: 'AMP', logo: amp },
  { name: 'ANZ', logo: anz },
  { name: 'Bankwest', logo: bankwest },
  { name: 'BOQ', logo: boq },
  { name: 'Commonwealth Bank', logo: cwb },
  { name: 'HSBC', logo: hsbc },
  { name: 'ING', logo: ing },
  { name: 'Suncorp', logo: suncorp },
  { name: 'Westpac', logo: westpac },
]

export default function LendersSlider() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Your current bank isn’t your only option
        </h2>
        <p className="text-xl md:text-2xl mb-16 max-w-4xl mx-auto opacity-90">
          One of our <span className="text-pink-400 font-semibold">50+ lenders</span> could offer you a better deal.
        </p>

        {/* Slider */}
        <div className="relative">
          <motion.div
            className="flex gap-12 md:gap-20"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              duration: 30,
              ease: 'linear',
              repeat: Infinity,
            }}
            whileHover={{ animationPlayState: 'paused' }}
          >
            {lenders.map((lender, i) => (
              <div key={i} className="flex-shrink-0 w-32 md:w-48 group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                  <img
                    src={lender.logo}
                    alt={`${lender.name} logo`}
                    className="h-16 md:h-24 w-auto mx-auto object-contain" // ← removed brightness-0 invert
                    loading="lazy"
                  />
                </div>
              </div>
            ))}

            {/* Duplicate for loop */}
            {lenders.map((lender, i) => (
              <div key={`dup-${i}`} className="flex-shrink-0 w-32 md:w-48 group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                  <img
                    src={lender.logo}
                    alt={`${lender.name} logo`}
                    className="h-16 md:h-24 w-auto mx-auto object-contain" // ← same fix
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <p className="mt-12 text-lg opacity-80">
          We compare a wide panel of lenders to find the structure and rate that fits you best.
        </p>
      </div>
    </section>
  )
}