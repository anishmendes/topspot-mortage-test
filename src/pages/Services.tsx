import ServicesHero from '../components/ServicesHero'
import LoanJourneyTimeline from '../components/LoanJourneyTimeline'
import LoanComparisonTeaser from '../components/LoanComparisonTeaser'

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ServicesHero />
      <LoanJourneyTimeline/>
      <LoanComparisonTeaser />
      {/* Add more sections below if needed */}
    </div>
  )
}