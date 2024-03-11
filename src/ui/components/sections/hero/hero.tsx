import { ISection } from '@/lib/interfaces/interfaces';

import Section from '@/ui/containers/section/section';
import Wrapper from '@/ui/containers/wrapper/wrapper';
import Button from '../../button/button';
import {
  lemonHorizontalFood,
  lemonSquareFood,
  lemonStandingFood
} from '../../../../../public';
import Image from 'next/image';
import HeroImages from './heroImages';

const Hero: React.FC<ISection> = ({ className, ...props }) => {
  return (
    <Section className=' py-[9rem]'>
      <Wrapper className='grid-cols-2 grid '>
        <div className='flex flex-col gap-20'>
          <div className='flex flex-col gap-5'>
            <h1 className=''>Little Lemon</h1>
            <p className='uppercase text-gray-500'>Chicago</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quidem fuga exercitationem illo dolore libero tenetur sit pariatur
              impedit aliquid non magnam nobis nihil illum sapiente enim,
              expedita voluptate provident!
            </p>
          </div>
          <div className='flex gap-4'>
            <Button>Book a Table</Button>
            <Button $secondary>Learn More &darr;</Button>
          </div>
        </div>
        <HeroImages />
      </Wrapper>
    </Section>
  );
};
export default Hero;
