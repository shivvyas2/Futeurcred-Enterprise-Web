import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Search, 
  ChevronRight, 
  ChevronDown,
  ArrowLeft,
  Home, 
  Rocket, 
  Code, 
  LayoutDashboard, 
  Globe, 
  FileText,
  Sun,
  Moon,
  BookOpen,
  Zap,
  Database,
  Shield,
  CreditCard,
  BarChart3,
  Users,
  Settings,
  ExternalLink,
  Copy,
  Check,
  Menu,
  X
} from "lucide-react";

interface SidebarItem {
  title: string;
  items?: { title: string; href: string }[];
  href?: string;
  icon?: React.ReactNode;
}

const sidebarData: SidebarItem[] = [
  { title: "Introduction", href: "#introduction", icon: <Home className="w-4 h-4" /> },
  { title: "Launch Checklist", href: "#launch-checklist", icon: <Rocket className="w-4 h-4" /> },
  { title: "Dashboard", href: "#dashboard", icon: <LayoutDashboard className="w-4 h-4" /> },
  { 
    title: "SDK", 
    icon: <Code className="w-4 h-4" />,
    items: [
      { title: "Web", href: "#sdk-web" },
    ]
  },
  { 
    title: "Lumiq", 
    icon: <Zap className="w-4 h-4" />,
    items: [
      { title: "Quickstart", href: "#lumiq-quickstart" },
    ]
  },
  { 
    title: "Credit Data", 
    icon: <CreditCard className="w-4 h-4" />,
    items: [
      { title: "FSR Score", href: "#fsr-score" },
      { title: "Intelliscore Plus", href: "#intelliscore" },
      { title: "Tradelines", href: "#tradelines" },
      { title: "Collections", href: "#collections" },
    ]
  },
  { 
    title: "Risk Assessment", 
    icon: <Shield className="w-4 h-4" />,
    items: [
      { title: "Risk Factors", href: "#risk-factors" },
      { title: "Industry Risk", href: "#industry-risk" },
      { title: "Credit Inquiries", href: "#credit-inquiries" },
    ]
  },
  { 
    title: "Analytics", 
    icon: <BarChart3 className="w-4 h-4" />,
    items: [
      { title: "Credit Health", href: "#credit-health" },
      { title: "Payment Insights", href: "#payment-insights" },
      { title: "Utilization", href: "#utilization" },
    ]
  },
];

const quickLinks = [
  {
    icon: <Rocket className="w-5 h-5" />,
    title: "Quickstart",
    description: "Get started with LUMIQ in just a few minutes",
    link: "#lumiq-quickstart",
    cta: "Get started"
  },
  {
    icon: <Code className="w-5 h-5" />,
    title: "API Reference",
    description: "Explore and integrate with API endpoints",
    link: "https://docs.futeurcredx.com/api-reference",
    cta: "View reference",
    external: true
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "Credit Data",
    description: "Access comprehensive Experian credit data",
    link: "#fsr-score",
    cta: "Explore data"
  }
];

const productCards = [
  {
    icon: <CreditCard className="w-6 h-6 text-blue-600" />,
    title: "FSR Score",
    description: "Financial Stability Risk Score for comprehensive risk assessment"
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-green-600" />,
    title: "Intelliscore Plus",
    description: "Advanced credit scoring with predictive analytics"
  },
  {
    icon: <Shield className="w-6 h-6 text-purple-600" />,
    title: "Risk Factors",
    description: "Detailed risk factor analysis for informed decisions"
  },
  {
    icon: <Users className="w-6 h-6 text-orange-600" />,
    title: "Tradelines",
    description: "Complete tradeline history and payment patterns"
  },
  {
    icon: <Database className="w-6 h-6 text-cyan-600" />,
    title: "Collections",
    description: "Collections data and business obligations tracking"
  },
  {
    icon: <Settings className="w-6 h-6 text-red-600" />,
    title: "Credit Utilization",
    description: "Monitor and analyze credit utilization metrics"
  }
];

export default function Docs() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState<string[]>(["SDK", "Lumiq", "Credit Data", "Risk Assessment", "Analytics"]);
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState("introduction");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle hash changes and scroll to section
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      setActiveSection(hash);
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.hash]);

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSection = 'introduction';
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150) {
          currentSection = section.id;
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSection = (title: string) => {
    setExpandedSections(prev => 
      prev.includes(title) 
        ? prev.filter(s => s !== title)
        : [...prev, title]
    );
  };

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const isActive = (href: string) => {
    return activeSection === href.replace('#', '');
  };

  const copyCode = () => {
    navigator.clipboard.writeText("curl -X POST https://api.futeurcredx.com/v1/credit-journey \\\n  -H 'Authorization: Bearer YOUR_API_KEY' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\"business_id\": \"123456\"}'");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderSidebarContent = () => (
    <nav className="space-y-1">
      {sidebarData.map((section) => (
        <div key={section.title}>
          {section.items ? (
            <>
              <button
                onClick={() => toggleSection(section.title)}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  darkMode 
                    ? 'hover:bg-gray-800 text-gray-300' 
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                {section.icon}
                <span className="flex-1 text-left">{section.title}</span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    expandedSections.includes(section.title) ? 'rotate-0' : '-rotate-90'
                  }`} 
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-200 ${
                  expandedSections.includes(section.title) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="ml-6 mt-1 space-y-1 py-1">
                  {section.items.map((item) => (
                    <button
                      key={item.title}
                      onClick={() => handleNavClick(item.href)}
                      className={`block w-full text-left px-3 py-1.5 text-sm rounded-lg transition-all duration-150 ${
                        isActive(item.href)
                          ? darkMode 
                            ? 'bg-blue-500/20 text-blue-400 font-medium' 
                            : 'bg-blue-50 text-blue-600 font-medium'
                          : darkMode 
                            ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <button
              onClick={() => handleNavClick(section.href || '#')}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-150 ${
                isActive(section.href || '')
                  ? darkMode 
                    ? 'bg-blue-500/20 text-blue-400' 
                    : 'bg-blue-50 text-blue-600'
                  : darkMode 
                    ? 'hover:bg-gray-800 text-gray-300' 
                    : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              {section.icon}
              {section.title}
            </button>
          )}
        </div>
      ))}
    </nav>
  );

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
      {/* Docs Header */}
      <header className={`sticky top-0 z-50 border-b ${darkMode ? 'bg-gray-950/95 border-gray-800' : 'bg-white/95 border-gray-200'} backdrop-blur-sm`}>
        <div className="flex items-center justify-between px-6 py-3 max-w-[1600px] mx-auto">
          {/* Logo with back link */}
          <div className="flex items-center gap-4">
            <Link 
              to="/" 
              className={`flex items-center gap-2 text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'} transition-colors`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to site</span>
            </Link>
            <div className={`h-5 w-px ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`} />
            <Link to="/docs" className="font-bold text-lg tracking-tight">FUTEURCREDX</Link>
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Docs</span>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#introduction" className={`text-sm font-medium pb-1 border-b-2 ${darkMode ? 'border-white text-white' : 'border-gray-900 text-gray-900'}`}>Docs</a>
            <a href="https://docs.futeurcredx.com/api-reference" target="_blank" rel="noopener noreferrer" className={`text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'} transition-colors`}>API Reference</a>
            <a href="https://docs.futeurcredx.com/changelog" target="_blank" rel="noopener noreferrer" className={`text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'} transition-colors`}>Changelog</a>
          </nav>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8 hidden lg:block">
            <div className={`relative flex items-center ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg px-4 py-2`}>
              <Search className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <input
                type="text"
                placeholder="Search for API..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`ml-3 bg-transparent outline-none text-sm flex-1 ${darkMode ? 'placeholder-gray-500' : 'placeholder-gray-400'}`}
              />
              <kbd className={`text-xs px-1.5 py-0.5 rounded ${darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-500'}`}>⌘K</kbd>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <a 
              href="https://www.futeurcredx.com/dashboard" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors hidden md:flex items-center gap-1`}
            >
              Dashboard <ChevronRight className="w-3 h-3" />
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className={`absolute inset-0 ${darkMode ? 'bg-black/60' : 'bg-black/30'}`} />
        </div>
      )}

      {/* Mobile Sidebar */}
      <aside 
        className={`fixed top-[57px] left-0 z-50 w-72 h-[calc(100vh-57px)] transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } ${darkMode ? 'bg-gray-950 border-r border-gray-800' : 'bg-white border-r border-gray-200'} overflow-y-auto py-6 px-4`}
      >
        {renderSidebarContent()}
      </aside>

      <div className="flex max-w-[1600px] mx-auto">
        {/* Desktop Sidebar */}
        <aside className={`hidden lg:block w-64 shrink-0 border-r ${darkMode ? 'border-gray-800' : 'border-gray-200'} h-[calc(100vh-57px)] sticky top-[57px] overflow-y-auto py-6 px-4`}>
          {renderSidebarContent()}
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-6 lg:px-12 py-12 max-w-4xl">
          {/* Hero Section */}
          <section id="introduction" className="mb-16">
            <div className="flex flex-col lg:flex-row items-start gap-12">
              <div className="flex-1">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">Welcome to the Docs</h1>
                <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Here you'll find guides, resources, and references to build with FuteurCredX.
                </p>
              </div>
              <div className="w-full lg:w-auto">
                <img 
                  src="https://docs.futeurcredx.com/ApiDocs.png" 
                  alt="API Documentation" 
                  className="w-full max-w-sm rounded-xl shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* Quick Links */}
          <section className="mb-16">
            <div className="grid md:grid-cols-3 gap-4">
              {quickLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.link}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={`group block p-6 rounded-xl border ${darkMode ? 'border-gray-800 hover:border-gray-700 bg-gray-900/50' : 'border-gray-200 hover:border-gray-300 bg-gray-50/50'} transition-all hover:shadow-lg`}
                >
                  <div className={`w-10 h-10 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} flex items-center justify-center mb-4 shadow-sm`}>
                    {link.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{link.title}</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>{link.description}</p>
                  <span className={`text-sm font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'} group-hover:underline flex items-center gap-1`}>
                    {link.cta} <ChevronRight className="w-3 h-3" />
                  </span>
                </a>
              ))}
            </div>
          </section>

          {/* Introduction Content */}
          <section className="mb-16">
            <div className={`flex items-center justify-between mb-6 pb-4 border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
              <h2 className="text-2xl font-bold">Introduction</h2>
              <button className={`flex items-center gap-2 text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'} transition-colors`}>
                <Copy className="w-4 h-4" /> Copy page
              </button>
            </div>
            
            <div className={`prose ${darkMode ? 'prose-invert' : ''} max-w-none`}>
              <p className={`text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                FuteurCredX provides developers with powerful financial data through our flagship API, the <strong>Lumiq Credit Journey</strong>. This service grants direct access to comprehensive Experian credit data, enabling you to build sophisticated financial products and services.
              </p>
              
              <p className={`text-base leading-relaxed mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                The Lumiq Credit Journey API delivers a wealth of information, including the <strong>FSR Score</strong>, <strong>Intelliscore Plus</strong>, industry payment insights, and detailed credit health analytics. You can access critical data points such as risk factors, credit inquiries, tradelines, industry risk, collections, business obligations, and credit utilization.
              </p>

              <p className={`text-base leading-relaxed mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Gaining access is straightforward—simply create an account to start integrating our powerful credit data into your applications.
              </p>
            </div>
          </section>

          {/* Code Example */}
          <section className="mb-16" id="lumiq-quickstart">
            <h2 className="text-2xl font-bold mb-6">Quick Start Example</h2>
            <div className={`rounded-xl overflow-hidden border ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
              <div className={`flex items-center justify-between px-4 py-3 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                <span className={`text-sm font-mono ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>cURL</span>
                <button 
                  onClick={copyCode}
                  className={`flex items-center gap-1.5 text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'} transition-colors`}
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <pre className={`p-4 overflow-x-auto text-sm ${darkMode ? 'bg-gray-950' : 'bg-gray-900'}`}>
                <code className="text-green-400">
{`curl -X POST https://api.futeurcredx.com/v1/credit-journey \\
  -H 'Authorization: Bearer YOUR_API_KEY' \\
  -H 'Content-Type: application/json' \\
  -d '{"business_id": "123456"}'`}
                </code>
              </pre>
            </div>
          </section>

          {/* Credit Data Products */}
          <section className="mb-16" id="fsr-score">
            <h2 className="text-2xl font-bold mb-6">Credit Data & Analytics</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {productCards.map((card) => (
                <div
                  key={card.title}
                  className={`p-5 rounded-xl border ${darkMode ? 'border-gray-800 bg-gray-900/30' : 'border-gray-200 bg-gray-50/50'} transition-all hover:shadow-md`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} flex items-center justify-center shadow-sm shrink-0`}>
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{card.title}</h3>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{card.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Additional Resources */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Additional Resources</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a 
                href="https://docs.futeurcredx.com/api-reference" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-xl border ${darkMode ? 'border-gray-800 hover:border-gray-700' : 'border-gray-200 hover:border-gray-300'} transition-all group`}
              >
                <BookOpen className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                <div className="flex-1">
                  <h3 className="font-medium">API Reference</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Complete API documentation</p>
                </div>
                <ExternalLink className={`w-4 h-4 ${darkMode ? 'text-gray-600' : 'text-gray-400'} group-hover:translate-x-0.5 transition-transform`} />
              </a>
              
              <a 
                href="https://www.futeurcredx.com/faq" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-xl border ${darkMode ? 'border-gray-800 hover:border-gray-700' : 'border-gray-200 hover:border-gray-300'} transition-all group`}
              >
                <FileText className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                <div className="flex-1">
                  <h3 className="font-medium">FAQ</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Frequently asked questions</p>
                </div>
                <ExternalLink className={`w-4 h-4 ${darkMode ? 'text-gray-600' : 'text-gray-400'} group-hover:translate-x-0.5 transition-transform`} />
              </a>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className={`border-t ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
        <div className="max-w-[1600px] mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <Link to="/" className="font-bold tracking-tight">FUTEURCREDX</Link>
              <nav className="flex items-center gap-4 text-sm">
                <Link to="/" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                  Home
                </Link>
                <Link to="/what-is-it" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                  What Is It
                </Link>
                <Link to="/how-it-works" className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                  How It Works
                </Link>
                <a 
                  href="https://www.futeurcredx.com/login" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                >
                  Login
                </a>
              </nav>
            </div>
            <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              © 2025 FUTEURCREDX. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
