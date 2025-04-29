"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-blue-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
            Every Story Deserves
            <br />
            <span className="text-emerald-600">a Second Chapter</span>
          </h1>
          <p className="text-gray-700 mt-6 text-lg md:text-xl leading-relaxed">
            Behind our programs is a deep belief that no young person is beyond
            help. This is the story of how NGP Correctional Center became a
            place where broken stories are rewritten with hope.
          </p>
        </motion.div>

        {/* OPTIONAL IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <div className="relative w-full h-80 md:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <img
              src="/volunteers.jpg" // Add this image or change it accordingly
              alt="NGP team supporting youth"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
