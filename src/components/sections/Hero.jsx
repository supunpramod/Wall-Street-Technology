import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary text-white pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-32">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-accent/30 rounded-full blur-3xl top-[-100px] left-[-150px]" />
        <div className="absolute w-[400px] h-[400px] bg-secondary/30 rounded-full blur-3xl bottom-[-120px] right-[-100px]" />
      </div>

      <div className="container mx-auto px-6">
        {/* Headline */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Accelerate Your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-pink-400">
              Digital Transformation
            </span>{" "}
            Journey
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Custom software solutions, cloud services, and IT consulting to drive
            your business forward with innovation and scalability.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              variant="secondary"
              className="px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-accent/40 transition"
            >
              Our Services
            </Button>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg rounded-xl border-white text-white hover:bg-white hover:text-primary transition"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 md:mt-20 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="relative w-full max-w-5xl">
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl p-6 md:p-10 border border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
                {[
                  { value: "98%", label: "Client Retention" },
                  { value: "150+", label: "Projects Completed" },
                  { value: "50+", label: "Expert Engineers" },
                  { value: "15+", label: "Industries Served" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-3"
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-3xl md:text-4xl font-extrabold text-accent drop-shadow mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base text-white/80">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
