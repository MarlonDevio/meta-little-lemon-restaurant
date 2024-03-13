import Section from '@/ui/containers/section/section';
import Wrapper from '@/ui/containers/wrapper/wrapper';
import SectionTitle from '../../sectionTitle/sectionTitle';
import Card from '../../card/card';
import { reviews } from '@/constants/reviews';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
interface ReviewProps {
  review: {
    name: string;
    review: string;
    image: StaticImageData;
    stars: number;
  };
}
const Review: React.FC<ReviewProps> = ({ review }) => {
  return (
    <Card className='self-center md:max-w-[80rem] lg:max-w-[40rem] shadow-lg rounded-2xl p-10 grid grid-cols-[repeat(auto-fit,_minmax(10rem,_min-content))]'>
      <p className='row-start-1 uppercase text-[1.2rem] text-center'>
        {review.name}
      </p>
      <Image
        width={500}
        height={333}
        src={review.image}
        alt={review.name}
        className='max-w-[10rem] mt-6 row-start-2 col-start-1 rounded-full '
      />
      <p className='self-center ml-5 row-start-2 col-start-2'>{review.stars}</p>
      <p className='text-[1.2rem] mt-6 row-start-3 col-span-2'>
        {review.review}
      </p>
    </Card>
  );
};

const Testimonials: React.FC = () => {
  return (
    <Section>
      <Wrapper>
        <SectionTitle className='mx-auto'>Testimonials</SectionTitle>
        <div className=' place-items-center grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 '>
          {reviews.map((review, index) => {
            return (
              <Review
                key={index}
                review={review}
              />
            );
          })}
        </div>
      </Wrapper>
    </Section>
  );
};
export default Testimonials;
