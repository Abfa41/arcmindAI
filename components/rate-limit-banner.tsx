"use client";

import { AlertTriangle, Clock } from "lucide-react";

interface RateLimitBannerProps {
  secondsLeft: number;
}

export function RateLimitBanner({ secondsLeft }: RateLimitBannerProps) {
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const timeDisplay =
    minutes > 0
      ? `${minutes}m ${seconds.toString().padStart(2, "0")}s`
      : `${seconds}s`;
  const progress = Math.max(0, Math.min(100, (secondsLeft / 120) * 100));

  return (
    <div
      role="alert"
      aria-live="polite"
      className="w-full rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-5 py-4 backdrop-blur-sm"
    >
      <div className="flex items-start gap-3">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-yellow-300">
            Rate limit reached
          </p>
          <p className="mt-0.5 text-xs text-yellow-400/80">
            You can generate one design every 2 minutes.
          </p>
        </div>
        <div className="flex items-center gap-1.5 rounded-lg bg-yellow-500/20 px-3 py-1.5 text-yellow-300 shrink-0">
          <Clock className="h-4 w-4 animate-pulse" />
          <span className="font-mono text-base font-bold tabular-nums">
            {timeDisplay}
          </span>
        </div>
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-yellow-900/40">
        <div
          className="h-full rounded-full bg-yellow-400 transition-all duration-1000 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
