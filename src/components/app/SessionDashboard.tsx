'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, FileText, Search, Menu } from 'lucide-react';
import AgentPanel from '@/components/app/AgentPanel';
import DebateStream from '@/components/app/DebateStream';
import EvidencePanel from '@/components/app/EvidencePanel';
import CommandPalette from '@/components/app/CommandPalette';
import { MOCK_SESSION_DATA } from '@/data/mockData';

interface SessionDashboardProps {
  sessionId: string;
}

export default function SessionDashboard({ sessionId }: SessionDashboardProps) {
  const [showCommandPalette, setShowCommandPalette] = useState(false);
  const [activeTab, setActiveTab] = useState<'debate' | 'arguments' | 'evidence'>('debate');
  const [sessionData, setSessionData] = useState(MOCK_SESSION_DATA);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setShowCommandPalette(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const startTime = new Date();
  const [elapsedTime, setElapsedTime] = useState('00:00:00');

  // Update elapsed time
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = Math.floor((now.getTime() - startTime.getTime()) / 1000);
      const hours = Math.floor(diff / 3600);
      const minutes = Math.floor((diff % 3600) / 60);
      const seconds = diff % 60;
      setElapsedTime(
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-bg-primary flex flex-col">
      {/* Header */}
      <motion.div
        className="border-b border-bg-surface-2 bg-bg-surface-1 px-lg py-md sticky top-0 z-40"
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2xl">
            <div className="text-2xl font-bold text-accent">PARALLAX</div>
            <div className="flex items-center gap-lg text-sm font-mono text-text-secondary">
              <span>SESSION {sessionData.id}</span>
              <span className="text-accent">● LIVE</span>
              <span>TIME {elapsedTime}</span>
            </div>
          </div>
          <div className="flex items-center gap-md">
            <button className="button-secondary text-sm">EXPORT</button>
            <button className="p-md hover:bg-bg-surface-2 rounded-md">
              <Menu size={18} className="text-text-secondary" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Main Content - Three-zone layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* LEFT: Agent Panel */}
        <motion.div
          className="w-80 border-r border-bg-surface-2 bg-bg-surface-1 overflow-y-auto"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AgentPanel agents={sessionData.agents} />
        </motion.div>

        {/* CENTER: Debate Stream */}
        <motion.div
          className="flex-1 border-r border-bg-surface-2 overflow-y-auto bg-bg-primary"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <DebateStream events={sessionData.debateEvents} />
        </motion.div>

        {/* RIGHT: Evidence Panel */}
        <motion.div
          className="w-96 border-l border-bg-surface-2 bg-bg-surface-1 overflow-y-auto"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <EvidencePanel evidence={sessionData.evidence} assumptions={sessionData.assumptions} />
        </motion.div>
      </div>

      {/* Command Palette */}
      <CommandPalette
        isOpen={showCommandPalette}
        onClose={() => setShowCommandPalette(false)}
      />
    </div>
  );
}
