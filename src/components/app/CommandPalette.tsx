'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';

interface Command {
  id: string;
  label: string;
  category: string;
  description: string;
  shortcut?: string;
}

const COMMANDS: Command[] = [
  { id: '1', label: 'New Session', category: 'Session', description: 'Start a new analysis', shortcut: 'Ctrl+N' },
  { id: '2', label: 'Open Argument Map', category: 'View', description: 'View the full argument graph', shortcut: 'Ctrl+G' },
  { id: '3', label: 'Show Evidence', category: 'View', description: 'Toggle evidence panel', shortcut: 'Ctrl+E' },
  { id: '4', label: 'Red Team Mode', category: 'Analysis', description: 'Activate red team attacks', shortcut: 'Ctrl+R' },
  { id: '5', label: 'Export Dossier', category: 'Export', description: 'Generate and export final dossier', shortcut: 'Ctrl+D' },
  { id: '6', label: 'Position History', category: 'Analysis', description: 'View agent position evolution', shortcut: 'Ctrl+H' },
  { id: '7', label: 'Pause Analysis', category: 'Control', description: 'Pause live analysis', shortcut: 'Space' },
  { id: '8', label: 'Search Sessions', category: 'Session', description: 'Search previous sessions', shortcut: 'Ctrl+S' },
];

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [search, setSearch] = useState('');
  const [selectedIdx, setSelectedIdx] = useState(0);

  const filteredCommands = COMMANDS.filter(
    (cmd) =>
      cmd.label.toLowerCase().includes(search.toLowerCase()) ||
      cmd.description.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIdx((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIdx((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        handleSelectCommand(filteredCommands[selectedIdx]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIdx, onClose]);

  const handleSelectCommand = (cmd: Command) => {
    console.log('Selected command:', cmd);
    onClose();
    setSearch('');
    setSelectedIdx(0);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Command Palette */}
          <motion.div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-xl z-50"
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-bg-surface-1 border border-bg-surface-2 rounded-lg overflow-hidden shadow-2xl">
              {/* Search input */}
              <div className="px-lg py-md border-b border-bg-surface-2 flex items-center gap-md">
                <Search size={18} className="text-text-secondary" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setSelectedIdx(0);
                  }}
                  placeholder="Search commands..."
                  className="flex-1 bg-transparent text-text-primary placeholder-text-secondary outline-none text-sm"
                  autoFocus
                />
                <button
                  onClick={onClose}
                  className="text-text-secondary hover:text-text-primary transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Command list */}
              <div className="max-h-96 overflow-y-auto">
                {filteredCommands.length > 0 ? (
                  <div className="space-y-0">
                    {filteredCommands.map((cmd, idx) => (
                      <motion.button
                        key={cmd.id}
                        onClick={() => handleSelectCommand(cmd)}
                        className={`w-full px-lg py-md text-left transition-colors flex items-center justify-between ${
                          idx === selectedIdx
                            ? 'bg-bg-surface-2 border-l-2 border-accent'
                            : 'hover:bg-bg-surface-2/50'
                        }`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: idx * 0.02 }}
                      >
                        <div>
                          <div className="font-semibold text-sm text-text-primary">{cmd.label}</div>
                          <div className="text-xs text-text-secondary">{cmd.description}</div>
                        </div>
                        {cmd.shortcut && (
                          <span className="text-xs font-mono text-text-secondary ml-lg">
                            {cmd.shortcut}
                          </span>
                        )}
                      </motion.button>
                    ))}
                  </div>
                ) : (
                  <div className="px-lg py-2xl text-center text-text-secondary text-sm">
                    No commands found.
                  </div>
                )}
              </div>

              {/* Footer hint */}
              <div className="px-lg py-sm border-t border-bg-surface-2 text-xs text-text-secondary font-mono space-y-xs">
                <div>↑ ↓ to navigate • Enter to select • Esc to close</div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
