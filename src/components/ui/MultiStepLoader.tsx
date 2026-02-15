import { useEffect, useRef, useState } from 'react';

type MultiStepLoaderProps = {
  loadingStates: string[];
  loading: boolean;
  durationMs?: number;
  onComplete?: () => void;
};

export const MultiStepLoader = ({
  loadingStates,
  loading,
  durationMs = 1900,
  onComplete,
}: MultiStepLoaderProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const completedRef = useRef(false);

  useEffect(() => {
    if (!loading) {
      return;
    }

    if (loadingStates.length === 0) {
      onComplete?.();
      return;
    }

    const stepTime = Math.max(220, Math.floor(durationMs / loadingStates.length));

    const timer = window.setInterval(() => {
      setActiveStep(current => {
        const next = current + 1;
        if (next >= loadingStates.length) {
          window.clearInterval(timer);
          if (!completedRef.current) {
            completedRef.current = true;
            onComplete?.();
          }
          return loadingStates.length - 1;
        }

        return next;
      });
    }, stepTime);

    return () => {
      window.clearInterval(timer);
    };
  }, [durationMs, loading, loadingStates.length, onComplete]);

  if (!loading) {
    return null;
  }

  return (
    <div
      className="multi-step-loader"
      role="status"
      aria-live="polite"
      aria-label="Loading experience"
    >
      <div className="loader-core" aria-hidden="true" />
      <ul>
        {loadingStates.map((state, index) => {
          const isDone = index <= activeStep;
          return (
            <li key={state} className={isDone ? 'done' : undefined}>
              <span aria-hidden="true">{isDone ? '>' : '-'}</span>
              {state}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
