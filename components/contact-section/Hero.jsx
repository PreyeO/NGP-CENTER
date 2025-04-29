"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 to-white py-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-blue-900"
        >
          Let’s Connect
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto"
        >
          Whether you're a parent, donor, volunteer, or just someone who
          believes in second chances — we’d love to hear from you.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
