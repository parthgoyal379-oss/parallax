'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function MethodSection() {
  const steps = [
    { num: '01', label: 'PROBLEM', icon: '→' },
    { num: '02', label: 'PERSPECTIVES', icon: '→' },
    { num: '03', label: 'EVIDENCE', icon: '→' },
    { num: '04', label: 'CONFLICT', icon: '→' },
    { num: '05', label: 'REVISION', icon: '→' },
    { num: '06', label: 'CLARITY', icon: '' },
  ];

  return (
    <section className="relative w-full py-3xl px-lg bg-bg-primary border-t border-bg-surface-2">
      <div className="container-base">
        <motion.h2
          className="text-4xl font-bold text-center mb-3xl text-text-primary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          THE PARALLAX METHOD
        </motion.h2>

        <div className="flex flex-wrap justify-center items-center gap-md md:gap-lg">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              className="flex items-center gap-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="flex flex-col items-center">
                <div className="text-xs font-mono text-accent mb-xs">{step.num}</div>
                <div className="text-sm font-semibold text-text-primary">{step.label}</div>
              </div>
              {step.icon && <div className="text-accent text-2xl">{step.icon}</div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
