import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/Icon"
import HeroBackground from "@/components/HeroBackground"

export default function OutcomesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <HeroBackground imagePath="/hero-bg/5.png">
        <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full mb-8 border border-white/20">
          <Icon name="trophy.svg" className="h-5 w-5" width={20} height={20} />
          <span className="font-medium text-white text-sm uppercase tracking-tight">Outcomes</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black uppercase mb-8 leading-tight tracking-tight">
          What Changes When You
          <br />
          <span className="text-white">Stop Rejecting Potential</span>
        </h1>
        <div className="bg-white/5 rounded-2xl p-8 border border-white/10 max-w-3xl mx-auto">
          <p className="text-lg text-white/90 mb-4 font-medium">
            Most fintech platforms measure success at the moment of approval.
          </p>
          <p className="text-xl font-bold text-white">
            LumiqAI shifts the center of gravity upstream — to the moment before approval, where most value is silently destroyed.
          </p>
          <p className="text-lg text-white/90 mt-4 font-semibold">
            Not hypothetically. Structurally.
          </p>
        </div>
      </HeroBackground>

      {/* Outcome 01 - Funnel Stops Leaking */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-white/10 p-4 rounded-2xl border border-white/20">
              <div className="text-4xl font-black text-white">01</div>
            </div>
            <h2 className="text-4xl font-bold text-white uppercase tracking-tight">
              Your Funnel Stops Leaking Where It Matters Most
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Before */}
            <Card className="p-8 border border-white/10 bg-white/5">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="loss.svg" className="h-6 w-6" width={24} height={24} />
                  <h3 className="font-bold text-xl text-white uppercase">Before</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10">
                    <div className="text-white/90 font-semibold mb-2">—</div>
                    <div className="text-white font-bold">Applications spike</div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10">
                    <div className="text-white/90 font-semibold mb-2">—</div>
                    <div className="text-white font-bold">Approvals look clean</div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10">
                    <div className="text-white/90 font-semibold mb-2">—</div>
                    <div className="text-white font-bold">Declines disappear</div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10">
                    <div className="text-white/90 font-semibold mb-2">—</div>
                    <div className="text-white font-bold">CAC resets every cycle</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* After */}
            <Card className="p-8 border-2 border-white/20 bg-white/10">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="growth.svg" className="h-6 w-6" width={24} height={24} />
                  <h3 className="font-bold text-xl text-white uppercase">After</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="text-white font-semibold mb-2">→</div>
                    <div className="text-white font-bold">Declines become states, not exits</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="text-white font-semibold mb-2">→</div>
                    <div className="text-white font-bold">70–90% of &apos;not approved&apos; applicants remain</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="text-white font-semibold mb-2">→</div>
                    <div className="text-white font-bold">Readiness is formed instead of deferred</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="text-white font-semibold mb-2">→</div>
                    <div className="text-white font-bold">Value creation starts before capital is deployed</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center max-w-3xl mx-auto">
            <p className="text-white font-bold text-lg">
              Your funnel stops ending early. It starts compounding upstream.
            </p>
          </div>
        </div>
      </section>

      {/* Outcome 02 - Own the Moment */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-white/10 p-4 rounded-2xl border border-white/20">
              <div className="text-4xl font-black text-white">02</div>
            </div>
            <h2 className="text-4xl font-bold text-white uppercase tracking-tight">
              You Own the Moment Businesses Become Real
            </h2>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 mb-8 max-w-4xl">
            <p className="text-xl text-white/90 font-medium mb-8">
              There is a single moment every SMB remembers: &apos;This is when we became legitimate.&apos; With LumiqAI, that moment happens inside your platform — before anyone else ever touches them.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-5 border border-white/10 bg-white/5 text-center">
                <CardContent className="p-0">
                  <Icon name="visions.svg" className="h-8 w-8 mx-auto mb-3" width={32} height={32} />
                  <div className="text-white font-semibold text-sm">The first financial mirror</div>
                </CardContent>
              </Card>
              <Card className="p-5 border border-white/10 bg-white/5 text-center">
                <CardContent className="p-0">
                  <Icon name="target.svg" className="h-8 w-8 mx-auto mb-3" width={32} height={32} />
                  <div className="text-white font-semibold text-sm">The first place progress is visible</div>
                </CardContent>
              </Card>
              <Card className="p-5 border border-white/10 bg-white/5 text-center">
                <CardContent className="p-0">
                  <Icon name="strategy.svg" className="h-8 w-8 mx-auto mb-3" width={32} height={32} />
                  <div className="text-white font-semibold text-sm">The system that taught them how readiness is earned</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl border-2 border-white/20 text-center max-w-2xl mx-auto">
            <p className="text-white font-bold text-lg uppercase">
              That ownership never resets.
            </p>
          </div>
        </div>
      </section>

      {/* Outcome 03 - Retention */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-white/10 p-4 rounded-2xl border border-white/20">
              <div className="text-4xl font-black text-white">03</div>
            </div>
            <h2 className="text-4xl font-bold text-white uppercase tracking-tight">
              Retention Stops Being a Metric — It Becomes Gravity
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-white/90 font-medium mb-8 text-center">
              SMBs don&apos;t churn because they hate platforms. They churn because platforms go dark when the answer is &apos;not yet.&apos;
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 border border-white/10 bg-white/5 text-center">
                <CardContent className="p-0">
                  <Icon name="Binoculars.svg" className="h-10 w-10 mx-auto mb-4" width={40} height={40} />
                  <div className="text-white font-bold mb-2">→</div>
                  <div className="text-white font-semibold">See where they stand</div>
                </CardContent>
              </Card>
              <Card className="p-6 border border-white/10 bg-white/5 text-center">
                <CardContent className="p-0">
                  <Icon name="rocket.svg" className="h-10 w-10 mx-auto mb-4" width={40} height={40} />
                  <div className="text-white font-bold mb-2">→</div>
                  <div className="text-white font-semibold">See what unlocks next</div>
                </CardContent>
              </Card>
              <Card className="p-6 border border-white/10 bg-white/5 text-center">
                <CardContent className="p-0">
                  <Icon name="growth.svg" className="h-10 w-10 mx-auto mb-4" width={40} height={40} />
                  <div className="text-white font-bold mb-2">→</div>
                  <div className="text-white font-semibold">See progress move weekly</div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl border-2 border-white/20 text-center">
              <p className="text-white font-bold text-lg">
                This is not engagement. This is identity lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome 04 - Revenue Appears Earlier */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-white/10 p-4 rounded-2xl border border-white/20">
              <div className="text-4xl font-black text-white">04</div>
            </div>
            <h2 className="text-4xl font-bold text-white uppercase tracking-tight">
              Revenue Appears Earlier — Without Taking More Risk
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-white/90 font-medium mb-8 text-center">
              Traditional systems wait for revenue before engagement. LumiqAI does the opposite.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="flex items-start gap-3">
                    <div className="text-white font-bold text-lg">→</div>
                    <div className="text-white font-semibold">Pre-credit subscriptions</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="flex items-start gap-3">
                    <div className="text-white font-bold text-lg">→</div>
                    <div className="text-white font-semibold">Readiness-linked tooling</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="flex items-start gap-3">
                    <div className="text-white font-bold text-lg">→</div>
                    <div className="text-white font-semibold">Graduated product tiers</div>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="flex items-start gap-3">
                    <div className="text-white font-bold text-lg">→</div>
                    <div className="text-white font-semibold">Earlier cross-sell eligibility</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
              <p className="text-white font-bold text-lg">
                Revenue moves upstream. Risk does not.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome 05 - Lending Becomes Smarter */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-white/10 p-4 rounded-2xl border border-white/20">
              <div className="text-4xl font-black text-white">05</div>
            </div>
            <h2 className="text-4xl font-bold text-white uppercase tracking-tight">
              Lending Becomes Smarter Without Becoming Looser
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Before */}
            <Card className="p-8 border border-white/10 bg-white/5">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="loss.svg" className="h-6 w-6" width={24} height={24} />
                  <h3 className="font-bold text-xl text-white uppercase">Before</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10">
                    <div className="text-white/90 font-semibold mb-2">—</div>
                    <div className="text-white font-bold">A thin snapshot</div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10">
                    <div className="text-white/90 font-semibold mb-2">—</div>
                    <div className="text-white font-bold">A binary score</div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10">
                    <div className="text-white/90 font-semibold mb-2">—</div>
                    <div className="text-white font-bold">A cold application</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* After */}
            <Card className="p-8 border-2 border-white/20 bg-white/10">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="growth.svg" className="h-6 w-6" width={24} height={24} />
                  <h3 className="font-bold text-xl text-white uppercase">After</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="text-white font-semibold mb-2">→</div>
                    <div className="text-white font-bold">Longitudinal behavior</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="text-white font-semibold mb-2">→</div>
                    <div className="text-white font-bold">Documented progression</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="text-white font-semibold mb-2">→</div>
                    <div className="text-white font-bold">Explainable readiness</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="text-white font-semibold mb-2">→</div>
                    <div className="text-white font-bold">Reduced uncertainty</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center max-w-3xl mx-auto">
            <p className="text-white font-bold text-lg">
              Approval rates improve. Defaults stabilize or fall. Not because standards drop — but because signal quality rises.
            </p>
          </div>
        </div>
      </section>

      {/* Outcome 06 - Risk Committees */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-white/10 p-4 rounded-2xl border border-white/20">
              <div className="text-4xl font-black text-white">06</div>
            </div>
            <h2 className="text-4xl font-bold text-white uppercase tracking-tight">
              Risk Committees Gain Control Instead of Exceptions
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Before */}
            <Card className="p-8 border border-white/10 bg-white/5">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="loss.svg" className="h-6 w-6" width={24} height={24} />
                  <h3 className="font-bold text-xl text-white uppercase">Before</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10">
                    <div className="text-white/90 font-semibold mb-2">—</div>
                    <div className="text-white font-bold">Uncertainty forces exceptions</div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10">
                    <div className="text-white/90 font-semibold mb-2">—</div>
                    <div className="text-white font-bold">Exceptions create anxiety</div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10">
                    <div className="text-white/90 font-semibold mb-2">—</div>
                    <div className="text-white font-bold">Anxiety tightens policy</div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10">
                    <div className="text-white/90 font-semibold mb-2">—</div>
                    <div className="text-white font-bold">Good businesses get rejected</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* After */}
            <Card className="p-8 border-2 border-white/20 bg-white/10">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="growth.svg" className="h-6 w-6" width={24} height={24} />
                  <h3 className="font-bold text-xl text-white uppercase">After</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="text-white font-semibold mb-2">→</div>
                    <div className="text-white font-bold">Uncertainty becomes staged</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="text-white font-semibold mb-2">→</div>
                    <div className="text-white font-bold">Progression is documented</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="text-white font-semibold mb-2">→</div>
                    <div className="text-white font-bold">Escalation is governed</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="text-white font-semibold mb-2">→</div>
                    <div className="text-white font-bold">Intervention is easy</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl border-2 border-white/20 text-center max-w-3xl mx-auto">
            <p className="text-white font-bold text-lg">
              Risk teams stop saying &apos;no&apos; defensively. They start saying: &apos;Show me the progression.&apos;
            </p>
          </div>
        </div>
      </section>

      {/* Outcome 07 - Sponsor Relationships */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-white/10 p-4 rounded-2xl border border-white/20">
              <div className="text-4xl font-black text-white">07</div>
            </div>
            <h2 className="text-4xl font-bold text-white uppercase tracking-tight">
              Sponsor Relationships Get Easier, Not Harder
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-white/90 font-medium mb-8 text-center">
              Sponsor banks and BIN partners don&apos;t want innovation. They want clarity.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <Card className="p-5 border border-white/10 bg-white/5">
                <CardContent className="p-0">
                  <div className="text-white font-semibold mb-2">→</div>
                  <div className="text-white font-semibold text-sm">Explicit middle states</div>
                </CardContent>
              </Card>
              <Card className="p-5 border border-white/10 bg-white/5">
                <CardContent className="p-0">
                  <div className="text-white font-semibold mb-2">→</div>
                  <div className="text-white font-semibold text-sm">Documented logic</div>
                </CardContent>
              </Card>
              <Card className="p-5 border border-white/10 bg-white/5">
                <CardContent className="p-0">
                  <div className="text-white font-semibold mb-2">→</div>
                  <div className="text-white font-semibold text-sm">Auditable progression</div>
                </CardContent>
              </Card>
              <Card className="p-5 border border-white/10 bg-white/5">
                <CardContent className="p-0">
                  <div className="text-white font-semibold mb-2">→</div>
                  <div className="text-white font-semibold text-sm">Fewer informal exceptions</div>
                </CardContent>
              </Card>
              <Card className="p-5 border border-white/10 bg-white/5">
                <CardContent className="p-0">
                  <div className="text-white font-semibold mb-2">→</div>
                  <div className="text-white font-semibold text-sm">Cleaner downstream approvals</div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
              <p className="text-white font-bold text-lg mb-2">
                The &apos;gray zone&apos; becomes visible. Oversight improves. Tension drops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome 08 - Platform Competition */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-white/10 p-4 rounded-2xl border border-white/20">
              <div className="text-4xl font-black text-white">08</div>
            </div>
            <h2 className="text-4xl font-bold text-white uppercase tracking-tight">
              Your Platform Stops Competing on Features
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-white/90 font-medium mb-8 text-center">
              Every fintech eventually converges on similar products, UX, APIs, and pricing. LumiqAI changes what you compete on.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <Icon name="hourglass.svg" className="h-8 w-8 mb-4" width={32} height={32} />
                  <div className="text-white font-bold mb-2">→</div>
                  <div className="text-white font-semibold">When you meet businesses</div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <Icon name="rocket.svg" className="h-8 w-8 mb-4" width={32} height={32} />
                  <div className="text-white font-bold mb-2">→</div>
                  <div className="text-white font-semibold">How early you retain them</div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <Icon name="strategy.svg" className="h-8 w-8 mb-4" width={32} height={32} />
                  <div className="text-white font-bold mb-2">→</div>
                  <div className="text-white font-semibold">How deeply you shape them</div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl border-2 border-white/20 text-center">
              <p className="text-white font-bold text-lg">
                Once a platform owns readiness formation, every competitor feels late.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome 09 - Competitive Loss */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-white/10 p-4 rounded-2xl border border-white/20">
              <div className="text-4xl font-black text-white">09</div>
            </div>
            <h2 className="text-4xl font-bold text-white uppercase tracking-tight">
              Competitive Loss Is Irreversible Once It Starts
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-white/90 font-medium mb-8 text-center">
              The advantage LumiqAI creates does not compound through capital or pricing. It compounds through time.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="text-white font-bold mb-2">→</div>
                  <div className="text-white font-semibold">Captures early visibility</div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="text-white font-bold mb-2">→</div>
                  <div className="text-white font-semibold">Hosts readiness formation</div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="text-white font-bold mb-2">→</div>
                  <div className="text-white font-semibold">Governs progression</div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 border-white/20 bg-white/10">
                <CardContent className="p-0">
                  <div className="text-white font-bold mb-2">→</div>
                  <div className="text-white font-semibold">Graduates customers internally</div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
              <p className="text-white font-bold text-lg">
                Waiting does not preserve optionality. It permanently narrows it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Structural Difference - Funnel Comparison */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              The Structural Difference
            </h2>
            <p className="text-xl text-white/90 font-medium">
              Architecture comparison
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Traditional Funnel */}
            <Card className="p-8 border border-white/10 bg-white/5">
              <CardContent className="p-0">
                <h3 className="font-bold text-2xl text-white mb-6 uppercase">Traditional Fintech Funnel</h3>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 mb-4">
                  <p className="text-white/60 font-bold text-sm uppercase tracking-wide mb-4">Binary · Fear-Based · Leaky</p>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10 text-center">
                    <div className="text-white font-bold mb-2">Apply</div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-white/20"></div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10 text-center">
                    <div className="text-white font-bold mb-2">Binary Decision</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-white/10 p-4 rounded-xl border border-white/10 text-center">
                      <div className="text-white font-semibold text-sm">Approve</div>
                      <div className="text-white/60 text-xs mt-1">Compete downstream</div>
                    </div>
                    <div className="bg-black/30 p-4 rounded-xl border border-white/10 text-center">
                      <div className="text-white font-semibold text-sm">Decline</div>
                      <div className="text-white/60 text-xs mt-1">Lost forever</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 bg-white/5 p-4 rounded-xl border border-white/10">
                  <p className="text-white/80 text-xs">— Value creation begins only after approval</p>
                  <p className="text-white/80 text-xs">— Loss is silent and permanent</p>
                  <p className="text-white/80 text-xs">— CAC resets every cycle</p>
                </div>
              </CardContent>
            </Card>

            {/* LumiqAI Funnel */}
            <Card className="p-8 border-2 border-white/20 bg-white/10">
              <CardContent className="p-0">
                <h3 className="font-bold text-2xl text-white mb-6 uppercase">LumiqAI Funnel</h3>
                <div className="bg-white/10 p-4 rounded-xl border border-white/20 mb-4">
                  <p className="text-white font-bold text-sm uppercase tracking-wide mb-4">Progressive · Observable · Compounding</p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20 text-center">
                    <div className="text-white font-bold mb-2">Apply</div>
                  </div>
                  <div className="flex justify-center">
                    <Icon name="paper plane.svg" className="h-4 w-4 text-white/40" width={16} height={16} />
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20 text-center">
                    <div className="text-white font-bold mb-2">Visibility</div>
                  </div>
                  <div className="flex justify-center">
                    <Icon name="paper plane.svg" className="h-4 w-4 text-white/40" width={16} height={16} />
                  </div>
                  <div className="bg-white/20 p-4 rounded-xl border-2 border-white/30 text-center">
                    <div className="text-white font-bold mb-2">Measured Opportunity</div>
                  </div>
                  <div className="flex justify-center">
                    <Icon name="paper plane.svg" className="h-4 w-4 text-white/40" width={16} height={16} />
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20 text-center">
                    <div className="text-white font-bold mb-2">Observable Progression</div>
                  </div>
                  <div className="flex justify-center">
                    <Icon name="paper plane.svg" className="h-4 w-4 text-white/40" width={16} height={16} />
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20 text-center">
                    <div className="text-white font-bold mb-2">Graduation</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="bg-white/10 p-3 rounded-lg border border-white/20 text-center">
                      <div className="text-white font-semibold text-xs">Lending</div>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg border border-white/20 text-center">
                      <div className="text-white font-semibold text-xs">RBF</div>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg border border-white/20 text-center">
                      <div className="text-white font-semibold text-xs">Premium Banking</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 bg-white/5 p-4 rounded-xl border border-white/20">
                  <p className="text-white/90 text-xs">→ Readiness is manufactured, not assumed</p>
                  <p className="text-white/90 text-xs">→ Value compounds before capital is deployed</p>
                  <p className="text-white/90 text-xs">→ No silent exits</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Time-Based Competitive Position */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              Time-Based Competitive Position
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Platform A */}
            <Card className="p-8 border-2 border-white/20 bg-white/10">
              <CardContent className="p-0">
                <h3 className="font-bold text-2xl text-white mb-6 uppercase">Platform A</h3>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 mb-4">
                  <p className="text-white font-semibold text-sm mb-2">Installs LumiqAI</p>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="text-white font-semibold mb-1">Visibility</div>
                  </div>
                  <div className="flex justify-center">
                    <Icon name="paper plane.svg" className="h-4 w-4 text-white/40" width={16} height={16} />
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="text-white font-semibold mb-1">Progression</div>
                  </div>
                  <div className="flex justify-center">
                    <Icon name="paper plane.svg" className="h-4 w-4 text-white/40" width={16} height={16} />
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="text-white font-semibold mb-1">Graduation</div>
                  </div>
                  <div className="flex justify-center">
                    <Icon name="paper plane.svg" className="h-4 w-4 text-white/40" width={16} height={16} />
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div className="text-white font-semibold mb-1">Loyalty</div>
                  </div>
                </div>
                <div className="mt-6 bg-white/5 p-4 rounded-xl border border-white/20">
                  <p className="text-white font-semibold text-sm">
                    Compounding value over time →
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Platform B */}
            <Card className="p-8 border border-white/10 bg-white/5">
              <CardContent className="p-0">
                <h3 className="font-bold text-2xl text-white mb-6 uppercase">Platform B</h3>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 mb-4">
                  <p className="text-white/60 font-semibold text-sm mb-2">Waits</p>
                </div>
                <div className="space-y-3">
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10">
                    <div className="text-white font-semibold mb-1">Apply</div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-white/20"></div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10">
                    <div className="text-white font-semibold mb-1">Decline</div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-white/20"></div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10 text-center">
                    <div className="text-white/60 font-semibold mb-1">—</div>
                  </div>
                </div>
                <div className="mt-6 bg-white/5 p-4 rounded-xl border border-white/10">
                  <p className="text-white/60 font-semibold text-sm mb-2">Compete for survivors</p>
                  <p className="text-white/60 font-semibold text-sm">No accumulation</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center max-w-4xl mx-auto">
            <p className="text-white font-bold text-xl italic">
              &quot;Readiness ownership compounds by time, not capital.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Directional Economics */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              Directional Economics
            </h2>
            <p className="text-xl text-white/90 font-medium">
              This is not a promise deck. It is a description of structural shifts platforms consistently observe:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 border-2 border-white/20 bg-white/10">
              <CardContent className="p-0">
                <div className="text-white font-bold text-lg mb-2">→</div>
                <div className="text-white font-semibold">Declined applicants retained instead of lost</div>
              </CardContent>
            </Card>
            <Card className="p-6 border-2 border-white/20 bg-white/10">
              <CardContent className="p-0">
                <div className="text-white font-bold text-lg mb-2">→</div>
                <div className="text-white font-semibold">CAC amortized over longer lifecycles</div>
              </CardContent>
            </Card>
            <Card className="p-6 border-2 border-white/20 bg-white/10">
              <CardContent className="p-0">
                <div className="text-white font-bold text-lg mb-2">→</div>
                <div className="text-white font-semibold">Earlier monetization surfaces introduced</div>
              </CardContent>
            </Card>
            <Card className="p-6 border-2 border-white/20 bg-white/10">
              <CardContent className="p-0">
                <div className="text-white font-bold text-lg mb-2">→</div>
                <div className="text-white font-semibold">Approval confidence increases</div>
              </CardContent>
            </Card>
            <Card className="p-6 border-2 border-white/20 bg-white/10">
              <CardContent className="p-0">
                <div className="text-white font-bold text-lg mb-2">→</div>
                <div className="text-white font-semibold">Downstream products see warmer demand</div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center max-w-3xl mx-auto">
            <p className="text-white font-bold text-lg">
              The economic effect is not explosive. It is compounding.
            </p>
          </div>
        </div>
      </section>

      {/* The End State */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight uppercase">
              The End State
            </h2>
            <p className="text-xl text-white/90 font-medium">
              18 months after installing LumiqAI, your platform is no longer asking:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border border-white/10 bg-white/5">
              <CardContent className="p-0">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-4">
                  <p className="text-white/60 font-semibold text-sm uppercase mb-2">Old Question</p>
                  <p className="text-white font-bold text-lg">
                    &quot;How do we approve more safely?&quot;
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-white/20 bg-white/10">
              <CardContent className="p-0">
                <div className="bg-white/10 p-6 rounded-xl border border-white/20 mb-4">
                  <p className="text-white font-semibold text-sm uppercase mb-2">New Question</p>
                  <p className="text-white font-bold text-lg">
                    &quot;How early can we meet the next generation of businesses?&quot;
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white/5 p-10 rounded-3xl border border-white/10 text-center max-w-4xl mx-auto">
            <p className="text-2xl font-bold text-white mb-4">
              You don&apos;t wait for readiness.
            </p>
            <p className="text-2xl font-bold text-white">
              You manufacture it.
            </p>
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
              <p className="text-3xl md:text-4xl font-bold text-white leading-tight">
                LumiqAI doesn&apos;t help you win approvals.
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-white mt-6 leading-tight">
                It helps you win before approvals exist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Private Pilots CTA */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-8 tracking-tight uppercase">
            Private Pilots
          </h2>
          <p className="text-xl text-white/90 mb-4 font-medium">
            We work with one platform per category.
          </p>
          <p className="text-lg text-white/80 mb-12 font-medium">
            Because this is not a feature. It is an operating advantage.
          </p>
          <Button
            size="lg"
            className="bg-white text-black px-10 py-4 text-lg font-semibold rounded-full shadow-lg uppercase"
          >
            <Icon name="rocket.svg" className="mr-3 h-6 w-6" width={24} height={24} />
            Request a Private Pilot
          </Button>
        </div>
      </section>
    </div>
  )
}

