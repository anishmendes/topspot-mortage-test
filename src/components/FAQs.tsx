// src/components/FAQs.tsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'What is a mortgage broker and why use one?',
    answer:
      'A mortgage broker compares loans from multiple lenders to find you the best rates and terms. Our service is usually free for borrowers — lenders pay us when your loan settles.',
  },
  {
    question: 'How much does Topspot charge?',
    answer:
      'Most residential clients pay nothing. We earn commission from lenders. Complex or commercial cases may have a transparent upfront fee — always explained first.',
  },
  {
    question: 'How long does approval take?',
    answer:
      'Pre-approval: 1–3 days. Full approval: 2–4 weeks (depending on lender and documents). We keep you updated at every step.',
  },
  {
    question: 'Can you help first home buyers?',
    answer:
      'Yes — we specialise in first home buyers. We guide you on grants, stamp duty concessions, low-deposit options and government schemes.',
  },
  {
    question: 'What documents do I need to start?',
    answer:
      'Income proof, expenses, savings/deposit details, ID and loan purpose. We give you a clear checklist — no confusion.',
  },
  {
    question: 'Can I refinance my existing loan?',
    answer:
      'Yes. We review your current loan, find better rates or features, calculate savings and manage the switch — including any exit fees.',
  },
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Quick answers to the most common questions about mortgages and our service.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-white/5 transition"
              >
                <span className="text-lg md:text-xl font-semibold">
                  {faq.question}
                </span>
                <span className="text-3xl font-bold text-pink-400">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-8 pt-2 text-gray-200 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-xl opacity-90 mb-6">
            Still have questions? We're happy to help.
          </p>
          <a
            href="/contact"
            className="inline-flex px-10 py-5 bg-pink-500 hover:bg-pink-600 text-white font-semibold text-lg rounded-full shadow-xl transition-all duration-300 hover:scale-105"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </section>
  )
}