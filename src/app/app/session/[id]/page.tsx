'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DeploymentSequence from '@/components/app/DeploymentSequence';
import SessionDashboard from '@/components/app/SessionDashboard';

export default function SessionPage({ params }: { params: { id: string } }) {
  const [showDashboard, setShowDashboard] = useState(false);

  const handleDeploymentComplete = () => {
    setShowDashboard(true);
  };

  if (!showDashboard) {
    return <DeploymentSequence onComplete={handleDeploymentComplete} />;
  }

  return <SessionDashboard sessionId={params.id} />;
}
