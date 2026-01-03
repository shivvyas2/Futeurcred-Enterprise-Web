import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/Icon"
import HeroBackground from "@/components/HeroBackground"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <HeroBackground imagePath="/hero-bg/3.png">
        <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full mb-8 border border-white/20">
          <Icon name="visions.svg" className="h-5 w-5" width={20} height={20} />
          <span className="font-medium text-white text-sm uppercase tracking-tight">How LUMIQ AI Works</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black uppercase mb-8 leading-tight tracking-tight">
          HOW LUMIQAI WORKS
          <br />
          <span className="text-white">A Pre-Credit Operating Loop</span>
        </h1>
        <p className="text-lg text-white mb-4 font-semibold">
          — Not a Product Feature
        </p>
        <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto font-medium">
          LumiqAI operates upstream of credit — in the phase where uncertainty is highest and traditional systems collapse into binary outcomes.
        </p>
        <div className="bg-white/5 rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
          <p className="text-2xl font-bold text-white">
            Its job is simple and precise:
          </p>
          <p className="text-xl font-semibold text-white mt-4">
            Turn uncertainty into observable progress.
          </p>
        </div>
      </HeroBackground>

      {/* Where LumiqAI Sits Section - Redesigned as Vertical Flow */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              Where LumiqAI Sits
            </h2>
            <p className="text-xl text-white/90 font-medium">
              LumiqAI lives between application and capital.
            </p>
          </div>
          
          {/* Vertical Flow Diagram */}
          <div className="space-y-6">
            {/* Above Layer */}
            <Card className="p-6 border border-white/10 bg-white/5">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-4">
                  <Icon name="rocket.svg" className="h-6 w-6" width={24} height={24} />
                  <h3 className="font-bold text-xl text-white uppercase">ABOVE</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="bg-black/30 p-3 rounded-lg border border-white/10 text-center">
                    <div className="text-white font-semibold text-sm">Banking products</div>
                  </div>
                  <div className="bg-black/30 p-3 rounded-lg border border-white/10 text-center">
                    <div className="text-white font-semibold text-sm">Lending products</div>
                  </div>
                  <div className="bg-black/30 p-3 rounded-lg border border-white/10 text-center">
                    <div className="text-white font-semibold text-sm">Revenue-based financing</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Arrow/Down Indicator */}
            <div className="flex justify-center">
              <div className="w-px h-12 bg-white/20"></div>
            </div>

            {/* LumiqAI Center - Highlighted */}
            <Card className="p-8 border-2 border-white/20 bg-white/10 relative">
              <CardContent className="p-0 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white/10 px-4 py-1 rounded-full border border-white/20">
                    <span className="text-white text-xs font-bold uppercase">The Layer</span>
                  </div>
                </div>
                <div className="bg-white/10 p-8 rounded-2xl mb-4">
                  <Icon name="target.svg" className="h-16 w-16 mx-auto mb-4" width={64} height={64} />
                  <h3 className="font-black text-4xl text-white uppercase mb-2">LumiqAI</h3>
                  <p className="text-white font-semibold text-lg">The Pre-Credit Operating Layer</p>
                </div>
                <p className="text-white/90 text-sm font-medium max-w-md mx-auto">
                  It does not compete with your stack. It feeds it cleaner inputs.
                </p>
              </CardContent>
            </Card>

            {/* Arrow/Down Indicator */}
            <div className="flex justify-center">
              <div className="w-px h-12 bg-white/20"></div>
            </div>

            {/* Below Layer */}
            <Card className="p-6 border border-white/10 bg-white/5">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-4">
                  <Icon name="document.svg" className="h-6 w-6" width={24} height={24} />
                  <h3 className="font-bold text-xl text-white uppercase">BELOW</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="bg-black/30 p-3 rounded-lg border border-white/10 text-center">
                    <div className="text-white font-semibold text-sm">Core underwriting logic</div>
                  </div>
                  <div className="bg-black/30 p-3 rounded-lg border border-white/10 text-center">
                    <div className="text-white font-semibold text-sm">Sponsor bank policies</div>
                  </div>
                  <div className="bg-black/30 p-3 rounded-lg border border-white/10 text-center">
                    <div className="text-white font-semibold text-sm">Approval authority</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Operating Loop Section - Timeline Style */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full mb-8 border border-white/30">
              <Icon name="connection.svg" className="h-5 w-5" width={20} height={20} />
              <span className="font-medium text-white text-sm">The Operating Loop</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              THE OPERATING LOOP
            </h2>
            <p className="text-xl text-white/90 font-medium">
              LumiqAI runs as a continuous, observable loop
            </p>
          </div>

          {/* Timeline Style Layout - Alternating Left/Right */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-white/10" style={{ top: '0', bottom: '0' }}></div>

            <div className="space-y-12">
              {/* Step 1 - Left */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2 md:pr-12">
                  <Card className="p-8 bg-white/5 border border-white/10">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-white/10 p-3 rounded-xl">
                          <div className="text-2xl font-black text-white">1</div>
                        </div>
                        <h3 className="font-bold text-2xl text-white uppercase">Visibility</h3>
                      </div>
                      <p className="text-white/90 mb-3 font-medium">
                        Every business begins with visibility — not judgment.
                      </p>
                      <p className="text-white/80 text-sm mb-4">
                        LumiqAI establishes personal credit context, business credit presence, entity hygiene, and baseline readiness indicators.
                      </p>
                      <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                        <p className="text-white font-semibold text-sm">
                          No decisions are made here. Only reality is made visible.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="hidden md:block w-12 h-12 bg-white/10 rounded-full border-2 border-white/20 flex items-center justify-center relative z-10">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="w-full md:w-1/2"></div>
              </div>

              {/* Step 2 - Right */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2"></div>
                <div className="hidden md:block w-12 h-12 bg-white/10 rounded-full border-2 border-white/20 flex items-center justify-center relative z-10">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="w-full md:w-1/2 md:pl-12">
                  <Card className="p-8 bg-white/5 border border-white/10">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-white/10 p-3 rounded-xl">
                          <div className="text-2xl font-black text-white">2</div>
                        </div>
                        <h3 className="font-bold text-2xl text-white uppercase">Contextual Understanding</h3>
                      </div>
                      <p className="text-white/90 mb-3 font-medium">
                        Instead of asking &quot;Do they qualify?&quot;, LumiqAI asks:
                      </p>
                      <div className="bg-white/5 p-4 rounded-xl border border-white/10 mb-3">
                        <p className="text-white font-semibold text-sm italic">
                          &quot;What is structurally true about this business right now?&quot;
                        </p>
                      </div>
                      <p className="text-white/80 text-sm mb-4">
                        — explaining why a business is considered &quot;not ready&quot; and which factors matter for which products.
                      </p>
                      <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                        <p className="text-white font-semibold text-sm">
                          This is where blind rejection ends.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Step 3 - Left */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2 md:pr-12">
                  <Card className="p-8 bg-white/5 border border-white/10">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-white/10 p-3 rounded-xl">
                          <div className="text-2xl font-black text-white">3</div>
                        </div>
                        <h3 className="font-bold text-2xl text-white uppercase">Measured Opportunity</h3>
                      </div>
                      <p className="text-white/90 mb-3 font-medium">
                        A controlled, sponsor-safe middle state.
                      </p>
                      <div className="space-y-2 mb-4">
                        <p className="text-white/80 text-sm">• Exposure is capped.</p>
                        <p className="text-white/80 text-sm">• Progression is conditional.</p>
                        <p className="text-white/80 text-sm">• Behavior is observed, not assumed.</p>
                        <p className="text-white/80 text-sm">• No trust is given freely — all trust is earned and documented.</p>
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                        <p className="text-white font-semibold text-sm">
                          The third state between approve and decline.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="hidden md:block w-12 h-12 bg-white/10 rounded-full border-2 border-white/20 flex items-center justify-center relative z-10">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="w-full md:w-1/2"></div>
              </div>

              {/* Step 4 - Right */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2"></div>
                <div className="hidden md:block w-12 h-12 bg-white/10 rounded-full border-2 border-white/20 flex items-center justify-center relative z-10">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="w-full md:w-1/2 md:pl-12">
                  <Card className="p-8 bg-white/5 border border-white/10">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-white/10 p-3 rounded-xl">
                          <div className="text-2xl font-black text-white">4</div>
                        </div>
                        <h3 className="font-bold text-2xl text-white uppercase">Observable Progression</h3>
                      </div>
                      <p className="text-white/90 mb-3 font-medium">
                        Behaviors are observed. Signals are recorded. Milestones are tracked.
                      </p>
                      <div className="space-y-2 mb-4">
                        <p className="text-white/80 text-sm">• Progress is incremental, auditable, and reversible.</p>
                        <p className="text-white/80 text-sm">• Nothing relies on optimism or projections.</p>
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                        <p className="text-white font-semibold text-sm">
                          Behavior replaces history as the signal.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Step 5 - Left */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2 md:pr-12">
                  <Card className="p-8 bg-white/5 border border-white/10">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-white/10 p-3 rounded-xl">
                          <div className="text-2xl font-black text-white">5</div>
                        </div>
                        <h3 className="font-bold text-2xl text-white uppercase">Earned Escalation</h3>
                      </div>
                      <p className="text-white/90 mb-3 font-medium">
                        When observable milestones are met, access increases.
                      </p>
                      <div className="space-y-2 mb-4">
                        <p className="text-white/80 text-sm">• Limits expand.</p>
                        <p className="text-white/80 text-sm">• Products unlock.</p>
                        <p className="text-white/80 text-sm">• Escalation is rule-based, explainable, sponsor-governed, and human-overridable.</p>
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                        <p className="text-white font-semibold text-sm">
                          No step is automatic without proof.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="hidden md:block w-12 h-12 bg-white/10 rounded-full border-2 border-white/20 flex items-center justify-center relative z-10">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="w-full md:w-1/2"></div>
              </div>

              {/* Step 6 - Right */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2"></div>
                <div className="hidden md:block w-12 h-12 bg-white/10 rounded-full border-2 border-white/20 flex items-center justify-center relative z-10">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="w-full md:w-1/2 md:pl-12">
                  <Card className="p-8 bg-white/5 border border-white/10">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-white/10 p-3 rounded-xl">
                          <div className="text-2xl font-black text-white">6</div>
                        </div>
                        <h3 className="font-bold text-2xl text-white uppercase">Graduation Into Your Products</h3>
                      </div>
                      <p className="text-white/90 mb-3 font-medium">
                        The customer arrives ready — inside your ecosystem.
                      </p>
                      <p className="text-white/80 text-sm mb-4">
                        The business graduates into your lending products, RBF offerings, or higher-tier banking services. Approval risk is lower, context is richer, loyalty is established.
                      </p>
                      <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                        <p className="text-white font-semibold text-sm">
                          Revenue created, not harvested.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What LumiqAI Does Section - Side by Side with Icons */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              What LumiqAI Does — and Doesn&apos;t Do
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* What LumiqAI Observes */}
            <Card className="p-8 border border-white/10 bg-white/5">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white/10 p-4 rounded-2xl">
                    <Icon name="Binoculars.svg" className="h-8 w-8" width={32} height={32} />
                  </div>
                  <h3 className="font-bold text-2xl text-white uppercase">What LumiqAI Observes</h3>
                </div>
                <p className="text-white/90 mb-6 font-medium">
                  Signals that compound trust:
                </p>
                <div className="space-y-3">
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10 flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="text-white font-semibold">Consistency of behavior</div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10 flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="text-white font-semibold">Reporting discipline</div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10 flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="text-white font-semibold">Cashflow patterns (where applicable)</div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10 flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="text-white font-semibold">Structural readiness indicators</div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10 flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="text-white font-semibold">Progression against defined milestones</div>
                  </div>
                </div>
                <div className="mt-6 bg-white/10 p-4 rounded-xl border border-white/10">
                  <p className="text-white text-sm font-medium">
                    These signals inform progression, explain decisions, and reduce uncertainty.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* What LumiqAI Does Not Do */}
            <Card className="p-8 border border-white/10 bg-white/5">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white/10 p-4 rounded-2xl">
                    <Icon name="safe box.svg" className="h-8 w-8" width={32} height={32} />
                  </div>
                  <h3 className="font-bold text-2xl text-white uppercase">What LumiqAI Does Not Do</h3>
                </div>
                <p className="text-white/90 mb-6 font-medium">
                  This is intentional:
                </p>
                <div className="space-y-3">
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10 flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="text-white font-semibold">Move funds</div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10 flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="text-white font-semibold">Approve credit alone</div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10 flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="text-white font-semibold">Override sponsor rules</div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10 flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="text-white font-semibold">Replace your underwriting models</div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10 flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="text-white font-semibold">Force exposure increases</div>
                  </div>
                </div>
                <div className="mt-6 bg-white/10 p-4 rounded-xl border border-white/10">
                  <p className="text-white text-sm font-medium">
                    LumiqAI is a control layer, not a risk engine.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why This Is Safer Section - Dynamic Comparison */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              Why This Is Safer Than the Status Quo
            </h2>
            <p className="text-xl text-white/90 font-medium">
              When uncertainty appears, most systems default to blind decisions.
            </p>
          </div>

          {/* Header Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6 border border-white/10 bg-white/5">
              <CardContent className="p-0">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                    <Icon name="loss.svg" className="h-10 w-10" width={40} height={40} />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-white uppercase mb-1">Status Quo Defaults</h3>
                    <p className="text-white/60 text-sm font-medium">Traditional approach</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-white/20 bg-white/10">
              <CardContent className="p-0">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-4 rounded-2xl border border-white/20">
                    <Icon name="growth.svg" className="h-10 w-10" width={40} height={40} />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-white uppercase mb-1">LumiqAI Replaces With</h3>
                    <p className="text-white/80 text-sm font-medium">Intelligent alternative</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Comparison Items - Side by Side */}
          <div className="space-y-6 mb-12">
            {/* Item 1 */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl flex-shrink-0">
                      <div className="text-2xl font-black text-white/50">→</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-lg mb-2">Owner FICO</div>
                      <div className="text-white/60 text-sm font-medium">Single point of failure</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 border-2 border-white/20 bg-white/10 hover:bg-white/15 transition-all">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl flex-shrink-0">
                      <div className="text-2xl font-black text-white">→</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-lg mb-2">Visibility</div>
                      <div className="text-white/80 text-sm font-medium">Full context revealed</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Item 2 */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl flex-shrink-0">
                      <div className="text-2xl font-black text-white/50">→</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-lg mb-2">Hard revenue thresholds</div>
                      <div className="text-white/60 text-sm font-medium">Binary gatekeeping</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 border-2 border-white/20 bg-white/10 hover:bg-white/15 transition-all">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl flex-shrink-0">
                      <div className="text-2xl font-black text-white">→</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-lg mb-2">Staged exposure</div>
                      <div className="text-white/80 text-sm font-medium">Controlled progression</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Item 3 */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-xl flex-shrink-0">
                      <div className="text-2xl font-black text-white/50">→</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-lg mb-2">Binary rejection</div>
                      <div className="text-white/60 text-sm font-medium">No path forward</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 border-2 border-white/20 bg-white/10 hover:bg-white/15 transition-all">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl flex-shrink-0">
                      <div className="text-2xl font-black text-white">→</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-lg mb-2">Documented progression</div>
                      <div className="text-white/80 text-sm font-medium">Auditable trail</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Item 4 - LumiqAI only */}
            <div className="grid md:grid-cols-2 gap-6">
              <div></div>
              <Card className="p-6 border-2 border-white/20 bg-white/10 hover:bg-white/15 transition-all">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl flex-shrink-0">
                      <div className="text-2xl font-black text-white">→</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-lg mb-2">Explainable outcomes</div>
                      <div className="text-white/80 text-sm font-medium">Clear reasoning</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom Summary Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6 border border-white/10 bg-white/5">
              <CardContent className="p-0">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-white/40 rounded-full"></div>
                  <p className="text-white font-semibold text-base uppercase tracking-wide">
                    These are blind decisions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-white/20 bg-white/10">
              <CardContent className="p-0">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <p className="text-white font-semibold text-base uppercase tracking-wide">
                    Risk does not increase. It becomes observable.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Final Highlight */}
          <div className="bg-white/5 p-10 rounded-3xl border border-white/10 text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Icon name="target.svg" className="h-8 w-8" width={32} height={32} />
              <p className="text-white font-bold text-2xl uppercase tracking-tight">
                The difference is visibility, not risk.
              </p>
            </div>
            <p className="text-white/80 text-base font-medium max-w-2xl mx-auto">
              LumiqAI transforms blind decisions into observable, explainable processes that reduce uncertainty while maintaining safety.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Changes the Funnel Section - Enhanced Design */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              Why This Changes the Funnel
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Without LumiqAI */}
            <Card className="p-8 border border-white/10 bg-black">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <Icon name="loss.svg" className="h-8 w-8" width={32} height={32} />
                  </div>
                  <h3 className="font-bold text-2xl text-white uppercase">Without LumiqAI</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/5 p-5 rounded-xl border border-white/10 flex items-start gap-4">
                    <div className="bg-white/10 p-2 rounded-lg flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-base mb-1">Declined applicants disappear</div>
                      <div className="text-white/60 text-xs font-medium">Lost opportunity, no recovery path</div>
                    </div>
                  </div>

                  <div className="bg-white/5 p-5 rounded-xl border border-white/10 flex items-start gap-4">
                    <div className="bg-white/10 p-2 rounded-lg flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-base mb-1">Future revenue is lost upstream</div>
                      <div className="text-white/60 text-xs font-medium">Potential customers never return</div>
                    </div>
                  </div>

                  <div className="bg-white/5 p-5 rounded-xl border border-white/10 flex items-start gap-4">
                    <div className="bg-white/10 p-2 rounded-lg flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-base mb-1">Platforms compete downstream for survivors</div>
                      <div className="text-white/60 text-xs font-medium">Race to the bottom for qualified leads</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* With LumiqAI */}
            <Card className="p-8 border-2 border-white/20 bg-white/5">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-white/10 p-4 rounded-2xl border border-white/20">
                    <Icon name="growth.svg" className="h-8 w-8" width={32} height={32} />
                  </div>
                  <h3 className="font-bold text-2xl text-white uppercase">With LumiqAI</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/10 p-5 rounded-xl border-2 border-white/20 flex items-start gap-4">
                    <div className="bg-white/20 p-2 rounded-lg flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-base mb-1">Declined applicants become progression pipelines</div>
                      <div className="text-white/80 text-xs font-medium">Transformation from rejection to opportunity</div>
                    </div>
                  </div>

                  <div className="bg-white/10 p-5 rounded-xl border-2 border-white/20 flex items-start gap-4">
                    <div className="bg-white/20 p-2 rounded-lg flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-base mb-1">Readiness is cultivated, not guessed</div>
                      <div className="text-white/80 text-xs font-medium">Data-driven development of creditworthiness</div>
                    </div>
                  </div>

                  <div className="bg-white/10 p-5 rounded-xl border-2 border-white/20 flex items-start gap-4">
                    <div className="bg-white/20 p-2 rounded-lg flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-base mb-1">Future revenue is created inside your platform</div>
                      <div className="text-white/80 text-xs font-medium">Revenue generation, not just revenue capture</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Highlight */}
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Icon name="rocket.svg" className="h-6 w-6" width={24} height={24} />
              <p className="text-white font-bold text-lg uppercase tracking-tight">
                Nothing downstream changes. Everything upstream improves.
              </p>
            </div>
            <p className="text-white/80 text-sm font-medium text-center">
              LumiqAI transforms your funnel by converting rejections into opportunities, creating revenue streams where none existed before.
            </p>
          </div>
        </div>
      </section>

      {/* Designed for Sponsors Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              Designed for Sponsors, Not Around Them
            </h2>
            <p className="text-xl text-white/90 font-medium max-w-3xl mx-auto">
              LumiqAI is built to respect sponsor bank constraints, align with compliance frameworks, produce auditable decision trails, and allow immediate intervention if needed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 bg-white/5 border border-white/10 text-center">
              <CardContent className="p-0">
                <Icon name="safe box.svg" className="h-10 w-10 mx-auto mb-4" width={40} height={40} />
                <p className="text-white font-semibold">Respect sponsor bank constraints</p>
              </CardContent>
            </Card>
            <Card className="p-6 bg-white/5 border border-white/10 text-center">
              <CardContent className="p-0">
                <Icon name="document.svg" className="h-10 w-10 mx-auto mb-4" width={40} height={40} />
                <p className="text-white font-semibold">Align with compliance frameworks</p>
              </CardContent>
            </Card>
            <Card className="p-6 bg-white/5 border border-white/10 text-center">
              <CardContent className="p-0">
                <Icon name="Audit.svg" className="h-10 w-10 mx-auto mb-4" width={40} height={40} />
                <p className="text-white font-semibold">Produce auditable decision trails</p>
              </CardContent>
            </Card>
            <Card className="p-6 bg-white/5 border border-white/10 text-center">
              <CardContent className="p-0">
                <Icon name="Access.svg" className="h-10 w-10 mx-auto mb-4" width={40} height={40} />
                <p className="text-white font-semibold">Allow immediate intervention</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center max-w-3xl mx-auto">
            <p className="text-xl font-bold text-white mb-4">
              It is not a loophole.
            </p>
            <p className="text-lg font-semibold text-white">
              It is a defensible operating layer.
            </p>
          </div>
        </div>
      </section>

      {/* In One Sentence Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full mb-8 border border-white/30">
              <Icon name="idea.svg" className="h-5 w-5" width={20} height={20} />
              <span className="font-medium text-white text-sm uppercase">In One Sentence</span>
            </div>
            <div className="bg-white/5 p-12 rounded-3xl border border-white/10 max-w-4xl mx-auto">
              <p className="text-3xl md:text-4xl font-bold text-white leading-tight">
                LumiqAI does not decide who gets credit.
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-white mt-6 leading-tight">
                It decides how readiness is earned — safely, visibly, and inside your ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-8 tracking-tight uppercase">
            Next Step
          </h2>
          <p className="text-xl text-white/90 mb-12 font-medium">
            If this loop fits how you think about risk, growth, and long-term customer ownership:
          </p>
          <Button
            size="lg"
            className="bg-white text-black px-10 py-4 text-lg font-semibold rounded-full shadow-lg uppercase"
          >
            <Icon name="rocket.svg" className="mr-3 h-6 w-6" width={24} height={24} />
            Request a Private Pilot
          </Button>
          <p className="text-sm text-white/70 mt-6 font-medium">
            We work with one platform per category.
          </p>
        </div>
      </section>
    </div>
  )
}
