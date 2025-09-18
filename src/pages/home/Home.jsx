import React from 'react';
import HeroSection from '@components/home/HeroSection';
import FeaturesSection from '@components/home/FeaturesSection';
import ShowcaseSection from '@components/home/ShowcaseSection';
import HowItWorksSection from '@components/home/HowItWorksSection';
import UseCasesSection from '@components/home/UseCasesSection';
import TechnologySection from '@components/home/TechnologySection';
import CTASection from '@components/home/CTASection';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <ShowcaseSection />
      <FeaturesSection />
      <HowItWorksSection />
      <UseCasesSection />
      <TechnologySection />
      <CTASection />
    </div>
  );
};

export default Home;
