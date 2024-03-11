import { cn } from '../../../lib/utils/cn';
interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  $even?: boolean;
}
const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  $even,
  ...props
}) => {
  return (
    <h2
      {...props}
      className={cn(
        'uppercase text-[3rem] text-color-darkest font-medium',
        {
          'text-color-cream': $even
        },
        props.className
      )}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
