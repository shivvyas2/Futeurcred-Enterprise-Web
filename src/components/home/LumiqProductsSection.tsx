import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Icon from "@/components/Icon"

interface ProductFeature {
  id: string
  name: string
  tagline: string
  icon: string
  impact: string
  setup: string
  analytics: string
  screenshot?: string // Optional screenshot path
}

const products: ProductFeature[] = [
  {
    id: "conversion",
    name: "Conversion Engine™",
    tagline: "Real-time credit scoring for higher completions",
    icon: "target.svg",
    impact: "+47% conversion rate",
    setup: "Single API call",
    analytics: "Full journey tracking",
    screenshot: "/screenshots/conversion-dashboard.jpg"
  },
  {
    id: "underwriting",
    name: "Underwriting Assistant™",
    tagline: "Multi-bureau intelligence for smarter decisions",
    icon: "document.svg",
    impact: "+23% accurate approvals",
    setup: "Real-time APIs",
    analytics: "-60% false positives",
    screenshot: "/screenshots/underwriting-dashboard.jpg"
  },
  {
    id: "dashboard",
    name: "Engagement Dashboard™",
    tagline: "Credit health monitoring for retention",
    icon: "chart.svg",
    impact: "3.2x platform usage",
    setup: "White-label widgets",
    analytics: "-85% churn rate",
    screenshot: "/screenshots/engagement-dashboard.jpg"
  },
  {
    id: "risk",
    name: "Risk Intelligence™",
    tagline: "Predictive monitoring for portfolio health",
    icon: "speedometer.svg",
    impact: "-30% default rates",
    setup: "Automated alerts",
    analytics: "Real-time scoring",
    screenshot: "/screenshots/risk-dashboard.jpg"
  }
]

function ProductCard({ product, index }: { product: ProductFeature; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={cardRef}
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative h-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5">
        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")"
          }}
        />

        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>

        <div className="relative z-10 p-6">
          {/* Header */}
          <div className="flex items-start gap-4 mb-5">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/15 transition-colors">
              <Icon name={product.icon} className="h-6 w-6" width={24} height={24} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-lg text-white mb-1 leading-tight">
                LUMIQ AI {product.name}
              </h3>
              <p className="text-white/50 text-sm leading-snug">
                {product.tagline}
              </p>
            </div>
          </div>

          {/* Screenshot placeholder */}
          <div className="relative mb-5 rounded-xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/15 aspect-[16/10] shadow-lg shadow-black/30 ring-1 ring-white/5">
            {product.screenshot ? (
              <img 
                src={product.screenshot} 
                alt={`${product.name} dashboard`}
                className="w-full h-full object-contain bg-white rounded-lg"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-white/5 flex items-center justify-center">
                    <Icon name="computer.svg" className="h-6 w-6 opacity-30" width={24} height={24} />
                  </div>
                  <span className="text-white/20 text-xs font-medium">Dashboard Preview</span>
                </div>
              </div>
            )}
            {/* Subtle animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-xl pointer-events-none"
              animate={{
                boxShadow: [
                  "inset 0 0 0 1px rgba(255,255,255,0.05)",
                  "inset 0 0 0 1px rgba(255,255,255,0.1)",
                  "inset 0 0 0 1px rgba(255,255,255,0.05)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-white/5 rounded-lg p-3 text-center border border-white/5 hover:border-white/10 transition-colors">
              <div className="text-[10px] uppercase tracking-wider text-white/40 mb-1 font-medium">Impact</div>
              <div className="text-sm font-bold text-white leading-tight">{product.impact}</div>
            </div>
            <div className="bg-white/5 rounded-lg p-3 text-center border border-white/5 hover:border-white/10 transition-colors">
              <div className="text-[10px] uppercase tracking-wider text-white/40 mb-1 font-medium">Setup</div>
              <div className="text-sm font-bold text-white leading-tight">{product.setup}</div>
            </div>
            <div className="bg-white/5 rounded-lg p-3 text-center border border-white/5 hover:border-white/10 transition-colors">
              <div className="text-[10px] uppercase tracking-wider text-white/40 mb-1 font-medium">Analytics</div>
              <div className="text-sm font-bold text-white leading-tight">{product.analytics}</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function LumiqProductsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  return (
    <section ref={sectionRef} className="relative py-24 px-6 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 bg-white/5 px-5 py-2.5 rounded-full mb-6 border border-white/10">
            <Icon name="rocket.svg" className="h-4 w-4" width={16} height={16} />
            <span className="font-medium text-white/70 text-xs uppercase tracking-wider">Fintech-Optimized APIs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight uppercase">
            LUMIQ AI™ — Built for Modern Fintechs
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Drop-in credit intelligence that integrates with your existing stack in hours, not months.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
