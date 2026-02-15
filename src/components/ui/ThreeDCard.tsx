import type { CSSProperties, HTMLAttributes, JSX, PropsWithChildren } from 'react';
import { createContext, useContext, useState } from 'react';

type CardHoverContextType = {
  hovered: boolean;
};

const CardHoverContext = createContext<CardHoverContextType>({ hovered: false });

type CardContainerProps = PropsWithChildren<{
  className?: string;
}>;

export const CardContainer = ({ children, className }: CardContainerProps) => {
  const [hovered, setHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const onMove: HTMLAttributes<HTMLDivElement>['onMouseMove'] = event => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    const rotateY = ((x - bounds.width / 2) / bounds.width) * 14;
    const rotateX = ((bounds.height / 2 - y) / bounds.height) * 14;

    setRotation({ x: rotateX, y: rotateY });
  };

  const reset = () => {
    setRotation({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <CardHoverContext.Provider value={{ hovered }}>
      <div
        className={className ? `card-container ${className}` : 'card-container'}
        data-hovered={hovered}
        style={
          { '--rotate-x': `${rotation.x}deg`, '--rotate-y': `${rotation.y}deg` } as CSSProperties
        }
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={reset}
        onMouseMove={onMove}
      >
        {children}
      </div>
    </CardHoverContext.Provider>
  );
};

type CardBodyProps = PropsWithChildren<{
  className?: string;
}>;

export const CardBody = ({ children, className }: CardBodyProps) => {
  return <div className={className ? `card-body ${className}` : 'card-body'}>{children}</div>;
};

type CardItemProps<T extends keyof JSX.IntrinsicElements = 'div'> = PropsWithChildren<{
  as?: T;
  className?: string;
  translateZ?: string;
  rotateX?: number;
  rotateZ?: number;
}>;

export const CardItem = <T extends keyof JSX.IntrinsicElements = 'div'>(
  props: CardItemProps<T>,
) => {
  const { as, className, children, translateZ = '0', rotateX = 0, rotateZ = 0 } = props;
  const { hovered } = useContext(CardHoverContext);
  const Tag = (as ?? 'div') as keyof JSX.IntrinsicElements;

  const style: CSSProperties = {
    transform: hovered
      ? `translateZ(${translateZ}) rotateX(${rotateX}deg) rotateZ(${rotateZ}deg)`
      : 'translateZ(0) rotateX(0deg) rotateZ(0deg)',
  };

  return (
    <Tag className={className ? `card-item ${className}` : 'card-item'} style={style}>
      {children}
    </Tag>
  );
};
