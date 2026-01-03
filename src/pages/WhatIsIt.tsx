import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/Icon"
import { WhatIsItHeroCards } from "@/components/whatisit/WhatIsItHeroCards"
import { WhatIsItMobileCards } from "@/components/whatisit/WhatIsItMobileCards"
import { LegacyUnderwritingSection } from "@/components/whatisit/LegacyUnderwritingSection"
import { ProductClaritySection } from "@/components/whatisit/ProductClaritySection"
import { ProgressEngineSection } from "@/components/whatisit/ProgressEngineSection"
import { EnterpriseCloseSection } from "@/components/whatisit/EnterpriseCloseSection"
import { ContactFormSection } from "@/components/whatisit/ContactFormSection"
import { ArrowRight } from "lucide-react"

export default function WhatIsItPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section - Plaid Style */}
      <section className="relative min-h-screen overflow-hidden -mt-20 pt-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/hero-bg/8.png')" }}
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50" />
          {/* Subtle mesh gradient accent */}
          <div 
            className="absolute top-0 right-0 w-1/2 h-full opacity-20"
            style={{
              background: "radial-gradient(ellipse at 70% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
            {/* Left: Copy */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-white/10 px-5 py-2.5 rounded-full border border-white/20">
                <Icon name="rocket.svg" className="h-4 w-4" width={16} height={16} />
                <span className="font-medium text-white text-xs uppercase tracking-wider">What Is It</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.1] tracking-tight">
                Underwriting rejects potential.
                <br />
                <span className="text-white/90">We reveal it.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/70 font-medium max-w-xl">
                LumiqAI adds identity + behavior signals so fintechs approve earlier and retain longer.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button 
                  size="lg" 
                  className="bg-white text-gray-900 hover:bg-white/90 font-semibold px-8 py-6 text-base rounded-full"
                >
                  Request Private Pilot
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <a 
                  href="#" 
                  className="text-white/70 hover:text-white text-sm font-medium transition-colors underline underline-offset-4"
                >
                  View API Docs
                </a>
              </div>
            </div>

            {/* Right: Card Stack Visual */}
            <div className="hidden lg:block">
              <WhatIsItHeroCards />
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden mt-8">
            <WhatIsItMobileCards />
          </div>
        </div>
      </section>

      {/* The Problem - High Contrast Underwriting Problem Screen */}
      <LegacyUnderwritingSection />


      {/* Screen 3 — Product Clarity */}
      <ProductClaritySection />

      {/* Screen 4 — The Progress Engine */}
      <ProgressEngineSection />

      {/* Screen 5 — Enterprise Close + CTA */}
      <EnterpriseCloseSection />

      {/* Contact Form Section */}
      <ContactFormSection />
    </div>
  )
}
