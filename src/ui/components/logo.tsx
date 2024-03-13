import { cn } from '@/lib/utils/cn';
import { logoLemon } from '../../../public';

import Image from 'next/image';

interface LogoProps {
  colorLemon?: string;
  colorLittle?: string;
  className?: string;
}
export const Logo = ({ colorLittle, colorLemon, className }: LogoProps) => {
  return (
    <div className={cn('flex items-baseline', className)}>
      <Image
        width={350}
        height={451}
        src={logoLemon}
        alt='Little Lemon Logo'
        className='w-[4rem] h-auto'
      />
      <p className='ml-4 uppercase text-[2.8rem] font-semibold '>
        <span className={cn(colorLittle)}>Little </span>
        <span className={cn('text-color-yellow-darker', colorLemon)}>
          Lemon
        </span>
      </p>
    </div>
  );
};
