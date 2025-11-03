import React from 'react';
import ReleaseBanner from './components/ReleaseBanner';
import HeroSection from './components/HeroSection';
import VendorLinks from './components/VendorLinks';
import SiteFooter from './components/SiteFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <ReleaseBanner />
      <HeroSection />
      <VendorLinks />
      <SiteFooter />
    </div>
  );
}
