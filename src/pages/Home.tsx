// src/pages/Home.tsx
import Hero from '../components/Hero'
import LendersSlider from '../components/LendersSlider'
import WhyChooseUs from '../components/WhyChooseUs'
import ServicesOverview from '../components/ServicesOverview'
import FAQs from '../components/FAQs'
import GoFarSection from '../components/GoFarSection'
import PremiumCTA from '../components/PremiumCTA'
import { motion } from 'framer-motion'  // optional – only if you want animation on stats/CTA

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Component */}
      <Hero />
      <WhyChooseUs />
      <LendersSlider/>
 <ServicesOverview/>
 <FAQs />
 <GoFarSection />
 <PremiumCTA />
     

      
    </div>
  )
}