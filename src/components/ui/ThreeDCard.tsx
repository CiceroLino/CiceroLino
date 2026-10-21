import { useEffect, useRef } from 'react';
import type { PointerEvent, PropsWithChildren } from 'react';

export const CardContainer = ({ children }: PropsWithChildren) => {
  const container = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);
  useEffect(
    () => () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    },
    [],
  );
  const reset = () => {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    container.current?.style.removeProperty('--rotate-x');
    container.current?.style.removeProperty('--rotate-y');
  };
  const onMove = (event: PointerEvent<HTMLDivElement>) => {
    if (
      !window.matchMedia(
        '(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)',
      ).matches
    )
      return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 6;
    const y = (0.5 - (event.clientY - bounds.top) / bounds.height) * 6;
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      container.current?.style.setProperty('--rotate-x', `${y}deg`);
      container.current?.style.setProperty('--rotate-y', `${x}deg`);
    });
  };
  return (
    <div
      ref={container}
      className="card-container"
      onPointerMove={onMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
    >
      {children}
    </div>
  );
};
export const CardBody = ({ children }: PropsWithChildren) => (
  <div className="card-body">{children}</div>
);
