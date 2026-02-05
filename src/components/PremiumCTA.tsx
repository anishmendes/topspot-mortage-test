// src/components/PremiumCTA.tsx
import { motion } from 'framer-motion'
import { Phone, Mail, ShieldCheck, ArrowRight } from 'lucide-react'

export default function PremiumCTA() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight"
          >
            Secure the right home loan
            <br className="hidden sm:block" />
            <span className="text-pink-400">with us today</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed"
          >
            Book your free, no-obligation consultation now. We compare 50+ lenders, handle all paperwork end-to-end, and help you move forward with confidence.
          </motion.p>

          {/* Trust badges + CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12"
          >
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <ShieldCheck className="w-6 h-6 text-pink-400" />
              <span className="font-medium">ASIC Regulated</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <ShieldCheck className="w-6 h-6 text-pink-400" />
              <span className="font-medium">5-Star Rated</span>
            </div>
          </motion.div>

          {/* Primary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            {/* Phone CTA */}
            <a
              href="tel:0404962022"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-pink-500 hover:bg-pink-600 text-white font-bold text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              Call 0402253279
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Email CTA */}
            <a
              href="mailto:info@topspotmortgage.co.uk"
              className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-pink-400/60 hover:border-pink-400 text-white font-bold text-lg rounded-full transition-all duration-300 hover:bg-pink-500/10"
            >
              <Mail className="w-6 h-6" />
              Email us now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}