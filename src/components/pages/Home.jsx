import { motion } from 'framer-motion';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Industries from '../sections/Industries';
import Technologies from '../sections/Technologies';
import Testimonials from '../sections/Testimonials';
import CTA from '../sections/CTA';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Services />
      <Industries />
      <Technologies />
      <Testimonials />
      <CTA />
    </motion.div>
  );
};

export default Home;