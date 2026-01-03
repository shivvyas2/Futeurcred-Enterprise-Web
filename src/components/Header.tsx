"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  // Define which routes should have white header
  const whiteHeaderRoutes = ['/dashboard', '/login', '/register', '/docs'];
  const isWhiteHeader = whiteHeaderRoutes.includes(pathname);
  
  // Define which routes should have transparent header
  const transparentHeaderRoutes = ['/contact-us', '/about', '/', '/business', '/lumiq-build', '/credit-journey', '/how-it-works', '/risk-and-control', '/outcomes', '/what-is-it'];
  const isTransparentHeader = transparentHeaderRoutes.includes(pathname);
  
  // Define which routes should have black text (only About page)
  const blackTextRoutes = ['/about'];
  const useBlackText = blackTextRoutes.includes(pathname);
  
  // Track scroll position for background changes
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const getTextColor = () => {
    if (isScrolled) {
      if (isTransparentHeader) {
        return useBlackText ? 'text-black' : 'text-white';
      }
      return 'text-white';
    }
    if (isWhiteHeader) {
      return 'text-black';
    }
    if (isTransparentHeader) {
      return useBlackText ? 'text-black' : 'text-white';
    }
    return 'text-white';
  };

  const getLinkColor = () => {
    if (isScrolled) {
      if (isTransparentHeader) {
        return useBlackText ? 'text-slate-700 hover:text-blue-600' : 'text-white hover:text-gray-300';
      }
      return 'text-white hover:text-gray-300';
    }
    if (isWhiteHeader) {
      return 'text-slate-700 hover:text-blue-600';
    }
    if (isTransparentHeader) {
      return useBlackText ? 'text-black hover:text-gray-700' : 'text-white hover:text-gray-300';
    }
    return 'text-white hover:text-gray-300';
  };

  const getButtonStyle = () => {
    if (isScrolled) {
      if (isTransparentHeader) {
        return useBlackText 
          ? 'bg-[#07124A] text-white hover:bg-[#050A2E] border border-[#07124A]/20' 
          : 'bg-[#07124A] text-white hover:bg-[#050A2E] border border-[#07124A]/20';
      }
      return 'bg-white text-black hover:bg-gray-50 border border-gray-200';
    }
    if (isWhiteHeader) {
      return 'bg-[#07124A] text-white hover:bg-[#050A2E] border border-[#07124A]/20';
    }
    if (isTransparentHeader) {
      return useBlackText 
        ? 'bg-[#07124A] text-white hover:bg-[#050A2E] border border-white/10' 
        : 'bg-[#07124A] text-white hover:bg-[#050A2E] border border-white/10';
    }
    return 'bg-white text-black hover:bg-gray-50 border border-white/20';
  };

  return (
    <>
      <div className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 border-t-0 outline-none ${
        isScrolled 
          ? isTransparentHeader 
            ? useBlackText ? 'bg-white/90 backdrop-blur-md border-b border-gray-200' : 'bg-black/80 backdrop-blur-md border-b border-white/10'
            : 'bg-black/60 backdrop-blur-md border-b border-white/10'
          : isWhiteHeader 
            ? 'bg-white/80 backdrop-blur-sm border-b border-gray-200'
            : isTransparentHeader
              ? 'bg-transparent border-0 outline-none'
              : 'bg-transparent border-0 outline-none'
      }`}>
        <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center h-8 overflow-hidden">
            <Link href="/" className="cursor-pointer block h-full flex items-center">
              <Image 
                src="/Lumiqailogo.png" 
                alt="Lumiqai Logo" 
                width={120} 
                height={24}
                className="transition-opacity hover:opacity-80 object-contain h-full w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/what-is-it" className={`transition-colors ${getLinkColor()}`}>
              What Is It
            </Link>
            <Link href="/how-it-works" className={`transition-colors ${getLinkColor()}`}>
              How It Works
            </Link>
            <Link href="/risk-and-control" className={`transition-colors ${getLinkColor()}`}>
              Risk & Control
            </Link>
            <Link href="/outcomes" className={`transition-colors ${getLinkColor()}`}>
              Outcomes
            </Link>
          </nav>

          {/* Desktop Login Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="https://www.futeurcredx.com/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`rounded-full px-8 py-2.5 font-semibold transition-all duration-300 ${getButtonStyle()} inline-flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95`}
            >
              Login
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-1 focus:outline-none transition-colors ${getTextColor()}`} 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>
      </div>
      
      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className={`fixed inset-0 top-16 z-40 md:hidden border-t ${
          isWhiteHeader 
            ? 'bg-white border-gray-200'
            : isTransparentHeader
              ? isScrolled 
                ? useBlackText ? 'bg-white/95 backdrop-blur-md border-gray-200' : 'bg-black/90 backdrop-blur-md border-white/10'
                : 'bg-black/80 backdrop-blur-md border-white/10'
              : 'bg-black border-white/10'
        }`}>
          <div className="flex flex-col space-y-6 p-6">
            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/what-is-it" 
                className={`text-xl py-3 border-b transition-colors ${
                  isWhiteHeader
                    ? 'text-slate-700 border-gray-200 hover:bg-blue-50'
                    : isTransparentHeader
                      ? isScrolled
                        ? useBlackText ? 'text-slate-700 border-gray-200 hover:bg-blue-50' : 'text-white border-white/20 hover:bg-white/10'
                        : 'text-white border-white/10 hover:bg-white/5'
                      : 'text-white border-white/10 hover:bg-white/5'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                What Is It
              </Link>
              <Link 
                href="/how-it-works" 
                className={`text-xl py-3 border-b transition-colors ${
                  isWhiteHeader
                    ? 'text-slate-700 border-gray-200 hover:bg-blue-50'
                    : isTransparentHeader
                      ? isScrolled
                        ? useBlackText ? 'text-slate-700 border-gray-200 hover:bg-blue-50' : 'text-white border-white/20 hover:bg-white/10'
                        : 'text-white border-white/10 hover:bg-white/5'
                      : 'text-white border-white/10 hover:bg-white/5'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                href="/risk-and-control" 
                className={`text-xl py-3 border-b transition-colors ${
                  isWhiteHeader
                    ? 'text-slate-700 border-gray-200 hover:bg-blue-50'
                    : isTransparentHeader
                      ? isScrolled
                        ? useBlackText ? 'text-slate-700 border-gray-200 hover:bg-blue-50' : 'text-white border-white/20 hover:bg-white/10'
                        : 'text-white border-white/10 hover:bg-white/5'
                      : 'text-white border-white/10 hover:bg-white/5'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Risk & Control
              </Link>
              <Link 
                href="/outcomes" 
                className={`text-xl py-3 border-b transition-colors ${
                  isWhiteHeader
                    ? 'text-slate-700 border-gray-200 hover:bg-blue-50'
                    : isTransparentHeader
                      ? isScrolled
                        ? useBlackText ? 'text-slate-700 border-gray-200 hover:bg-blue-50' : 'text-white border-white/20 hover:bg-white/10'
                        : 'text-white border-white/10 hover:bg-white/5'
                      : 'text-white border-white/10 hover:bg-white/5'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Outcomes
              </Link>
            </nav>
            
            {/* Mobile Login Button */}
            <div className="flex flex-col space-y-4 pt-4">
              <a 
                href="https://www.futeurcredx.com/login" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`rounded-xl py-5 text-xl font-semibold w-full transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] ${
                  isWhiteHeader
                    ? 'bg-[#3B82F6] text-white hover:bg-[#2563EB]'
                    : isTransparentHeader
                      ? isScrolled && useBlackText ? 'bg-[#07124A] text-white hover:bg-[#050A2E]' : 'bg-[#07124A] text-white hover:bg-[#050A2E]'
                      : 'bg-white text-black hover:bg-gray-100'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                Login
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

