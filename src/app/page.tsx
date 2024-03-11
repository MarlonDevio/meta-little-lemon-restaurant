import About from '@/ui/components/sections/about/about';
import Footer from '@/ui/components/sections/footer/footer';
import Hero from '@/ui/components/sections/hero/hero';
import Specials from '@/ui/components/sections/specials/specials';
import Testimonials from '@/ui/components/sections/testimonials/testimonials';
import Wrapper from '@/ui/containers/wrapper/wrapper';

export default function Home() {
  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </main>
  );
}
