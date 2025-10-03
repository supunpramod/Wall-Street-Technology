// components/common/Loader.jsx
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Spinner with gradient */}
      <motion.div
        className="w-16 h-16 border-4 border-t-4 border-primary border-t-transparent rounded-full shadow-lg"
        initial={{ rotate: 5 }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 5, // ⬅️ Rotate full circle in 5 seconds
          ease: "linear",
        }}
      />
    </div>
  );
}
