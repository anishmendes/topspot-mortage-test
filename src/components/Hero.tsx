// src/components/Hero.tsx
import { motion } from 'framer-motion'
import image from "../assets/hero.jpg"
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}           // ← your local image path
          alt="Hero background"
          className="w-full h-full object-cover brightness-75 scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Content – minimal & centered */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight"
        >
          Brokering a <span className="text-pink-400">Better Future</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl opacity-90 mb-12 max-w-3xl mx-auto"
        >
          Expert mortgage advice. Better rates. Zero stress.
        </motion.p>

        {/* CTAs – clean & prominent */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-pink-600 hover:bg-pink-700 text-white font-semibold text-lg rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Get Free Quote
          </a>

          <a
            href="/services"
            className="inline-flex items-center justify-center px-10 py-5 border-2 border-white/60 hover:border-white text-white font-semibold text-lg rounded-full transition-all duration-300 hover:bg-white/10"
          >
            Explore Services
          </a>
        </motion.div>
      </div>
    </section>
  )
}