'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import HeroSection from '@/components/landing/HeroSection';
import ProblemSection from '@/components/landing/ProblemSection';
import MethodSection from '@/components/landing/MethodSection';
import AgentsSection from '@/components/landing/AgentsSection';
import DecisionEvolveSection from '@/components/landing/DecisionEvolveSection';
import EvidenceSection from '@/components/landing/EvidenceSection';
import RedTeamSection from '@/components/landing/RedTeamSection';
import DossierSection from '@/components/landing/DossierSection';
import FinalCTASection from '@/components/landing/FinalCTASection';

export default function LandingPage() {
  const handleEnterParallax = () => {
    window.location.href = '/app/new-session';
  };

  const handleExploreSession = () => {
    window.location.href = '/app/demo';
  };

  return (
    <main className="w-full overflow-hidden bg-bg-primary">
      <HeroSection 
        onEnter={handleEnterParallax}
        onExplore={handleExploreSession}
      />
      <ProblemSection />
      <MethodSection />
      <AgentsSection />
      <DecisionEvolveSection />
      <EvidenceSection />
      <RedTeamSection />
      <DossierSection />
      <FinalCTASection onEnter={handleEnterParallax} />
    </main>
  );
}
