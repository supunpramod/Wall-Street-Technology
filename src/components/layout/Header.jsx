import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Logo1 from '../../assets/logo1.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-2xl shadow-blue-500/10 py-2' 
            : 'bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className=""></div>
              <img 
                src={Logo1} 
                alt="Wall Street Technology Logo" 
                className="relative w-12 h-12 md:w-14 md:h-14 rounded-full   "
              />
            </motion.div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl md:text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-300 ${
                isScrolled ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'
              }`}>
                Wall Street
              </span>
              <span className="text-xs md:text-sm text-gray-600 font-medium -mt-1">
                Technology
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={link.path}
                  className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-lg group ${
                    location.pathname === link.path
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full ${
                    location.pathname === link.path ? 'w-full' : ''
                  }`}></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div 
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-600 hover:to-purple-700"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={mobileMenuOpen ? "open" : "closed"}
              className="flex flex-col items-center justify-center w-6 h-6"
            >
              <motion.span
                className="w-5 h-0.5 bg-white rounded-full absolute"
                variants={{
                  closed: { rotate: 0, y: -5 },
                  open: { rotate: 45, y: 0 }
                }}
              />
              <motion.span
                className="w-5 h-0.5 bg-white rounded-full absolute"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
              />
              <motion.span
                className="w-5 h-0.5 bg-white rounded-full absolute"
                variants={{
                  closed: { rotate: 0, y: 5 },
                  open: { rotate: -45, y: 0 }
                }}
              />
            </motion.div>
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="lg:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu */}
            <motion.div 
              className="lg:hidden fixed top-20 right-4 z-50 w-64 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20"
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="p-4 flex flex-col space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      to={link.path}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                        location.pathname === link.path
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className={`w-2 h-2 rounded-full ${
                        location.pathname === link.path ? 'bg-white' : 'bg-blue-500'
                      }`}></div>
                      <span>{link.name}</span>
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="pt-2"
                >
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-3 rounded-xl font-semibold shadow-lg flex items-center justify-center space-x-2 hover:shadow-xl transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>Get Started</span>
                    <motion.svg 
                      className="w-4 h-4" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;