import Link from 'next/link';
import { navigationLinks } from '@/constants/navigationLinks';
import { cn } from '@/lib/utils/cn';
import styles from '../navigationBar.module.css';

const NavLinks: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  className
}) => {
  return (
    <ul
      className={cn(
        'hidden md:flex gap-8 ml-auto text-[1.6rem] uppercase',
        className
      )}
    >
      {navigationLinks.map((link) => (
        <li
          key={link.id}
          className={cn({ [styles.navLink]: link.name !== 'Contact' })}
        >
          <Link
            className={cn('font-medium', {
              [styles.contact]: link.name === 'Contact'
            })}
            href={link.href}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
