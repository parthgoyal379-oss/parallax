'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ProblemSection() {
  return (
    <section className="relative w-full py-3xl px-lg bg-bg-primary">
      <div className="container-base">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2xl text-text-primary">
            THE PROBLEM
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Complex decisions rarely fail because there was too little information. They fail because the information was viewed from too few perspectives.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
