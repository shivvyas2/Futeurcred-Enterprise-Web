import MissingLayerHero from "@/components/howit/MissingLayerSection"
import StackFlowSimulator from "@/components/howit/StackFlowSimulator"
import OperatingLoopSection from "@/components/howit/OperatingLoopSection"
import DoesAndDoesntSection from "@/components/howit/DoesAndDoesntSection"
import SaferThanStatusQuoSection from "@/components/howit/SaferThanStatusQuoSection"
import DesignedForSponsorsSection from "@/components/howit/DesignedForSponsorsSection"
import WhyThisChangesTheFunnelSection from "@/components/howit/WhyThisChangesTheFunnelSection"
import PremiumCTASection from "@/components/howit/PremiumCTASection"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <MissingLayerHero />

      {/* Where LumiqAI Sits Section */}
      <StackFlowSimulator />

      {/* The Operating Loop Section */}
      <OperatingLoopSection />

      {/* What LumiqAI Does — and Doesn't Do Section */}
      <DoesAndDoesntSection />

      {/* Why This Is Safer Than the Status Quo */}
      <SaferThanStatusQuoSection />

      {/* Designed for Sponsors, Not Around Them */}
      <DesignedForSponsorsSection />

      {/* Why This Changes the Funnel */}
      <WhyThisChangesTheFunnelSection />

      {/* Premium CTA Section */}
      <PremiumCTASection />
    </div>
  )
}