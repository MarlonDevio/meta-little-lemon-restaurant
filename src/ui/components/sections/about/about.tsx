'use client';
import Section from '@/ui/containers/section/section';
import Wrapper from '@/ui/containers/wrapper/wrapper';
import SectionTitle from '../../sectionTitle/sectionTitle';
import { chefMan, chefWoman } from '../../../../../public';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils/cn';
import Button from '../../button/button';

const About: React.FC = () => {
  const [hoverChefMan, setHoverChefMan] = useState(false);
  const [hoverChefWoman, setHoverChefWoman] = useState(false);

  return (
    <Section $even>
      <Wrapper>
        <SectionTitle
          className='mb-[-2rem]'
          $even
        >
          Little Lemon
        </SectionTitle>{' '}
        <h3 className='uppercase text-[2.5rem] mt-0 text-gray-600'>Chicago</h3>
        <Wrapper className='flex flex-row mt-[-2rem]'>
          <article className='flex flex-col basis-1/2'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ad
              minus inventore, hic velit asperiores suscipit culpa dolorem ea
              laboriosam corrupti officia maxime minima quae delectus accusamus
              voluptas odit fugit. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Totam ad minus inventore, hic velit asperiores
              suscipit culpa dolorem ea laboriosam corrupti officia maxime
              minima quae delectus accusamus voluptas odit fugit.
            </p>
            <Button className='mt-20 self-start bg-white text-black'>
              Book Table
            </Button>
          </article>
          <div className='relative flex justify-start basis-1/2'>
            <Image
              src={chefWoman}
              alt='woman chef in a restaurant'
              className={cn(
                'absolute hover:cursor-pointer top-[-25%] self-start left-[50%] w-2/4 h-auto shadow-2xl',
                {
                  'z-10': hoverChefWoman,
                  'z-0': !hoverChefWoman
                }
              )}
              onMouseEnter={() => setHoverChefWoman(true)}
              onMouseLeave={() => setHoverChefWoman(false)}
            />

            <Image
              src={chefMan}
              alt='chef in a restaurant'
              width={1000}
              height={1500}
              className='relative w-2/4 ml-40 h-auto shadow-2xl hover:cursor-pointer'
              onMouseEnter={() => setHoverChefMan(true)}
              onMouseLeave={() => setHoverChefMan(false)}
            />
          </div>
        </Wrapper>
      </Wrapper>
    </Section>
  );
};
export default About;
