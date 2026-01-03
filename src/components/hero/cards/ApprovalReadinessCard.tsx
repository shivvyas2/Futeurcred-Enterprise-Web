import { Target } from "lucide-react"

export function ApprovalReadinessCard() {
  const milestones = [
    { label: "Verify", completed: true },
    { label: "Stabilize", completed: true },
    { label: "Build", completed: true },
    { label: "Qualify", completed: false, current: true },
    { label: "Unlock", completed: false },
  ]

  return (
    <div className="w-[260px] bg-gray-900/95 backdrop-blur-sm border border-white/10 rounded-2xl p-5 shadow-xl shadow-black/20">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center">
          <Target className="w-4 h-4 text-white/80" />
        </div>
        <span className="text-white font-semibold text-sm">Approval Readiness</span>
      </div>

      {/* Progress Meter */}
      <div className="mb-5">
        <div className="flex justify-between mb-2">
          {milestones.map((milestone, index) => (
            <div key={milestone.label} className="flex flex-col items-center">
              <div 
                className={`w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold ${
                  milestone.completed 
                    ? "bg-green-400/20 text-green-400 border border-green-400/50" 
                    : milestone.current 
                      ? "bg-white/20 text-white border border-white/50 animate-pulse" 
                      : "bg-white/5 text-white/30 border border-white/10"
                }`}
              >
                {milestone.completed ? "✓" : index + 1}
              </div>
              <span className={`text-[9px] mt-1 ${
                milestone.completed 
                  ? "text-green-400/80" 
                  : milestone.current 
                    ? "text-white/80" 
                    : "text-white/30"
              }`}>
                {milestone.label}
              </span>
            </div>
          ))}
        </div>
        {/* Progress bar */}
        <div className="h-1 bg-white/10 rounded-full mt-2">
          <div className="h-full w-[60%] bg-gradient-to-r from-green-400/80 to-white/50 rounded-full" />
        </div>
      </div>

      {/* Details */}
      <div className="space-y-2 pt-3 border-t border-white/5">
        <div className="flex justify-between items-center">
          <span className="text-white/50 text-xs">Next unlock</span>
          <span className="text-white text-xs font-medium">Corporate Card / LOC</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white/50 text-xs">Est. readiness</span>
          <span className="text-green-400 text-xs font-medium">On track</span>
        </div>
      </div>
    </div>
  )
}
