// src/components/LoanComparisonTeaser.tsx
import { motion } from 'framer-motion'
import { Calculator, ArrowRight } from 'lucide-react'

export default function LoanComparisonTeaser() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
          >
            See How Much You Could Save
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Compare current rates from 50+ lenders in seconds. Get a free, no-obligation comparison — see potential savings on repayments or access to better deals.
          </motion.p>

          {/* Teaser Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left: Icon + Text */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-pink-500/20 flex items-center justify-center">
                  <Calculator className="w-8 h-8 md:w-10 md:h-10 text-pink-400" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    Instant Loan Comparison
                  </h3>
                  <p className="text-gray-300 text-base md:text-lg">
                    No commitment. No credit check. Just see your personalised options in minutes.
                  </p>
                </div>
              </div>

              {/* Right: CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/mortgage-calculator" // ← change to your real calculator page
                  className="inline-flex items-center gap-3 px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Try Comparison Tool
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-pink-400/60 hover:border-pink-400 text-white font-semibold rounded-full transition-all duration-300 hover:bg-pink-500/10"
                >
                  Book Free Comparison Call
                </a>
              </div>
            </div>
          </motion.div>

          {/* Trust note */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm md:text-base opacity-80 mt-8 text-center"
          >
            100% confidential • No impact on your credit score • Free service
          </motion.p>
        </div>
      </div>
    </section>
  )
}