'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function NewSessionPage() {
  const router = useRouter();
  const [decision, setDecision] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [formData, setFormData] = useState({
    objective: '',
    budget: '',
    timeframe: '',
    targetUser: '',
    geography: '',
    constraints: '',
    riskTolerance: 'medium',
    assumptions: '',
  });

  const handleInitialize = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!decision.trim()) return;

    // Create session and redirect to demo
    const sessionId = Date.now().toString();
    router.push(`/app/session/${sessionId}`);
  };

  return (
    <main className="min-h-screen w-full bg-bg-primary flex items-center justify-center px-lg py-3xl">
      <motion.div
        className="w-full max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div className="text-center mb-3xl">
          <div className="inline-block px-md py-xs bg-bg-surface-2 border border-bg-surface-3 rounded-md mb-lg">
            <span className="text-xs font-mono text-accent tracking-widest uppercase">
              NEW SESSION
            </span>
          </div>
          <h1 className="text-5xl font-bold text-text-primary mb-lg">
            DEFINE THE DECISION
          </h1>
          <p className="text-lg text-text-secondary">
            What are you trying to decide?
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleInitialize} className="space-y-2xl">
          {/* Main decision input */}
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-md">
              THE DECISION
            </label>
            <textarea
              value={decision}
              onChange={(e) => setDecision(e.target.value)}
              placeholder="Should I launch my AI fitness startup in India or the United States?"
              className="input-base min-h-[120px] resize-none"
              required
            />
          </div>

          {/* Advanced parameters toggle */}
          <div>
            <button
              type="button"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="text-accent hover:text-accent-light transition-colors text-sm font-semibold flex items-center gap-sm"
            >
              {showAdvanced ? '▼' : '▶'} ADDITIONAL PARAMETERS
            </button>
          </div>

          {/* Advanced fields */}
          {showAdvanced && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-lg pt-lg border-t border-bg-surface-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {[
                { key: 'objective', label: 'OBJECTIVE' },
                { key: 'budget', label: 'BUDGET' },
                { key: 'timeframe', label: 'TIMEFRAME' },
                { key: 'targetUser', label: 'TARGET USER' },
                { key: 'geography', label: 'GEOGRAPHY' },
                { key: 'constraints', label: 'CONSTRAINTS' },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-xs font-mono text-text-secondary mb-sm">
                    {field.label}
                  </label>
                  <input
                    type="text"
                    value={formData[field.key as keyof typeof formData] as string}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [field.key]: e.target.value,
                      })
                    }
                    className="input-base"
                  />
                </div>
              ))}

              <div>
                <label className="block text-xs font-mono text-text-secondary mb-sm">
                  RISK TOLERANCE
                </label>
                <select
                  value={formData.riskTolerance}
                  onChange={(e) =>
                    setFormData({ ...formData, riskTolerance: e.target.value })
                  }
                  className="input-base"
                >
                  <option value="low">LOW</option>
                  <option value="medium">MEDIUM</option>
                  <option value="high">HIGH</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-mono text-text-secondary mb-sm">
                  KNOWN ASSUMPTIONS
                </label>
                <textarea
                  value={formData.assumptions}
                  onChange={(e) =>
                    setFormData({ ...formData, assumptions: e.target.value })
                  }
                  className="input-base resize-none min-h-[80px]"
                />
              </div>
            </motion.div>
          )}

          {/* Submit button */}
          <motion.div
            className="pt-2xl border-t border-bg-surface-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <button
              type="submit"
              disabled={!decision.trim()}
              className="button-primary w-full flex items-center justify-center gap-md text-lg py-lg"
            >
              INITIALIZE PARALLAX
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </form>
      </motion.div>
    </main>
  );
}
