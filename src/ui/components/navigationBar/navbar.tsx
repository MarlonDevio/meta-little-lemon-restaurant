import { logoLemon } from '../../../../public';
import Image from 'next/image';
import NavLinks from './navLinks/navLinks';

const Navbar: React.FC = () => {
  return (
    <nav className='bg-color-cream flex max-w-[136rem] mx-auto justify-between items-baseline py-5'>
      <div className='flex items-baseline'>
        <Image
          width={350}
          height={451}
          src={logoLemon}
          alt='Little Lemon Logo'
          className='w-[4rem] h-auto'
        />
        <p className='ml-4 uppercase text-[2.8rem] font-semibold '>
          <span>Little </span>
          <span className='text-color-yellow-darker'>Lemon</span>
        </p>
      </div>
      <NavLinks />
    </nav>
  );
};

export default Navbar;
