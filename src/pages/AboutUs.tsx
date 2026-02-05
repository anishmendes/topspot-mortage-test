// src/pages/AboutUs.tsx
import AboutHero from '../components/AboutHero'
import Process from '../components/Process'
import Details from '../components/Details'
import FAQs from '../components/FAQs'
export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AboutHero />
      <Process />
      <Details/>
       <FAQs />
      
    </div>
  )
}