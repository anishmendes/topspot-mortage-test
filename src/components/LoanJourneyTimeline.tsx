// src/components/LoanJourneyTimeline.tsx
import { motion } from 'framer-motion'
import { Phone, Calculator, FileCheck, Handshake, Home, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: <Phone className="w-8 h-8" />,
    title: 'Get in Touch',
    description: 'Call, email or book online — we listen to your needs and goals first.',
  },
  {
    icon: <Calculator className="w-8 h-8" />,
    title: 'Assess & Compare',
    description: 'We review your finances and compare 50+ lenders to find the best fit.',
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: 'Submit & Track',
    description: 'We handle paperwork, submissions, and keep you updated every step.',
  },
  {
    icon: <Handshake className="w-8 h-8" />,
    title: 'Approval & Settlement',
    description: 'We secure your approval and guide you smoothly through to settlement.',
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: 'Move In & Beyond',
    description: 'Ongoing support to review your loan and help with your next goal.',
  },
]

export default function LoanJourneyTimeline() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Your Loan Journey with Topspot
          </h2>
          <p className="text-lg md:text-xl mt-4 opacity-90 max-w-3xl mx-auto">
            Clear, fast and stress-free — from first call to keys in hand.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-white/20" />

          <div className="grid md:grid-cols-5 gap-10 md:gap-0 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="relative text-center flex flex-col items-center md:pt-12"
              >
                {/* Circle */}
                <div className="relative z-10 mb-6">
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border-2 border-pink-400/40 flex items-center justify-center shadow-xl">
                    {step.icon}
                  </div>
                  {/* Number */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-pink-500 text-white text-sm font-bold flex items-center justify-center border-2 border-white">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 md:mt-20">
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-pink-600 hover:bg-pink-700 text-white font-semibold text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105"
          >
            Start Your Journey Today
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}