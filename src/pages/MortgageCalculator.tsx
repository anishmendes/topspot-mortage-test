// src/pages/MortgageCalculator.tsx
import MortgageCalculator from '../components/MortgageCalculator'

export default function MortgageCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Optional top padding / hero-like header */}
      <div className="bg-gradient-to-br from-blue-950 to-indigo-950 text-white py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Mortgage Repayment Calculator
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Instantly see your estimated monthly repayments. Enter loan amount, term and interest rate — get a clear picture before you talk to us.
          </p>
        </div>
      </div>

      {/* Calculator component */}
      <MortgageCalculator />

      {/* Trust / CTA footer */}
      <div className="py-16 bg-white text-center">
        <div className="container mx-auto px-6">
          <p className="text-xl text-gray-700 mb-8">
            This is an estimate only. Speak to a Topspot expert for accurate, personalised advice.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-10 py-5 bg-pink-600 hover:bg-pink-700 text-white font-semibold text-lg rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            Get Personalised Quote →
          </a>
        </div>
      </div>
    </div>
  )
}