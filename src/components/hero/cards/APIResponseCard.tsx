import { Code, Copy } from "lucide-react"

export function APIResponseCard() {
  const jsonResponse = `{
  "decision": "approve",
  "confidence": 0.86,
  "signals": [
    "identity_verified",
    "registry_active",
    "stable_behavior"
  ],
  "readiness": "qualify",
  "next_product": "card_or_loc"
}`

  return (
    <div className="w-[250px] bg-gray-950/95 backdrop-blur-sm border border-white/10 rounded-2xl p-4 shadow-xl shadow-black/30">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-white/10 flex items-center justify-center">
            <Code className="w-3 h-3 text-white/80" />
          </div>
          <span className="text-white font-semibold text-xs">API Response</span>
        </div>
        <button className="w-5 h-5 rounded-md bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
          <Copy className="w-3 h-3 text-white/50" />
        </button>
      </div>

      {/* Code snippet */}
      <div className="bg-black/50 rounded-lg p-3 overflow-hidden">
        <pre className="text-[10px] text-white/80 font-mono leading-relaxed whitespace-pre overflow-x-auto">
          <code>{jsonResponse}</code>
        </pre>
      </div>

      {/* Footer label */}
      <div className="text-white/40 text-[10px] text-center mt-2">
        Embeddable in your stack.
      </div>
    </div>
  )
}
