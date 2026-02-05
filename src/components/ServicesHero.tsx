// src/components/ServicesHero.tsx
import { motion } from 'framer-motion'
import firstTimeBuyerImg from '../assets/first-time.jpg' // ← import the local image

const services = [
  {
    title: 'Residential & Commercial Brokerage',
    description:
      'Whether you’re buying your first home or financing business premises, we compare the best lender options and tailor everything to your goals. You get clear guidance and full support from pre-approval to settlement.',
    features: [
      'First-home buyers, upgraders, construction & bridging loans',
      'Offices, retail, industrial & medical suites',
      'Fixed, variable, offset & redraw facilities',
      'Complete lender liaison and paperwork handling',
    ],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&auto=format&fit=crop&q=80',
  },
  {
    title: 'Investment Property Solutions',
    description:
      'Grow your portfolio smarter. We help you choose the right loan structure for cash-flow, growth or tax benefits, with access to lenders who specialise in investment properties.',
    features: [
      'Interest-only & principal-and-interest options',
      'Cross-collateral vs standalone security advice',
      'Cash-flow & serviceability analysis',
      'Wide range of specialist investment lenders',
    ],
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&auto=format&fit=crop&q=80',
  },
  {
    title: 'First-Time Buyer Assistance',
    description:
      'Buying your first home? We make it simple. From budgeting and grants to low-deposit options, we walk you through every step so you feel confident and ready.',
    features: [
      'Borrowing power & deposit planning',
      'Grants, concessions & scheme eligibility',
      'Low-deposit & guarantor loan options',
      'Step-by-step support until settlement',
    ],
    image: firstTimeBuyerImg, // ← use the imported local image here
  },
  {
    title: 'Refinance & Loan Consulting',
    description:
      'Want lower repayments, more equity, or better terms? We review your current loan, compare the market, estimate savings and handle the entire switch smoothly.',
    features: [
      'Rate reviews & product comparisons',
      'Equity release & debt consolidation',
      'Clear fee & switching guidance',
      'Ongoing support after refinance',
    ],
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&auto=format&fit=crop&q=80',
  },
  {
    title: 'Land & Construction Loans',
    description:
      'Building your dream home or developing land? We find the right construction loan, manage progress payments and keep your project on budget and on track.',
    features: [
      'Land purchase & development finance',
      'Construction loan stages & drawdowns',
      'Budgeting & progress payment support',
      'Custom homes, commercial & multi-unit projects',
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80',
  },
]

export default function ServicesHero() {
  return (
    <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white">
      {/* Hero Header */}
      <div className="container mx-auto px-6 py-20 md:py-28 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Tailored Mortgage Solutions
        </h1>
        <p className="text-lg md:text-xl max-w-4xl mx-auto opacity-90 leading-relaxed">
          Whether residential, investment, commercial or refinance — we compare lenders, structure your perfect loan, and handle all paperwork so you can move forward with confidence.
        </p>
      </div>

      {/* Services */}
      <div className="container mx-auto px-6 pb-24">
        <div className="space-y-24 md:space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`grid md:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-80 md:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Text */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  {service.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 text-pink-400 text-xl font-bold">•</span>
                      <span className="text-gray-200 text-base md:text-lg">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}