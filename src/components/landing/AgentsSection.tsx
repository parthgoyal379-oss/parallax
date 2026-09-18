'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AGENTS = [
  { name: 'STRATEGIST', role: 'Strategy / Positioning', color: 'from-accent/20' },
  { name: 'RESEARCHER', role: 'Market Intelligence', color: 'from-accent/15' },
  { name: 'ECONOMIST', role: 'Financial Analysis', color: 'from-accent/10' },
  { name: 'ENGINEER', role: 'Technical Feasibility', color: 'from-accent/20' },
  { name: 'UX ANALYST', role: 'User Behavior', color: 'from-accent/15' },
  { name: 'CRITIC', role: 'Logical Integrity', color: 'from-accent/10' },
  { name: 'RED TEAM', role: 'Failure Discovery', color: 'from-accent/20' },
];

export default function AgentsSection() {
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
          MEET THE INTELLIGENCE TEAM
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
          {AGENTS.map((agent, idx) => (
            <motion.div
              key={agent.name}
              className={`surface-primary p-lg rounded-md border border-bg-surface-2 hover:border-accent/30 transition-all`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
            >
              <div className="font-semibold text-accent mb-sm">{agent.name}</div>
              <div className="text-sm text-text-secondary">{agent.role}</div>
              <div className="mt-lg pt-lg border-t border-bg-surface-2">
                <div className="text-xs font-mono text-text-secondary">ACTIVE</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
