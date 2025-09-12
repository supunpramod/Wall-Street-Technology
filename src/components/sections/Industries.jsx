import { motion } from 'framer-motion';
import Card from '../ui/Card';

const Industries = () => {
  const industries = [
    {
      name: 'Finance & FinTech',
      description: 'Secure and compliant financial solutions including banking software, payment gateways, and trading platforms.',
      icon: '💰',
    },
    {
      name: 'Healthcare',
      description: 'HIPAA-compliant healthcare systems, patient management, telemedicine, and medical data analytics.',
      icon: '🏥',
    },
    {
      name: 'E-commerce & Retail',
      description: 'Scalable e-commerce platforms, inventory management, and customer experience optimization solutions.',
      icon: '🛒',
    },
    {
      name: 'Education & E-Learning',
      description: 'Interactive learning platforms, LMS systems, and virtual classroom solutions for modern education.',
      icon: '🎓',
    },
    {
      name: 'Travel & Hospitality',
      description: 'Booking engines, reservation systems, and customer loyalty programs for travel and hospitality businesses.',
      icon: '✈️',
    },
    {
      name: 'Manufacturing',
      description: 'IoT solutions, supply chain management, and production optimization systems for manufacturing industries.',
      icon: '🏭',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white mt-6">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Industries We <span className="text-primary">Serve</span>
          </motion.h2>
          
          <motion.p 
            className="text-base md:text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We have extensive experience delivering tailored IT solutions across various industry sectors.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-6 flex flex-col items-center text-center">
                <div className="text-4xl md:text-5xl mb-4">{industry.icon}</div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-primary">{industry.name}</h3>
                <p className="text-gray-600 text-sm md:text-base">{industry.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;