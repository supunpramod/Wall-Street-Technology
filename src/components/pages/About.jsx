import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import Button from '../ui/Button';

const About = () => {
  const teamMembers = [
    {
      name: 'Jayani Ishara',
      position: 'CEO',
      bio: 'Visionary leader with 15+ years of experience in IT strategy and business transformation.',
      image: '/team/jayani.jpg',
    },
    {
      name: 'Isuru Codippily',
      position: 'Founder & Head of Business Development',
      bio: 'Entrepreneurial mindset with expertise in building strategic partnerships and driving growth.',
      image: '/team/isuru.jpg',
    },
    {
      name: 'Meenuka Ayantha',
      position: 'CTO',
      bio: 'Technology innovator specializing in cloud architecture and digital transformation solutions.',
      image: '/team/meenuka.jpg',
    },
    {
      name: 'Hushani Dinithi',
      position: 'Director, Operations',
      bio: 'Operations expert with a focus on process optimization and client satisfaction.',
      image: '/team/hushani.jpg',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16"
    >
      <div className="container mx-auto px-4 mt-6">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About <span className="text-primary">Wall Street Technology</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We are a leading IT services and consulting company dedicated to helping businesses accelerate digital transformation.
          </motion.p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full p-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Vision</h2>
              <p className="text-gray-600">
                To be a global leader in innovative IT solutions, enabling businesses to achieve operational excellence and digital growth around the globe.
              </p>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full p-8">
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Deliver top-tier software and IT services tailored to client needs.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Foster long-term relationships through quality, transparency, and commitment.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  <span>Empower our team to innovate and grow with the latest technology trends.</span>
                </li>
              </ul>
            </Card>
          </motion.div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-primary">Leadership Team</span></h2>
            <p className="text-lg text-gray-600">
              Meet the experienced professionals leading our company toward innovation and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <div className="p-6">
                    <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                      <span className="text-2xl">👤</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-secondary font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why <span className="text-primary">Choose Us</span></h2>
            <p className="text-lg text-gray-600">
              We deliver exceptional value through our expertise, commitment, and customer-centric approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '98% Client Retention', description: 'Our clients stay with us because we deliver consistent value.' },
              { title: 'Agile Methodology', description: 'Flexible approach that adapts to changing requirements.' },
              { title: 'Competitive Pricing', description: 'Global quality at local market rates.' },
              { title: 'Flexible Engagement', description: 'Fixed price, time & material, or dedicated team models.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 text-center">
                  <div className="text-4xl text-secondary mb-4">✓</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CSR Section */}
        <div className="bg-primary text-white rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our <span className="text-accent">Social Responsibility</span></h2>
            <p className="text-lg mb-8">
              Wall Street Technology believes in giving back to the community. We actively support tech education programs for underprivileged youth, women in tech initiatives, and environmental sustainability campaigns.
            </p>
            <Link to="/csr">
              <Button variant="secondary" size="lg">
                Learn About Our CSR Initiatives
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;