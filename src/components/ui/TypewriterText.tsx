import { useEffect, useState, useSyncExternalStore } from 'react';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

const subscribeToMotionPreference = (onChange: () => void) => {
  const preference = window.matchMedia(REDUCED_MOTION_QUERY);
  preference.addEventListener('change', onChange);
  return () => preference.removeEventListener('change', onChange);
};

const getMotionPreference = () => window.matchMedia(REDUCED_MOTION_QUERY).matches;
const getServerMotionPreference = () => true;

export const TypewriterText = ({ text }: { text: string }) => {
  const reducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    getMotionPreference,
    getServerMotionPreference,
  );
  const [visibleLength, setVisibleLength] = useState(0);
  const complete = visibleLength >= text.length;

  useEffect(() => {
    if (reducedMotion || complete) return;

    const timer = window.setInterval(() => {
      setVisibleLength(length => Math.min(length + 1, text.length));
    }, 55);

    return () => window.clearInterval(timer);
  }, [reducedMotion, complete, text.length]);

  return (
    <span className="typewriter" data-typing={!reducedMotion && !complete}>
      <span className="sr-only">{text}</span>
      <span className="typewriter-reserve" aria-hidden="true">
        {text}
      </span>
      <span className="typewriter-visual" aria-hidden="true">
        {reducedMotion ? text : text.slice(0, visibleLength)}
        <span className="typewriter-cursor" />
      </span>
    </span>
  );
};
