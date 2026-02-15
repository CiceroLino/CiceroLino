import { useEffect, useMemo, useState } from 'react';

const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

type EncryptedTextProps = {
  text: string;
  className?: string;
  durationMs?: number;
};

const randomChar = () => CHARSET[Math.floor(Math.random() * CHARSET.length)];

export const EncryptedText = ({ text, className, durationMs = 900 }: EncryptedTextProps) => {
  const letters = useMemo(() => text.split(''), [text]);
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!text.length) {
      return;
    }

    const startAt = performance.now();
    const interval = window.setInterval(() => {
      const elapsed = performance.now() - startAt;
      const progress = Math.min(1, elapsed / durationMs);
      const revealCount = Math.floor(progress * letters.length);

      const next = letters
        .map((letter, index) => {
          if (letter === ' ') {
            return ' ';
          }

          return index < revealCount ? letter : randomChar();
        })
        .join('');

      setDisplay(next);

      if (progress >= 1) {
        window.clearInterval(interval);
        setDisplay(text);
      }
    }, 24);

    return () => {
      window.clearInterval(interval);
    };
  }, [durationMs, letters, text]);

  return (
    <span aria-label={text} className={className}>
      {display}
    </span>
  );
};
