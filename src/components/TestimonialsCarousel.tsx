// src/components/TestimonialsCarousel.tsx
import { motion } from 'framer-motion'
import { Star, Quote , ArrowRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'First-Time Buyer, Chelmsford',
    quote:
      'Topspot made buying my first flat so easy. They explained everything clearly, found me a great rate with low deposit, and handled all the paperwork. Couldn’t be happier!',
    rating: 5,
  },
  {
    name: 'James & Priya K.',
    role: 'Property Investors, Essex',
    quote:
      'We’ve built a portfolio of 5 properties with their help. Their investment advice is spot-on — they saved us thousands on rates and structured everything perfectly for tax.',
    rating: 5,
  },
  {
    name: 'David R.',
    role: 'Business Owner, Brentwood',
    quote:
      'Refinanced our commercial loan through Topspot — lower repayments and unlocked equity for expansion. Professional, fast, no stress. Highly recommend.',
    rating: 5,
  },
  {
    name: 'Emily T.',
    role: 'Home Mover, Basildon',
    quote:
      'Switched lenders and saved £180/month. They managed everything — valuation, paperwork, settlement. Excellent service from start to finish.',
    rating: 5,
  },
]

export default function TestimonialsCarousel() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from people we’ve helped buy, invest, refinance, and grow — just like you.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8 md:gap-12"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              duration: 40,
              ease: 'linear',
              repeat: Infinity,
            }}
            whileHover={{ animationPlayState: 'paused' }}
          >
            {/* First set */}
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-80 md:w-96 bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="flex mb-6">
                  {[...Array(t.rating)].map((_, star) => (
                    <Star key={star} className="w-5 h-5 text-pink-500 fill-pink-500" />
                  ))}
                </div>

                <Quote className="w-10 h-10 text-pink-400/30 mb-4" />

                <p className="text-gray-700 italic leading-relaxed mb-6">
                  “{t.quote}”
                </p>

                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {testimonials.map((t, i) => (
              <div
                key={`dup-${i}`}
                className="flex-shrink-0 w-80 md:w-96 bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="flex mb-6">
                  {[...Array(t.rating)].map((_, star) => (
                    <Star key={star} className="w-5 h-5 text-pink-500 fill-pink-500" />
                  ))}
                </div>

                <Quote className="w-10 h-10 text-pink-400/30 mb-4" />

                <p className="text-gray-700 italic leading-relaxed mb-6">
                  “{t.quote}”
                </p>

                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-pink-600 hover:bg-pink-700 text-white font-semibold text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105"
          >
            Ready to Start? Contact Us
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}