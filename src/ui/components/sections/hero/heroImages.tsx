import Image from 'next/image';
import {
  lemonHorizontalFood,
  lemonSquareFood,
  lemonStandingFood
} from '../../../../../public';
import styles from './hero.module.css';
import { cn } from '@/lib/utils/cn';

const HeroImages = () => {
  return (
    <div className={cn('justify-self-end self-end')}>
      <Image
        src={lemonSquareFood}
        alt='Delicious image of chicken and lemon lying on a white plate'
        height={991}
        width={1500}
        className={cn('max-h-[80%] w-auto')}
      />
    </div>
  );
};

export default HeroImages;
