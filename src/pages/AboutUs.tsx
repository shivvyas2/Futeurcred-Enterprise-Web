import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Zap, Shield, TrendingUp, Building2 } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 bg-black -mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-6 text-white">
            About <span className="text-white">FuteurcredX</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            We don't sell data. We decode it. Building the future of financial intelligence for fintechs and institutions worldwide.
          </p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Complete Business Credit Operating System</h2>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">FUTEURCREDX™</strong> brings together business credit monitoring, AI-powered insights, PG-free tradelines, and enterprise banking solutions—all powered by the revolutionary <strong className="text-primary">LUMIQ AI™</strong> journey engine.
              </p>
              <p className="text-muted-foreground mb-6">
                We build intelligent products that help financial institutions and fintechs make smarter lending decisions, reduce risk, and unlock new revenue streams through data-driven credit intelligence.
              </p>
              <a 
                href="https://www.futeurcredx.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                Visit FuteurcredX.com <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="mb-4">
                <img 
                  src="/Lumiqailogo.png" 
                  alt="LumiqAI Logo" 
                  className="h-16 w-auto object-contain brightness-0"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">LUMIQ AI™</h3>
              <p className="text-muted-foreground text-sm">
                Our proprietary AI engine that powers intelligent credit decisioning, real-time monitoring, and predictive analytics for financial institutions.
              </p>
            </div>
          </div>

          {/* What We Do */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">What We Build</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Zap, title: "Credit Intelligence", desc: "Real-time credit monitoring and scoring for businesses" },
                { icon: Shield, title: "Risk Assessment", desc: "AI-powered risk analysis and fraud detection" },
                { icon: TrendingUp, title: "Lending Optimization", desc: "Smart decisioning tools for financial institutions" },
                { icon: Building2, title: "Enterprise Solutions", desc: "Scalable infrastructure for banks and fintechs" },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <item.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission */}
          <div className="bg-primary/5 rounded-2xl p-10 text-center mb-20">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              To democratize access to intelligent credit infrastructure, enabling every fintech and financial institution to make data-driven decisions that grow their business and serve their customers better.
            </p>
          </div>

          {/* Links */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6">Explore Our Products</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/what-is-it" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Discover LUMIQ AI
              </Link>
              <a 
                href="https://www.futeurcredx.com/credit-journey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
              >
                See Demo <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
