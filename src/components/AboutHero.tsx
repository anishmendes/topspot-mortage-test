// src/components/AboutHero.tsx
import image from "../assets/hero.jpg"
export default function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gray-900 text-white">
      {/* Hero JPG Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt="Professional mortgage team meeting"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            About Topspot Mortgage Broker
          </h1>

          <p className="text-lg md:text-xl leading-relaxed mb-10 opacity-95">
            We make home loans simple and stress-free. Whether you're a first-time buyer, investor, or looking to refinance, our expert brokers compare 50+ lenders and guide you from start to finish — with transparent advice and no hidden fees.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
            >
              Book Free Consultation
            </a>

            <a
              href="mailto:info@topspotmortgage.co.uk"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/40 hover:border-white text-white font-semibold rounded-lg transition-all duration-300 hover:bg-white/10"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}