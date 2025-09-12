import { motion } from 'framer-motion';
import Card from '../ui/Card';

const Technologies = () => {
  const techCategories = [
    {
      title: 'Programming Languages',
      technologies: ['Java', 'Python', 'C#', 'JavaScript', 'TypeScript', 'PHP'],
      icon: '💻',
    },
    {
      title: 'Frameworks & Libraries',
      technologies: ['Angular', 'React', 'Node.js', '.NET', 'Django', 'Laravel'],
      icon: '🧩',
    },
    {
      title: 'Databases',
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'SQL Server'],
      icon: '🗄️',
    },
    {
      title: 'Cloud Platforms',
      technologies: ['AWS', 'Azure', 'Google Cloud Platform'],
      icon: '☁️',
    },
    {
      title: 'DevOps Tools',
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'Git', 'Ansible'],
      icon: '🔧',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-light mt-6">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Technologies We <span className="text-primary">Use</span>
          </motion.h2>
          
          <motion.p 
            className="text-base md:text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We leverage cutting-edge technologies to build robust, scalable, and innovative solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-6">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{category.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold text-primary">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="bg-white rounded-xl p-6 md:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">Technology Expertise</h3>
            <p className="text-gray-600 mb-6">
              Our team stays updated with the latest technology trends to ensure we deliver modern, efficient, and future-proof solutions. We continuously evaluate and adopt new technologies that bring value to our clients.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Frontend', value: '95%' },
                { label: 'Backend', value: '90%' },
                { label: 'Mobile', value: '85%' },
                { label: 'Cloud', value: '88%' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;