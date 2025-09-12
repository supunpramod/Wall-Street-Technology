import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Card from '../ui/Card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 pb-12 md:pt-24 md:pb-16"
    >
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact <span className="text-primary">Us</span>
          </motion.h1>
          
          <motion.p 
            className="text-base md:text-lg text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have a project in mind? Get in touch with our team for a consultation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-primary">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2 text-sm md:text-base">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2 text-sm md:text-base">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm md:text-base"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2 text-sm md:text-base">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-gray-700 mb-2 text-sm md:text-base">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm md:text-base"
                    />
                  </div>
                </div>

                <div className="mb-4 md:mb-6">
                  <label htmlFor="service" className="block text-gray-700 mb-2 text-sm md:text-base">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm md:text-base"
                  >
                    <option value="">Select a service</option>
                    <option value="software">Custom Software Development</option>
                    <option value="cloud">Cloud Services</option>
                    <option value="enterprise">Enterprise Solutions</option>
                    <option value="consulting">IT Consulting</option>
                    <option value="managed">Managed IT Services</option>
                  </select>
                </div>

                <div className="mb-4 md:mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2 text-sm md:text-base">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm md:text-base"
                  ></textarea>
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6 md:space-y-8">
              <Card className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-primary">Contact Information</h2>
                
                <div className="space-y-4 md:space-y-5">
                  <div className="flex items-start">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                      <span className="text-primary">📍</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-base md:text-lg mb-1">Headquarters</h3>
                      <p className="text-gray-600 text-sm md:text-base">Colombo, Sri Lanka</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                      <span className="text-primary">📧</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-base md:text-lg mb-1">Email Us</h3>
                      <p className="text-gray-600 text-sm md:text-base">wallstreettech@outlook.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                      <span className="text-primary">📞</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-base md:text-lg mb-1">Call Us</h3>
                      <p className="text-gray-600 text-sm md:text-base">+94 778 980 149</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-primary">Business Hours</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm md:text-base">Monday - Friday</span>
                    <span className="font-medium text-sm md:text-base">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm md:text-base">Saturday</span>
                    <span className="font-medium text-sm md:text-base">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 text-sm md:text-base">Sunday</span>
                    <span className="font-medium text-sm md:text-base">Closed</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-primary">Get a Quote</h2>
                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                  Ready to start your project? Request a free consultation and quote from our experts.
                </p>
                <Button variant="secondary" size="lg" className="w-full">
                  Request a Quote
                </Button>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;