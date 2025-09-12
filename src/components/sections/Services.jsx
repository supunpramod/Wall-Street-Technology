import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';

const Services = () => {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'Tailored web and mobile applications built with cutting-edge technologies.',
      icon: '💻',
      features: ['Web Applications', 'Mobile Apps', 'API Development'],
    },
    {
      title: 'Cloud Services',
      description: 'Seamless cloud migration, DevOps automation, and scalable cloud architecture.',
      icon: '☁️',
      features: ['Cloud Migration', 'DevOps & CI/CD', 'Cloud Architecture'],
    },
    {
      title: 'Enterprise Solutions',
      description: 'Comprehensive ERP, CRM, and business intelligence solutions.',
      icon: '🏢',
      features: ['ERP & CRM', 'Business Intelligence', 'Legacy Modernization'],
    },
    {
      title: 'IT Consulting',
      description: 'Strategic guidance on digital transformation and cybersecurity.',
      icon: '📊',
      features: ['Digital Strategy', 'IT Assessment', 'Cybersecurity'],
    },
    {
      title: 'Managed IT Services',
      description: '24/7 IT support, network management, and disaster recovery solutions.',
      icon: '🛠️',
      features: ['24/7 Helpdesk', 'Network Management', 'Data Backup & Recovery'],
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our <span className="text-primary">Core Services</span>
          </motion.h2>
          
          <motion.p 
            className="text-base md:text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Comprehensive IT solutions designed to address your business challenges.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className="p-4 md:p-6 flex-1">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">{service.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-primary">{service.title}</h3>
                  <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">{service.description}</p>
                  <ul className="space-y-1 md:space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm md:text-base">
                        <span className="text-secondary mr-2 flex-shrink-0">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <Button variant="ghost" className="w-full justify-start text-sm md:text-base p-2">
                    Learn More
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-8 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button size="lg" variant="primary" className="w-full md:w-auto">
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;