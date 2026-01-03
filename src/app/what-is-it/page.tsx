import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/Icon"
import HeroBackground from "@/components/HeroBackground"

export default function WhatIsItPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <HeroBackground imagePath="/hero-bg/8.png">
        <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full mb-8 border border-white/20">
          <Icon name="rocket.svg" className="h-5 w-5" width={20} height={20} />
          <span className="font-medium text-white text-sm uppercase tracking-tight">What Is It</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black uppercase mb-8 leading-tight tracking-tight">
          The Pre-Credit Operating System That Makes SMBs Bankable
          <br />
          <span className="text-white">Before They Earn a Dollar</span>
        </h1>
        <div className="bg-white/5 rounded-2xl p-8 border border-white/10 max-w-3xl mx-auto mb-8">
          <p className="text-lg text-white/90 mb-4 font-medium">
            Most fintechs say they support small business.
          </p>
          <p className="text-xl font-bold text-white">
            The truth is: they only support them after revenue already exists.
          </p>
        </div>
        <p className="text-lg text-white mb-12 max-w-3xl mx-auto font-semibold">
          LumiqAI fixes the broken middle, the moment where capable, disciplined businesses are filtered out by blunt rules, lazy proxies, and inherited fear.
          <br />
          <span className="text-white/90">Not because they&apos;re bad risks, but because no system exists to let them prove themselves safely.</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            size="lg"
            className="bg-black/30 text-white border border-white/10 px-10 py-4 text-lg font-bold uppercase"
          >
            Request a Private Pilot
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/10 text-white hover:text-white px-8 py-4 text-lg uppercase bg-transparent"
          >
            Learn More
          </Button>
        </div>
      </HeroBackground>

      {/* The Industry Contradiction */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full mb-8 border border-white/30">
              <Icon name="idea.svg" className="h-5 w-5" width={20} height={20} />
              <span className="font-medium text-white text-sm uppercase">The Industry Contradiction</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              Every Fintech Quietly Hides
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-white/90 mb-8 font-medium text-center">
              Fintech sells itself as modern.
            </p>
            <p className="text-lg text-white mb-8 font-semibold text-center">
              But when ambiguity hits:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="p-6 border border-white/10 bg-white/5">
                <CardContent className="p-0">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <div className="text-white font-semibold">Underwriters retreat to owner FICO</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6 border border-white/10 bg-white/5">
                <CardContent className="p-0">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <div className="text-white font-semibold">Product teams default to crude revenue brackets</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6 border border-white/10 bg-white/5">
                <CardContent className="p-0">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <div className="text-white font-semibold">Banks lean on thin-file heuristics</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6 border border-white/10 bg-white/5">
                <CardContent className="p-0">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <div className="text-white font-semibold">RBF gates assume survival already occurred</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 mb-8">
              <p className="text-white font-bold text-lg mb-4 text-center">Why?</p>
              <p className="text-white/90 font-medium text-center">
                Because uncertainty scares balance sheets.
              </p>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl border-2 border-white/20">
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <img src="/fintech Assets/Ramp Card.webp" alt="Ramp Card" className="w-full h-32 object-contain rounded-lg" />
                <img src="/fintech Assets/Relay Card.png" alt="Relay Card" className="w-full h-32 object-contain rounded-lg" />
              </div>
              <p className="text-white font-semibold mb-4 text-center">
                So when revenue is low and business credit files don&apos;t exist, the system trusts:
              </p>
              <p className="text-xl font-bold text-white text-center">
                The founder&apos;s personal past, not the business&apos;s future.
              </p>
            </div>

            <div className="mt-8 bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
              <p className="text-white font-bold text-lg">
                This isn&apos;t innovation.<br />
                This is risk avoidance dressed in better UI.
              </p>
              <p className="text-white/90 font-medium mt-4">
                It feels modern, but it is still anchored in history, not potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Real Cost of Current Approaches */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              The Real Cost of Current Approaches
            </h2>
            <p className="text-xl text-white/90 font-medium">
              Here&apos;s what your funnel doesn&apos;t tell you:
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 mb-8">
              <p className="text-2xl font-bold text-white text-center mb-4">
                You don&apos;t lose customers later.
              </p>
              <p className="text-xl font-bold text-white text-center">
                You lose them before they even begin.
              </p>
            </div>

            <p className="text-lg text-white/90 mb-8 font-semibold text-center">
              You reject:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="p-6 border border-white/10 bg-white/5">
                <CardContent className="p-0">
                  <div className="text-white font-semibold">Disciplined operators</div>
                </CardContent>
              </Card>
              <Card className="p-6 border border-white/10 bg-white/5">
                <CardContent className="p-0">
                  <div className="text-white font-semibold">Early-stage LLCs</div>
                </CardContent>
              </Card>
              <Card className="p-6 border border-white/10 bg-white/5">
                <CardContent className="p-0">
                  <div className="text-white font-semibold">Service-based ventures with contracts</div>
                </CardContent>
              </Card>
              <Card className="p-6 border border-white/10 bg-white/5">
                <CardContent className="p-0">
                  <div className="text-white font-semibold">Founders yet to monetize</div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl border-2 border-white/20 text-center">
              <p className="text-white font-bold text-lg mb-2">
                Not because they&apos;re bad risks,
              </p>
              <p className="text-white font-bold text-lg">
                but because your stack lacks a way for them to earn trust incrementally.
              </p>
              <p className="text-white/90 font-semibold mt-4">
                That&apos;s the moment every modern fintech misses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Radical Insight */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              The Radical Insight
            </h2>
            <p className="text-3xl font-bold text-white mb-8">
              Progression Is the New Credit
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border border-white/10 bg-white/5">
              <CardContent className="p-0">
                <h3 className="font-bold text-2xl text-white mb-6 uppercase">Underwriting Today Uses:</h3>
                <div className="space-y-4">
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10">
                    <div className="text-white font-semibold">Pass/Fail gates</div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10">
                    <div className="text-white font-semibold">Static thresholds</div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10">
                    <div className="text-white font-semibold">Binary outcomes</div>
                  </div>
                </div>
                <div className="mt-6 bg-white/5 p-4 rounded-xl border border-white/10">
                  <p className="text-white/80 text-sm font-medium">
                    That&apos;s it. No progression state. No learning. No visibility. No earned evolution.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-white/20 bg-white/10">
              <CardContent className="p-0">
                <h3 className="font-bold text-2xl text-white mb-6 uppercase">LumiqAI Introduces:</h3>
                <div className="bg-white/20 p-6 rounded-2xl mb-6 text-center">
                  <div className="mb-4">
                    <img src="/fintech Assets/Loan Amount.avif" alt="Loan Amount" className="w-full h-32 object-contain mx-auto" />
                  </div>
                  <div className="text-2xl font-black text-white uppercase">Measured Opportunity</div>
                </div>
                <div className="space-y-3">
                  <p className="text-white font-semibold">Not charity.</p>
                  <p className="text-white font-semibold">Not reckless exposure.</p>
                  <p className="text-white font-semibold">Not blind optimism.</p>
                </div>
                <div className="mt-6 bg-white/10 p-4 rounded-xl border border-white/20">
                  <p className="text-white font-bold">
                    Structured, observable progression that becomes capacity.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Difference in One Picture */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              The Difference in One Picture
            </h2>
            <p className="text-xl text-white/90 font-medium">
              This is why some platforms compound and others leak.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Traditional Fintech Funnel */}
            <Card className="p-8 border border-white/10 bg-white/5">
              <CardContent className="p-0">
                <h3 className="font-bold text-2xl text-white mb-6 uppercase">Traditional Fintech Funnel</h3>
                <div className="space-y-4">
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10 text-center">
                    <div className="text-white font-bold">Application</div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10 text-center">
                    <div className="text-white font-bold">Binary underwriting</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/10 p-3 rounded-lg border border-white/10 text-center">
                      <div className="text-white font-semibold text-sm">Pass</div>
                    </div>
                    <div className="bg-black/30 p-3 rounded-lg border border-white/10 text-center">
                      <div className="text-white font-semibold text-sm">Fail</div>
                    </div>
                  </div>
                  <div className="space-y-2 bg-white/5 p-4 rounded-xl border border-white/10">
                    <div className="text-white/80 text-xs">• Revenue threshold check</div>
                    <div className="text-white/80 text-xs">• Fear under uncertainty</div>
                    <div className="text-white/80 text-xs">• Owner FICO fallback</div>
                    <div className="text-white/80 text-xs">• No learning state</div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10 text-center">
                    <div className="text-white font-bold">Decline / Churn</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <div className="text-white/80 text-xs">• CAC leaks here</div>
                    <div className="text-white/80 text-xs">• Good operators lost</div>
                    <div className="text-white/80 text-xs">• Future revenue that never existed</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* LumiqAI Progression Funnel */}
            <Card className="p-8 border-2 border-white/20 bg-white/10">
              <CardContent className="p-0">
                <h3 className="font-bold text-2xl text-white mb-6 uppercase">LumiqAI Progression Funnel</h3>
                <div className="space-y-3">
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20 text-center">
                    <div className="text-white font-bold">1. Structural visibility</div>
                    <div className="text-white/80 text-xs mt-1">Measured Opportunity</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20 text-center">
                    <div className="text-white font-bold">2. Credit & readiness awareness</div>
                    <div className="text-white/80 text-xs mt-1">Progress replaces fear</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20 text-center">
                    <div className="text-white font-bold">3. Probationary exposure</div>
                    <div className="text-white/80 text-xs mt-1">Behavior over history</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20 text-center">
                    <div className="text-white font-bold">4. Observable behavior</div>
                    <div className="text-white/80 text-xs mt-1">Every step observable</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20 text-center">
                    <div className="text-white font-bold">5. Earned limits</div>
                    <div className="text-white/80 text-xs mt-1">Trust compounds</div>
                  </div>
                  <div className="bg-white/20 p-4 rounded-xl border-2 border-white/30 text-center">
                    <div className="mb-2">
                      <img src="/fintech Assets/Loans.png" alt="Loans" className="w-full h-20 object-contain mx-auto" />
                    </div>
                    <div className="text-white font-bold">6. Product graduation (RBF / lending)</div>
                    <div className="text-white/90 text-xs mt-1">Retained & graduated</div>
                  </div>
                </div>
                <div className="mt-6 bg-white/10 p-4 rounded-xl border border-white/20">
                  <div className="text-white font-bold text-sm">Revenue created inside your platform</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center max-w-4xl mx-auto">
            <p className="text-white font-bold text-xl mb-2">
              One model rejects uncertainty.
            </p>
            <p className="text-white font-bold text-xl">
              The other turns uncertainty into data.
            </p>
          </div>
        </div>
      </section>

      {/* The Deeper Truth */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              The Deeper Truth: SMBs Are Flying Blind
            </h2>
            <p className="text-xl text-white/90 font-medium">
              And Your Platform Is Too
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-white/90 mb-8 font-medium text-center">
              SMBs don&apos;t know how they look to financial systems:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="p-6 border border-white/10 bg-white/5">
                <CardContent className="p-0">
                  <div className="text-white font-semibold">Their true personal credit context</div>
                </CardContent>
              </Card>
              <Card className="p-6 border border-white/10 bg-white/5">
                <CardContent className="p-0">
                  <div className="text-white font-semibold">Their business credit status</div>
                </CardContent>
              </Card>
              <Card className="p-6 border border-white/10 bg-white/5">
                <CardContent className="p-0">
                  <div className="text-white font-semibold">Why they&apos;re treated as &quot;not ready&quot;</div>
                </CardContent>
              </Card>
              <Card className="p-6 border border-white/10 bg-white/5">
                <CardContent className="p-0">
                  <div className="text-white font-semibold">What precisely disqualifies them</div>
                </CardContent>
              </Card>
              <Card className="p-6 border border-white/10 bg-white/5 md:col-span-2">
                <CardContent className="p-0">
                  <div className="text-white font-semibold">How close they really are to qualification</div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-8">
              <p className="text-white font-semibold text-center mb-2">
                So they guess. They apply blindly. They get rejected. They disengage.
              </p>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl border-2 border-white/20 text-center">
              <p className="text-2xl font-bold text-white">
                LumiqAI ends that blindness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LumiqAI Is the Credit Visibility Layer */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              LumiqAI Is the Credit Visibility Layer on Top of Your Stack
            </h2>
            <p className="text-xl text-white/90 font-medium">
              This isn&apos;t a score report. This is actionable visibility.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-white/90 mb-8 font-semibold text-center">
              LumiqAI gives every business owner:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="mb-4">
                    <img src="/fintech Assets/New Credit Limit.avif" alt="Credit Limit" className="w-full h-32 object-cover rounded-lg" />
                  </div>
                  <div className="text-white font-bold text-lg mb-2">Personal VantageScore in business context</div>
                  <div className="text-white/80 text-sm">See your score in context, not isolation</div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="mb-4">
                    <img src="/fintech Assets/Approval Screenshot.avif" alt="Approval" className="w-full h-32 object-cover rounded-lg" />
                  </div>
                  <div className="text-white font-bold text-lg mb-2">Business credit visibility</div>
                  <div className="text-white/80 text-sm">Normalized, explained, and product-linked</div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="mb-4">
                    <img src="/fintech Assets/Revenue Screenshot.svg" alt="Revenue" className="w-full h-32 object-cover rounded-lg" />
                  </div>
                  <div className="text-white font-bold text-lg mb-2">Revenue readiness maps</div>
                  <div className="text-white/80 text-sm">Tied to your own product offers</div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="mb-4">
                    <img src="/fintech Assets/Personalised Offers.svg" alt="Personalized Offers" className="w-full h-32 object-cover rounded-lg" />
                  </div>
                  <div className="text-white font-bold text-lg mb-2">Explicit goal states</div>
                  <div className="text-white/80 text-sm">&quot;This is what unlocks Product X&quot;</div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl border-2 border-white/20 text-center">
              <p className="text-white font-bold text-lg mb-2">
                + A living, owned progression roadmap showing exactly what moves the needle
              </p>
              <p className="text-white/90 font-semibold">
                This is not education.<br />
                This is product-linked truth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When SMBs Can See The Path Ahead */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              When SMBs Can See The Path Ahead
            </h2>
            <p className="text-2xl font-bold text-white mb-8">
              They don&apos;t churn.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-white/90 mb-8 font-semibold text-center">
              They stay to:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="mb-4">
                    <img src="/fintech Assets/Amounts.svg" alt="Amounts" className="w-full h-24 object-contain" />
                  </div>
                  <div className="text-white font-semibold">Watch their score rise</div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="mb-4">
                    <img src="/fintech Assets/Approvals.svg" alt="Approvals" className="w-full h-24 object-contain" />
                  </div>
                  <div className="text-white font-semibold">Explore what unlocks next</div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="mb-4">
                    <img src="/fintech Assets/Users Retained.svg" alt="Users Retained" className="w-full h-24 object-contain" />
                  </div>
                  <div className="text-white font-semibold">Test themselves against real product gates</div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="mb-4">
                    <img src="/fintech Assets/Lower Abandon Rates.svg" alt="Lower Abandon Rates" className="w-full h-24 object-contain" />
                  </div>
                  <div className="text-white font-semibold">Build legitimacy inside your ecosystem</div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center">
              <p className="text-white/90 font-medium mb-4">
                No longer &quot;just a tool&quot;, you become:
              </p>
              <p className="text-2xl font-bold text-white">
                The first place businesses go to become finance-ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Revenue-Based Financing */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              Beyond Revenue-Based Financing
            </h2>
            <h3 className="text-3xl font-bold text-white mb-8">
              Why RBF Is Not Enough
            </h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-white/90 mb-8 font-semibold text-center">
              Revenue-Based Financing (RBF) assumes:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 border border-white/10 bg-white/5">
                <CardContent className="p-0 text-center">
                  <div className="mb-4">
                    <img src="/fintech Assets/Revenue Screenshot 2.svg" alt="Revenue" className="w-full h-32 object-contain mx-auto" />
                  </div>
                  <div className="text-white font-semibold">Revenue already exists</div>
                </CardContent>
              </Card>
              <Card className="p-6 border border-white/10 bg-white/5">
                <CardContent className="p-0 text-center">
                  <div className="mb-4">
                    <img src="/fintech Assets/churn rate.svg" alt="Churn Rate" className="w-full h-32 object-contain mx-auto" />
                  </div>
                  <div className="text-white font-semibold">Consistency already proven</div>
                </CardContent>
              </Card>
              <Card className="p-6 border border-white/10 bg-white/5">
                <CardContent className="p-0 text-center">
                  <div className="mb-4">
                    <img src="/fintech Assets/Users Retained.svg" alt="Users Retained" className="w-full h-32 object-contain mx-auto" />
                  </div>
                  <div className="text-white font-semibold">Survival already achieved</div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-8">
              <div className="mb-4">
                <img src="/fintech Assets/RBF.jpg" alt="RBF" className="w-full h-48 object-cover rounded-lg" />
              </div>
              <p className="text-white font-bold text-lg text-center mt-4">
                Which means: RBF harvests survivors. It does not cultivate them.
              </p>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl border-2 border-white/20 text-center">
              <div className="mb-4">
                <img src="/fintech Assets/RBF COMPANIES.png" alt="RBF Companies" className="w-full max-w-2xl mx-auto h-48 object-contain rounded-lg" />
              </div>
              <p className="text-white/90 font-medium mb-4">
                There&apos;s nothing wrong with harvesting. But it&apos;s incomplete.
              </p>
              <p className="text-xl font-bold text-white">
                LumiqAI feeds the harvest.
              </p>
            </div>

            <div className="mt-8 bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
              <p className="text-white font-semibold mb-2">
                Instead of asking: &quot;Are they ready yet?&quot;
              </p>
              <p className="text-white font-bold text-lg">
                You create a system where readiness is earned, visible, and inevitable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Sequence */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              Delivery Sequence: Not a Product SKU
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <img src="/fintech Assets/process.svg" alt="Process" className="w-full max-w-3xl mx-auto h-auto object-contain rounded-lg" />
            </div>
            <div className="space-y-6 mb-12">
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <div className="text-2xl font-black text-white">1</div>
                    </div>
                    <div className="text-white font-bold text-lg">Pre-revenue businesses gain structural visibility</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <div className="text-2xl font-black text-white">2</div>
                    </div>
                    <div className="text-white font-bold text-lg">Low-revenue businesses enter probationary exposure</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <div className="text-2xl font-black text-white">3</div>
                    </div>
                    <div className="text-white font-bold text-lg">Trust is earned via measurable progress</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <div className="text-2xl font-black text-white">4</div>
                    </div>
                    <div className="text-white font-bold text-lg">Limits increase only when behavior proves it</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 border-2 border-white/20 bg-white/10 text-center">
                <CardContent className="p-0">
                  <div className="mb-4">
                    <img src="/fintech Assets/Approvals.svg" alt="Approvals" className="w-full h-24 object-contain mx-auto" />
                  </div>
                  <div className="text-white font-bold text-lg">Approval rates rise</div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 border-white/20 bg-white/10 text-center">
                <CardContent className="p-0">
                  <div className="mb-4">
                    <img src="/fintech Assets/Lower Abandon Rates.svg" alt="Lower Rates" className="w-full h-24 object-contain mx-auto" />
                  </div>
                  <div className="text-white font-bold text-lg">Defaults fall</div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 border-white/20 bg-white/10 text-center">
                <CardContent className="p-0">
                  <div className="mb-4">
                    <img src="/fintech Assets/churn rate.svg" alt="Churn Rate" className="w-full h-24 object-contain mx-auto" />
                  </div>
                  <div className="text-white font-bold text-lg">CAC leakage stops</div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 border-white/20 bg-white/10 text-center">
                <CardContent className="p-0">
                  <div className="mb-4">
                    <img src="/fintech Assets/Users Retained.svg" alt="Users Retained" className="w-full h-24 object-contain mx-auto" />
                  </div>
                  <div className="text-white font-bold text-lg">Retention accelerates</div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl border-2 border-white/20 text-center">
              <div className="mb-6">
                <img src="/fintech Assets/term loans.jpg" alt="Term Loans" className="w-full max-w-2xl mx-auto h-48 object-cover rounded-lg" />
              </div>
              <p className="text-xl font-bold text-white">
                With LumiqAI, RBF becomes graduation, not the first gate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Read This From Every Fintech Perspective */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              Now Read This From Every Fintech Perspective
            </h2>
          </div>

          <div className="space-y-8 mb-12">
            {/* The Category Winner */}
            <Card className="p-8 border-2 border-white/20 bg-white/10">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <Icon name="trophy.svg" className="h-8 w-8" width={32} height={32} />
                  <h3 className="font-bold text-2xl text-white uppercase">Read this as a The Category Winner</h3>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-6">
                  <p className="text-xl font-bold text-white italic mb-4">
                    &quot;If we rely on owner FICO when revenue is low, we&apos;re just another bank with better UX.&quot;
                  </p>
                </div>
                <p className="text-white/90 mb-4 font-semibold">LumiqAI lets you:</p>
                <div className="space-y-3 mb-6">
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="text-white font-semibold">Sequence trust, not deny it</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="text-white font-semibold">Give SMBs reasons to log in weekly</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="text-white font-semibold">Retain customers before you can even sell them a product</div>
                  </div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <p className="text-white font-bold">
                    You become: &quot;The place businesses start, not just where money sits.&quot;
                  </p>
                  <p className="text-white/90 font-semibold mt-2">That&apos;s category ownership.</p>
                </div>
              </CardContent>
            </Card>

            {/* The Pipeline Transformer */}
            <Card className="p-8 border-2 border-white/20 bg-white/10">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <Icon name="rocket.svg" className="h-8 w-8" width={32} height={32} />
                  <h3 className="font-bold text-2xl text-white uppercase">Read this as a The Pipeline Transformer</h3>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-6">
                  <p className="text-xl font-bold text-white italic mb-4">
                    &quot;We decline too many people who would pay us back if we had let them start smaller.&quot;
                  </p>
                </div>
                <p className="text-white/90 mb-4 font-semibold">LumiqAI turns:</p>
                <div className="space-y-3 mb-6">
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="text-white font-semibold">Rejected applicants into proof pipelines</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="text-white font-semibold">Random churn into staged retention</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="text-white font-semibold">Blind risk into observable readiness</div>
                  </div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <p className="text-white font-bold">
                    You don&apos;t bet on history. You watch capability unfold.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* The Control Layer */}
            <Card className="p-8 border-2 border-white/20 bg-white/10">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <Icon name="safe box.svg" className="h-8 w-8" width={32} height={32} />
                  <h3 className="font-bold text-2xl text-white uppercase">Read this as a The Control Layer</h3>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-6">
                  <p className="text-xl font-bold text-white italic mb-4">
                    &quot;We need defensibility, not inspiration.&quot;
                  </p>
                </div>
                <p className="text-white/90 mb-4 font-semibold">LumiqAI creates:</p>
                <div className="space-y-3 mb-6">
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="text-white font-semibold">Explainable decisions</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="text-white font-semibold">Documented progression logic</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="text-white font-semibold">Measurable milestones</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="text-white font-semibold">Auditable limit escalation</div>
                  </div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <p className="text-white font-bold">
                    Behavior is harder to fake than history, and now it&apos;s observable.
                  </p>
                  <p className="text-white/90 font-semibold mt-2">Risk teams sleep better.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Breakthrough */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              The Breakthrough
            </h2>
            <p className="text-3xl font-bold text-white mb-8">
              You Don&apos;t Compete With Features
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="p-6 border border-white/10 bg-white/5">
                <CardContent className="p-0">
                  <div className="text-white font-semibold">Everyone copies speeds, APIs, UX</div>
                </CardContent>
              </Card>
              <Card className="p-6 border border-white/10 bg-white/5">
                <CardContent className="p-0">
                  <div className="text-white font-semibold">Everyone fights for the same mature SMBs</div>
                </CardContent>
              </Card>
              <Card className="p-6 border border-white/10 bg-white/5">
                <CardContent className="p-0">
                  <div className="text-white font-semibold">Everyone targets the same revenue-qualified accounts</div>
                </CardContent>
              </Card>
              <Card className="p-6 border border-white/10 bg-white/5">
                <CardContent className="p-0">
                  <div className="text-white font-semibold">Everyone goes after the same post-proof businesses</div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl border-2 border-white/20 mb-8">
              <p className="text-xl font-bold text-white mb-4 text-center">
                What LumiqAI owns is something deeper:
              </p>
              <p className="text-2xl font-black text-white text-center uppercase">
                Financial Self-Awareness.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
              <p className="text-white/90 font-medium mb-4">
                The thing incumbents don&apos;t even realize they&apos;re missing.
              </p>
              <p className="text-white font-bold text-lg">
                Whoever owns a business&apos;s self-image owns the long-term customer.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="text-white font-semibold">Once a business understands itself through your system:</div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="text-white font-semibold">Every competitor feels opaque</div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="text-white font-semibold">Every external rejection amplifies your clarity</div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="text-white font-semibold">Every win reinforces your platform</div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 bg-white/10 p-6 rounded-2xl border-2 border-white/20 text-center">
              <p className="text-xl font-bold text-white">
                This is retention as identity, not product utility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Real Land Grab */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              The Real Land Grab
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-white/90 mb-8 font-semibold text-center">
              Once a platform owns:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 border-2 border-white/20 bg-white/10 text-center">
                <CardContent className="p-0">
                  <div className="text-white font-bold">The first visibility</div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 border-white/20 bg-white/10 text-center">
                <CardContent className="p-0">
                  <div className="text-white font-bold">The first trust</div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 border-white/20 bg-white/10 text-center">
                <CardContent className="p-0">
                  <div className="text-white font-bold">The first earned limits</div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl border-2 border-white/20 text-center">
              <p className="text-xl font-bold text-white mb-4">
                Switching stops being rational.
              </p>
              <p className="text-xl font-bold text-white">
                It becomes emotional.
              </p>
            </div>

            <div className="mt-8 bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
              <p className="text-2xl font-bold text-white italic">
                &quot;No one leaves who believed in us before anyone else did.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* This Is Not Lending */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              This Is Not Lending
            </h2>
            <p className="text-3xl font-bold text-white mb-8">
              This Is System Architecture
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-white/90 mb-8 font-semibold text-center">
              LumiqAI does not ask you to:
            </p>

            <div className="space-y-4 mb-12">
              <Card className="p-6 border border-white/10 bg-white/5">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl font-black text-white/60">✕</div>
                    <div className="text-white font-semibold">take blind risk</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6 border border-white/10 bg-white/5">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl font-black text-white/60">✕</div>
                    <div className="text-white font-semibold">override compliance</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6 border border-white/10 bg-white/5">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl font-black text-white/60">✕</div>
                    <div className="text-white font-semibold">challenge sponsor relationships</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="text-lg text-white/90 mb-8 font-semibold text-center">
              It gives you:
            </p>

            <div className="space-y-4 mb-12">
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="text-white font-semibold">A defensible middle path</div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="text-white font-semibold">A way to say &quot;yes, carefully&quot;</div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="text-white font-semibold">A way to turn &quot;not yet&quot; into &quot;watch this unfold&quot;</div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-8">
              <p className="text-white font-semibold text-center mb-4">It aligns:</p>
              <div className="grid md:grid-cols-5 gap-3">
                <div className="text-white font-semibold text-center text-sm">Product</div>
                <div className="text-white font-semibold text-center text-sm">Risk</div>
                <div className="text-white font-semibold text-center text-sm">Revenue</div>
                <div className="text-white font-semibold text-center text-sm">Marketing</div>
                <div className="text-white font-semibold text-center text-sm">Strategy</div>
              </div>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl border-2 border-white/20 text-center">
              <p className="text-xl font-bold text-white">
                Around one fundamental truth:
              </p>
              <p className="text-lg text-white/90 font-semibold mt-4">
                Businesses deserve a chance to prove themselves<br />
                without being set up to fail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Bigger Vision */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              The Bigger Vision: The Mark You Leave on Finance
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-8 text-center">
              <p className="text-xl font-bold text-white">
                If finance only funds what already works,<br />
                we don&apos;t build economies.<br />
                We freeze them.
              </p>
            </div>

            <p className="text-lg text-white/90 mb-8 font-semibold text-center">
              LumiqAI does something radical:
            </p>

            <div className="space-y-4 mb-12">
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">🔹</div>
                    <div className="text-white font-semibold">Replace inherited fear with observable progress</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">🔹</div>
                    <div className="text-white font-semibold">Replace binary rejection with earned trust</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">🔹</div>
                    <div className="text-white font-semibold">Replace blind underwriting with deep visibility</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">🔹</div>
                    <div className="text-white font-semibold">Expand access without expanding risk</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">🔹</div>
                    <div className="text-white font-semibold">Grow revenue without harvesting only survivors</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">🔹</div>
                    <div className="text-white font-semibold">Build future revenue streams before they exist</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white/10 p-8 rounded-2xl border-2 border-white/20 text-center">
              <p className="text-xl font-bold text-white mb-2">
                This is how finance evolves.
              </p>
              <p className="text-xl font-bold text-white mb-2">
                This is how economies grow.
              </p>
              <p className="text-xl font-bold text-white">
                This is how you win the SMB era.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-white/5 p-12 rounded-3xl border border-white/10 mb-12">
            <p className="text-3xl md:text-4xl font-bold text-white leading-tight mb-8">
              Every fintech will eventually arrive here.
            </p>
            <div className="bg-white/10 p-8 rounded-2xl border border-white/20 max-w-2xl mx-auto mb-8">
              <p className="text-xl text-white/90 mb-4 font-medium">
                The only question is:
              </p>
              <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Who installs it first,<br />
                and who has to explain later why they didn&apos;t?
              </p>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-white text-black px-10 py-4 text-lg font-semibold rounded-full shadow-lg uppercase mb-4"
          >
            <Icon name="rocket.svg" className="mr-3 h-6 w-6" width={24} height={24} />
            Request a Private Pilot
          </Button>
          <p className="text-sm text-white/70 font-medium">
            We work with one platform per category. No exceptions.
          </p>
          <p className="text-xs text-white/60 font-medium mt-2">
            Private Pilot: Invite Only
          </p>
        </div>
      </section>
    </div>
  )
}
