'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function RedTeamSection() {
  return (
    <section className="relative w-full py-3xl px-lg bg-bg-primary border-t border-bg-surface-2">
      <div className="container-base">
        <motion.h2
          className="text-4xl font-bold text-center mb-2xl text-text-primary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          PRESSURE-TEST EVERYTHING
        </motion.h2>

        <motion.p
          className="text-lg text-text-secondary text-center mb-3xl max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The Red Team systematically attacks your thesis. Their goal is to find failure modes before you commit resources.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg max-w-5xl mx-auto">
          {[
            'MARKET',
            'ECONOMIC',
            'TECHNICAL',
            'COMPETITIVE',
            'REGULATORY',
            'ADOPTION',
            'EXECUTION',
            'TIMING',
          ].map((attack, idx) => (
            <motion.div
              key={attack}
              className="surface-primary p-lg rounded-md border border-bg-surface-3 hover:border-accent/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
            >
              <div className="font-mono text-sm text-accent font-semibold">{attack}</div>
              <div className="text-xs text-text-secondary mt-sm">Attack vector</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
