'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface FinalCTASectionProps {
  onEnter: () => void;
}

export default function FinalCTASection({ onEnter }: FinalCTASectionProps) {
  return (
    <section className="relative w-full py-3xl px-lg bg-bg-surface-1 border-t border-bg-surface-2">
      <div className="container-base">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-lg text-text-primary">
            Put your next difficult decision under analysis.
          </h2>
          <p className="text-lg text-text-secondary mb-2xl">
            PARALLAX is ready. Your team is waiting.
          </p>
          <button
            onClick={onEnter}
            className="button-primary inline-flex items-center justify-center gap-md text-lg"
          >
            ENTER PARALLAX
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
