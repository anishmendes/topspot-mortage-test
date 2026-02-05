// src/components/MortgageCalculator.tsx
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState(250000)
  const [interestRate, setInterestRate] = useState(5.5)
  const [termYears, setTermYears] = useState(25)
  const [frequency, setFrequency] = useState<'monthly' | 'fortnightly' | 'weekly'>('monthly')

  const monthly = (() => {
    if (!loanAmount || !interestRate || !termYears) return 0
    const r = interestRate / 100 / 12
    const n = termYears * 12
    return (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) || 0
  })()

  let payment = monthly
  let label = 'per month'

  if (frequency === 'fortnightly') {
    payment = monthly / 2
    label = 'per fortnight'
  } else if (frequency === 'weekly') {
    payment = monthly * 12 / 52
    label = 'per week'
  }

  const totalRepayable = payment * (termYears * (frequency === 'monthly' ? 12 : frequency === 'fortnightly' ? 26 : 52))
  const totalInterest = totalRepayable - loanAmount

  const format = (num: number) =>
    new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', minimumFractionDigits: 2 }).format(num)

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Mortgage Repayment Calculator
            </h2>

            <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
              {/* Inputs */}
              <div className="space-y-10">
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-lg font-medium">Loan Amount</label>
                    <span className="text-xl font-bold text-pink-400">{format(loanAmount)}</span>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="2000000"
                    step="10000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer accent-pink-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-lg font-medium">Interest Rate</label>
                    <span className="text-xl font-bold text-pink-400">{interestRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer accent-pink-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-lg font-medium">Loan Term</label>
                    <span className="text-xl font-bold text-pink-400">{termYears} years</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    step="1"
                    value={termYears}
                    onChange={(e) => setTermYears(Number(e.target.value))}
                    className="w-full h-3 bg-white/20 rounded-lg appearance-none cursor-pointer accent-pink-500"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium mb-3">Payment Frequency</label>
                  <div className="flex flex-wrap gap-3">
                    {['monthly', 'fortnightly', 'weekly'].map((f) => (
                      <button
                        key={f}
                        onClick={() => setFrequency(f as any)}
                        className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all ${
                          frequency === f
                            ? 'bg-pink-600 text-white shadow-lg'
                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                      >
                        {f.charAt(0).toUpperCase() + f.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-10 flex flex-col justify-center border border-white/10">
                <h3 className="text-2xl font-bold text-center mb-10">
                  Estimated Repayment
                </h3>

                <motion.div
                  key={payment}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-12"
                >
                  <p className="text-5xl md:text-6xl font-extrabold text-pink-400 mb-3">
                    {format(payment)}
                  </p>
                  <p className="text-xl text-gray-300">
                    {frequency === 'monthly' ? 'per month' : frequency === 'fortnightly' ? 'per fortnight' : 'per week'}
                  </p>
                </motion.div>

                <div className="grid grid-cols-2 gap-[60px] text-center">
                  <div className="space-y-2">
                    <p className="text-xl md:text-3xl font-bold text-white">
                      {format(totalRepayable)}
                    </p>
                    <p className="text-base text-gray-400">Total repayable</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xl md:text-3xl font-bold text-white">
                      {format(totalInterest)}
                    </p>
                    <p className="text-base text-gray-400">Total interest</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-12 text-center text-sm md:text-base opacity-80">
              This is an estimate only — actual payments vary. Speak to a Topspot advisor for accurate, personalised advice.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}