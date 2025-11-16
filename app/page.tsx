import HeroAnimated from "@/components/Heroanimated"
import FeaturesSection from "@/components/Keyfeature"
import DemoSection from "@/components/Demosection"
import ChinguSteps from "@/components/Works"
import PriceSection from "@/components/Price"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">


      {/* Hero Section */}
      <HeroAnimated />

      {/* Key Features Section */}
      <FeaturesSection />


      {/* Demo Video Section */}
      <DemoSection />

      {/* How It Works */}
      <ChinguSteps/>

      {/* Pricing */}
      <PriceSection />

    </div>
  )
}
