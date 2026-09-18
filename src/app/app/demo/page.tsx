'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DemoPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the demo session
    const demoSessionId = 'DEMO-2026-001';
    router.push(`/app/session/${demoSessionId}`);
  }, [router]);

  return (
    <div className="min-h-screen w-full bg-bg-primary flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-accent mb-lg">Loading Demo Session...</h1>
        <p className="text-text-secondary">PARALLAX is initializing your session.</p>
      </div>
    </div>
  );
}
