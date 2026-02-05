// src/components/WhyChooseUs.tsx
export default function WhyChooseUs() {
    return (
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-6">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Topspot Mortgage Broker?
            </h2>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
              Tailored mortgage solutions that make buying, investing, or refinancing clear, fast, and stress-free.
            </p>
          </div>
  
          {/* Grid of Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">🏠</span>
                <h3 className="text-2xl font-bold">Residential Brokerage</h3>
              </div>
              <p className="text-gray-200 leading-relaxed">
                We guide you end-to-end to secure the right home loan at a competitive rate — first home buyers, movers, or remortgagers.
              </p>
            </div>
  
            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">🏢</span>
                <h3 className="text-2xl font-bold">Commercial Brokerage</h3>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Finance solutions for offices, retail, warehouses, and business premises — aligned to your growth plan.
              </p>
            </div>
  
            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">📈</span>
                <h3 className="text-2xl font-bold">Investment Property Solutions</h3>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Structure for growth and cash-flow with access to a wide panel of lenders — perfect for negative gearing and portfolio building.
              </p>
            </div>
  
            {/* Card 4 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">🔑</span>
                <h3 className="text-2xl font-bold">First-Time Buyer Assistance</h3>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Grants guidance, low-deposit pathways, and clear steps from pre-approval to settlement — making your first home achievable.
              </p>
            </div>
  
            {/* Card 5 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">🔄</span>
                <h3 className="text-2xl font-bold">Refinance & Loan Consulting</h3>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Lower repayments or unlock equity — we compare lenders and manage the switch for you, saving you time and money.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }