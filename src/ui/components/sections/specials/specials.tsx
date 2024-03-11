import Section from '@/ui/containers/section/section';
import Wrapper from '@/ui/containers/wrapper/wrapper';
import Button from '../../button/button';
import SectionTitle from '../../sectionTitle/sectionTitle';
import Card from '../../card/card';
import { specialFoods } from '@/constants/specialFoods';
import { HTMLAttributes } from 'react';
import { StaticImageData, Image } from 'next/image';

interface SpecialsProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  foodItem: {
    name: string;
    description: string;
    price: number;
    button: string;
    image: StaticImageData;
  };
}
const MenuItem: React.FC<SpecialsProps> = ({ children, foodItem }) => {
  return (
    <Card className='bg-color-cream py-[4rem] shadow-sm gap-10 px-[5rem] grid grid-cols-[1fr_min-content] rounded-[1rem]'>
      <h6 className='font-medium text-[2rem] col-span-1 row-start-1 '>
        {foodItem.name}
      </h6>
      <p className=' col-start-2 col-span-1 row-start-1 text-[2rem] justify-self-end'>
        {foodItem.price}
      </p>
      <p className='col-span-2 text-[2rem]'>{foodItem.description}</p>
      <Button
        $secondary
        className='col-span-3 justify-self-start self-end'
      >
        {foodItem.button}
      </Button>
    </Card>
  );
};

const Specials: React.FC = () => {
  return (
    <Section className='py-[9rem] bg-color-yellow-darker'>
      <Wrapper>
        <div className='flex items-center'>
          <SectionTitle className='text-color-cream font-medium'>
            Specials
          </SectionTitle>
          <Button className='ml-auto self-center justify-end shadow-sm bg-color-cream px-10 text-color-darkest hover:text-white hover:shadow-2xl hover:bg-color-darkest transition-shadow: active:shadow-sm transition-all duration-500'>
            Online Menu
          </Button>
        </div>

        <div className='grid grid-cols-3 gap-10 py-20'>
          {specialFoods.map((foodItem, index) => {
            return (
              <MenuItem
                key={index}
                foodItem={foodItem}
                className='bg-color-cream text-color-darkest'
              />
            );
          })}
        </div>
      </Wrapper>
    </Section>
  );
};
export default Specials;
