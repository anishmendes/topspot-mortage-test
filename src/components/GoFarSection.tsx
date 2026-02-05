// src/components/GoFarSection.tsx
import { motion } from 'framer-motion'

export default function GoFarSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.15),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-12"
          >
            Go far.
            <br className="hidden sm:block" />
            <span className="text-pink-400">Go together.</span>
          </motion.h2>

          {/* Body Text */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto mb-16 opacity-90"
          >
            For years, Topspot Mortgage Broker has stood side-by-side with families, first-home buyers, investors and businesses — helping them secure the right loan and build their future. We are always working to support and guide you on your journey.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-2xl md:text-3xl font-medium italic mb-16 max-w-3xl mx-auto"
          >
            “If you want to go fast, go alone.<br />
            If you want to go far, go together.”
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-lg md:text-xl opacity-80 mb-12"
          >
            Your home, your investment, your dream — we put you first.<br />
            Together with Topspot, you can go further.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <a
              href="/contact"
              className="inline-flex items-center px-12 py-6 bg-pink-500 hover:bg-pink-600 text-white font-bold text-xl rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Start Your Journey with Topspot →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}