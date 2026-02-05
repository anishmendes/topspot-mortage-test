// src/pages/Contact.tsx
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white">
      {/* Hero / Intro */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-semibold mb-8"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl opacity-90 leading-relaxed"
          >
            Ready to discuss your mortgage needs? Whether you're buying, refinancing, investing or just have questions — our team is here to help with clear, no-obligation advice.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24">
          {/* Left: Form + Details */}
          <div className="space-y-16">
            {/* Form Card */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-10">
                Send us a message
              </h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-5 py-4 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none text-white placeholder-gray-400"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-5 py-4 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none text-white placeholder-gray-400"
                    required
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-4 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none text-white placeholder-gray-400"
                  required
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-5 py-4 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none text-white placeholder-gray-400"
                  required
                />

                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-5 py-4 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none text-white placeholder-gray-400"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>

            {/* Quick Contact Info */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8">
                <h3 className="text-xl font-medium mb-4">Call Us</h3>
                <a href="tel:+61404962022" className="text-2xl font-semibold text-pink-400 hover:text-pink-300 transition">
                0402253279
                </a>
                <p className="text-gray-400 text-sm mt-2">Mon–Fri 9am–6pm</p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8">
                <h3 className="text-xl font-medium mb-4">Email</h3>
                <a href="mailto:info@topspotmortgage.com.au" className="text-2xl font-semibold text-pink-400 hover:text-pink-300 transition break-all">
                  info@topspotmortgage.com.au
                </a>
              </div>
            </div>
          </div>

          {/* Right: Map + Address */}
          <div className="space-y-8">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.953736315316!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1c4b1d2d8e!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sau!4v1698765432100!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Topspot Mortgage Broker - Melbourne"
              ></iframe>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8">
              <h3 className="text-xl font-medium mb-4">Visit Us</h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Level 12, 123 Collins Street<br />
                Melbourne VIC 3000<br />
                Australia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}