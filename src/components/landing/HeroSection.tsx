'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import InteractiveDecisionGraph from '@/components/common/InteractiveDecisionGraph';

interface HeroSectionProps {
  onEnter: () => void;
  onExplore: () => void;
}

export default function HeroSection({ onEnter, onExplore }: HeroSectionProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-bg-primary overflow-hidden">
      {/* Animated background gradient elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent opacity-3 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.div variants={itemVariants} className="mb-xl">
          <div className="inline-block px-md py-xs bg-bg-surface-2 border border-bg-surface-3 rounded-md">
            <span className="text-xs font-mono text-accent tracking-widest uppercase">
              AI DECISION INTELLIGENCE
            </span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-7xl font-bold mb-2xl leading-tight"
        >
          <span className="text-text-primary">SEE THE</span>
          <br />
          <span className="text-accent">DECISION</span>
          <br />
          <span className="text-text-primary">FROM EVERY ANGLE</span>
        </motion.h1>

        {/* Supporting text */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-text-secondary max-w-2xl mb-3xl leading-relaxed"
        >
          PARALLAX assembles specialized AI agents to research, challenge, debate and pressure-test complex decisions before you act.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-md mb-3xl"
        >
          <button
            onClick={onEnter}
            className="button-primary flex items-center justify-center gap-md text-lg"
          >
            ENTER PARALLAX
            <ArrowRight size={20} />
          </button>
          <button
            onClick={onExplore}
            className="button-secondary flex items-center justify-center gap-md text-lg"
          >
            EXPLORE A LIVE SESSION
          </button>
        </motion.div>
      </motion.div>

      {/* Interactive Decision Graph */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1/3 opacity-60"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <InteractiveDecisionGraph isAnimating={true} />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-md">
          <span className="text-xs text-text-secondary font-mono tracking-widest">SCROLL</span>
          <div className="w-[2px] h-6 bg-gradient-to-b from-accent to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
