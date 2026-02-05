// src/components/Details.tsx
export default function Details() {
    return (
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          {/* Label */}
          <div className="text-center mb-10">
            <span className="inline-block px-6 py-2 bg-pink-500/20 text-pink-300 font-medium text-sm uppercase tracking-widest rounded-full border border-pink-400/30">
              WHY TOPSPOT
            </span>
          </div>
  
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-6 leading-tight">
            Local Mortgage Experts
            <br className="hidden md:block" />
            Across Victoria
          </h2>
  
          {/* Intro Paragraph */}
          <p className="text-lg md:text-xl text-gray-300 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
            At Topspot Mortgage Broker, we go beyond comparison — we deliver tailored solutions backed by decades of expertise. From first-home buyers to seasoned investors, we work with over 50 lenders to secure competitive rates, flexible terms, and the right structure for your goals — residential, investment, refinance or commercial — all with complete transparency and zero hidden fees.
          </p>
  
          {/* Grid of Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: 'Residential & First-Home Loans',
                desc: 'Expert pre-approvals, full guidance on grants and concessions, low-deposit pathways, and clear end-to-end support from property search through to settlement.',
              },
              {
                title: 'Investment Property Finance',
                desc: 'Strategic loan structuring for maximum growth, optimal cash-flow, and tax efficiency. Access to specialist lenders and portfolio solutions tailored to your investment strategy.',
              },
              {
                title: 'Commercial & Business Lending',
                desc: 'Customised finance for offices, retail spaces, warehouses, and business premises — with terms aligned to your expansion plans and cash-flow needs.',
              },
              {
                title: 'Refinance & Rate Optimization',
                desc: 'We review your current loan, identify savings opportunities, unlock equity if needed, and manage the entire refinance process seamlessly.',
              },
              {
                title: 'Transparent & Compliant Advice',
                desc: 'Full disclosure of all options, fees, and risks. We prioritize your interests with clear, ASIC-compliant recommendations.',
              },
              {
                title: 'End-to-End Paperwork & Support',
                desc: 'We simplify documentation, coordinate with lenders and solicitors, handle submissions, and provide ongoing reviews beyond settlement.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/15 hover:border-pink-400 transition-all duration-300"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-pink-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
  
          {/* CTA */}
          <div className="text-center mt-12 md:mt-16">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold text-base rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
              Speak to a Topspot Expert Today
            </a>
          </div>
        </div>
      </section>
    )
  }