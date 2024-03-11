import { cn } from '@/lib/utils/cn';
import React from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  $secondary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ $secondary, className, ...props }) => {
  return (
    <button
      className={cn(
        'bg-color-yellow-darker rounded-xl font-medium text-white px-6 py-4 hover:bg-color-yellow-dark transition-all duration-500 text-[2rem]',
        {
          'bg-transparent shadow-inset-lime text-black hover:shadow-inset-hover-lime transition-all duration-500  hover:text-white':
            $secondary
        },
        className
      )}
      {...props}
    ></button>
  );
};

export default Button;
