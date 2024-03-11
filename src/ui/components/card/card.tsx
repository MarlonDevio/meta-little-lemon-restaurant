import { HTMLAttributes } from 'react';

const Card: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  children
}) => {
  return <div className={className}>{children}</div>;
};

export default Card;
