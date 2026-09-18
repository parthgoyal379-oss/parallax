'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface DeploymentPhase {
  id: string;
  label: string;
  duration: number;
}

const PHASES: DeploymentPhase[] = [
  { id: '1', label: 'INITIALIZING SESSION', duration: 0.8 },
  { id: '2', label: 'DEFINING PROBLEM', duration: 1 },
  { id: '3', label: 'DECOMPOSING DECISION', duration: 1.2 },
  { id: '4', label: 'ASSIGNING SPECIALISTS', duration: 0.9 },
  { id: '5', label: 'INITIALIZING RESEARCH', duration: 1.1 },
  { id: '6', label: 'BUILDING HYPOTHESIS SPACE', duration: 1.3 },
  { id: '7', label: 'OPENING ADVERSARIAL LAYER', duration: 1 },
  { id: '8', label: 'SYNCHRONIZING AGENTS', duration: 0.8 },
];

interface DeploymentSequenceProps {
  onComplete: () => void;
}

export default function DeploymentSequence({ onComplete }: DeploymentSequenceProps) {
  const [completedPhases, setCompletedPhases] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let phaseIndex = 0;

    const deployPhase = () => {
      if (phaseIndex < PHASES.length) {
        const phase = PHASES[phaseIndex];
        setCompletedPhases((prev) => [...prev, phase.id]);
        phaseIndex++;
        setTimeout(deployPhase, phase.duration * 1000 + 300);
      } else {
        setIsComplete(true);
        setTimeout(onComplete, 2000);
      }
    };

    deployPhase();
  }, [onComplete]);

  return (
    <div className="min-h-screen w-full bg-bg-primary flex items-center justify-center px-lg">
      <motion.div
        className="w-full max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-3xl">
          <h2 className="text-4xl font-bold text-accent mb-lg">PARALLAX DEPLOYMENT</h2>
        </div>

        <div className="space-y-lg">
          {PHASES.map((phase, index) => (
            <motion.div
              key={phase.id}
              className={`flex items-center gap-lg p-lg border-l-2 transition-all ${
                completedPhases.includes(phase.id)
                  ? 'border-accent bg-bg-surface-1'
                  : 'border-bg-surface-2 bg-bg-surface-2'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={
                completedPhases.includes(phase.id)
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0.3, x: -20 }
              }
              transition={{ duration: 0.4 }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-md bg-bg-primary flex items-center justify-center">
                {completedPhases.includes(phase.id) ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="text-accent"
                  >
                    ✓
                  </motion.div>
                ) : (
                  <motion.div
                    className="w-2 h-2 bg-text-secondary rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </div>
              <div className="flex-1">
                <div className="font-mono text-sm font-semibold text-text-primary">
                  {phase.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {isComplete && (
          <motion.div
            className="mt-3xl pt-3xl border-t border-bg-surface-2 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-3xl font-bold text-accent mb-lg">PARALLAX ONLINE</div>
            <div className="text-text-secondary text-sm">
              Intelligence workspace ready for analysis
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
