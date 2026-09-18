'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

interface Agent {
  id: string;
  name: string;
  role: string;
  confidence: number;
  evidence: number;
  claims: number;
  challenges: number;
  position: string;
  status: 'active' | 'analyzing' | 'complete' | 'idle';
}

interface AgentPanelProps {
  agents: Agent[];
}

export default function AgentPanel({ agents }: AgentPanelProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-accent';
      case 'analyzing':
        return 'text-accent/70';
      case 'complete':
        return 'text-text-secondary';
      default:
        return 'text-text-secondary';
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="px-lg py-lg border-b border-bg-surface-2 sticky top-0 bg-bg-surface-1">
        <div className="font-semibold text-accent text-sm mb-xs">INTELLIGENCE TEAM</div>
        <div className="text-xs text-text-secondary font-mono">{agents.length} AGENTS ACTIVE</div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="space-y-md p-lg">
          {agents.map((agent, idx) => (
            <motion.div
              key={agent.id}
              className="surface-secondary p-md rounded-md border border-bg-surface-3 hover:border-accent/30 cursor-pointer transition-all group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ x: 4, backgroundColor: 'rgba(212, 165, 116, 0.02)' }}
            >
              {/* Agent header */}
              <div className="flex items-start justify-between mb-sm">
                <div>
                  <div className="font-semibold text-sm text-text-primary">{agent.name}</div>
                  <div className="text-xs text-text-secondary font-mono">{agent.role}</div>
                </div>
                <div className={`flex items-center gap-xs ${getStatusColor(agent.status)}`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  <span className="text-xs font-mono">{agent.status.toUpperCase()}</span>
                </div>
              </div>

              {/* Confidence and stats */}
              <div className="mb-sm p-sm bg-bg-primary rounded-sm">
                <div className="flex items-center justify-between mb-xs">
                  <span className="text-xs font-mono text-text-secondary">CONFIDENCE</span>
                  <span className="text-sm font-semibold text-accent">{agent.confidence}%</span>
                </div>
                <div className="w-full h-1 bg-bg-surface-2 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-accent"
                    initial={{ width: 0 }}
                    animate={{ width: `${agent.confidence}%` }}
                    transition={{ duration: 1, delay: idx * 0.08 + 0.3 }}
                  />
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-xs text-center mb-sm">
                <div className="text-xs">
                  <div className="font-mono text-accent text-xs font-semibold">{agent.evidence}</div>
                  <div className="text-text-secondary text-xs">Evidence</div>
                </div>
                <div className="text-xs">
                  <div className="font-mono text-accent text-xs font-semibold">{agent.claims}</div>
                  <div className="text-text-secondary text-xs">Claims</div>
                </div>
                <div className="text-xs">
                  <div className="font-mono text-accent text-xs font-semibold">{agent.challenges}</div>
                  <div className="text-text-secondary text-xs">Challenges</div>
                </div>
              </div>

              {/* Current position */}
              <div className="text-xs text-text-secondary leading-relaxed border-t border-bg-surface-3 pt-sm">
                "{agent.position}"
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
