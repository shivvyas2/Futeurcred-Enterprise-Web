import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Footer() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const linkHoverClass = "block text-white opacity-55 font-medium tracking-wide cursor-pointer transition-all duration-[180ms] ease-out hover:opacity-85 hover:translate-x-0.5";

  return (
    <div className="bg-[#2c2c2c] text-white relative overflow-hidden pt-7 pb-5">
      {/* Shimmer Animation */}
      {!reducedMotion && (
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer-sweep 12s linear infinite',
            height: '1px',
            top: '50%',
          }}
        />
      )}

      {/* Brand Stack - Centered */}
      <div className="flex flex-col items-center mb-[22px]">
        {/* LumiqAI Logo */}
        <img 
          src="/Lumiqailogo.png" 
          alt="LumiqAI Logo" 
          className="h-8 w-auto object-contain"
        />
        {/* Powered by text */}
        <span 
          className="mt-1.5 text-white opacity-60 font-medium transition-opacity duration-200 hover:opacity-75 cursor-default"
          style={{ fontSize: '13px', letterSpacing: '0.6px' }}
        >
          Powered by FuteurCredX
        </span>
        {/* Product description */}
        <p className="mt-3 text-xs text-white opacity-80 font-medium text-center max-w-md px-4">
          LumiqAI™ powers readiness scoring, unlock paths, and sponsor-safe exposure decisions for fundability infrastructure.
        </p>
      </div>

      {/* Animated Dot Divider */}
      <div className="flex justify-center items-center gap-2 mb-[22px]">
        {[0, 1, 2].map((i) => (
          <span 
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-white"
            style={{
              opacity: reducedMotion ? 0.35 : undefined,
              animation: reducedMotion ? 'none' : `dot-pulse 8s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Footer Links Section */}
      <div className="px-6 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {/* Documents Section */}
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-tight text-white text-base">Documents</h4>
            <div className="space-y-3">
              <a href="https://docs.futeurcredx.com/" target="_blank" rel="noopener noreferrer" className={linkHoverClass}>
                API Documentation
              </a>
              <a href="https://docs.futeurcredx.com/api-reference" target="_blank" rel="noopener noreferrer" className={linkHoverClass}>
                API Reference
              </a>
              <a href="https://docs.futeurcredx.com/changelog" target="_blank" rel="noopener noreferrer" className={linkHoverClass}>
                Changelog
              </a>
            </div>
          </div>

          {/* LumiqAI Section */}
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-tight text-white text-base">LumiqAI</h4>
            <div className="space-y-3">
              <Link to="/what-is-it" className={linkHoverClass}>
                What Is It
              </Link>
              <Link to="/how-it-works" className={linkHoverClass}>
                How It Works
              </Link>
              <Link to="/risk-and-control" className={linkHoverClass}>
                Risk & Control
              </Link>
              <Link to="/outcomes" className={linkHoverClass}>
                Outcomes
              </Link>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-tight text-white text-base">Company</h4>
            <div className="space-y-3">
              <Link to="/about" className={linkHoverClass}>
                About Us
              </Link>
              <Link to="/contact-us" className={linkHoverClass}>
                Contact Us
              </Link>
              <Link to="/privacy-policy" className={linkHoverClass}>
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className={linkHoverClass}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-gray-600 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Logo and Social Icons */}
          <div className="mb-8">
            <div className="text-2xl font-black uppercase tracking-tight">FUTEURCREDX</div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-white opacity-90 font-medium mb-6">© FUTEURCREDX 2026</div>

          {/* Legal Text */}
          <div className="text-xs text-white opacity-80 space-y-4 mb-8 font-medium">
            <p>
              <strong>Enterprise Solutions</strong><br />
              Our enterprise solutions provide financial institutions with AI-powered risk assessment tools, lending intelligence, and portfolio analytics to enhance decision-making processes and improve operational efficiency.
            </p>

            <p>
              <strong>Data Security</strong><br />
              FUTEURCREDX employs industry-leading security measures to protect your business data. All information is encrypted and stored according to the highest security standards in compliance with relevant regulations.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-xs text-gray-500 mt-4">
            © 2026 FUTEURCREDX.
            LUMIQ AI™ and FUTEURCREDX® are registered trademarks. All rights reserved. Building business credit, empowering growth.
          </div>

          {/* Compliance Micro Row */}
          <div 
            className="text-center mt-4 text-white opacity-50 font-medium"
            style={{ fontSize: '10px', letterSpacing: '0.4px' }}
          >
            SOC 2 • ISO 27001 Compliant • Data Residency: United States Only
          </div>
        </div>
      </div>

      {/* Inline keyframes for animations */}
      <style>{`
        @keyframes shimmer-sweep {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes dot-pulse {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  )
}
