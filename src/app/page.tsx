import Hero from '@/components/home/Hero';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import AboutPreview from '@/components/home/AboutPreview';
import WhyUs from '@/components/home/WhyUs';
import Stats from '@/components/home/Stats';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutPreview />
      <FeaturedProjects />
      <WhyUs />
      <Testimonials />
      <CTA />
    </>
  );
}
