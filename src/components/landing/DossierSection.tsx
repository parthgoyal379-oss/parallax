'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function DossierSection() {
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
          THE PARALLAX DOSSIER
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="surface-primary p-2xl rounded-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-lg">
              {[
                'EXECUTIVE SUMMARY',
                'DECISION CONTEXT',
                'KEY FINDINGS',
                'ARGUMENT MAP',
                'EVIDENCE MAP',
                'POSITION EVOLUTION',
                'ASSUMPTION LEDGER',
                'RED TEAM ATTACKS',
                'RISK REGISTER',
                'ECONOMIC ANALYSIS',
                'TECHNICAL ANALYSIS',
                'OPEN QUESTIONS',
                'DECISION CONDITIONS',
                'NEXT INVESTIGATIONS',
                'APPENDIX',
              ].map((section, idx) => (
                <motion.div
                  key={section}
                  className="text-sm font-mono text-accent py-sm px-md border-l-2 border-accent/30"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.03 }}
                >
                  {section}
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-2xl pt-2xl border-t border-bg-surface-2 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-text-secondary text-sm mb-lg">
                Elite research brief. Fully exportable.
              </p>
              <div className="flex flex-wrap justify-center gap-md">
                {['EXPORT PDF', 'EXPORT MARKDOWN', 'SHARE SESSION'].map((action) => (
                  <button
                    key={action}
                    className="button-secondary text-sm"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
