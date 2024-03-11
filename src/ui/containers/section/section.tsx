import { ISection } from '@/lib/interfaces/interfaces';
import { cn } from '@/lib/utils/cn';
import SectionTitle from '@/ui/components/sectionTitle/sectionTitle';

interface SectionProps extends ISection {
  $even?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  className,
  $even,
  ...props
}) => {
  return (
    <section
      className={cn(
        'py-[9rem]',
        {
          'bg-color-cream': !$even,
          'bg-color-yellow-darker': $even
        },
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
