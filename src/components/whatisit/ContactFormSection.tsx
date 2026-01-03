"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const countries = [
  "United States",
  "Canada", 
  "United Kingdom",
  "Germany",
  "France",
  "Australia",
  "India",
  "Other"
]

export function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    companyEmail: "",
    country: "",
    phone: ""
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.firstName.trim() || !formData.lastName.trim() || 
        !formData.companyName.trim() || !formData.companyEmail.trim() || 
        !formData.country) {
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.companyEmail)) {
      return
    }

    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    // Limit input lengths for security
    const maxLengths: Record<string, number> = {
      firstName: 50,
      lastName: 50,
      companyName: 100,
      companyEmail: 100,
      phone: 20
    }
    
    const maxLen = maxLengths[field] || 100
    if (value.length <= maxLen) {
      setFormData(prev => ({ ...prev, [field]: value }))
    }
  }

  const inputClasses = "w-full h-12 px-4 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all"

  return (
    <section className="relative overflow-hidden">
      {/* Gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #1e3a8a 0%, #4338ca 30%, #7c3aed 60%, #a855f7 100%)",
        }}
      />
      
      {/* Curved top edge */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-black">
        <svg 
          viewBox="0 0 1440 80" 
          className="absolute bottom-0 w-full h-20"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,80 L0,40 Q720,100 1440,40 L1440,80 Z" 
            fill="url(#gradient)"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="50%" stopColor="#4338ca" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="relative z-10 py-20 md:py-28 px-6 pt-28">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[32px] md:text-[46px] font-bold text-white leading-[1.1] tracking-tight">
                Strengthen your decisioning with real-time credit insights
              </h2>
            </motion.div>
            
            {/* Right: Form Card */}
            <motion.div
              className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Thanks for reaching out!</h3>
                  <p className="text-slate-600">We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-[22px] md:text-[26px] font-bold text-slate-900 mb-6">
                    Get started with LumiqAI
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Row 1: First & Last Name */}
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("firstName", e.target.value)}
                        className={inputClasses}
                        required
                      />
                      <input
                        type="text"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("lastName", e.target.value)}
                        className={inputClasses}
                        required
                      />
                    </div>
                    
                    {/* Row 2: Company & Email */}
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Company name"
                        value={formData.companyName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("companyName", e.target.value)}
                        className={inputClasses}
                        required
                      />
                      <input
                        type="email"
                        placeholder="Company email"
                        value={formData.companyEmail}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("companyEmail", e.target.value)}
                        className={inputClasses}
                        required
                      />
                    </div>
                    
                    {/* Row 3: Country & Phone */}
                    <div className="grid grid-cols-2 gap-4">
                      <select 
                        value={formData.country} 
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                        className={`${inputClasses} appearance-none bg-white cursor-pointer`}
                        required
                      >
                        <option value="">Country</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        placeholder="Phone number (optional)"
                        value={formData.phone}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("phone", e.target.value)}
                        className={inputClasses}
                      />
                    </div>
                    
                    {/* Privacy Notice */}
                    <p className="text-[13px] text-slate-500 pt-2">
                      By submitting this form, I confirm that I have read and understood{" "}
                      <a href="/privacy" className="text-slate-700 underline hover:text-slate-900">
                        LumiqAI's Privacy Statement
                      </a>.
                    </p>
                    
                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 h-12 rounded-full text-[15px] font-semibold transition-all shadow-lg shadow-slate-900/20"
                    >
                      {isSubmitting ? "Submitting..." : "Talk with our team"}
                    </Button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
