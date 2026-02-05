import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Navbar from "./components/Navbar"
// import Footer from "./components/Footer"
import Footer from './components/Footer'
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Services from "./pages/Services"
import OurClients from "./pages/OurClients"
import Contact from "./pages/Contact"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import MortgageCalculatorPage from './pages/MortgageCalculator'
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-slate-900">
        
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/our-clients" element={<OurClients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mortgage-calculator" element={<MortgageCalculatorPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}