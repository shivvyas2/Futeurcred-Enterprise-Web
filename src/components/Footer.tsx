import Link from "next/link"
import { Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <div className="bg-[#2c2c2c] text-white">
      {/* Footer Links Section */}
      <div className="px-6 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          {/* Enterprise Section */}
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-tight text-white text-base">Enterprise Solutions</h4>
            <div className="space-y-3">
              <a href="https://docs.futeurcredx.com/" className="block text-white opacity-90 hover:opacity-100 font-medium tracking-wide">
                Documentation
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-tight text-white text-base">Company</h4>
            <div className="space-y-3">
              <Link href="/about" className="block text-white opacity-90 hover:opacity-100 font-medium tracking-wide">
                About Us
              </Link>
              <Link href="/contact-us" className="block text-white opacity-90 hover:opacity-100 font-medium tracking-wide">
                Contact Us
              </Link>
              <Link href="/privacy-policy" className="block text-white opacity-90 hover:opacity-100 font-medium tracking-wide">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="block text-white opacity-90 hover:opacity-100 font-medium tracking-wide">
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
          <div className="flex justify-between items-center mb-8">
            <div className="text-2xl font-black uppercase tracking-tight">FUTEURCREDX</div>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/futeurai/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-white opacity-90 hover:opacity-100 cursor-pointer" />
              </a>
              <a href="https://x.com/FuteurAI" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5 text-white opacity-90 hover:opacity-100 cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/company/futeurai/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-white opacity-90 hover:opacity-100 cursor-pointer" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-white opacity-90 font-medium mb-6">© FUTEURCREDX 2025</div>

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
            © 2025 FUTEURCREDX.
            LUMIQ AI™ and FUTEURCREDX® are registered trademarks. All rights reserved. Building business credit, empowering growth.
          </div>
        </div>
      </div>
    </div>
  )
}

