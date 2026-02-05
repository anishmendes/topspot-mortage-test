// src/components/Process.tsx
import { motion } from 'framer-motion'
import { Phone, ClipboardCheck, FileText, CheckCircle, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: 1,
    icon: <Phone className="w-8 h-8 text-pink-400" />,
    title: 'Initial Consultation',
    description: 'Reach out to one of our expert brokers. We listen to your goals, situation, and needs to outline the next steps.',
  },
  {
    number: 2,
    icon: <ClipboardCheck className="w-8 h-8 text-pink-400" />,
    title: 'Financial Assessment',
    description: 'We review your income, expenses, credit, and assets to tailor suitable loan options from 50+ lenders.',
  },
  {
    number: 3,
    icon: <FileText className="w-8 h-8 text-pink-400" />,
    title: 'Loan Approval Process',
    description: 'We do the legwork: paperwork, lender comparisons, submissions, and negotiations — handled by us end-to-end.',
  },
  {
    number: 4,
    icon: <CheckCircle className="w-8 h-8 text-pink-400" />,
    title: 'Settlement & Ongoing Support',
    description: 'We ensure your loan is right for the long-term, with double-checks on rates, features, and post-settlement reviews.',
  },
]

export default function Process() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-pink-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Headline */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
          >
            Let us guide you through the
            <br className="hidden sm:block" />
            <span className="text-pink-400">process</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90"
          >
            A clear, four-step path to the right loan — simple, transparent, and stress-free with Topspot Mortgage Broker.
          </motion.p>
        </div>

        {/* Roadmap */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line (curved roadmap) */}
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50"
            viewBox="0 0 1200 300"
            preserveAspectRatio="none"
          >
            <path
              d="M100 150 Q300 50, 500 150 Q700 250, 900 150 Q1100 50, 1100 150"
              stroke="white"
              strokeWidth="3"
              fill="none"
              strokeDasharray="5 5"
            />
          </svg>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 text-center md:text-left"
              >
                <div className="flex justify-center md:justify-start items-center mb-6">
                  <span className="text-2xl font-bold text-pink-400 mr-4">Step {step.number}</span>
                  {step.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-200 leading-relaxed opacity-90">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 md:mt-20">
          <motion.a
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.2 }}
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-pink-500 hover:bg-pink-600 text-white font-semibold text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105"
          >
            Talk to a broker — 0402253279
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </section>
  )
}