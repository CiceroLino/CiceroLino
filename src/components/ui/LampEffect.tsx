import type { PropsWithChildren } from 'react';

type LampContainerProps = PropsWithChildren<{
  className?: string;
}>;

export const LampContainer = ({ children, className }: LampContainerProps) => {
  return (
    <section className={className ? `lamp-container ${className}` : 'lamp-container'}>
      <div className="lamp-blur lamp-left" aria-hidden="true" />
      <div className="lamp-blur lamp-right" aria-hidden="true" />
      <div className="lamp-beam" aria-hidden="true" />
      {children}
    </section>
  );
};
