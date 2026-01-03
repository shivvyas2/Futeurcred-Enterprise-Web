import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import WhatIsIt from "@/pages/WhatIsIt";
import HowItWorks from "@/pages/HowItWorks";
import RiskAndControl from "@/pages/RiskAndControl";
import Outcomes from "@/pages/Outcomes";
import Docs from "@/pages/Docs";
import AboutUs from "@/pages/AboutUs";
import ContactUs from "@/pages/ContactUs";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import RequestPilot from "@/pages/RequestPilot";

function AppContent() {
  const location = useLocation();
  const isDocsPage = location.pathname === '/docs';

  return (
    <>
      {!isDocsPage && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/what-is-it" element={<WhatIsIt />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/risk-and-control" element={<RiskAndControl />} />
        <Route path="/outcomes" element={<Outcomes />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/request-pilot" element={<RequestPilot />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      {!isDocsPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
