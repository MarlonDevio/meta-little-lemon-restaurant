import Wrapper from '@/ui/containers/wrapper/wrapper';
import { Logo } from '../../logo';
import NavLinks from '../../navigationBar/navLinks/navLinks';

const Footer: React.FC = () => {
  return (
    <footer className='bg-black py-20'>
      <Wrapper className='flex flex-row items-start'>
        <Logo
          className='basis-1/4'
          colorLittle='text-white'
        />
        <div className='basis-1/4'>
          <p className='text-white'>NAVIGATION</p>
          <NavLinks className='text-white flex flex-col' />
        </div>
        <div className='basis-1/4'>
          <p className='text-white'>CONTACT</p>
        </div>
        <div className='basis-1/4'>
          <p className='text-white'>SOCIAL MEDIA</p>
        </div>
      </Wrapper>
    </footer>
  );
};
export default Footer;
