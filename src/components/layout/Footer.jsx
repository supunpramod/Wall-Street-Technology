import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo1 from '../../assets/logo1.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";


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
      className="bg-accent text-dark pt-12 md:pt-16 pb-8 border-t-2 border-primary"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6 ">
              
                  <img src={Logo1} alt="Logo" className="w-10 h-10 md:w-10 md:h-10" />
              
              <span className="font-bold text-lg md:text-xl text-primary">Techtwo Bee</span>
            </div>
            <p className="mb-6 text-sm md:text-base max-w-md">
              Leading IT services and consulting company dedicated to helping businesses accelerate digital transformation.
            </p>
            <div className="flex space-x-3 md:space-x-4">
  {[
    { name: "facebook", icon: faFacebookF, url: "#" },
    { name: "twitter", icon: faTwitter, url: "#" },
    { name: "linkedin", icon: faLinkedinIn, url: "#" },
    { name: "instagram", icon: faInstagram, url: "#" },
  ].map((social) => (
    <a
      key={social.name}
      href={social.url}
      className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-secondary transition-colors duration-300 "
      aria-label={social.name}
    >
      <FontAwesomeIcon
        icon={social.icon}
        className="text-gray-400 w-4 h-4 md:w-5 md:h-5"
      />
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
                      className="text-dark hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-dark text-sm">
          <p>&copy; {new Date().getFullYear()} Techtwo Bee Pvt. Ltd. - Designed & Developed by Supun Pramod</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;