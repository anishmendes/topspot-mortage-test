// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-950 to-indigo-950 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Topspot</h3>
            <p className="text-sm leading-relaxed opacity-80 max-w-xs">
              Your trusted mortgage broker in Victoria. We compare 50+ lenders to find the best rates and solutions — residential, investment, refinance, or commercial.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/" className="hover:text-pink-400 transition">Home</a></li>
              <li><a href="/about-us" className="hover:text-pink-400 transition">About Us</a></li>
              <li><a href="/services" className="hover:text-pink-400 transition">Services</a></li>
              <li><a href="/our-clients" className="hover:text-pink-400 transition">Our Clients</a></li>
              <li><a href="/mortgage-calculator" className="hover:text-pink-400 transition">Mortgage Calculator</a></li>
              <li><a href="/contact" className="hover:text-pink-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span>📞</span>
                <a href="tel:+61404962022" className="hover:text-pink-400 transition">0402253279</a>
              </li>
              <li className="flex items-center gap-3">
                <span>✉️</span>
                <a href="mailto:info@topspotmortgage.com.au" className="hover:text-pink-400 transition break-all">
                  info@topspotmortgage.com.au
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span>📍</span>
                <span>Level 12, 123 Collins Street, Melbourne VIC 3000</span>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-3 text-sm mb-8">
              <li><a href="/privacy-policy" className="hover:text-pink-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-400 transition">Terms of Use</a></li>
              <li><a href="#" className="hover:text-pink-400 transition">Credit Guide</a></li>
            </ul>

            <div className="flex gap-5">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition text-xl">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition text-xl">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition text-xl">Instagram</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-sm opacity-70">
          <p>© {new Date().getFullYear()} Topspot Mortgage Broker. All rights reserved.</p>
          <p className="mt-2">
            Authorised Credit Representative (No. 123456) of Australian Credit Licence 123456
          </p>
        </div>
      </div>
    </footer>
  )
}