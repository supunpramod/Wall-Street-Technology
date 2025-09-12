import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Team', path: '/about#team' },
        { name: 'Careers', path: '/careers' },
        { name: 'CSR', path: '/csr' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Software Development', path: '/services#software' },
        { name: 'Cloud Services', path: '/services#cloud' },
        { name: 'Enterprise Solutions', path: '/services#enterprise' },
        { name: 'IT Consulting', path: '/services#consulting' },
        { name: 'Managed IT', path: '/services#managed' },
      ]
    },
    {
      title: 'Industries',
      links: [
        { name: 'Finance & FinTech', path: '/industries#finance' },
        { name: 'Healthcare', path: '/industries#healthcare' },
        { name: 'E-commerce', path: '/industries#ecommerce' },
        { name: 'Education', path: '/industries#education' },
        { name: 'Manufacturing', path: '/industries#manufacturing' },
      ]
    },
    {
      title: 'Contact',
      links: [
        { name: 'Contact Us', path: '/contact' },
        { name: 'Support', path: '/support' },
        { name: 'Blog', path: '/blog' },
      ]
    }
  ];

  return (
    <motion.footer 
      className="bg-dark text-white pt-12 md:pt-16 pb-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm md:text-xl">WS</span>
              </div>
              <span className="font-bold text-lg md:text-xl">Wall Street Technology</span>
            </div>
            <p className="mb-6 text-sm md:text-base max-w-md">
              Leading IT services and consulting company dedicated to helping businesses accelerate digital transformation.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                  aria-label={social}
                >
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-gray-400 rounded-full"></div>
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Wall Street Technology Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;