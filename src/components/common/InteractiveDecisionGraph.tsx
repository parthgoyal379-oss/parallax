'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  type: 'central' | 'agent';
  delay: number;
}

interface InteractiveDecisionGraphProps {
  isAnimating?: boolean;
}

export default function InteractiveDecisionGraph({ isAnimating = false }: InteractiveDecisionGraphProps) {
  const [nodes, setNodes] = useState<Node[]>([]);

  useEffect(() => {
    // Central decision
    const central: Node = {
      id: 'central',
      label: 'SHOULD WE LAUNCH THIS PRODUCT?',
      x: 50,
      y: 50,
      type: 'central',
      delay: 0,
    };

    // Agent nodes around the central decision
    const agents: Node[] = [
      { id: 'strategist', label: 'STRATEGIST', x: 20, y: 30, type: 'agent', delay: 0.3 },
      { id: 'researcher', label: 'RESEARCHER', x: 80, y: 30, type: 'agent', delay: 0.6 },
      { id: 'economist', label: 'ECONOMIST', x: 50, y: 10, type: 'agent', delay: 0.9 },
      { id: 'engineer', label: 'ENGINEER', x: 20, y: 70, type: 'agent', delay: 1.2 },
      { id: 'uxanalyst', label: 'UX ANALYST', x: 80, y: 70, type: 'agent', delay: 1.5 },
      { id: 'critic', label: 'CRITIC', x: 50, y: 90, type: 'agent', delay: 1.8 },
    ];

    setNodes([central, ...agents]);
  }, []);

  return (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full"
      style={{ filter: 'drop-shadow(0 0 20px rgba(212, 165, 116, 0.1))' }}
    >
      {/* Animated connection lines */}
      {nodes
        .filter((n) => n.type === 'agent')
        .map((node) => (
          <motion.line
            key={`line-${node.id}`}
            x1={50}
            y1={50}
            x2={node.x}
            y2={node.y}
            stroke="rgba(212, 165, 116, 0.3)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isAnimating ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{
              duration: 0.8,
              delay: node.delay,
              ease: 'easeInOut',
            }}
          />
        ))}

      {/* Central node */}
      <motion.circle
        cx={50}
        cy={50}
        r="6"
        fill="rgba(212, 165, 116, 0.8)"
        initial={{ scale: 0, opacity: 0 }}
        animate={isAnimating ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />

      {/* Central label */}
      <motion.text
        x={50}
        y={58}
        textAnchor="middle"
        fontSize="2"
        fill="rgba(212, 165, 116, 0.6)"
        fontFamily="monospace"
        fontWeight="bold"
        initial={{ opacity: 0 }}
        animate={isAnimating ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        DECISION
      </motion.text>

      {/* Agent nodes and labels */}
      {nodes
        .filter((n) => n.type === 'agent')
        .map((node) => (
          <g key={`node-${node.id}`}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="4"
              fill="rgba(212, 165, 116, 0.5)"
              initial={{ scale: 0, opacity: 0 }}
              animate={isAnimating ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{
                duration: 0.6,
                delay: node.delay,
                ease: 'easeOut',
              }}
            />
            <motion.text
              x={node.x}
              y={node.y + 8}
              textAnchor="middle"
              fontSize="1.5"
              fill="rgba(245, 241, 232, 0.6)"
              fontFamily="monospace"
              fontWeight="bold"
              initial={{ opacity: 0 }}
              animate={isAnimating ? { opacity: 1 } : { opacity: 0 }}
              transition={{
                duration: 0.6,
                delay: node.delay + 0.3,
              }}
            >
              {node.label}
            </motion.text>
          </g>
        ))}
    </svg>
  );
}
