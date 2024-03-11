import Section from '@/ui/containers/section/section';
import Wrapper from '@/ui/containers/wrapper/wrapper';
import SectionTitle from '../../sectionTitle/sectionTitle';

const About: React.FC = () => {
  return (
    <Section $even>
      <Wrapper>
        <SectionTitle $even>About</SectionTitle>
      </Wrapper>
    </Section>
  );
};
export default About;
