import { useCallback, useEffect, useRef, useState } from "react";

export function useRateLimitCountdown() {
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimer = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startCountdown = useCallback(
    (retryAfterSeconds: number) => {
      clearTimer();
      setSecondsLeft(retryAfterSeconds);
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev === null || prev <= 1) {
            clearTimer();
            return null;
          }
          return prev - 1;
        });
      }, 1000);
    },
    [clearTimer],
  );

  useEffect(() => clearTimer, [clearTimer]);

  return { secondsLeft, isRateLimited: secondsLeft !== null, startCountdown };
}
