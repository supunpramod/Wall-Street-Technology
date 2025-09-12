import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Accelerate Your <span className="text-accent">Digital Transformation</span> Journey
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Custom software solutions, cloud services, and IT consulting to drive your business forward.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              Our Services
            </Button>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary w-full">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-12 md:mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="relative w-full max-w-4xl">
            <div className="absolute -inset-2 md:-inset-4 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[
                  { value: '98%', label: 'Client Retention' },
                  { value: '150+', label: 'Projects' },
                  { value: '50+', label: 'Experts' },
                  { value: '15+', label: 'Industries' },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-2">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-1 md:mb-2">{stat.value}</div>
                    <div className="text-xs md:text-sm lg:text-base text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;