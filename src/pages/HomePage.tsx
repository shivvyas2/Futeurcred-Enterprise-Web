import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/Icon"
import { HeroUIStack } from "@/components/hero/HeroUIStack"
import { MobileHeroStack } from "@/components/hero/MobileHeroStack"
import CombinedMarketImpactSection from "@/components/home/CombinedMarketImpactSection"

import BridgeSection from "@/components/home/BridgeSection"
import ProblemHookSection from "@/components/home/ProblemHookSection"
import FintechScoreboardSection from "@/components/home/FintechScoreboardSection"
import LumiqProductsSection from "@/components/home/LumiqProductsSection"
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section - Plaid Style */}
      <section className="relative min-h-screen overflow-hidden -mt-20 pt-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/hero-bg/60.jpg')" }}
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
          {/* Subtle mesh gradient accent */}
          <div 
            className="absolute top-0 right-0 w-1/2 h-full opacity-20"
            style={{
              background: "radial-gradient(ellipse at 70% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">
            {/* Left: Hero Copy */}
            <div className="text-left">
              <div className="inline-flex items-center gap-3 bg-white/10 px-5 py-2.5 rounded-full mb-8 border border-white/20">
                <Icon name="growth.svg" className="h-4 w-4" width={16} height={16} />
                <span className="font-medium text-white text-xs uppercase tracking-wider">Revenue Optimization Alert</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-6 leading-[1.1] tracking-tight">
                Brex, Ramp, Mercury:
                <br />
                <span className="text-white">You&apos;re Leaving Money on the Table</span>
              </h1>
             
              <p className="text-lg md:text-xl text-white/90 mb-10 font-medium max-w-xl leading-relaxed">
                Every major fintech that added credit visibility saw 40%+ revenue growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-white/90 px-8 py-4 text-base font-bold rounded-full"
                >
                  <Icon name="speedometer.svg" className="mr-2 h-5 w-5" width={20} height={20} />
                  Start Free Integration
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border border-white/20 text-white hover:bg-white/10 hover:text-white px-8 py-4 text-base font-medium bg-transparent rounded-full"
                >
                  <Icon name="computer.svg" className="mr-2 h-5 w-5" width={20} height={20} />
                  View API Docs
                </Button>
              </div>

              {/* Key Metrics - Inline style */}
              <div className="flex flex-wrap gap-8">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">+47%</div>
                  <div className="text-sm text-white/70">Conversion increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">+23%</div>
                  <div className="text-sm text-white/70">Accurate approvals</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">85%</div>
                  <div className="text-sm text-white/70">Faster decisions</div>
                </div>
              </div>
            </div>

            {/* Right: Animated UI Stack */}
            <div className="hidden lg:block">
              <HeroUIStack />
            </div>

            {/* Mobile: Stacked Cards */}
            <div className="lg:hidden">
              <MobileHeroStack />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Hook Section */}
      <ProblemHookSection />

      {/* Bridge Section */}
      <BridgeSection />

      {/* Revenue Potential Section - Interactive Fintech Scoreboard */}
      <FintechScoreboardSection />

      {/* Combined Market Impact */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <CombinedMarketImpactSection />
        </div>
      </section>

      {/* LUMIQ AI Products Section */}
      <LumiqProductsSection />

      {/* Integration Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 bg-[#6366F1]/20 px-6 py-3 rounded-full mb-8 border border-[#6366F1]/30">
                <Icon name="hourglass.svg" className="h-5 w-5" width={20} height={20} />
                <span className="font-medium text-[#6366F1] text-sm">Simple Integration Example</span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-8 tracking-tight">
                Integration So Simple,
                <br />
                <span className="text-[#3B82F6]">Your Developers Will Thank You</span>
              </h2>
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-[#6366F1]/20 to-[#8B5CF6]/20 p-3 rounded-xl">
                    <Icon name="hourglass.svg" className="h-6 w-6" width={24} height={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white">15-Minute Setup</h3>
                    <p className="text-[#D1D5DB]">RESTful APIs with comprehensive documentation</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-[#10B981]/20 to-[#059669]/20 p-3 rounded-xl">
                    <Icon name="computer.svg" className="h-6 w-6" width={24} height={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white">Any Tech Stack</h3>
                    <p className="text-[#D1D5DB]">React, Vue, Angular, or pure JavaScript</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-[#8B5CF6]/20 to-[#7C3AED]/20 p-3 rounded-xl">
                    <Icon name="rocket.svg" className="h-6 w-6" width={24} height={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white">Production Ready</h3>
                    <p className="text-[#D1D5DB]">99.9% uptime SLA, enterprise security</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#111827] border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-[#D1D5DB] text-sm font-mono">lumiq-integration.js</span>
              </div>
              <pre className="text-sm text-green-400 overflow-x-auto bg-transparent p-0">
                {`// Add to your application form
const creditScore = await lumiq.getScore({
  businessId: application.businessId,
  includeFactors: true
});

// Display real-time credit visibility
<CreditScoreWidget 
  score={creditScore.lumiq_score}
  factors={creditScore.factors}
  recommendations={creditScore.recommendations}
  onImprove={() => showCreditJourney()}
/>

// Instant pre-qualification
const preQual = await lumiq.prequalify({
  score: creditScore.lumiq_score,
  products: ['line_of_credit', 'term_loan']
});

// Result: 47% higher conversion rates`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Don&apos;t Leave 47% More Revenue
            <br />
            <span className="text-white">On The Table</span>
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Every day without credit intelligence is money lost to competitors who get it.
          </p>
          <p className="text-lg text-white/80 mb-12">
            Join the fintechs already using LUMIQ AI to dominate their markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="bg-white text-black px-10 py-4 text-lg font-semibold rounded-full shadow-lg uppercase"
            >
              <Icon name="speedometer.svg" className="mr-3 h-6 w-6" width={24} height={24} />
              Start Free Integration
              <Icon name="paper plane.svg" className="ml-3 h-6 w-6" width={24} height={24} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:text-white px-8 py-4 text-lg rounded-full bg-transparent"
            >
              <Icon name="computer.svg" className="mr-3 h-5 w-5" width={20} height={20} />
              View Technical Docs
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

