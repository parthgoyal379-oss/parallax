'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function DecisionEvolveSection() {
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
          WATCH A DECISION EVOLVE
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          <div className="surface-primary p-2xl rounded-md">
            <div className="space-y-lg">
              <motion.div
                className="border-l-2 border-accent pl-lg py-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0 }}
              >
                <div className="font-mono text-xs text-accent mb-xs">PHASE 01</div>
                <div className="text-sm text-text-primary">Initial hypothesis looks promising</div>
              </motion.div>

              <motion.div
                className="border-l-2 border-accent/70 pl-lg py-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="font-mono text-xs text-accent/70 mb-xs">PHASE 02</div>
                <div className="text-sm text-text-primary">Research finds competitive pressure</div>
              </motion.div>

              <motion.div
                className="border-l-2 border-accent/50 pl-lg py-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="font-mono text-xs text-accent/50 mb-xs">PHASE 03</div>
                <div className="text-sm text-text-primary">Economics introduces uncertainty</div>
              </motion.div>

              <motion.div
                className="border-l-2 border-accent/30 pl-lg py-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="font-mono text-xs text-accent/30 mb-xs">PHASE 04</div>
                <div className="text-sm text-text-primary">Final synthesis emerges</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
