import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo1 from '../../assets/logo1.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Technologies', path: '/technologies' },
   
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.header
  className="fixed w-full z-50 bg-white shadow-md py-4 transition-all duration-300"
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.5 }}
>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            
              <img src={Logo1} alt="Logo" className="w-10 h-10 md:w-10 md:h-10" />
            
            <span className="font-bold text-lg md:text-xl text-primary hidden sm:block">Wall Street Technology</span>
            <span className="font-bold text-lg md:text-xl text-primary sm:hidden">Wall Street Technology</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-dark hover:text-secondary font-medium transition-colors duration-300 text-sm md:text-base"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <button className="bg-primary text-white px-4 py-2 md:px-6 md:py-2 rounded-full font-medium hover:bg-secondary transition-colors duration-300 text-sm md:text-base">
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-dark p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-white shadow-lg fixed top-16 left-0 right-0 z-40"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="text-dark hover:text-secondary font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-secondary transition-colors duration-300 w-full mt-2">
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;