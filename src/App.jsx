import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Hero/HeroSection';
import AboutSection from './components/About/AboutSection';
import ServicesSection from './components/Services/ServicesSection';
import SubscriptionSection from './components/Subscription/SubscriptionSection';
import ContactSection from './components/Contact/ContactSection';
import PackageDetailPage from './components/Packages/PackageDetailPage';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, [location]);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SubscriptionSection />
      <ContactSection />
    </main>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/packages/:slug" element={<PackageDetailPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
