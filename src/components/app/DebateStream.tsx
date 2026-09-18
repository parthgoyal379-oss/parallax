'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface DebateEvent {
  id: string;
  timestamp: string;
  agent: string;
  type: 'ARGUMENT' | 'CHALLENGE' | 'QUESTION' | 'COUNTERARGUMENT' | 'REVISION' | 'ATTACK' | 'CONSENSUS' | 'DISAGREEMENT';
  content: string;
  confidence: number;
  evidence: string[];
}

interface DebateStreamProps {
  events: DebateEvent[];
}

const getEventTypeColor = (type: string) => {
  const colors: Record<string, string> = {
    ARGUMENT: 'border-accent text-accent',
    CHALLENGE: 'border-accent/70 text-accent/70',
    QUESTION: 'border-text-secondary/50 text-text-secondary/50',
    COUNTERARGUMENT: 'border-accent/60 text-accent/60',
    REVISION: 'border-text-secondary text-text-secondary',
    ATTACK: 'border-red-500/50 text-red-500/50',
    CONSENSUS: 'border-accent/80 text-accent/80',
    DISAGREEMENT: 'border-amber-500/50 text-amber-500/50',
  };
  return colors[type] || 'border-text-secondary text-text-secondary';
};

const getEventTypeLabel = (type: string) => {
  const labels: Record<string, string> = {
    ARGUMENT: '■ ARGUMENT',
    CHALLENGE: '■ CHALLENGE',
    QUESTION: '? QUESTION',
    COUNTERARGUMENT: '◆ COUNTER',
    REVISION: '↻ REVISION',
    ATTACK: '✕ ATTACK',
    CONSENSUS: '✓ CONSENSUS',
    DISAGREEMENT: '⚡ DISAGREEMENT',
  };
  return labels[type] || type;
};

export default function DebateStream({ events }: DebateStreamProps) {
  return (
    <div className="h-full flex flex-col">
      <div className="px-lg py-lg border-b border-bg-surface-2 sticky top-0 bg-bg-primary z-10">
        <div className="font-semibold text-accent text-sm mb-xs">LIVE DEBATE ENGINE</div>
        <div className="text-xs text-text-secondary font-mono">{events.length} EVENTS • REAL-TIME ANALYSIS</div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="space-y-lg p-lg">
          {events.map((event, idx) => (
            <motion.div
              key={event.id}
              className={`border-l-2 pl-lg py-md ${getEventTypeColor(event.type)}`}
              initial={{ opacity: 0, y: 20, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Event header */}
              <div className="flex items-center justify-between mb-sm">
                <div className="flex items-center gap-md">
                  <div className="font-semibold text-sm">{event.agent}</div>
                  <div className="text-xs font-mono text-text-secondary">{event.timestamp}</div>
                </div>
                <div className="flex items-center gap-md">
                  <span className={`text-xs font-mono font-bold ${getEventTypeColor(event.type)}`}>
                    {getEventTypeLabel(event.type)}
                  </span>
                </div>
              </div>

              {/* Event content */}
              <div className="text-sm text-text-primary mb-md leading-relaxed">
                "{event.content}"
              </div>

              {/* Event metadata */}
              <div className="flex items-center justify-between text-xs text-text-secondary font-mono">
                <div>
                  <span>CONFIDENCE </span>
                  <span className={`font-semibold ${getEventTypeColor(event.type)}`}>{event.confidence}%</span>
                </div>
                <div>
                  <span>EVIDENCE: </span>
                  <span className={`font-mono ${getEventTypeColor(event.type)}`}>
                    {event.evidence.join(' • ')}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom indicator */}
      <div className="px-lg py-md border-t border-bg-surface-2 bg-bg-surface-1/50 text-center">
        <div className="text-xs text-text-secondary font-mono flex items-center justify-center gap-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          LIVE ANALYSIS IN PROGRESS
        </div>
      </div>
    </div>
  );
}
