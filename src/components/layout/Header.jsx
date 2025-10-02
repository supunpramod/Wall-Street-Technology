const theme = {
  primary: "#1684A7",   // Blue
  secondary: "#09A599", // Teal / Greenish
  accent: "#F6EC72",    // Yellow
  light: "#F6F6F6",     // Very light gray
  dark: "#0D3B4A",      // Optional dark color
};  

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
        className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'shadow-2xl py-2' : 'shadow-lg py-4'}`}
        style={{
          background: isScrolled 
            ? `${theme.light}CC` // light color with 80% opacity
            : `linear-gradient(to right, ${theme.accent}, ${theme.accent})`,
          backdropFilter: isScrolled ? 'blur(10px)' : 'none'
        }}
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
              <img 
                src={Logo1} 
                alt="Wall Street Technology Logo" 
                className="relative w-12 h-12 md:w-14 md:h-14 rounded-full transition-all duration-300 "
              />
            </motion.div>
            <div className="flex flex-col">
              <span 
                className={`font-bold transition-all duration-300 ${isScrolled ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'}`}
                style={{
                  background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})`,
                  WebkitBackgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                Wall Street
              </span>
              <span className="text-xs md:text-sm font-medium -mt-1" style={{ color: theme.dark }}>
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
                  className="relative px-4 py-2 font-medium transition-all duration-300 rounded-lg group"
                  style={{
                    color: location.pathname === link.path ? theme.primary : theme.dark,
                    backgroundColor: location.pathname === link.path ? theme.light : 'transparent'
                  }}
                >
                  {link.name}
                  <span 
                    className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                    style={{
                      width: location.pathname === link.path ? '100%' : '0',
                      background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})`
                    }}
                  ></span>
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
              className="px-6 py-2.5 rounded-full font-semibold shadow-lg transition-all duration-300"
              style={{
                background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})`,
                color: '#fff'
              }}
            >
              Get Started
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg shadow-lg"
            style={{ background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` }}
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
              className="lg:hidden fixed inset-0 z-40"
              style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu */}
            <motion.div 
              className="lg:hidden fixed top-20 right-4 z-50 w-64 rounded-2xl shadow-2xl border border-white/20"
              style={{ background: `${theme.light}CC`, backdropFilter: 'blur(10px)' }}
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
                      className="flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-300"
                      style={{
                        background: location.pathname === link.path ? `linear-gradient(to right, ${theme.primary}, ${theme.secondary})` : 'transparent',
                        color: location.pathname === link.path ? '#fff' : theme.dark
                      }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className={`w-2 h-2 rounded-full`} style={{ backgroundColor: location.pathname === link.path ? '#fff' : theme.primary }}></div>
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
                    className="w-full px-4 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-lg transition-all duration-300"
                    style={{ background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})`, color: '#fff' }}
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
