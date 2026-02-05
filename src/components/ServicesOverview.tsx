// src/components/ServicesOverview.tsx
import { motion } from 'framer-motion'

const services = [
  {
    icon: '🏠',
    title: 'Home Loan Pre-Approval',
    description: 'Get ready to buy with fast pre-approval and clear borrowing power guidance.',
  },
  {
    icon: '🔄',
    title: 'Refinancing Made Easy',
    description: 'Switch lenders to lower rates, access equity or reduce repayments — we handle it all.',
  },
  {
    icon: '📈',
    title: 'Investment Loans',
    description: 'Build your property portfolio with tailored structures and lender options.',
  },
  {
    icon: '🗝️',
    title: 'First Home Buyer Support',
    description: 'Grants, low-deposit options, and step-by-step help to get on the ladder.',
  },
  {
    icon: '🏢',
    title: 'Commercial & Business Finance',
    description: 'Solutions for offices, retail, warehouses — aligned to your business goals.',
  },
  {
    icon: '🤝',
    title: 'Ongoing Loan Review',
    description: 'Regular check-ins to ensure your loan stays competitive as rates change.',
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="container mx-auto px-6">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mortgage Solutions Made Simple
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
            Whether you're buying your first home, investing, or refinancing — we compare lenders, handle paperwork, and guide you end-to-end with confidence.
          </p>
        </div>

        {/* Horizontal Scrollable Cards */}
        <div className="relative">
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80 md:w-96 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 snap-start"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-200 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Scroll indicators (optional) */}
          <div className="flex justify-center mt-6 space-x-3">
            <div className="w-3 h-3 rounded-full bg-white/30" />
            <div className="w-3 h-3 rounded-full bg-white/30" />
            <div className="w-3 h-3 rounded-full bg-white/30" />
          </div>
        </div>

        {/* CTA below */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="inline-flex items-center px-10 py-5 bg-pink-500 hover:bg-pink-600 text-white font-semibold text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105"
          >
            Speak to an Expert Today →
          </a>
        </div>
      </div>
    </section>
  )
}