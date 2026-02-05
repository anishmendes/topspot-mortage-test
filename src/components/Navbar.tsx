// src/components/Navbar.tsx
import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { createPortal } from 'react-dom'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'react-hot-toast'
import logo from '../assets/logo.png'

const overlayVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  exit: { opacity: 0 },
}

const modalVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 24, scale: 0.98 },
}

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const Portal = ({ children }: { children: React.ReactNode }) => createPortal(children, document.body)

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [consultOpen, setConsultOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const openConsult = useCallback(() => {
    setConsultOpen(true)
    setMenuOpen(false)
  }, [])

  const closeConsult = useCallback(() => {
    setConsultOpen(false)
    setSubmitted(false)
    setSending(false)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeConsult()
    if (consultOpen) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [consultOpen, closeConsult])

  useEffect(() => {
    if (!consultOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [consultOpen])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    const tId = toast.loading('Submitting your enquiry…')

    try {
      const form = e.currentTarget
      const formData = new FormData(form)
      formData.append('access_key', 'ccd8f2c6-e423-4936-9583-a17e971e9265')
      formData.append('subject', 'New Free Consultation Enquiry — Topspot Mortgage')
      formData.append('form_type', 'Book Consultation')

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()

      if (data.success) {
        setSubmitted(true)
        form.reset()
        toast.success('Thank you! We’ll be in touch soon.', { id: tId })
      } else {
        toast.error(data.message || 'Could not submit.', { id: tId })
      }
    } catch {
      toast.error('Network error. Please try again.', { id: tId })
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Topspot Logo" 
              className="h-12 md:h-16 lg:h-20 w-auto" 
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</Link>
            <Link to="/about-us" className="text-gray-700 hover:text-blue-600 font-medium transition">About Us</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium transition">Services</Link>
            <Link to="/our-clients" className="text-gray-700 hover:text-blue-600 font-medium transition">Our Clients</Link>
            <Link to="/mortgage-calculator" className="text-gray-700 hover:text-blue-600 font-medium transition">Mortgage Calculator</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact Us</Link>

            <button
              onClick={openConsult}
              className="bg-pink-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-pink-700 transition shadow-md"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              aria-label="Toggle Menu"
              className="text-3xl text-gray-700"
            >
              {menuOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial="hidden"
              animate="show"
              exit="exit"
              variants={mobileMenuVariants}
              className="md:hidden bg-white border-t shadow-sm"
            >
              <div className="container mx-auto px-6 py-6 flex flex-col space-y-4 text-center">
                <Link to="/" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-blue-600 py-3 text-lg">Home</Link>
                <Link to="/about-us" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-blue-600 py-3 text-lg">About Us</Link>
                <Link to="/services" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-blue-600 py-3 text-lg">Services</Link>
                <Link to="/our-clients" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-blue-600 py-3 text-lg">Our Clients</Link>
                <Link to="/mortgage-calculator" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-blue-600 py-3 text-lg">Mortgage Calculator</Link>
                <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-blue-600 py-3 text-lg">Contact Us</Link>

                <button
                  onClick={openConsult}
                  className="bg-pink-600 text-white py-3 rounded-lg font-medium hover:bg-pink-700"
                >
                  Book Consultation
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Consultation Modal */}
      <AnimatePresence>
        {consultOpen && (
          <Portal>
            <motion.div
              className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/60"
              variants={overlayVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              onClick={closeConsult}
            >
              <motion.div
                role="dialog"
                aria-modal="true"
                className="relative z-[9999] w-[95%] max-w-4xl rounded-2xl bg-white shadow-2xl p-8 md:p-12"
                variants={modalVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Book a Free Consultation</h3>
                    <p className="text-gray-600 mt-1">Tell us about your needs — we’ll get back to you soon.</p>
                  </div>
                  <button onClick={closeConsult} className="p-2 hover:bg-gray-100 rounded-lg">
                    <IoMdClose className="text-2xl" />
                  </button>
                </div>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h4>
                    <p className="text-gray-600 mb-8">We’ve received your enquiry. A broker will contact you soon.</p>
                    <button onClick={closeConsult} className="px-8 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700">
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

                    <div className="grid md:grid-cols-2 gap-6">
                      <input name="firstName" placeholder="First Name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500" />
                      <input name="lastName" placeholder="Last Name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500" />
                    </div>

                    <input type="email" name="email" placeholder="Email Address" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500" />
                    <input type="tel" name="phone" placeholder="Phone Number" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500" />

                    <select name="service" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500">
                      <option>Residential Brokerage</option>
                      <option>Investment Property Solutions</option>
                      <option>First-Time Buyer Assistance</option>
                      <option>Refinance & Loan Consulting</option>
                      <option>Land & Construction</option>
                    </select>

                    <textarea name="notes" rows={4} placeholder="Tell us more about your situation..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"></textarea>

                    <div className="flex items-start gap-3">
                      <input id="consent" type="checkbox" required className="mt-1" />
                      <label htmlFor="consent" className="text-sm text-gray-600">
                        I consent to Topspot contacting me about my enquiry.
                      </label>
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="submit"
                        disabled={sending}
                        className="flex-1 bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 rounded-lg disabled:opacity-50"
                      >
                        {sending ? 'Sending...' : 'Submit Enquiry'}
                      </button>
                      <button type="button" onClick={closeConsult} className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-50">
                        Cancel
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>
    </>
  )
}