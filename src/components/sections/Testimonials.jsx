import { motion } from 'framer-motion';
import Card from '../ui/Card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, FinTech Solutions',
      content: 'Wall Street Technology delivered a custom financial platform that exceeded our expectations. Their expertise in FinTech is unmatched.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      position: 'CTO, HealthPlus',
      content: 'The cloud migration project was seamless. Their team handled everything professionally and our systems are now more efficient than ever.',
      rating: 5,
    },
    {
      name: 'Emma Rodriguez',
      position: 'Operations Director, RetailMax',
      content: 'Their ERP implementation transformed our business operations. We\'ve seen a 40% increase in efficiency since the rollout.',
      rating: 4,
    },
  ];

  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our <span className="text-primary">Clients Say</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-8 flex flex-col">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">
                      {i < testimonial.rating ? '★' : '☆'}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 flex-grow">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.position}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;