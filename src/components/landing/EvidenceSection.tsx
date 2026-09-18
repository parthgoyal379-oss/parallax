'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function EvidenceSection() {
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
          EVIDENCE, NOT CONFIDENCE SCORES
        </motion.h2>

        <motion.p
          className="text-lg text-text-secondary text-center mb-3xl max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Every claim is traceable to its source. Every source has a confidence rating. The system never pretends certainty where none exists.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg max-w-4xl mx-auto">
          {[
            { title: 'SOURCE CLARITY', desc: 'Know where information comes from' },
            { title: 'CONFIDENCE TRACKING', desc: 'See how reliable each claim is' },
            { title: 'UNCERTAINTY VISIBLE', desc: 'Unknown stays unknown' },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              className="surface-primary p-lg rounded-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="text-accent font-semibold mb-sm">{item.title}</div>
              <div className="text-sm text-text-secondary">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
