import type { FC } from 'react';

type ElevatedContainerProps = {
  className?: string;
  children?: React.ReactNode;
};

export const ElevatedContainer: FC<ElevatedContainerProps> = ({ className, children }) => {
  return <div className={`bg-card w-fit p-4 shadow-card rounded-md ${className}`}>{children}</div>;
};
