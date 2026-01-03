import { CheckCircle2 } from "lucide-react"

export function DecisioningCard() {
  return (
    <div className="w-[280px] bg-gray-900/95 backdrop-blur-sm border border-white/10 rounded-2xl p-5 shadow-xl shadow-black/20">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4 text-white/80" />
          </div>
          <span className="text-white font-semibold text-sm">Decisioning Summary</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 text-xs font-medium">Live</span>
        </div>
      </div>

      {/* Body content */}
      <div className="space-y-3 mb-4">
        <div className="flex justify-between items-center py-2 border-b border-white/5">
          <span className="text-white/60 text-xs">Recommended Action</span>
          <span className="text-green-400 font-semibold text-sm">Approve</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-white/5">
          <span className="text-white/60 text-xs">Confidence</span>
          <span className="text-white font-semibold text-sm">High (86%)</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-white/60 text-xs">Key Signals</span>
          <div className="flex gap-1.5">
            <span className="text-xs text-white/80 bg-white/10 px-2 py-0.5 rounded">Verified</span>
            <span className="text-xs text-white/80 bg-white/10 px-2 py-0.5 rounded">Stable</span>
            <span className="text-xs text-white/80 bg-white/10 px-2 py-0.5 rounded">Growing</span>
          </div>
        </div>
      </div>

      {/* Reason Codes */}
      <div className="flex flex-wrap gap-1.5">
        <span className="text-xs text-white/70 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
          Identity match
        </span>
        <span className="text-xs text-white/70 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
          Registry active
        </span>
        <span className="text-xs text-white/70 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
          Low risk flags
        </span>
      </div>
    </div>
  )
}
