'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface Evidence {
  id: string;
  source: string;
  type: string;
  date: string;
  relevance: number;
  reliability: string;
  agents: string[];
}

interface Assumption {
  id: string;
  assumption: string;
  status: string;
  confidence: number;
  risk: string;
  evidence: string[];
}

interface EvidencePanelProps {
  evidence: Evidence[];
  assumptions: Assumption[];
}

const getReliabilityColor = (reliability: string) => {
  switch (reliability) {
    case 'HIGH':
      return 'bg-accent/20 text-accent';
    case 'MEDIUM':
      return 'bg-amber-500/20 text-amber-400';
    default:
      return 'bg-red-500/20 text-red-400';
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'SUPPORTED':
      return 'bg-accent/20 text-accent';
    case 'CONTESTED':
      return 'bg-amber-500/20 text-amber-400';
    case 'UNVERIFIED':
      return 'bg-red-500/20 text-red-400';
    default:
      return 'bg-text-secondary/20 text-text-secondary';
  }
};

export default function EvidencePanel({ evidence, assumptions }: EvidencePanelProps) {
  const [activeTab, setActiveTab] = useState<'evidence' | 'assumptions'>('evidence');

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="px-lg py-lg border-b border-bg-surface-2 sticky top-0 bg-bg-surface-1 z-10">
        <div className="font-semibold text-accent text-sm mb-lg">RESEARCH & ASSUMPTIONS</div>

        {/* Tab buttons */}
        <div className="flex gap-sm">
          <button
            onClick={() => setActiveTab('evidence')}
            className={`px-md py-xs text-xs font-mono rounded-sm transition-all ${
              activeTab === 'evidence'
                ? 'bg-accent text-bg-primary font-bold'
                : 'bg-bg-surface-2 text-text-secondary hover:bg-bg-surface-3'
            }`}
          >
            EVIDENCE ({evidence.length})
          </button>
          <button
            onClick={() => setActiveTab('assumptions')}
            className={`px-md py-xs text-xs font-mono rounded-sm transition-all ${
              activeTab === 'assumptions'
                ? 'bg-accent text-bg-primary font-bold'
                : 'bg-bg-surface-2 text-text-secondary hover:bg-bg-surface-3'
            }`}
          >
            ASSUMPTIONS ({assumptions.length})
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'evidence' ? (
          <div className="space-y-md p-lg">
            {evidence.map((item, idx) => (
              <motion.div
                key={item.id}
                className="surface-secondary p-md rounded-md border border-bg-surface-3 group hover:border-accent/30 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{ y: -2 }}
              >
                {/* Source info */}
                <div className="flex items-start justify-between mb-sm">
                  <div>
                    <div className="font-semibold text-sm text-text-primary">{item.source}</div>
                    <div className="text-xs text-text-secondary">{item.type}</div>
                  </div>
                  <div className={`px-xs py-xs text-xs font-bold rounded-sm ${getReliabilityColor(item.reliability)}`}>
                    {item.reliability}
                  </div>
                </div>

                {/* Relevance bar */}
                <div className="mb-sm">
                  <div className="flex items-center justify-between mb-xs">
                    <span className="text-xs text-text-secondary font-mono">RELEVANCE</span>
                    <span className="text-xs font-semibold text-accent">{item.relevance}%</span>
                  </div>
                  <div className="w-full h-1 bg-bg-primary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-accent"
                      initial={{ width: 0 }}
                      animate={{ width: `${item.relevance}%` }}
                      transition={{ duration: 0.8, delay: idx * 0.06 + 0.2 }}
                    />
                  </div>
                </div>

                {/* Date and agents */}
                <div className="text-xs text-text-secondary font-mono border-t border-bg-surface-3 pt-sm space-y-xs">
                  <div>{item.date}</div>
                  <div className="flex flex-wrap gap-xs">
                    {item.agents.map((agent) => (
                      <span key={agent} className="bg-bg-primary px-xs py-xs rounded-sm text-xs">
                        {agent}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-md p-lg">
            {assumptions.map((item, idx) => (
              <motion.div
                key={item.id}
                className={`p-md rounded-md border-l-2 ${
                  item.risk === 'CRITICAL'
                    ? 'border-red-500/50 bg-red-500/5'
                    : 'border-amber-500/50 bg-amber-500/5'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
              >
                {/* Assumption text */}
                <div className="mb-sm">
                  <div className="text-sm text-text-primary mb-xs">"{item.assumption}"</div>
                </div>

                {/* Status badges */}
                <div className="flex flex-wrap gap-xs mb-sm">
                  <div className={`px-xs py-xs text-xs font-bold rounded-sm ${getStatusColor(item.status)}`}>
                    {item.status}
                  </div>
                  <div className={`px-xs py-xs text-xs font-bold rounded-sm ${
                    item.risk === 'CRITICAL' ? 'bg-red-500/20 text-red-400' : 'bg-amber-500/20 text-amber-400'
                  }`}>
                    {item.risk} RISK
                  </div>
                </div>

                {/* Confidence */}
                <div className="text-xs text-text-secondary font-mono mb-sm">
                  CONFIDENCE: <span className="text-accent">{item.confidence}%</span>
                </div>

                {/* Evidence links */}
                <div className="text-xs text-text-secondary font-mono">
                  Evidence: {item.evidence.join(' • ')}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
