import { cn } from '@/lib/utils/cn';
import React from 'react';

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        'max-w-[136rem] mx-auto py-10 flex flex-col gap-16',
        className
      )} // Add className prop here
      // {...props}
    >
      {children}
    </div>
  );
};

export default Wrapper;
