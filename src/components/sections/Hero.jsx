// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import Button from "../ui/Button";
// import { useEffect, useState } from "react";
// import bgImage from "../../assets/hero.jpg";

// // ✅ Counter Component
// const Counter = ({ from = 0, to, duration = 2 }) => {
//   const [count, setCount] = useState(from);

//   useEffect(() => {
//     let start = 0;
//     const end = parseInt(to.replace(/\D/g, ""), 10); // numbers only
//     if (start === end) return;

//     let totalMilSecDur = duration * 800;
//     let incrementTime = (totalMilSecDur / end) * 2;

//     let timer = setInterval(() => {
//       start += 1;
//       setCount(start);
//       if (start === end) clearInterval(timer);
//     }, incrementTime);

//     return () => clearInterval(timer);
//   }, [to, duration]);

//   return (
//     <span>
//       {count}
//       {to.replace(/[0-9]/g, "")}
//     </span>
//   );
// };

// const Hero = () => {
//   const stats = [
//     { value: "98%", label: "Client Retention" },
//     { value: "150+", label: "Projects Completed" },
//     { value: "50+", label: "Expert Engineers" },
//     { value: "15+", label: "Industries Served" },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary text-white pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-32">
//       {/* Background Decorations */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute w-[500px] h-[500px] bg-accent/30 rounded-full blur-3xl top-[-100px] left-[-150px]" />
//         <div className="absolute w-[400px] h-[400px] bg-secondary/30 rounded-full blur-3xl bottom-[-120px] right-[-100px]" />
//       </div>

//       <div className="container mx-auto px-6">
//         {/* Headline */}
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.h1
//             className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-tight tracking-tight"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             Accelerate Your{" "}
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-pink-400">
//               Digital Transformation
//             </span>{" "}
//             Journey
//           </motion.h1>

//           <motion.p
//             className="text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto text-white/90"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Custom software solutions, cloud services, and IT consulting to drive
//             your business forward with innovation and scalability.
//           </motion.p>

//           {/* CTA Buttons */}
//           <motion.div
//             className="flex flex-col sm:flex-row justify-center gap-4"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             <Link to="/services">
//               <Button
//     size="lg"
//     variant="secondary"
//     className="px-8 py-4 text-lg rounded-xl border-white  hover:shadow-accent/40 transition w-full sm:w-auto "
//   >
//     Our Services
//   </Button>
//   </Link>

//   <Link to="/contact">
//     <Button
//       size="lg"
//       variant="outline"
//       className="px-8 py-4 text-lg rounded-xl border-white text-white  hover:text-primary transition w-full sm:w-auto"
//     >
//       Contact Us
//     </Button>
//             </Link>
//           </motion.div>
//         </div>

//         {/* Stats Section with Counter */}
//         <motion.div
//           className="mt-16 md:mt-20 flex justify-center"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//         >
//           <div className="relative w-full max-w-5xl">
//             <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl p-5 md:p-5  border border-white/20 mt-[-50px] ">
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
//                 {stats.map((stat, index) => (
//                   <motion.div
//                     key={index}
//                     className="text-center p-3"
//                     whileHover={{ scale: 1.08 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                   >
//                     <div className="text-3xl md:text-4xl font-extrabold text-accent drop-shadow mb-2">
//                       <Counter to={stat.value} duration={2} />
//                     </div>
//                     <div className="text-sm md:text-base text-white/80">
//                       {stat.label}
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>  
//   );
// };

// export default Hero;



import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import bgImage from "../../assets/hero.jpg";

// ✅ Counter Component
const Counter = ({ from = 0, to, duration = 2 }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start = 0;
    const end = parseInt(to.replace(/\D/g, ""), 10); // numbers only
    if (start === end) return;

    let totalMilSecDur = duration * 800;
    let incrementTime = (totalMilSecDur / end) * 2;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [to, duration]);

  return (
    <span>
      {count}
      {to.replace(/[0-9]/g, "")}
    </span>
  );
};

const Hero = () => {
  const stats = [
    { value: "98%", label: "Client Retention" },
    { value: "150+", label: "Projects Completed" },
    { value: "50+", label: "Expert Engineers" },
    { value: "15+", label: "Industries Served" },
  ];

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center text-white pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-32 "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-50 opacity-80 "></div>

      {/* Background Decorations (optional, keep if you like glow effects) */}
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
            <Link to="/services">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-4 text-lg rounded-xl border-white hover:shadow-accent/40 transition w-full sm:w-auto "
              >
                Our Services
              </Button>
            </Link>

            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg rounded-xl border-white text-white hover:text-primary transition w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Stats Section with Counter */}
        <motion.div
          className="mt-16 md:mt-20 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="relative w-full max-w-5xl">
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl p-5 md:p-5 border border-white/20 mt-[-50px] ">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-3"
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-3xl md:text-4xl font-extrabold text-accent drop-shadow mb-2">
                      <Counter to={stat.value} duration={2} />
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
