import { TrendingUp } from "lucide-react"

export function CreditIntelligenceCard() {
  return (
    <div className="w-[320px] bg-gray-900/95 backdrop-blur-sm border border-white/10 rounded-2xl p-5 shadow-xl shadow-black/20">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center">
          <TrendingUp className="w-4 h-4 text-white/80" />
        </div>
        <span className="text-white font-semibold text-sm">Credit Intelligence</span>
      </div>

      {/* Two mini panels */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        {/* Business Credit Panel */}
        <div className="bg-white/5 rounded-xl p-3 border border-white/5">
          <div className="text-white/60 text-xs mb-2 font-medium">Business Credit</div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-white/50 text-xs">Score</span>
              <span className="text-white font-semibold text-sm">72</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/50 text-xs">Tradelines</span>
              <span className="text-white font-semibold text-sm">4</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/50 text-xs">Trend</span>
              <span className="text-green-400 font-semibold text-sm">↑</span>
            </div>
          </div>
        </div>

        {/* Personal Credit Panel */}
        <div className="bg-white/5 rounded-xl p-3 border border-white/5">
          <div className="text-white/60 text-xs mb-2 font-medium">Personal Credit</div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-white/50 text-xs">Score</span>
              <span className="text-white font-semibold text-sm">694</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/50 text-xs">Utilization</span>
              <span className="text-white font-semibold text-sm">28%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/50 text-xs">Inquiries</span>
              <span className="text-white font-semibold text-sm">2</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-white/40 text-xs text-center pt-2 border-t border-white/5">
        Updated: Today
      </div>
    </div>
  )
}
