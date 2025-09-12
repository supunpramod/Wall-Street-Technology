import { motion } from 'framer-motion';

const Card = ({ children, className, hover = true, ...props }) => {
  return (
    <motion.div
      className={`bg-white rounded-xl shadow-lg overflow-hidden ${className || ''}`}
      whileHover={hover ? { y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' } : {}}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;