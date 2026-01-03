import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/Icon"
import HeroBackground from "@/components/HeroBackground"

export default function RiskAndControlPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <HeroBackground imagePath="/hero-bg/6.png">
        <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full mb-8 border border-white/20">
          <Icon name="safe box.svg" className="h-5 w-5" width={20} height={20} />
          <span className="font-medium text-white text-sm uppercase tracking-tight">Risk & Control</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black uppercase mb-8 leading-tight tracking-tight">
          Risk, Control, and
          <br />
          <span className="text-white">Sponsor Alignment</span>
        </h1>
        <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto font-medium">
          This Is How Uncertainty Is Governed — Not Avoided
        </p>
        <div className="bg-white/5 rounded-2xl p-8 border border-white/10 max-w-3xl mx-auto">
          <p className="text-lg text-white/90 mb-4 font-medium">
            LumiqAI is not a lending product. It is not an underwriting shortcut. It is not a workaround for policy.
          </p>
          <p className="text-xl font-bold text-white">
            LumiqAI is a Pre-Credit Operating System — a control layer that governs how uncertainty is handled before capital is ever placed at risk.
          </p>
        </div>
      </HeroBackground>

      {/* Philosophy Section - Centered with Cards */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full mb-8 border border-white/30">
              <Icon name="strategy.svg" className="h-5 w-5" width={20} height={20} />
              <span className="font-medium text-white text-sm uppercase">The Risk Philosophy</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              Start Here
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Problem */}
            <Card className="p-8 border border-white/10 bg-white/5">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <Icon name="loss.svg" className="h-8 w-8" width={32} height={32} />
                  <h3 className="font-bold text-xl text-white uppercase">Modern Credit Systems Break</h3>
                </div>
                <p className="text-white/90 mb-6 font-medium text-lg">
                  At the same point: <span className="text-white font-bold">Uncertainty.</span>
                </p>
                <p className="text-white/80 mb-4 text-sm">When signal quality drops, most stacks default to:</p>
                <div className="space-y-3">
                  <div className="bg-black/30 p-3 rounded-lg border border-white/10">
                    <div className="text-white font-semibold">• Owner FICO</div>
                  </div>
                  <div className="bg-black/30 p-3 rounded-lg border border-white/10">
                    <div className="text-white font-semibold">• Hard revenue gates</div>
                  </div>
                  <div className="bg-black/30 p-3 rounded-lg border border-white/10">
                    <div className="text-white font-semibold">• Binary rejection</div>
                  </div>
                </div>
                <div className="mt-6 bg-white/5 p-4 rounded-xl border border-white/10">
                  <p className="text-white font-semibold text-sm">
                    Those are not conservative decisions. They are blind ones.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Solution */}
            <Card className="p-8 border-2 border-white/20 bg-white/10">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <Icon name="growth.svg" className="h-8 w-8" width={32} height={32} />
                  <h3 className="font-bold text-xl text-white uppercase">LumiqAI Principle</h3>
                </div>
                <div className="bg-white/10 p-6 rounded-xl border border-white/20 mb-6">
                  <p className="text-xl font-bold text-white italic leading-relaxed">
                    &quot;Risk should not be avoided when uncertainty appears. It should be measured, staged, and governed.&quot;
                  </p>
                </div>
                <p className="text-white/90 text-sm font-medium">
                  This is the role of the Pre-Credit Operating System.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Authority Never Moves - Grid Layout */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              Authority Never Moves
            </h2>
            <p className="text-xl text-white/90 font-medium max-w-3xl mx-auto">
              LumiqAI is intentionally designed so that nothing critical changes hands.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 border border-white/10 bg-white/5 text-center">
              <CardContent className="p-0">
                <Icon name="Bank.svg" className="h-10 w-10 mx-auto mb-4" width={40} height={40} />
                <h3 className="font-bold text-white mb-2 uppercase text-sm">Your Institution</h3>
                <p className="text-white/80 text-xs font-medium">Final approval authority</p>
              </CardContent>
            </Card>

            <Card className="p-6 border border-white/10 bg-white/5 text-center">
              <CardContent className="p-0">
                <Icon name="document.svg" className="h-10 w-10 mx-auto mb-4" width={40} height={40} />
                <h3 className="font-bold text-white mb-2 uppercase text-sm">Sponsor Bank</h3>
                <p className="text-white/80 text-xs font-medium">Policy and constraints</p>
              </CardContent>
            </Card>

            <Card className="p-6 border border-white/10 bg-white/5 text-center">
              <CardContent className="p-0">
                <Icon name="Audit.svg" className="h-10 w-10 mx-auto mb-4" width={40} height={40} />
                <h3 className="font-bold text-white mb-2 uppercase text-sm">Risk Committee</h3>
                <p className="text-white/80 text-xs font-medium">Escalation, override, kill-switch</p>
              </CardContent>
            </Card>

            <Card className="p-6 border border-white/10 bg-white/5 text-center">
              <CardContent className="p-0">
                <Icon name="analitic.svg" className="h-10 w-10 mx-auto mb-4" width={40} height={40} />
                <h3 className="font-bold text-white mb-2 uppercase text-sm">Your Models</h3>
                <p className="text-white/80 text-xs font-medium">Decisioning</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 max-w-4xl mx-auto text-center">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <p className="text-white font-bold text-lg mb-2">Does not approve</p>
              </div>
              <div>
                <p className="text-white font-bold text-lg mb-2">Does not decline</p>
              </div>
              <div>
                <p className="text-white font-bold text-lg mb-2">Does not lend</p>
              </div>
            </div>
            <p className="text-white/90 font-semibold text-base">
              It governs the space between those outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* What Changes / Doesn't Change - Split Layout */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              What Changes, What Doesn&apos;t
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* What Does Not Change */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <Icon name="safe box.svg" className="h-8 w-8" width={32} height={32} />
                <h3 className="font-bold text-2xl text-white uppercase">What Does Not Change</h3>
              </div>
              <div className="space-y-4">
                <Card className="p-5 border border-white/10 bg-white/5">
                  <CardContent className="p-0">
                    <div className="text-white font-semibold">Eligibility rules</div>
                  </CardContent>
                </Card>
                <Card className="p-5 border border-white/10 bg-white/5">
                  <CardContent className="p-0">
                    <div className="text-white font-semibold">Approval thresholds</div>
                  </CardContent>
                </Card>
                <Card className="p-5 border border-white/10 bg-white/5">
                  <CardContent className="p-0">
                    <div className="text-white font-semibold">Sponsor constraints</div>
                  </CardContent>
                </Card>
                <Card className="p-5 border border-white/10 bg-white/5">
                  <CardContent className="p-0">
                    <div className="text-white font-semibold">Credit policy</div>
                  </CardContent>
                </Card>
                <Card className="p-5 border border-white/10 bg-white/5">
                  <CardContent className="p-0">
                    <div className="text-white font-semibold">Capital exposure limits</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* What Does Change */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <Icon name="growth.svg" className="h-8 w-8" width={32} height={32} />
                <h3 className="font-bold text-2xl text-white uppercase">What Does Change</h3>
              </div>
              <div className="space-y-4">
                <Card className="p-5 border-2 border-white/20 bg-white/10">
                  <CardContent className="p-0">
                    <div className="text-white font-semibold">What happens after &apos;not approved&apos;</div>
                  </CardContent>
                </Card>
                <Card className="p-5 border-2 border-white/20 bg-white/10">
                  <CardContent className="p-0">
                    <div className="text-white font-semibold">How readiness is formed</div>
                  </CardContent>
                </Card>
                <Card className="p-5 border-2 border-white/20 bg-white/10">
                  <CardContent className="p-0">
                    <div className="text-white font-semibold">Whether uncertainty becomes data or dead ends</div>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-6 bg-white/10 p-5 rounded-xl border-2 border-white/20">
                <p className="text-white font-semibold text-sm">
                  This is the difference between risk governance and risk avoidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Measured Opportunity - Enhanced Interactive Design */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full mb-8 border border-white/30">
              <Icon name="target.svg" className="h-5 w-5" width={20} height={20} />
              <span className="font-medium text-white text-sm uppercase">The Missing Control State</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              Measured Opportunity
            </h2>
            <p className="text-xl text-white/90 font-medium">
              Most stacks offer two states. LumiqAI introduces a third.
            </p>
          </div>

          {/* Visual Flow - Three States */}
          <div className="relative mb-16">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Approve State */}
              <Card className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-all group">
                <CardContent className="p-0 text-center">
                  <div className="bg-white/10 p-4 rounded-2xl mb-6 inline-block group-hover:bg-white/20 transition-colors">
                    <Icon name="trophy.svg" className="h-10 w-10 mx-auto" width={40} height={40} />
                  </div>
                  <div className="text-3xl font-black text-white mb-3 uppercase">Approve</div>
                  <p className="text-white/70 text-sm font-medium">Traditional state</p>
                  <div className="mt-4 bg-black/30 p-3 rounded-lg border border-white/10">
                    <p className="text-white/80 text-xs">Binary outcome</p>
                  </div>
                </CardContent>
              </Card>

              {/* Measured Opportunity - Highlighted */}
              <Card className="p-8 border-2 border-white/30 bg-white/10 hover:bg-white/15 transition-all relative group">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white/20 px-4 py-1 rounded-full border border-white/30">
                    <span className="text-white text-xs font-bold uppercase">New State</span>
                  </div>
                </div>
                <CardContent className="p-0 text-center">
                  <div className="bg-white/20 p-6 rounded-2xl mb-6 group-hover:bg-white/30 transition-colors">
                    <Icon name="speedometer.svg" className="h-12 w-12 mx-auto" width={48} height={48} />
                  </div>
                  <div className="text-2xl font-black text-white mb-3 uppercase leading-tight">Measured<br />Opportunity</div>
                  <p className="text-white/90 text-sm font-semibold mb-4">New control state</p>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <p className="text-white font-semibold text-xs uppercase tracking-wide">
                      Governed Uncertainty
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Decline State */}
              <Card className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-all group">
                <CardContent className="p-0 text-center">
                  <div className="bg-white/10 p-4 rounded-2xl mb-6 inline-block group-hover:bg-white/20 transition-colors">
                    <Icon name="loss.svg" className="h-10 w-10 mx-auto" width={40} height={40} />
                  </div>
                  <div className="text-3xl font-black text-white mb-3 uppercase">Decline</div>
                  <p className="text-white/70 text-sm font-medium">Traditional state</p>
                  <div className="mt-4 bg-black/30 p-3 rounded-lg border border-white/10">
                    <p className="text-white/80 text-xs">Binary outcome</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Flow Arrows - Hidden on mobile */}
            <div className="hidden md:block absolute top-1/2 left-1/3 transform -translate-y-1/2 -translate-x-1/2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-white/20"></div>
                <Icon name="paper plane.svg" className="h-4 w-4 text-white/40" width={16} height={16} />
              </div>
            </div>
            <div className="hidden md:block absolute top-1/2 right-1/3 transform -translate-y-1/2 translate-x-1/2">
              <div className="flex items-center gap-2">
                <Icon name="paper plane.svg" className="h-4 w-4 text-white/40 rotate-180" width={16} height={16} />
                <div className="w-8 h-0.5 bg-white/20"></div>
              </div>
            </div>
          </div>

          {/* Feature Comparison Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* What It Is */}
            <Card className="p-8 border-2 border-white/20 bg-white/10 hover:border-white/30 transition-all">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Icon name="Achievement.svg" className="h-6 w-6" width={24} height={24} />
                  </div>
                  <h3 className="font-bold text-xl text-white uppercase">Measured Opportunity Is:</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20 hover:bg-white/15 transition-colors flex items-start gap-4">
                    <div className="bg-white/20 p-2 rounded-lg flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold mb-1">Non-credit by default</div>
                      <div className="text-white/70 text-xs">No capital at risk initially</div>
                    </div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20 hover:bg-white/15 transition-colors flex items-start gap-4">
                    <div className="bg-white/20 p-2 rounded-lg flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold mb-1">Capped if any instrument is attached</div>
                      <div className="text-white/70 text-xs">Controlled exposure limits</div>
                    </div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20 hover:bg-white/15 transition-colors flex items-start gap-4">
                    <div className="bg-white/20 p-2 rounded-lg flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold mb-1">Milestone-gated</div>
                      <div className="text-white/70 text-xs">Progress-based advancement</div>
                    </div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20 hover:bg-white/15 transition-colors flex items-start gap-4">
                    <div className="bg-white/20 p-2 rounded-lg flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold mb-1">Reversible</div>
                      <div className="text-white/70 text-xs">Can be rolled back if needed</div>
                    </div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20 hover:bg-white/15 transition-colors flex items-start gap-4">
                    <div className="bg-white/20 p-2 rounded-lg flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold mb-1">Fully documented</div>
                      <div className="text-white/70 text-xs">Complete audit trail</div>
                    </div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20 hover:bg-white/15 transition-colors flex items-start gap-4">
                    <div className="bg-white/20 p-2 rounded-lg flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold mb-1">Sponsor-aligned</div>
                      <div className="text-white/70 text-xs">Respects all constraints</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What It Is Not */}
            <Card className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Icon name="safe box.svg" className="h-6 w-6" width={24} height={24} />
                  </div>
                  <h3 className="font-bold text-xl text-white uppercase">It Is Not:</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10 hover:bg-black/40 transition-colors flex items-start gap-4">
                    <div className="bg-white/10 p-2 rounded-lg flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="text-white/90 font-semibold mb-1">Pre-approval</div>
                      <div className="text-white/50 text-xs">Not a credit decision</div>
                    </div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10 hover:bg-black/40 transition-colors flex items-start gap-4">
                    <div className="bg-white/10 p-2 rounded-lg flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="text-white/90 font-semibold mb-1">Silent underwriting</div>
                      <div className="text-white/50 text-xs">Transparency required</div>
                    </div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10 hover:bg-black/40 transition-colors flex items-start gap-4">
                    <div className="bg-white/10 p-2 rounded-lg flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="text-white/90 font-semibold mb-1">Exception-making</div>
                      <div className="text-white/50 text-xs">No policy bypass</div>
                    </div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10 hover:bg-black/40 transition-colors flex items-start gap-4">
                    <div className="bg-white/10 p-2 rounded-lg flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="text-white/90 font-semibold mb-1">Policy drift</div>
                      <div className="text-white/50 text-xs">Strict compliance</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-white/5 p-5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="idea.svg" className="h-5 w-5" width={20} height={20} />
                    <p className="text-white font-semibold text-sm">
                      Measured Opportunity exists so uncertainty can be observed instead of feared.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Safer - Comparison */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              Why This Is Safer Than Defaults
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Binary Systems */}
            <Card className="p-8 border border-white/10 bg-white/5">
              <CardContent className="p-0">
                <h3 className="font-bold text-xl text-white mb-6 uppercase">When Uncertainty Appears, Binary Systems:</h3>
                <div className="space-y-4">
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10">
                    <div className="text-white font-semibold mb-1">Reject prematurely</div>
                    <div className="text-white/60 text-xs">Lost opportunity</div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10">
                    <div className="text-white font-semibold mb-1">Approve on weak proxies</div>
                    <div className="text-white/60 text-xs">Increased risk</div>
                  </div>
                </div>
                <div className="mt-6 bg-white/5 p-4 rounded-xl border border-white/10">
                  <p className="text-white font-semibold text-sm">
                    Both are risky.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* LumiqAI */}
            <Card className="p-8 border-2 border-white/20 bg-white/10">
              <CardContent className="p-0">
                <h3 className="font-bold text-xl text-white mb-6 uppercase">LumiqAI Replaces With:</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="text-white font-semibold mb-1">Staged exposure (or none)</div>
                    <div className="text-white/80 text-xs">Controlled risk</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="text-white font-semibold mb-1">Longitudinal behavior observation</div>
                    <div className="text-white/80 text-xs">Real patterns</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="text-white font-semibold mb-1">Explicit readiness milestones</div>
                    <div className="text-white/80 text-xs">Clear progression</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="text-white font-semibold mb-1">Explainable progression logic</div>
                    <div className="text-white/80 text-xs">Transparent decisions</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="text-white font-semibold mb-1">Human-governed escalation</div>
                    <div className="text-white/80 text-xs">Maintained control</div>
                  </div>
                </div>
                <div className="mt-6 bg-white/5 p-4 rounded-xl border border-white/20">
                  <p className="text-white font-semibold text-sm">
                    Risk does not increase. It becomes legible.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gaming, Bias, and Fair Lending */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              Gaming, Bias, and Fair Lending
            </h2>
            <p className="text-xl text-white/90 font-medium">
              LumiqAI does not introduce a new credit model. It introduces transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 border border-white/10 bg-white/5">
              <CardContent className="p-0">
                <div className="text-white font-semibold mb-2">No protected-class inference</div>
                <div className="text-white/60 text-xs">Fair by design</div>
              </CardContent>
            </Card>
            <Card className="p-6 border border-white/10 bg-white/5">
              <CardContent className="p-0">
                <div className="text-white font-semibold mb-2">No opaque scoring</div>
                <div className="text-white/60 text-xs">Full transparency</div>
              </CardContent>
            </Card>
            <Card className="p-6 border border-white/10 bg-white/5">
              <CardContent className="p-0">
                <div className="text-white font-semibold mb-2">No hidden weighting</div>
                <div className="text-white/60 text-xs">Clear logic</div>
              </CardContent>
            </Card>
            <Card className="p-6 border border-white/10 bg-white/5">
              <CardContent className="p-0">
                <div className="text-white font-semibold mb-2">No automatic escalation</div>
                <div className="text-white/60 text-xs">Human oversight</div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center">
            <p className="text-white font-bold text-lg mb-3">
              Behavior is harder to game than history.
            </p>
            <p className="text-white font-semibold text-base">
              Consistency is harder to fake than a score.
            </p>
          </div>
        </div>
      </section>

      {/* Kill Switches and Intervention */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              Kill Switches and Intervention
            </h2>
            <p className="text-xl text-white/90 font-medium">
              Every LumiqAI deployment supports:
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            <Card className="p-6 border border-white/10 bg-white/5 text-center">
              <CardContent className="p-0">
                <Icon name="Access.svg" className="h-8 w-8 mx-auto mb-3" width={32} height={32} />
                <div className="text-white font-semibold text-sm">Progression caps</div>
              </CardContent>
            </Card>
            <Card className="p-6 border border-white/10 bg-white/5 text-center">
              <CardContent className="p-0">
                <Icon name="hourglass.svg" className="h-8 w-8 mx-auto mb-3" width={32} height={32} />
                <div className="text-white font-semibold text-sm">Stage freezing</div>
              </CardContent>
            </Card>
            <Card className="p-6 border border-white/10 bg-white/5 text-center">
              <CardContent className="p-0">
                <Icon name="target.svg" className="h-8 w-8 mx-auto mb-3" width={32} height={32} />
                <div className="text-white font-semibold text-sm">Manual escalation approval</div>
              </CardContent>
            </Card>
            <Card className="p-6 border border-white/10 bg-white/5 text-center">
              <CardContent className="p-0">
                <Icon name="connection.svg" className="h-8 w-8 mx-auto mb-3" width={32} height={32} />
                <div className="text-white font-semibold text-sm">Instant rollback</div>
              </CardContent>
            </Card>
            <Card className="p-6 border border-white/10 bg-white/5 text-center">
              <CardContent className="p-0">
                <Icon name="document.svg" className="h-8 w-8 mx-auto mb-3" width={32} height={32} />
                <div className="text-white font-semibold text-sm">Sponsor-governed constraints</div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center max-w-4xl mx-auto">
            <p className="text-white font-bold text-lg mb-3">
              Nothing must auto-escalate.
            </p>
            <p className="text-white font-semibold text-base mb-3">
              Nothing is irreversible.
            </p>
            <p className="text-white font-semibold text-base">
              Control is designed in — not layered on later.
            </p>
          </div>
        </div>
      </section>

      {/* Auditability and Documentation */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              Auditability and Documentation
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 border border-white/10 bg-white/5">
              <CardContent className="p-0">
                <Icon name="document.svg" className="h-8 w-8 mb-4" width={32} height={32} />
                <div className="text-white font-semibold mb-2">Progression state logs</div>
                <div className="text-white/60 text-xs">Complete trail</div>
              </CardContent>
            </Card>
            <Card className="p-6 border border-white/10 bg-white/5">
              <CardContent className="p-0">
                <Icon name="Achievement.svg" className="h-8 w-8 mb-4" width={32} height={32} />
                <div className="text-white font-semibold mb-2">Milestone completion records</div>
                <div className="text-white/60 text-xs">Tracked progress</div>
              </CardContent>
            </Card>
            <Card className="p-6 border border-white/10 bg-white/5">
              <CardContent className="p-0">
                <Icon name="strategy.svg" className="h-8 w-8 mb-4" width={32} height={32} />
                <div className="text-white font-semibold mb-2">Escalation rationales</div>
                <div className="text-white/60 text-xs">Clear reasoning</div>
              </CardContent>
            </Card>
            <Card className="p-6 border border-white/10 bg-white/5">
              <CardContent className="p-0">
                <Icon name="Audit.svg" className="h-8 w-8 mb-4" width={32} height={32} />
                <div className="text-white font-semibold mb-2">Override trails</div>
                <div className="text-white/60 text-xs">Who, what, when, why</div>
              </CardContent>
            </Card>
            <Card className="p-6 border border-white/10 bg-white/5">
              <CardContent className="p-0">
                <Icon name="presentations.svg" className="h-8 w-8 mb-4" width={32} height={32} />
                <div className="text-white font-semibold mb-2">Sponsor-ready summaries</div>
                <div className="text-white/60 text-xs">Executive reporting</div>
              </CardContent>
            </Card>
            <Card className="p-6 border border-white/10 bg-white/5">
              <CardContent className="p-0">
                <Icon name="safe box.svg" className="h-8 w-8 mb-4" width={32} height={32} />
                <div className="text-white font-semibold mb-2">Compliance ready</div>
                <div className="text-white/60 text-xs">Regulatory alignment</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-2 border-white/20 bg-white/10">
              <CardContent className="p-0">
                <div className="text-white font-bold text-lg mb-3">This Strengthens:</div>
                <div className="space-y-2">
                  <div className="text-white font-semibold">• Audit readiness</div>
                  <div className="text-white font-semibold">• Model risk governance</div>
                  <div className="text-white font-semibold">• Sponsor oversight</div>
                  <div className="text-white font-semibold">• Regulatory defensibility</div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6 border border-white/10 bg-white/5">
              <CardContent className="p-0">
                <div className="text-white/90 font-medium text-sm leading-relaxed">
                  Complete documentation ensures every decision is traceable, explainable, and defensible to auditors, regulators, and sponsors.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Risk of Waiting */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              The Strategic Risk of Waiting
            </h2>
            <p className="text-xl text-white/90 font-medium">
              Waiting does not reduce risk. It shifts it downstream.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border border-white/10 bg-white/5">
              <CardContent className="p-0">
                <h3 className="font-bold text-xl text-white mb-6 uppercase">Platforms Without Progression Layer:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-semibold">Only see businesses after readiness exists</div>
                      <div className="text-white/60 text-xs mt-1">Late to the opportunity</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-semibold">Compete for the same survivors</div>
                      <div className="text-white/60 text-xs mt-1">Crowded market</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-semibold">Lose visibility into formation</div>
                      <div className="text-white/60 text-xs mt-1">Missing context</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-semibold">Inherit customers shaped elsewhere</div>
                      <div className="text-white/60 text-xs mt-1">Reduced loyalty</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-white/20 bg-white/10">
              <CardContent className="p-0">
                <h3 className="font-bold text-xl text-white mb-6 uppercase">The Cost of Delay:</h3>
                <div className="bg-white/10 p-6 rounded-xl border border-white/20 mb-6">
                  <p className="text-white font-bold text-lg mb-3">
                    Once a business earns readiness inside another system, switching becomes costly
                  </p>
                  <p className="text-white/80 text-sm">
                    — operationally and psychologically.
                  </p>
                </div>
                <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                  <p className="text-white font-bold text-base uppercase tracking-wide">
                    That loss is permanent.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* In One Sentence */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full mb-8 border border-white/30">
              <Icon name="idea.svg" className="h-5 w-5" width={20} height={20} />
              <span className="font-medium text-white text-sm uppercase">In One Sentence</span>
            </div>
            <div className="bg-white/5 p-12 rounded-3xl border border-white/10 max-w-4xl mx-auto">
              <p className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                LumiqAI does not decide who gets credit.
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                It decides whether uncertainty becomes a blind rejection — or a governed process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-8 tracking-tight uppercase">
            If Your Institution Values Control Over Comfort
          </h2>
          <Button
            size="lg"
            className="bg-white text-black px-10 py-4 text-lg font-semibold rounded-full shadow-lg uppercase"
          >
            <Icon name="rocket.svg" className="mr-3 h-6 w-6" width={24} height={24} />
            Request a Private Pilot
          </Button>
          <p className="text-sm text-white/70 mt-6 font-medium">
            One platform per category.
          </p>
        </div>
      </section>
    </div>
  )
}

